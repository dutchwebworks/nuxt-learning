<template>
    <footer class="footer">
        <p class="footer__body">By Dennis Burger, March 2025</p>

        <p class="footer__body"><a href="https://github.com/dutchwebworks/nuxt-learning" rel="noreferrer" target="_blank">View on Github</a></p>
    </footer>
</template>

<style lang="scss">
    @use "sass:map";
    @use "../assets/scss/helpers/" as h;

    .footer {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    .footer__body,
    .footer__body a {
        color: map.get(h.$colors, 03);
        font-size: 14px;
        font-weight: 300;
        font-family: h.$font-custom;
    }

    .footer__body {
        margin-top: 30px;
        padding-top: 10px;
        border-top: 1px solid map.get(h.$colors, 04);
    }

    .footer__body + .footer__body {
        text-align: right;
    }

    .footer__body a:hover {
        color: map.get(h.$colors, 02);
    }
</style>
