const pkg = require("./package");

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: { enabled: true },
    modules: ["@nuxt/content"],
    app: {
        /*
         ** Headers of the page
         */
        head: {
            htmlAttrs: {
                lang: "en-US",
            },
            title: pkg.name,
            meta: [
                { charset: "utf-8" },
                { name: "viewport", content: "width=device-width, initial-scale=1" },
                { hid: "description", name: "description", content: pkg.description },
            ],
            link: [
                {
                    rel: "stylesheet",
                    href: "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap",
                },
            ],
        },
    },
    /*
     ** Global CSS
     */
    css: ["@/assets/scss/common.scss"],
});
