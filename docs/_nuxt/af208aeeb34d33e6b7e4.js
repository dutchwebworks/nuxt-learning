(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{177:function(t,a,e){var s=e(190);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,e(17).default)("1626e9b2",s,!1,{sourceMap:!1})},189:function(t,a,e){"use strict";var s=e(177);e.n(s).a},190:function(t,a,e){(t.exports=e(16)(!1)).push([t.i,"",""])},197:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("main",{staticClass:"highcharts"},[e("h1",{staticClass:"heading"},[t._v("Highcharts")]),t._v(" "),t._m(0),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:null!=t.barName,expression:"barName != null"}]},[e("h2",{staticClass:"sub-heading"},[t._v("User clicked:")]),t._v(" "),e("p",{staticClass:"paragraph"},[t._v("Slice name: "),e("strong",[t._v(t._s(t.barName))])]),t._v(" "),e("p",{staticClass:"paragraph"},[t._v("With the value: "),e("strong",[t._v(t._s(t.barValue))])])]),t._v(" "),e("vue-highcharts",{attrs:{options:t.highchartOptions}})],1)};s._withStripped=!0;e(25);var i=e(187),r=e.n(i);e(188);var n={components:{VueHighcharts:r.a},data:function(){return{barName:null,barValue:null,highchartOptions:(t=this,{chart:{type:"pie"},title:"Frontend frameworks",yAxis:{title:{text:"Total percent market share"}},tooltip:{formatter:function(){return"<b>"+this.point.name+"</b>: "+this.y+" %"}},series:[{data:[["Vue",12],["Angular",4],["React",3]],size:"90%",innerSize:"70%",showInLegend:!0,dataLabels:{enabled:!1}}],plotOptions:{pie:{shadow:!1},series:{cursor:"pointer",colors:["#42b983","#C3002F","#61dafb"],point:{events:{click:function(){console.log(this),t.updateUserData({bar:this.options.name,value:this.options.y})}}}}}})};var t},methods:{updateUserData:function(t){this.barName=t.bar,this.barValue=t.value}}},o=(e(189),e(3)),l=Object(o.a)(n,s,[function(){var t=this.$createElement,a=this._self._c||t;return a("p",{staticClass:"paragraph"},[this._v("Example using Highcharts in Nuxt. "),a("strong",[this._v("Click on a pie slice.")])])}],!1,null,null,null);l.options.__file="highcharts.vue";a.default=l.exports}}]);