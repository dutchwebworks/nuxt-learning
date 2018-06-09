<template>
	<main class="login">
		<form @submit.prevent="doLogin">
			<fieldset>
				<legend>Login</legend>

				<p>
					<label>Username:</label>

					<input
						type="text"
						v-model="username">

					<input
						type="submit"
						name="submit"
						:disabled="!username"
						value="Login">
				</p>
			</fieldset>
		</form>
	</main>
</template>

<script>
	export default {
		layout: "non-logged-in",
		data() {
			return {
				username: null
			}
		},
		methods: {
			doLogin() {
				this.$store.commit("login", this.username);
			}
		}
	}
</script>

<style>
	.login {

	}
</style>
