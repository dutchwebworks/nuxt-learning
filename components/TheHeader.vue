<template>
	<header class="header">
		<h1 class="header-title">Nuxt learning</h1>

		<nav class="navigation">
			<ul class="navigation__list">
				<li class="navigation__item"><nuxt-link to="/highcharts">Highcharts demo</nuxt-link></li>
				<li class="navigation__item"><nuxt-link to="/axios">Axios demo</nuxt-link></li>
				<li class="navigation__item"><nuxt-link to="/dashboard">Dashboard</nuxt-link></li>
			</ul>
		</nav>
	</header>
</template>

<style>
	.header {

	}

	.header__title {

	}

	.navigation {
		margin: 40px 0 0 0;
		padding: 0;
	}

	.navigation__item {
		list-style: none;
		margin-bottom: 5px;
	}

	.navigation__item a {
		color: deepskyblue;
	}

	.navigation__item a:hover {
		color: deeppink;
	}
</style>
