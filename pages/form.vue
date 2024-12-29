<template>
    <main class="form">
        <h1 class="heading">Testing custom form components</h1>

        <p class="paragraph">Using Vue data properties on a custom component</p>

        <form @submit.prevent="sendForm">
            <fieldset>
                <legend>Custom checkbox</legend>

                <p class="paragraph">
                    <Checkbox
                        v-model="newsletter">
                        Subscribe to our e-mail montly newsletter?
                    </Checkbox>
                </p>

                <p class="paragraph">
                    <Checkbox
                        v-model="product"
                        theme="deeppink">
                        Subscribe to our e-mail product newsletter?
                    </Checkbox>
                </p>

                <p class="paragraph">
                    <Checkbox
                        v-model="backlog"
                        theme="purple">
                        Wanna be on our backlog?
                    </Checkbox>
                </p>

                <p>
                    <input
                        type="submit"
                        class="button button--01"
                        value="Send">
                </p>
            </fieldset>
        </form>
    </main>
</template>

<script>
    import Checkbox from "~/components/Form/Checkbox";
    import { required } from "vuelidate/lib/validators";

    export default {
		head: {
			title: "Custom form components",
			meta: [
				{ hid: "description", name: "description", content: "Testing custom form components" }
			]
		},
        components: {
            Checkbox
        },
        data: () => ({
			
		}),
        methods: {
            sendForm() {
                alert("Form send");
            }
        },
        computed: {
        	newsletter: {
        		get() {
        			return this.$store.getters["Form/newsletter"];
        		},
        		set(value) {
        			this.$store.commit("Form/SET_NEWSLETTER", value);
        		}
        	},
        	product: {
        		get() {
                    return this.$store.getters["Form/product"];
        		},
        		set(value) {
        			this.$store.commit("Form/SET_PRODUCT", value);
        		}
        	},
        	backlog: {
        		get() {
                    return this.$store.getters["Form/backlog"];
        		},
        		set(value) {
        			this.$store.commit("Form/SET_BACKLOG", value);
        		}
        	}
        }
    };
</script>

<style>
    .error {
        display: block;
        color: red;
    }
</style>
