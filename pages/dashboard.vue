<template>
	<section class="dashboard">
		<p>Hi, {{ username }}</p>

		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptatum vero voluptatibus ullam deleniti sed natus dicta itaque, aperiam officiis?</p>
	</section>
</template>

<script>
	export default {
		components: {

		},
		data() {
			return {

			}
		},
		methods: {

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
