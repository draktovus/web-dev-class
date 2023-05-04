import { useRouter } from 'next/router';

export default function Product({params} : {params: {id:number}}){
    const router = useRouter();
    const { id } = router.query;

    return (
        <h1 className="title">
            Product #{id}
        </h1>
    )
}