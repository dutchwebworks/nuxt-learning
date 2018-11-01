<template>
	<footer class="footer">
		<p class="footer__body">By Dennis Burger, oktober 2018</p>

		<p class="footer__body"><a href="https://github.com/dutchwebworks/nuxt-learning" target="_blank">View on Github</a></p>
	</footer>
</template>

<style lang="scss">
	.footer {
		@include display-grid;
		@include grid-template-columns(1fr 1fr);
	}

	.footer__body,
	.footer__body a {
		color: map-get($colors, 03);
		font-size: 14px;
		font-weight: 300;
		font-family: $font-custom;
	}

	.footer__body {
		margin-top: 30px;
		padding-top: 10px;
		border-top: 1px solid map-get($colors, 04);
	}

	.footer__body + .footer__body {
		text-align: right;
	}

	.footer__body a:hover {
		color: map-get($colors, 02);
	}
</style>
