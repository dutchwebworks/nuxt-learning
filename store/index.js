export const state = () => {
	username: null
}

export const getters = {
	username(state) {
		return state.username;
	},
	isAuthenticated(state) {
		return state.username != null;
	}
}

export const mutations = {
	login(vuexContext, username) {
		vuexContext.username = username;
		this.$router.push("/dashboard");
	},
	logout(vuexContext) {
		vuexContext.username = null;
		this.$router.push("/");
	}
}
