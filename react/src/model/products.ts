import type { DataEnvelope, DataListEnvelope } from './myFetch';
import { api } from './session';

// Helps the autocomplete AI if data is commented above
/**
    {
        "id": 1,
        "title": "iPhone 9",
        "description": "An apple mobile which is nothing like apple",
        "price": 549,
        "discountPercentage": 12.96,
        "rating": 4.69,
        "stock": 94,
        "brand": "Apple",
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        "images": [
            "https://i.dummyjson.com/data/products/1/1.jpg",
            "https://i.dummyjson.com/data/products/1/2.jpg",
            "https://i.dummyjson.com/data/products/1/3.jpg",
            "https://i.dummyjson.com/data/products/1/4.jpg",
            "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
        ]
    },
*/
export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: Array<string>;
}

export function getProducts(): Promise<DataListEnvelope<Product>>{
   return api('products');
}

export function getProduct(id:number): Promise<DataEnvelope<Product>>{
    return api(`products/${id}`);
}

export function createProduct(product:Product): Promise<DataEnvelope<Product>>{
    return api('pruducts', product)
}