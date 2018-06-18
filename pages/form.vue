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
                    <input
                    type="text"
                    @blur="$v.username.$touch()"
                    v-model.trim="$v.username.$model">
                    Username

                    <span v-if="$v.username.$error" class="error">Username is required</span>
                </p>
                

                <p>
                    <input
                        type="submit"
                        class="button button--01"
                        value="Send"
                        :disabled="$v.$invalid">
                </p>
            </fieldset>
        </form>
    </main>
</template>

<script>
    import Checkbox from "~/components/Form/Checkbox";
    import { required } from "vuelidate/lib/validators";

    export default {
        components: {
            Checkbox
        },
        data() {
            return {
                newsletter: true,
                product: false,
                username: null,
            }
        },
        methods: {
            sendForm() {
                alert("Form send");
            }
        },
        validations: {
            username: {
                required,
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