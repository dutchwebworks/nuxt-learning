<template>
	<div class="news">
		<h1 class="heading">News</h1>

		<section class="news__items">
			<NewsThumbItem
				v-for="newsItem in newsItems"
				v-bind:newsItem="newsItem"
				v-bind:key="newsItem.id">
			</NewsThumbItem>
		</section>
	</div>
</template>

<script>
	import NewsThumbItem from "@/components/NewsThumbItem";

    export default {
		name: "News",
		components: {
			NewsThumbItem
		},
        computed: {
            newsItems() {
                return this.$store.getters.news;
            }
        }
    };
</script>

<style lang="scss">
    .news {
        font-family: $font-custom;
	}

	.news__items {
		display: grid;
		grid-gap: 40px;
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	}
</style>