<template>
	<main class="login">
		<form @submit.prevent="onSubmit">
			<fieldset class="login__fieldset">
				<h1 class="heading">Login</h1>

				<p class="paragraph">Login using any username</p>

				<section class="login__input">
					<label class="paragraph">Username:</label>

					<input
						type="text"
						class="login__field"
						placeholder="Anyting"
						v-model="username">

					<input
						type="submit"
						name="submit"
						class="button button--01"
						:disabled="!username"
						value="Login">
				</section>
			</fieldset>

			<p class="vue-logo">
				<img src="~/assets/img/vue-logo.svg" alt="Vue logo">
			</p>
		</form>
	</main>
</template>

<script>
	export default {
		head: {
			title: "Login",
			meta: [
				{ hid: "description", name: "description", content: "Login to view our secret page" }
			]
		},
		data: () => ({
			username: null			
		}),
		methods: {
			onSubmit() {
				this.$store.commit("Auth/LOGIN", this.username);
			}
		}
	}
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

		.sub-heading {
			margin-bottom: 0;
		}
	}

	.header__title {
		color: map-get($colors, 02);
		font-weight: 300;
		font-size: 42px;
		font-family: $font-custom;
	}

	.login__fieldset {
		border: 0;
		margin: 0;
		padding: 0;
	}

	.login__input {
		@include flexbox;
		@include align-items(center);

		.paragraph,
		.login__field,
		.button {
			margin-right: 20px;
		}
	}

	.login__field {
		width: 200px;
		box-sizing: border-box;
		padding: 15px;
		border-radius: $border-radius;
		border: 2px solid #ccc;
	}

	.vue-logo {
		text-align: center;
	}
</style>
