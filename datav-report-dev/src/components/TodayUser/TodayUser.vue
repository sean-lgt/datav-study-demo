<!--
 * @Author: your name
 * @Date: 2021-09-25 11:11:01
 * @LastEditTime: 2021-10-02 14:12:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \data-screen-study\imooc-datav-report-dev\src\components\TotalSales\TotalSales.vue
-->
<template>
    <common-card title="今日交易用户数"
                 value="91,014">
        <template>
            <div id="today-users-chart"
                 :style="{width: '100%',height: '100%'}">

            </div>
        </template>
        <template v-slot:footer>
            <span>退货率 </span>
            <span class="emphasis">5.14%</span>
        </template>
    </common-card>
</template>
<script>
import commonCardMixin from '../../utils/mixins/commonCardMixin';
export default {
    mixins: [commonCardMixin],
    mounted() {
        const userDom = document.getElementById('today-users-chart');
        const chart = this.$echarts.init(userDom); //完成初始化
        chart.setOption({
            color: ['#3398DB'],
            series: [
                {
                    type: 'bar',
                    data: [410, 82, 200, 334, 390, 330, 220, 150, 82, 200, 134, 290, 330, 150],
                    barWidth: '60%',
                },
            ],
            xAxis: {
                show: false,
                type: 'category',
                data: [
                    '00:00',
                    '01:00',
                    '02:00',
                    '03:00',
                    '04:00',
                    '05:00',
                    '06:00',
                    '07:00',
                    '08:00',
                    '09:00',
                    '10:00',
                    '11:00',
                    '12:00',
                    '13:00',
                ],
            },
            yAxis: {
                show: false,
            },
            grid: {
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
            },
            tooltip: {},
        });
    },
};
</script>
<style lang="scss" scoped>
</style>
