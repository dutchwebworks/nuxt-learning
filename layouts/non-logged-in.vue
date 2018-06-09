<template>
  <div class="app_container">
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

<style>
	.app_container {
		max-width: 1200px;
		margin: 0 auto;
	}
</style>
