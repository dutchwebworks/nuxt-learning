<template>
    <main class="dashboard">
        <nav class="dashboard__nav">
            <NuxtLink to="/axios" class="dashboard__nav-item" active-class="is-active" exact-active-class="is-exact">Axios</NuxtLink>
            <!--
            <NuxtLink to="/highcharts" class="dashboard__nav-item" active-class="is-active" exact-active-class="is-exact">Highcharts</NuxtLink>
            <NuxtLink to="/form" class="dashboard__nav-item" active-class="is-active" exact-active-class="is-exact">Form</NuxtLink>
            <NuxtLink to="/local-news" class="dashboard__nav-item" active-class="is-active" exact-active-class="is-exact">Local News</NuxtLink>
            <NuxtLink to="/world-news" class="dashboard__nav-item" active-class="is-active" exact-active-class="is-exact">World News</NuxtLink>
            <NuxtLink to="/secret" class="dashboard__nav-item" active-class="is-active" exact-active-class="is-exact">Secret page</NuxtLink>
            <NuxtLink to="/markdown" class="dashboard__nav-item" active-class="is-active" exact-active-class="is-exact">Markdown</NuxtLink>
            -->
        </nav>
    </main>
</template>

<script setup lang="ts">
    useSeoMeta({
        title: "Dashboard",
        meta: [
            {
                name: "description",
                content: "Various demos on learning Nuxt and Vue",
            },
        ],
    });
</script>

<style lang="scss">
    @use "sass:map";
    @use "../assets/scss/helpers/" as h;

    .dashboard__nav {
        display: grid;
        grid-gap: 10px;
        grid-template-columns: repeat(auto-fill, minmax(175px, 1fr));
        grid-auto-rows: 175px;

        > a {
            @include h.flexbox;
            @include h.flex-direction(column);
            @include h.justify-content(center);
            @include h.align-items(center);
            border-radius: h.$border-radius;
            text-align: center;
            font-weight: 700;
            font-size: 24px;
            color: white;
            cursor: pointer;
            font-family: h.$font-custom;
            transition: background-color 0.3s, font-size 0.3s;
            background-color: map.get(h.$colors, 01);
            text-decoration: none;

            &:hover {
                font-size: 30px;
                background-color: map.get(h.$colors, 02);
            }
        }
    }

    .dashboard_logo {
        text-align: center;
    }

    .dashboard_logo-img {
        width: 400px;
        height: auto;
    }
</style>
