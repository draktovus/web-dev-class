import type { Product } from "./products";

const cart = [] as CartItem[];
export const quantity = 0;

export function useCart(){
    return cart;
}

export interface CartItem{
    productId: number;
    quantity: number;
    product: Product;
}

export function addToCart(product: Product){
    const item = cart.find((p) => p.productId == product.id);
    if (item) {
        item.quantity++;
    } else {
        cart.push({
            productId: product.id,
            product, 
            quantity: 1,
        })
    }
}

export function removeFromCart(index:number){
    cart.splice(index, 1)
}

export const totalQuantity = ()=>cart.reduce((total, item) => total + item.quantity, 0);
export const total = () => cart.reduce((total, item)=> total + item.product.price * item.quantity, 0);