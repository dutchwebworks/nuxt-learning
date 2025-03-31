<template>
    <main class="world-news">
        <h1 class="heading">News of today</h1>

        <p class="paragraph">Using a service -file to easily fetch data from a news source</p>

        <p v-show="isLoading">
            Loading news &hellip;
        </p>

        <h3
            v-show="newsLoaded"
            class="world-news__sub-title">
            Total results: {{ worldNews.totalResults }} world news items, showing
        </h3>

        <section
            v-show="newsLoaded"
            class="world-news__container">        
            <WorldNewsItem
                v-for="(item, index) in worldNews.articles"
                :item="item"
                :key="index">
            </WorldNewsItem>
        </section>
    </main>
</template>

<script>
import WorldNewsItem from "@/components/WorldNewsItem";
import WorldNewsService from "@/services/WorldNewsService.js";

export default {
    head: {
        title: "Latest world news",
        meta: [
            { hid: "description", name: "description", content: "News from a News API service" }
        ]
    },
    components: {
        WorldNewsItem,
    },
    data() {
        return {
            worldNews: [],
            newsLoaded: false,
            isLoading: false,
        }
    },
    created() {
        this.getNews({
            category: "technology",
            pageSize: 15,
        });
    },
    methods: {
        getNews(options) {
            this.$nuxt.$loading.start();
            this.isLoading = true;

            WorldNewsService.getNews({
                category: options.category,
                pageSize: options.pageSize,
            })
            .then(response => {
                this.worldNews = response.data;
                this.newsLoaded = true;
                this.isLoading = false;
                this.$nuxt.$loading.finish()
            });
        }
    }
}
</script>

<style lang="scss">
// ---------------------------------------------
// Block
// ---------------------------------------------

.world-news {
    font-family: $font-custom;
}

// ---------------------------------------------
// Element
// ---------------------------------------------

.world-news__container {
    @include respond-to-min('tablet') {        
        display: grid;
        grid-gap: 20px;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
}

// ---------------------------------------------
// Modifier
// ---------------------------------------------

</style>