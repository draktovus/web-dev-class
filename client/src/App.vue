<script setup lang="ts">
	import { RouterLink, RouterView } from 'vue-router'
	import HelloWorld from './components/HelloWorld.vue'
	let obj = {
		msg: "Hello from New Paltz!"
	}
	obj.msg= "nice."
</script>

<template>
	<div class="nav-bar">
		<ul>
			<li class="nav-item">
				<RouterLink to="/">Home</RouterLink>
			</li>
			<li class="nav-item">
				<RouterLink to="/about">About</RouterLink>
			</li>
			<li class="nav-item"></li>
		</ul>
	</div>

	<RouterView />
</template>

<style scoped>
</style>
