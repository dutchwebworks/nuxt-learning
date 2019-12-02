<template>
    <section class="local-news-detail">
        <img
            class="local-news-detail-thumbnail"
            v-bind:src="newsItem.thumbnail"
            v-bind:alt="newsItem.title">

        <h1 class="local-news-detail-title">{{ newsItem.title }}</h1>        

        <p class="local-news-detail-date">
            <small>{{ newsItem.dateNice }}</small>
        </p>

        <p class="paragraph">{{ newsItem.description }}</p>
    </section>
</template>

<script>
    export default {
        computed: {
            newsItem() {
                return this.$store.getters["LocalNews/getItem"](this.$route.params.id);
            }
        }
    };
</script>

<style lang="scss">
    .local-local-news-detail {
        margin-top: 40px;
        font-family: $font-custom;
    }

    .local-news-detail-title {
        font-family: $font-custom;
        color: map-get($colors, 02);
    }

    .local-news-detail-thumbnail {
		box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.25);
    }
    
    .local-news-detail-date {
		font-size: 18px;
        font-family: $font-custom;
		color: map-get($colors, 01);
	}
</style>