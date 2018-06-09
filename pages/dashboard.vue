<template>
	<main class="dashboard">
		<p>Hi, {{ username }}</p>

		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptatum vero voluptatibus ullam deleniti sed natus dicta itaque, aperiam officiis?</p>

		<p><button @click="$store.commit('logout')">Logout</button></p>
	</main>
</template>

<script>
	import { mapGetters } from "vuex";

	export default {
		computed: {
			...mapGetters([
				"username"
			])
		}
	};
</script>

<style>
	.dashboard {

	}
</style>
