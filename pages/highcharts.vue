<template>
	<main class="highcharts">
		<h1 class="heading">Highcharts</h1>

		<p class="paragraph">Example using Highcharts in Nuxt. <strong>Click on a bar in the graph.</strong></p>

		<vue-highcharts :options="highchartOptions"></vue-highcharts>

		<div v-show="barName != null">
			<h2 class="sub-heading">User clicked:</h2>

			<p class="paragraph">Bar: {{ barName }} with the value: {{ barValue }}</p>
		</div>
	</main>
</template>

<script>
	import VueHighcharts from "vue2-highcharts";
	import Highcharts from "highcharts";

	export default {
		components: {
			VueHighcharts
		},
		data() {
			return {
				barName: null,
				barValue: null,
				highchartOptions: sampleData(this)
			}
		},
		methods: {
			updateUserData(payload) {
				this.barName = payload.bar;
				this.barValue = payload.value;
			}
		}
	};

	function sampleData(vm) {
		return {
			chart: {
				type: "bar"
			},
			title: "Historic World Population by Region",
			yAxis: {
				catagories: [
					"Africa",
					"America",
					"Asia",
					"Europe",
					"Oceania"
				],
				title: {
					text: null
				}
			},
			xAxis: {
				min: 0,
				title: {
					text: "Population (millions)",
					align: "high"
				}
			},
			plotOptions: {
				series: {
					events: {
						click() {
							vm.updateUserData({
								bar: this.name,
								value: this.options.data[0]
							});
						}
					}
				}
			},
			series: [
				{
					name: "Year 1800",
					data: [107]
				},
				{
					name: "Year 1900",
					data: [200]
				},
				{
					name: "Year 2012",
					data: [250]
				}
			]
		}
	};
</script>

<style lang="scss">
	@import "scss/style";
</style>
