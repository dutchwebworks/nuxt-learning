import Vue from "vue";
import Vuex from "vuex";
import Auth from "./modules/Auth";
import Form from "./modules/Form";
import News from "./modules/News";

Vue.use(Vuex)

const store = () => {
	return new Vuex.Store({
		state: {

		},
		modules: {
			Auth,
			Form,
			News
		}
	})
}

export default store;
