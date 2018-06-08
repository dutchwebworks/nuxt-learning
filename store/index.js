import Vuex from 'vuex';

const createStore = () => {
	return new Vuex.Store({
		state: {
			username: null
		},
		getters: {
			username(state) {
				return state.username;
			}
		},
		mutations: {
			login(state, username) {
				state.username = username;
				this.$router.push("/dashboard");
			}
		}
	});
}

export default createStore;
