<template>
    <header class="header">
        <div class="header__bar">
            <h1 class="header__heading">SPA learning with Nuxt, Vue, Vuex and vue-router</h1>
        </div>

        <div class="header__user">
            <nav class="header__nav">
                <NuxtLink to="/">Dashboard</NuxtLink>
            </nav>

            <div class="header__username">
                Logged in as:
                <strong>[username]</strong>
            </div>
        </div>
    </header>
</template>

<style lang="scss">
    @use "sass:map";
    @use "../assets/scss/helpers/" as h;

    .header {
        margin-bottom: 30px;
        padding-bottom: 10px;
        border-bottom: 1px solid map.get(h.$colors, 04);
    }

    .header__bar,
    .header__user {
        @include h.flexbox;
        @include h.justify-content(space-between);
    }

    .header__bar {
        @include h.align-items(flex-start);
    }

    .header__user {
        @include h.align-items(flex-end);

        .paragraph {
            margin-bottom: 0;
        }
    }

    .header__heading {
        color: map.get(h.$colors, 02);
        font-weight: 300;
        font-size: 42px;
        font-family: h.$font-custom;
    }

    .header__nav a {
        font-size: 18px;
        font-weight: 300;
        color: map.get(h.$colors, 01);
        text-decoration: none;
        font-family: h.$font-custom;
    }

    .header__nav a.is-active {
        color: map.get(h.$colors, 03);
        visibility: hidden;
    }

    .header__nav {
        .nuxt-link-exact-active {
            visibility: hidden;
        }
    }

    .header__username {
        color: map.get(h.$colors, 03);
        font-family: h.$font-custom;
    }
</style>
