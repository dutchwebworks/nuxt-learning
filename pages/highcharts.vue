<template>
	<main class="highcharts">
		<h1 class="heading">Highcharts</h1>

		<p class="paragraph">Example using Highcharts in Nuxt. <strong>Click on a pie slice.</strong></p>

		<div v-show="barName != null">
			<h2 class="sub-heading">User clicked:</h2>

			<p class="paragraph">Slice name: <strong>{{ barName }}</strong></p>

			<p class="paragraph">With the value: <strong>{{ barValue }}</strong></p>
		</div>

		<vue-highcharts :options="highchartOptions"></vue-highcharts>
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
				type: "pie"
			},
			title: "Frontend frameworks",
			yAxis: {
				title: {
					text: 'Total percent market share'
				}
			},
			tooltip: {
				formatter: function() {
					return '<b>'+ this.point.name +'</b>: '+ this.y +' %';
				}
			},
			series: [{
				data: [
					["Vue", 12],
					["Angular", 4],
					["React", 3]
				],
				size: '90%',
				innerSize: '70%',
				showInLegend:true,
				dataLabels: {
					enabled: false
				}
			}],
			plotOptions: {
				pie: {
					shadow: false
				},
				series: {
					cursor: "pointer",
					colors: [
						"#42b983",
						"#C3002F",
						"#61dafb"
					],
					point: {
						events: {
							click() {
								console.log(this);

								vm.updateUserData({
									bar: this.options.name,
									value: this.options.y
								});
							}
						}
					}
				}
			}
		}
	};
</script>

<style lang="scss">
	@import "scss/helpers";
</style>
