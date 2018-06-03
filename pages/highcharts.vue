<template>
	<section class="highcharts">
		<h1>Highcharts</h1>

		<vue-highcharts :options="highchartOptions"></vue-highcharts>

		<div v-show="barName != null">
			<h2>User clicked:</h2>

			<p>Bar: {{ barName }} with the value: {{ barValue }}</p>
		</div>
	</section>
</template>

<script>
	import VueHighcharts from "vue2-highcharts";
	import Highcharts from "highcharts";

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
</script>

<style>
	.highcharts {
		max-width: 800px;
		margin: 0 auto;
	}
</style>
