<template>
	<main class="highcharts">
		<h1 class="heading">Highcharts</h1>

		<vue-highcharts
			:options="highChartOptions"
			ref="lineCharts">
		</vue-highcharts>	
	</main>
</template>

<script>
import VueHighcharts from 'vue2-highcharts';

const asyncData = {
  name: 'Tokyo',
  marker: {
    symbol: 'square'
  },
  data: [
        7.0,
        6.9,
        9.5,
        14.5,
        2.2,
        21.5,
        25.2,
        { 
            y: 26.5,
            marker: {
                symbol: 'url(http://www.highcharts.com/demo/gfx/sun.png)'
            }
        },
        23.3,
        18.3,
        13.9,
        9.6
    ]
}

export default {
	head: {
		title: "Highcharts demo",
		meta: [
			{ hid: "description", name: "description", content: "Testing Highcharts charts" }
		]
	},
	components: {
        VueHighcharts
	},
	mounted() {
		this.loadHighchart();
	},
	data() {
		return {
			highChartOptions: {
				chart: {
					type: 'spline'
				},
				title: {
					text: 'Monthly Average Temperature'
				},
				subtitle: {
					text: 'Source: WorldClimate.com'
				},
				xAxis: {
					categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
					'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
				},
				yAxis: {
					title: {
						text: 'Temperature'
					},
					labels: {
						formatter: function () {
							return this.value + '°';
							}
						}
					},
					tooltip: {
						crosshairs: true,
						shared: true
					},
					credits: {
						enabled: false
					},
					plotOptions: {
						spline: {
						marker: {
							radius: 4,
							lineColor: '#666666',
							lineWidth: 1
						}
						}
					},
					series: []
				}
		}
	},
	methods: {
		loadHighchart(){
			let lineCharts = this.$refs.lineCharts;
			lineCharts.delegateMethod('showLoading', 'Loading...');
			lineCharts.addSeries(asyncData);
			lineCharts.hideLoading();
		}
	}
}
</script>

<style>
</style>
