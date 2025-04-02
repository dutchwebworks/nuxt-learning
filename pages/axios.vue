<template>
    <main class="axios">
        <h1 class="heading">Axios demo</h1>

        <p class="paragraph">Simple demo getting Ajax call from a IP address API</p>

        <div class="flex items-center">
            <h2 class="sub-heading mr-20">{{ ip }}</h2>

            <p>
                <button v-show="displayButton" @click="getIpAddress" class="button button--02">Get my IP address</button>
            </p>
        </div>
    </main>
</template>

<script setup lang="ts">
    import { ref } from "vue";
    import IpService from "@/services/IpService.js";

    useSeoMeta({
        title: "Axios demo",
        meta: [
            {
                name: "description",
                content: "Using Axios to get your IP number",
            },
        ],
    });

    const ip = ref("");
    const displayButton = ref(true);

    const getIpAddress = async () => {
        try {
            const response = await IpService.getIpAddress();
            ip.value = response.data;
            displayButton.value = false;
        } catch (error) {
            console.log(error);
        }
    };
</script>
