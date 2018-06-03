<template>
  <section class="highcharts">
      <h1>Highcharts</h1>

      <vue-highcharts :options="highchartsOptions"></vue-highcharts>
  </section>
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
        userData: "nothing yet",
        highchartsOptions: {
            chart: {
              type: "bar"
            },
            title: "Historic World Population by Region",
            yAxis: {
              catagories: ["Africa", "America", "Asia", "Europe", "Oceania"],
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
