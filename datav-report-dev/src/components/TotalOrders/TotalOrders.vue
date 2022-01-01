<!--
 * @Author: your name
 * @Date: 2021-09-25 11:11:01
 * @LastEditTime: 2021-10-02 14:46:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \data-screen-study\imooc-datav-report-dev\src\components\TotalSales\TotalSales.vue
-->
<template>
    <common-card title="累计订单量"
                 value="125,420,3">
        <template>
            <div id="total-orders-chart"
                 :style="{width: '100%',height: '100%'}">

            </div>
        </template>
        <template v-slot:footer>
            <span>昨日订单量 </span>
            <span class="emphasis">200,200</span>
        </template>
    </common-card>
</template>
<script>
import commonCardMixin from '../../utils/mixins/commonCardMixin';
export default {
    mixins: [commonCardMixin],
    mounted() {
        const chartDom = document.getElementById('total-orders-chart');
        const chart = this.$echarts.init(chartDom); //完成初始化
        chart.setOption({
            xAxis: {
                type: 'category',
                show: false,
                //完全伸展开  默认有边距
                boundaryGap: false,
            },
            yAxis: {
                show: false,
            },
            series: [
                {
                    type: 'line',
                    data: [620, 432, 220, 534, 790, 430, 220, 320, 834, 690, 530, 220, 620],
                    areaStyle: {
                        color: 'purple',
                    },
                    lineStyle: {
                        width: 0,
                    },
                    itemStyle: {
                        opacity: 0,
                    },
                    smooth: true, //平滑展示
                },
            ],
            // 布局
            grid: {
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
            },
            // tooltip: {},
        });
    },
};
</script>
<style lang="scss" scoped>
</style>
