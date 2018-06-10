const state = () => {
	username: null
};

const getters = {
	username: state => {
		return state.username;
	},
	isAuthenticated: state => {
		return state.username != null;
	}
};

const mutations = {
	login: (vuexContext, username) => {
		vuexContext.username = username;
		this.$router.push("/dashboard");
	},
	logout: vuexContext => {
		vuexContext.username = null;
		this.$router.push("/");
	}
};

const actions = {

};

export default {
	state,
	getters,
	mutations,
	actions,
};
