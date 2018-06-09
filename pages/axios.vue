<template>
	<main class="axios">
		<p>{{ ip }}</p>

		<p><button @click="fetchSomething">Get IP address</button></p>
	</main>
</template>

<script>
	export default {
		components: {

		},
		data() {
			return {
				ip: 'No ip address found yet',
			}
		},
		methods: {
			async fetchSomething() {
				this.ip = await this.$axios.$get('https://icanhazip.com');
			}
		}
	};
</script>

<style>
	.axios {

	}
</style>
