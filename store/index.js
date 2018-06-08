import Vuex from 'vuex';

const createStore = () => {
	return new Vuex.Store({
		state: {
			username: null
		},
		getters: {
			username(state) {
				return state.username;
			},
			isAuthenticated(state) {
				return state.username != null;
			}
		},
		mutations: {
			login(vuexContext, username) {
				vuexContext.username = username;
				this.$router.push("/dashboard");
			},
			logout(vuexContext) {
				vuexContext.username = null;
				this.$router.push("/");
			}
		}
	});
}

export default createStore;
