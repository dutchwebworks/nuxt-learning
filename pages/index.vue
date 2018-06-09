<template>
	<main class="login">
		<form @submit.prevent="onSubmit">
			<fieldset>
				<legend class="heading">Login</legend>

				<p class="paragraph">
					<label>Username:</label>

					<input
						type="text"
						placeholder="Anyting"
						v-model="username">

					<input
						type="submit"
						name="submit"
						class="button button--01"
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
			onSubmit() {
				this.$store.commit("login", this.username);
			}
		}
	}
</script>

<style lang="scss">
	@import "scss/style";

	.login {

	}
</style>
