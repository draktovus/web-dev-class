const API_URL = process.env.NEXT_PUBLIC_API_URL ?? '/api/v1/'

export function rest(url: string, data?:any, method?:string, headers?:any){
    return fetch(url, {
        method: method ?? (data ? 'POST' : 'GET'),
        headers: {
            'Content-Type': 'application/JSON',
            ...headers
        },
        body: data ? JSON.stringify(data): undefined
    } )
        .then(res => res.ok 
            ? res.json()
            : res.json().then(x => {throw({...x, message: x.error})}))
}

export function api(url:string, data?:any, method?:string, headers?:any){
    return rest(API_URL + url, data,method,headers)
}

export type DataEnvelope<T> = {
    data: T,
    isSuccess: boolean,
    error?: string
}

export type DataListEnvelope<T> = DataEnvelope<T[]> & {
    total:number,
}

export function loadScript(url: string, id:string){
    return new Promise((resolve,reject)=>{
        if (document.getElementById(id)) return resolve(true);

        const script = document.createElement('script');
        script.src = url;
        script.id = id;
        script.onload = () => resolve(true);
        script.onerror = () => reject(false);
        document.body.appendChild(script);
    })
}