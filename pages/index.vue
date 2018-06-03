<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title">
        nuxt-learning
      </h1>
      <h2 class="subtitle">
        Learning about Nuxt
      </h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation</a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">GitHub</a>
      </div>

      <section class="ip-address">
        <div class="ip-address__title">
          My IP address is: {{ ip }}
        </div>

        <div class="ip-address__button">
          <button @click="fetchSomething">Get IP address</button>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  data() {
    return {
      ip: 'No ip address found yet',
    }
  },
  components: {
    Logo
  },
  methods: {
    async fetchSomething() {
      const ip = await this.$axios.$get('http://icanhazip.com');
      this.ip = ip;
    }
  }
}
</script>

<style>
.container
{
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title
{
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle
{
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links
{
  padding-top: 15px;
}

.ip-address {
  margin-top: 20px;
}

.ip-address__button {
  margin-top: 20px;
}
</style>
