<template>
	<header class="header">
		<div class="header__bar">
			<h1 class="header__heading">SPA learning with Nuxt and Vue, Vuex and Nuxt routing</h1>

			<p class="paragraph">
				<button
					class="button button--04"
					@click="$store.commit('logout')">
					Logout
				</button>
			</p>
		</div>

		<div class="header__user">
			<nav class="header__nav">
				<nuxt-link
					tag="a"
					to="/dashboard">
					Dashboard
				</nuxt-link>
			</nav>

			<p class="paragraph">Logged in as: <strong>{{ username }}</strong></p>
		</div>
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
	@import "~/scss/helpers.scss";

	.header {
		margin-bottom: 30px;
		padding-bottom: 10px;
		border-bottom: 1px solid map-get($colors, 04);
	}

	.header__bar,
	.header__user {
		@include flexbox;
		@include justify-content(space-between);
	}

	.header__bar {
		@include align-items(flex-start);
	}

	.header__user {
		@include align-items(flex-end);

		.paragraph {
			margin-bottom: 0;
		}
	}

	.header__heading {
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
