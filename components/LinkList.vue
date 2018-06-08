<template>
	<ul class="demo-links">
		<li><nuxt-link to="/highcharts">Highcharts demo</nuxt-link></li>
		<li><nuxt-link to="/axios">Axios demo</nuxt-link></li>
		<li><nuxt-link to="/dashboard">Dashboard</nuxt-link></li>
		<li><a href="https://www.github.com/dutchwebworks/nuxt-learning" target="_blank">View on GitHub</a></li>
	</ul>
</template>

<style>
	.demo-links {
		margin: 40px 0 0 0;
		padding: 0;
	}

	.demo-links li {
		list-style: none;
		margin-bottom: 5px;
	}

	.demo-links a {
		color: deepskyblue;
	}

	.demo-links a:hover {
		color: deeppink;
	}
</style>
