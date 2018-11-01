const state = () => ({
	newsletter: false,
	product: true,
	backlog: true
});

const getters = {
	newsletter(state) {
		return state.newsletter;
	},
	product(state) {
		return state.product;
	},
	backlog(state) {
		return state.backlog;
	}
};

const mutations = {
	newsletter(vuexContext, payload) {
		vuexContext.newsletter = payload;
	},
	product(vuexContext, payload) {
		vuexContext.product = payload;
	},
	backlog(vuexContext, payload) {
		vuexContext.backlog = payload;
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
