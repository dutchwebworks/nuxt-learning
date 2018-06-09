<template>
	<header class="header">
		<h1 class="header__title">Nuxt learning</h1>

		<h2 class="sub-heading">Welcome: {{ username }}</h2>

		<p class="paragraph">
			<button
				@click="$store.commit('logout')">
				Logout
			</button>
		</p>

		<nav class="header__nav">
			<nuxt-link
				tag="a"
				to="/dashboard">
				Dashboard
			</nuxt-link>
		</nav>
	</header>
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

<style lang="scss">
	@import "scss/style";

	.header {
		margin-bottom: 30px;
		padding-bottom: 10px;
		border-bottom: 1px solid map-get($colors, 04);
	}

	.header__title {
		color: map-get($colors, 02);
		font-weight: 300;
		font-size: 42px;
		font-family: $font-custom;
	}

	.header__nav a {
		font-size: 18px;
		font-weight: 300;
		color: map-get($colors, 01);
		text-decoration: none;
		font-family: $font-custom;
	}

	.header__nav a.is-active {
		color: map-get($colors, 03);
		visibility: hidden;
	}
</style>
