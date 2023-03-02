<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ref } from 'vue';
import LoginBadge from './LoginBadge.vue';

const isMenuActive = ref(false);

function toggleMenu(){
    isMenuActive.value = !isMenuActive.value;
    console.log({isMenuActive});
}
</script>

<template>
    <nav class="navbar is-primary">
        <div class="container">
            <div class="navbar-brand">
                <a class="navbar-item" href="">
                    <img src="@/assets/logo.svg" alt="Vue" width="30" height="30">
                </a>
                <!-- : is for binding with Vue.js, @ is for Vue.js events -->
                <div class="navbar-burger" :class="{ 'is-active': isMenuActive }" @click="toggleMenu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div class="navbar-menu" :class="{ 'is-active': isMenuActive }">
                <div class="navbar-start">
                    <RouterLink class="navbar-item" to="/">Home</RouterLink>
                    <RouterLink class="navbar-item" to="/about">About</RouterLink>
                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link" href="">
                            Docs
                        </a>
                        <div class="navbar-dropdown">
                            <a class="navbar-item" href="">
                                Overview
                            </a>
                            <a class="navbar-item" href="">
                                Modifiers
                            </a>
                            <a class="navbar-item" href="">
                                Columns
                            </a>
                            <a class="navbar-item" href="">
                                Layout
                            </a>
                            <a class="navbar-item" href="">
                                Form
                            </a>
                            <hr class="navbar-divider">
                            <a class="navbar-item" href="">
                                Elements
                            </a>
                            <a class="navbar-item is-active" href="">
                                Components
                            </a>
                        </div>
                    </div>
                </div>

                <div class="navbar-end">
                    <LoginBadge />

                    <div class="navbar-item">
                        <div class="field is-grouped">
                            <p class="control">
                                <a class="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet"
                                    data-social-target="https://bulma.io" target="_blank"
                                    href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=https://bulma.io&amp;via=jgthms">
                                    <span class="icon">
                                        <i class="fab fa-twitter"></i>
                                    </span>
                                    <span>
                                        Tweet
                                    </span>
                                </a>
                            </p>
                            <p class="control">
                                <a class="button is-primary"
                                    href="">
                                    <span class="icon">
                                        <i class="fas fa-download"></i>
                                    </span>
                                    <span>Download</span>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<style scoped></style>