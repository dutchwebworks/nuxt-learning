<template>
	<section class="dashboard">
		<LinkList/>

		<p>Hi, {{ username }}</p>

		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptatum vero voluptatibus ullam deleniti sed natus dicta itaque, aperiam officiis?</p>

		<p>
			<button @click="logout">Logout</button>
		</p>
	</section>
</template>

<script>
	import LinkList from "@/components/LinkList";

	export default {
		components: {
			LinkList,
		},
		middleware: [
			'check-login'
		],
		data() {
			return {

			}
		},
		methods: {
			logout() {
				this.$store.commit("logout");
			}
		},
		computed: {
			username(){
				return this.$store.getters.username;
			}
		}
	};
</script>

<style>
	.dashboard {

	}
</style>
