export default function(context) {
	if(!context.store.getters["Auth/isAuthenticated"]) {
		context.redirect("/login");
	}
}
