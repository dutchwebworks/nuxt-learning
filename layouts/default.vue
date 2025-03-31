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
		head: {
			titleTemplate: '%s | Nuxt Learning'
		},
		components: {
			TheHeader,
			TheFooter
		}
	}
</script>

<style lang="scss">
	.app__container {
		max-width: 1200px;
		margin: 0 auto;
	}

	.page-enter-active {
	  animation: routerSlideIn .3s ease-out forwards;
	}

	.page-leave-active {
	  animation: routerSlideOut .3s ease-out forwards;
	}

	@keyframes routerSlideIn {
		0% {
			opacity: 0;
			transform: translateY(10px);
		}

		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes routerSlideOut {
		0% {
			opacity: 1;
		}

		100% {
			opacity: 0;
		}
	}
</style>
