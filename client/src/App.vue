<script setup lang="ts">
	import { RouterLink, RouterView } from 'vue-router'
	import NavBar from './components/NavBar.vue';
	let obj = {
		msg: "Hello from New Paltz!"
	}
	obj.msg= "nice."
</script>

<template>
	<NavBar />
	<div class="container">
		<RouterView />
	</div>
</template>

<style scoped>
</style>
