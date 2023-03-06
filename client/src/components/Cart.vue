<script setup lang="ts">
import { useCart } from '@/model/cart';
import { getProducts } from '@/model/products';
const cart = useCart();
const products = getProducts();

cart.value.push({
    product: products[3],
    quantity: 1,
    productId: products[3].id,
})
cart.value.push({
    product: products[4],
    quantity: 1,
    productId: products[4].id,
})
cart.value.push({
    product: products[5],
    quantity: 1,
    productId: products[5].id,
})
</script>

<template>
    <div class="cart">
        <h1 class="title">
            Cart
            <small>
                Price: {{  }}
                ({{cart.length}} items)
            </small>
        </h1>
        <p>{{cart.length}}</p>
        <div class="cart-item" v-for="item in cart" :key="item.productId">
            <img :src="item.product.thumbnail" alt="">
            <p>{{item.product.title}}</p>
            <p>{{item.product.price}}</p>
            <p>{{item.quantity}}</p>
        </div>
    </div>
</template>

<style scoped>
.cart{
    display:flex;
    margin: 5px;
    flex-direction: column;
    align-items: center;
}

.cart-item{
    display:flex;

}
</style>