<template>
  <div class="app__container">
    <nuxt/>

  	<TheFooter/>
  </div>
</template>

<script>
	import TheFooter from "@/components/TheFooter";

	export default {
		components: {
			TheFooter
		}
	}
</script>

<style lang="scss">
	.app__container {
		max-width: 1200px;
		margin: 0 auto;
	}
</style>
