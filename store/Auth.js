export const state = () => ({
	username: null
});

export const getters = {
	username(state) {
		return state.username;
	},
	isAuthenticated(state) {
		return state.username != null;
	}
};

export const mutations = {
	LOGIN(context, username) {
		context.username = username;
		this.$router.push("/dashboard");
	},
	LOGOUT(context) {
		context.username = null;
		this.$router.push("/");
	}
};

export const actions = {

};