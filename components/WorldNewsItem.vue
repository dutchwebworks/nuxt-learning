<template>
    <article class="world-news-item">
        <a :href="item.url" target="_blank">
            <img :src="item.urlToImage" :alt="item.title" class="world-news-item__img" />
        </a>

        <p class="paragraph">
            <em>{{ item.source.name }}</em>
        </p>

        <h3 class="world-news-item__headline">
            <a :href="item.url" target="_blank">
                {{ item.title }}
            </a>
        </h3>

        <p class="world-news-item__description">
            {{ item.description }}
        </p>

        <p>
            <small>By {{ item.author }}, on {{ item.publishedAt }}</small>
        </p>
    </article>
</template>

<script>
    export default {
        props: {
            item: {
                type: Object,
                required: true,
            },
        },
    };
</script>

<style lang="scss">
    // ---------------------------------------------
    // Block
    // ---------------------------------------------

    .world-news-item {
        @include flexbox;
        @include flex-direction(column);
        padding: 20px;
        border-radius: 8px;
        background-color: map.get($colors, 05);

        a {
            @include flexbox;
            @include justify-content(center);
            @include flex-basis(250px);
        }
    }

    // ---------------------------------------------
    // Element
    // ---------------------------------------------

    .world-news-item__headline {
        a {
            color: $color-sub-title;
            text-decoration: none;

            &:hover {
                color: map.get($colors, 01);
            }
        }
    }

    .world-news-item__description {
        color: map.get($colors, 03);
        line-height: 1.5;
    }

    .world-news-item__img {
        max-width: 100%;
        height: auto;
        border-radius: 8px;
        object-fit: contain;
    }

    // ---------------------------------------------
    // Modifier
    // ---------------------------------------------
</style>
