<script setup lang="ts">
import { useSession, useLogin, useLogout } from '@/model/session';

const session = useSession(); // common naming function pattern used for returning REACTIVE variables

const logout = useLogout();
const login = useLogin()
</script>

<template>
    <div class="navbar-item" v-if="session.user">
        Welcome, {{ session.user.name }}
        (<a @click="logout"> logout </a>)
    </div>

    <div class="navbar-item" v-else>
        <p class="control">
            <button class="button is-primary" @click="login">
                <span class="icon">
                    <i class="fas fa-user"></i>
                </span>
                <strong>Login</strong>
            </button>
        </p>
        <p class="control">
            <button class="button is-info is-light">
                <span class="icon">
                    <i class="fas fa-user-plus"></i>
                </span>
                <strong>Sign up</strong>
            </button>
        </p>
    </div>
</template>

<style scoped></style>