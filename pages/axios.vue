<template>
	<main class="axios">
		<h1 class="heading">Axios demo</h1>

		<p class="paragraph">Simple demo getting Ajax call from a IP address API</p>

		<h2 class="sub-heading">{{ ip }}</h2>

		<p>
			<button
				@click="fetchIpAddress"
				class="button button--02">
				Get my IP address
			</button>
		</p>
	</main>
</template>

<script>
	export default {
		data() {
			return {
				ip: 'No ip address found yet',
			}
		},
		methods: {
			async fetchIpAddress() {
				this.ip = await this.$axios.$get('https://icanhazip.com');
			}
		}
	};
</script>

<style lang="scss">
	@import "scss/style";
</style>
