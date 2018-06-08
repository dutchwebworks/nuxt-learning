<template>
	<section class="container axios">
		<LinkList/>
		<section class="ip-address">
			<div class="ip-address__title">
				My IP address is: {{ ip }}
			</div>

			<div class="ip-address__button">
				<button @click="fetchSomething">Get IP address</button>
			</div>
		</section>
	</section>
</template>

<script>
	import LinkList from "@/components/LinkList";

	export default {
		middleware: [
			'check-login'
		],
		components: {
			LinkList,
		},
		data() {
			return {
				ip: 'No ip address found yet',
			}
		},
		methods: {
			async fetchSomething() {
				const ip = await this.$axios.$get('https://icanhazip.com');
				this.ip = ip;
			}
		}
	};
</script>

<style>
	.container {
		min-height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
	}

	.ip-address {
		margin-top: 20px;
	}

	.ip-address__button {
		margin-top: 20px;
	}
</style>
