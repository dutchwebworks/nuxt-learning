<template>
	<main class="dashboard">
		<nav class="dashboard__nav">
			<nuxt-link
				tag="div"
				to="/axios"
				class="dashboard__nav-item"
				active-class="is-active"
				exact-active-class="is-exact">
				Axios
			</nuxt-link>
			<nuxt-link
				tag="div"
				to="/highcharts"
				class="dashboard__nav-item"
				active-class="is-active"
				exact-active-class="is-exact">
				Highcharts
			</nuxt-link>
			<nuxt-link
				tag="div"
				to="/form"
				class="dashboard__nav-item"
				active-class="is-active"
				exact-active-class="is-exact">
				Form
			</nuxt-link>
			<nuxt-link
				tag="div"
				to="/local-news"
				class="dashboard__nav-item"
				active-class="is-active"
				exact-active-class="is-exact">
				Local News
			</nuxt-link>
			</nuxt-link>
			<nuxt-link
				tag="div"
				to="/world-news"
				class="dashboard__nav-item"
				active-class="is-active"
				exact-active-class="is-exact">
				World News
			</nuxt-link>
			<nuxt-link
				tag="div"
				to="/secret"
				class="dashboard__nav-item"
				active-class="is-active"
				exact-active-class="is-exact">
				Secret page
			</nuxt-link>
			<nuxt-link
				tag="div"
				to="/markdown"
				class="dashboard__nav-item"
				active-class="is-active"
				exact-active-class="is-exact">
				Markdown
			</nuxt-link>
		</nav>
	</main>
</template>

<script>
	export default {
		head: {
			title: "Dashboard",
			meta: [
				{ hid: "description", name: "description", content: "Various demo's on learning Nuxt and Vue" }
			]
		}		
	}
</script>

<style lang="scss">
	.dashboard__nav {
		display: grid;
		grid-gap: 10px;
		grid-template-columns: repeat(auto-fill, minmax(175px, 1fr));
		grid-auto-rows: 175px;

		> div {
			@include flexbox;
			@include flex-direction(column);
			@include justify-content(center);
			@include align-items(center);
			border-radius: $border-radius;
			text-align: center;
			font-weight: 700;
			font-size: 24px;
			color: white;
			cursor: pointer;
			font-family: $font-custom;
			transition: background-color .3s, font-size .3s;
			background-color: map-get($colors, 01);

			&:hover {
				font-size: 30px;
				background-color: map-get($colors, 02);
			}
		}
	}

	.dashboard_logo {
		text-align: center;
	}

	.dashboard_logo-img {
		width: 400px;
		height: auto;
	}
</style>
