<template>
	<section class="dashboard">
		<LinkList/>

		<p>Hi, {{ username }}</p>

		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptatum vero voluptatibus ullam deleniti sed natus dicta itaque, aperiam officiis?</p>

		<p>
			<button @click="$store.commit('logout')">Logout</button>
		</p>
	</section>
</template>

<script>
	import { mapGetters } from "vuex";
	import LinkList from "@/components/LinkList";

	export default {
		components: {
			LinkList,
		},
		middleware: [
			'check-login'
		],
		computed: {
			...mapGetters([
				"username"
			])
		}
	};
</script>
