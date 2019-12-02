<template>
	<header class="header">
		<div class="header__bar">
			<h1 class="header__heading">SPA learning with Nuxt, Vue, Vuex and vue-router</h1>

			<p class="paragraph">
				<button
					v-if="isAuthenticated"
					class="button button--04"
					@click="$store.commit('Auth/LOGOUT')">
					Logout
				</button>

				<nuxt-link
					v-else
					tag="button"
					class="button button--04"
					to="/login">
					Login
				</nuxt-link>				
			</p>
		</div>

		<div class="header__user">
			<nav class="header__nav">
				<nuxt-link
					tag="a"
					to="/">
					Dashboard
				</nuxt-link>

			</nav>

			<div 
				v-show="isAuthenticated"
				class="header__username">
				Logged in as: <strong>{{ username }}</strong>
			</div>
		</div>
	</header>
</template>

<script>
	import { mapGetters } from "vuex";

	export default {
		computed: {
			...mapGetters("Auth", {
				username: "username",
				isAuthenticated: "isAuthenticated"
			})
		}
	};
</script>

<style lang="scss">
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

	.header__nav {
		.nuxt-link-exact-active {
			visibility: hidden;
		}
	}

	.header__username {
		color: map-get($colors, 03);
		font-family: $font-custom;
	}
</style>
