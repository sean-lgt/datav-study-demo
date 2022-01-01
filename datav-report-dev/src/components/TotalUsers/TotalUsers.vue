<!--
 * @Author: your name
 * @Date: 2021-09-25 11:11:01
 * @LastEditTime: 2021-09-25 16:08:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \data-screen-study\imooc-datav-report-dev\src\components\TotalSales\TotalSales.vue
-->
<template>
    <common-card title="累计用户数"
                 value="1,087,333">
        <template>
            <div id="total-users-chart"
                 :style="{width: '100%',height: '100%'}">

            </div>
        </template>
        <template v-slot:footer>
            <div class="total-users-footer">
                <span>日同比 </span>
                <span class="emphasis">8.14%</span>
                <div class="increase"></div>
                <span class="month">月同比 </span>
                <span class="emphasis">35.14%</span>
                <div class="decrease"></div>
            </div>
        </template>
    </common-card>
</template>
<script>
import commonCardMixin from '../../utils/mixins/commonCardMixin';
export default {
    mixins: [commonCardMixin],
    mounted() {
        const userDom = document.getElementById('total-users-chart');
        const chart = this.$echarts.init(userDom); //完成初始化
        chart.setOption({
            // color: ['#3398DB'],
            series: [
                {
                    type: 'bar',
                    data: [200],
                    stack: '总量',
                    barWidth: '10px',
                    itemStyle: {
                        color: '#45c946',
                    },
                },
                {
                    type: 'bar',
                    data: [250],
                    stack: '总量',
                    itemStyle: {
                        color: '#eee',
                    },
                },
                {
                    type: 'custom',
                    data: [200],
                    stack: '总量',
                    // 自定义渲染
                    renderItem: (params, api) => {
                        const value = api.value(0); //拿到值与坐标系
                        console.log('value', value);
                        const endPoint = api.coord([value, 0]); //坐标点
                        console.log('endpoint', endPoint);
                        return {
                            type: 'group',
                            position: endPoint,
                            children: [
                                {
                                    type: 'path',
                                    shape: {
                                        d: 'M1024 255.996 511.971 767.909 0 255.996 1024 255.996z',
                                        x: -5,
                                        y: -20,
                                        width: 10,
                                        height: 10,
                                        layout: 'cover',
                                    },
                                    style: {
                                        fill: '#45c946',
                                    },
                                },
                                {
                                    type: 'path',
                                    shape: {
                                        d: 'M0 767.909l512.029-511.913L1024 767.909 0 767.909z',
                                        x: -5,
                                        y: 10,
                                        width: 10,
                                        height: 10,
                                        layout: 'cover',
                                    },
                                    style: {
                                        fill: '#45c946',
                                    },
                                },
                            ],
                        };
                    },
                },
            ],
            xAxis: {
                show: false,
                type: 'value',
            },
            yAxis: {
                show: false,
                type: 'category',
            },
            grid: {
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
            },
        });
    },
};
</script>
<style lang="scss" scoped>
.total-users-footer {
    display: flex;
    align-items: center;
    .month {
        margin-left: 10px;
    }
}
</style>
