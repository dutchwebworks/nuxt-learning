<template>
	<main class="news">
		<h1 class="heading">Local news</h1>

		<p class="paragraph">Generating SEO friendly URL's with slug title names and dates for news items</p>

		<hr>

		<section class="local-news__items">
			<LocalNewsThumbItem
				v-for="item in newsList"
				v-bind:newsItem="item"
				v-bind:key="item.id">
			</LocalNewsThumbItem>
		</section>
	</main>
</template>

<script>
	import LocalNewsThumbItem from "@/components/LocalNewsThumbItem";

    export default {
		head: {
			title: "Local news",
			meta: [
				{ hid: "description", name: "description", content: "Demo of local news via Vuex store news array" }
			]
		},
		components: {
			LocalNewsThumbItem
		},
        computed: {
            newsList() {
				return this.$store.getters["LocalNews/getList"];
            }
        }
    };
</script>

<style lang="scss">
    .local-news {
        font-family: $font-custom;
	}

	.local-news__items {
		display: grid;
		grid-gap: 40px;
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	}
</style>