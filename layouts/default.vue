<template>
  <div class="app__container">
  	<TheHeader/>

    <nuxt/>

  	<TheFooter/>
  </div>
</template>

<script>
	import TheHeader from "@/components/TheHeader";
	import TheFooter from "@/components/TheFooter";

	export default {
		middleware: [
			'authenticated'
		],
		components: {
			TheHeader,
			TheFooter
		}
	}
</script>

<style lang="scss">
	@import "scss/style";

	.app__container {
		max-width: 1200px;
		margin: 0 auto;
	}
</style>
