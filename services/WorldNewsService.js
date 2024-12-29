import axios from "axios";

const NewsService = axios.create({
    baseURL: process.env.newsApi.baseUrl,  // nuxt.config.js
    withCredentials: false,
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
    }
});

export default {
    getNews(options) {
        return NewsService.get('/top-headlines', {
            params: Object.assign({
                country: "us",
                apiKey: process.env.newsApi.key // nuxt.config.js
            }, options)
        });
    }
}
