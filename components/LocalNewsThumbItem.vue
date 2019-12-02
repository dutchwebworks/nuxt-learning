<template>
    <article class="local-news__item">
        <nuxt-link
            v-bind:to="'/local-news/' + newsItem.id + '/' + newsItem.date + '/' + $options.filters.slugify(newsItem.title)">
            <img
                class="local-news__item-thumbnail"
                v-bind:src="newsItem.thumbnail"
                v-bind:alt="newsItem.title">
        </nuxt-link>				

        <h3 class="local-news__item-title">
            <nuxt-link
                v-bind:to="'/local-news/' + newsItem.id + '/' + newsItem.date + '/' + $options.filters.slugify(newsItem.title)">
                {{ newsItem.title }}
            </nuxt-link>
        </h3>

        <p class="local-news__item-date">
            <small>{{ newsItem.dateNice }}</small>
        </p>
    </article>
</template>

<script>
    export default {
        props: {
            newsItem: {
                type: Object,
                required: true
            }
        }
    };
</script>

<style lang="scss">
    .local-news__item-thumbnail {
		max-width: 100%;
		box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.25);
    }
    
    .local-news__item-title {
        font-family: $font-custom;
        color: map-get($colors, 02);
        
        a {
            color: inherit;
            text-decoration: none;

            &:hover {
                color: map-get($colors, 01);
            }
        }
	}	

	.local-news__item-description {
		line-height: 1.6;
	}

	.local-news__item-date {
		font-size: 18px;
        font-family: $font-custom;
		color: map-get($colors, 01);
	}
</style>