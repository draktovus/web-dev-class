<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { getProduct, createProduct, type Product } from '@/model/products';
import { addMessage } from '@/model/session';

const product = ref<Product>({} as Product);
const route = useRoute()
getProduct(+route.params.id).then((data) => {
    product.value = data.data;
})
function save(){
    if(product.value.id){
        createProduct(product.value).then((data) => {
            console.log(data)
            addMessage('Product created', 'success')
        })
    }
    else{
        console.log(product)
    }
}
</script>

<template>
    <form class="form" @submit.prevent="save()">
        <h1 class="title" v-if="product.id">Edit Product</h1>
        <h1 class="title" v-else>Add Product</h1>

        <div class="field">
            <label class="label">Title</label>
            <div class="control">
                <input class="input" type="text" placeholder="Product Title" v-model="product.title">
            </div>
        </div>

        <div class="field">
            <label class="label">Stock</label>
            <div class="control">
                <input class="input" type="text" placeholder="Product Stock" v-model="product.stock">
            </div>
        </div>

        <div class="field">
            <label class="label">Price</label>
            <div class="control">
                <input class="input" type="text" placeholder="Product Price" v-model="product.price">
            </div>
        </div>

        <div class="field">
            <label class="label">Category</label>
            <div class="control">
                <input class="input" type="text" placeholder="Product Category" v-model="product.category">
            </div>
        </div>

        <div class="field is-grouped">
            <div class="control">
                <button class="button is-link">Submit</button>
            </div>
            <div class="control">
                <button class="button is-link is-light">Cancel</button>
            </div>
        </div>
    </form>
</template>

<style scoped></style>