import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './assets/style/reset.css';
import * as Echarts from 'echarts';
import VueEcharts from 'vue-echarts';

// Vue.prototype.= window.initMap

const app = createApp(App)
app.config.globalProperties.$initMap = window.initMap // 自定义添加
app.config.globalProperties.$bmap = window.BMapGL
app.config.globalProperties.$bmap2 = window.BMap
app.config.globalProperties.$initMap = window.initMap
app.config.globalProperties.$mapvgl = window.mapvgl
app.config.globalProperties.$mapv = window.mapv
app.config.globalProperties.$purpleStyle = window.purpleStyle
app.config.globalProperties.$darkStyle = window.darkStyle
app.use(store).use(router).component('vue-echarts', VueEcharts).mount("#app").$echarts = Echarts;