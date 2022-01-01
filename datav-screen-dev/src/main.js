import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 引入 vue-echarts
import VueECharts from 'vue-echarts'
import VueCountTo from './components/VueCountTo/vue-countTo.vue'

createApp(App).use(store).component('vue-echarts', VueECharts).component('CountTo', VueCountTo).use(router).mount("#app");