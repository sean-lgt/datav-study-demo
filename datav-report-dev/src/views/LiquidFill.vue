<!--
 * @Author: your name
 * @Date: 2021-10-07 16:38:49
 * @LastEditTime: 2021-10-07 16:51:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \data-screen-study\imooc-datav-report-dev\src\views\LiquidFill.vue
-->
<template>
    <div id="container"></div>
</template>
<script>
import liquidfill from 'echarts-liquidfill';
export default {
    data() {
        return {};
    },
    mounted() {
        const data = [0.68, 0.54, 0.2];
        const chart = this.$echarts.init(document.getElementById('container'));
        chart.setOption({
            series: [
                {
                    type: 'liquidFill',
                    data,
                    color: ['red', '#0f0', 'rgb(0, 0, 255)'],
                    itemStyle: {
                        opacity: 0.6,
                    },
                    emphasis: {
                        itemStyle: {
                            opacity: 0.9,
                        },
                    },
                },
            ],
        });
    },
};
</script>
<style lang="scss" scoped>
#container {
    width: 100%;
    height: 100%;
}
</style>