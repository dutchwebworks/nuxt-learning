<template>
	<main class="admin">
		<h1 class="heading">Secret page</h1>

		<h2 class="sub-heading">Logged in as: {{ username }}</h2>

		<p class="paragraph">Welcome to the secret page!</p>
		
	</main>
</template>

<script>
	import { mapGetters } from "vuex";

	export default {
		layout: "logged-in",
		computed: {
			...mapGetters("Auth", {
				username: "username"
			})
		}
	};
</script>

<style>

</style>
