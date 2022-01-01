import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import * as ECharts from 'echarts';
//  需要指定echarts版本 否则报错
// import VCharts from 'v-charts'
// Vue.use(VCharts)

import './plugins/vcharts'


import VueECharts from 'vue-echarts'
import './style/index.css'


Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$echarts = ECharts;
Vue.component('v-chart', VueECharts)



new Vue({
    router,
    render: h => h(App)
}).$mount('#app')