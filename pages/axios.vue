<template>
	<main class="axios">
		<h1 class="heading">Axios demo</h1>

		<p class="paragraph">Simple demo getting Ajax call from a IP address API</p>

		<div class="flex items-center">
			<h2 class="sub-heading mr-20">{{ ip }}</h2>

			<p>
				<button
					v-show="displayButton"
					@click="getIpAddress"
					class="button button--02">
					Get my IP address
				</button>
			</p>
		</div>
	</main>
</template>

<script>
import IpService from "@/services/IpService.js";

export default {
	head: {
		title: "Axios demo",
		meta: [
			{ hid: "description", name: "description", content: "Using Axios to get your IP number" }
		]
	},
	data: () => ({
		ip: 'No ip address found yet',
		displayButton: true,
	}),
	methods: {
		getIpAddress() {
			IpService
				.getIpAddress()
				.then(response => {
					this.ip = response.data;
					this.displayButton = false;
				})
				.catch(error => {
					console.log(error);
				});
		}
	}
};
</script>

<style lang="scss">

</style>
