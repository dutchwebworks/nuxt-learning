<template>
    <label class="custom-checkbox">
        <input
            type="checkbox"
            class="checkbox-toggle"
            :class="theme"
            :checked="value"
            @change="$emit('input', $event.target.checked)">

        <span v-if="this.$slots.default" class="custom-checkbox__label">
            <slot/>
        </span>        
    </label>
</template>

<script>
    // https://medium.com/@relt24/dedicated-vue-js-checkbox-component-360a330a3eb

    export default {
        props: {
            theme: {
                type: String,
                default: "deepskyblue"
            },
            value: {
                type: Boolean
            }
        }
    };
</script>

<style lang="scss">
    .custom-checkbox {
        cursor: pointer;
    }
    
    /* Begin CSS from: https://codepen.io/silas/pen/pvzmqG */

    .checkbox-toggle[type="checkbox"]{
        -webkit-appearance: none;
        -moz-appearance: none;
        -webkit-transition: 400ms all;
        transition: 400ms all;
        margin: 0;
        display: inline-block;
        border-radius: 50px;
        background: white;
        box-shadow: inset 0 0 0 2px rgba(0,0,0,.1);
        width: 56px;
        height: 36px;
        outline: 0;
        cursor: pointer;
        position: relative;
        -moz-user-select: none;
        -webkit-user-select: none;
        user-select: none;
        animation: input 4s;
    }

    .checkbox-toggle[type="checkbox"]:checked, .checkbox-toggle[type="checkbox"].checked {
        background: #53D669;
        box-shadow: inset 0 0 0 15px #53D669;
        transition: 250ms all;
    }

    .checkbox-toggle[type="checkbox"]::before {
        content:'';
        transition: 300ms all;
        position: absolute;
        left: 2px;
        top: 2px;
        bottom: 2px;
        right: auto;
        transform: translate(0,0);
        display: block;
        width: 32px;
        height: 32px;
        border-radius: 40px;
        background: #FFFFFF;
        box-shadow: 0 0 12px 0 rgba(0,0,0,0.06), 0 0 0 0 rgba(0,0,0,0.06), 0 6px 10px 0 rgba(0,0,0,0.15), 0 0 2px 0 rgba(0,0,0,0.07), 0 4px 6px 0 rgba(0,0,0,0.06), 0 1px 1px 0 rgba(0,0,0,0.11);
        animation: button 3s ease-out;
    }

    .checkbox-toggle[type="checkbox"]:checked::before, .checkbox-toggle[type="checkbox"].checked::before{
        transform: translate(20px,0);
    }

    .checkbox-toggle[type="checkbox"].red:checked { background: #FF4F2F; box-shadow: inset 0 0 0 15px #FF4F2F; }
    .checkbox-toggle[type="checkbox"].orange:checked { background: #FFAC42; box-shadow: inset 0 0 0 15px #FFAC42; }
    .checkbox-toggle[type="checkbox"].yellow:checked { background: #FFE842; box-shadow: inset 0 0 0 15px #FFE842; }
    .checkbox-toggle[type="checkbox"].green:checked { background: #50DF3D; box-shadow: inset 0 0 0 15px #50DF3D; }
    .checkbox-toggle[type="checkbox"].blue:checked { background: #40A7ED; box-shadow: inset 0 0 0 15px #40A7ED; }
    .checkbox-toggle[type="checkbox"].deepskyblue:checked { background: deepskyblue; box-shadow: inset 0 0 0 15px deepskyblue; }
    .checkbox-toggle[type="checkbox"].purple:checked { background: #AF57EC; box-shadow: inset 0 0 0 15px #AF57EC; }
    .checkbox-toggle[type="checkbox"].deeppink:checked { background: deeppink; box-shadow: inset 0 0 0 15px deeppink; }

    /* End CSS from */

    .custom-checkbox__label {
        position: relative;
        top: -10px;
        margin-left: 10px;
    }
</style>