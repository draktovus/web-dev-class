<script setup lang="ts">
import { RouterLink } from 'vue-router';
import {ref} from 'vue';
import { getProducts, type Product } from '@/model/products';

const products = ref<Product[]>([]);
getProducts().then(data => {
    products.value = data.data
});
</script>

<template>
    <div class="admin-products-list">
        <h1 class="title">Products</h1>
        <RouterLink to="/admin/products/edit/" class="button is-primary admin-add-product">
            <div class="icon-has-text">
                <span class="icon">
                    <i class="fas fa-plus"></i>
                </span>
                <span>Add a product</span>
            </div>
        </RouterLink>
        <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
            <thead>
                <tr>
                    <th>thumbnail</th>
                    <th>Title</th>
                    <th>Stock</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="product in products" :key="product.id">
                    <td>
                        <img class="admin-product-img" :src="product.thumbnail" alt="product img">
                    </td>
                    <td>{{ product.title }}</td>
                    <td>{{ product.stock }}</td>
                    <td>{{ product.price }}</td>
                    <td>{{ product.category }}</td>
                    <td>
                        <RouterLink class="button is-primary" :to="'/admin/products/edit/' + product.id">
                            <div class="icon">
                                <i class="fas fa-edit"></i>
                            </div>
                        </RouterLink>
                        <RouterLink class="button is-danger" :to="'/admin/products/edit/' + product.id">
                            <div class="icon">
                                <i class="fas fa-trash"></i>
                            </div>
                        </RouterLink>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>

.admin-product-img {
    width: 50px;
    height:50px;
    object-fit: cover;
}

.admin-add-product{
    float: right;
}

</style>