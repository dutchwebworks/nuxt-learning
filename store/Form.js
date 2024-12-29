export const state = () => ({
	newsletter: false,
	product: true,
	backlog: true
});

export const getters = {
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

export const mutations = {
	SET_NEWSLETTER(context, payload) {
		context.newsletter = payload;
	},
	SET_PRODUCT(context, payload) {
		context.product = payload;
	},
	SET_BACKLOG(context, payload) {
		context.backlog = payload;
	}
};

export const actions = {

};