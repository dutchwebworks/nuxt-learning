import Vue from "vue";
import Vuex from "vuex";
import Auth from "./modules/auth";

Vue.use(Vuex)

const store = () => {
	return new Vuex.Store({
		state: {

		},
		modules: {
			Auth
		}
	})
}

export default store;