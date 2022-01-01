<!--
 * @Author: your name
 * @Date: 2021-10-07 16:29:12
 * @LastEditTime: 2021-10-07 17:34:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \data-screen-study\imooc-datav-report-dev\src\components\LiquidFill\LiquidFill.vue
-->
<template>
    <ve-liquidfill :data="chartData"
                   height="100%"
                   :settings="chartSettings"></ve-liquidfill>
</template>
<script>
function getColor(value) {
    return value > 0 && value <= 0.5
        ? 'rgba(97,216,0,.7)'
        : value > 0.5 && value <= 0.8
        ? 'rgba(204,178,26,.7)'
        : value > 0.8
        ? 'rgba(241,47,28,.7)'
        : '#c7c7cb';
}
export default {
    data() {
        return {
            chartData: {
                columns: ['title', 'percent'],
                rows: [
                    {
                        title: 'rate',
                        percent: 0.48,
                    },
                ],
            },
            chartSettings: {},
        };
    },

    mounted() {
        this.chartSettings = {
            seriesMap: {
                rate: {
                    radius: '80%',
                    label: {
                        formatter: (v) => {
                            return `${(v.data.value * 100).toFixed(2)}%`;
                        },
                        textStyle: {
                            fontSize: 36,
                            color: '#999',
                            fontWeight: 'normal',
                        },
                        position: ['50%', '50%'],
                        insideColor: '#fff',
                    },
                    outline: {
                        itemStyle: {
                            borderColor: '#aaa4a4',
                            borderWidth: 1,
                            color: 'none',
                            shadowBlur: 0,
                            shadowColor: '#fff',
                        },
                        borderDistance: 0,
                    },
                    backgroundStyle: {
                        color: '#fff',
                    },
                    itemStyle: {
                        shadowBlur: 0,
                        shadowColor: '#fff',
                    },
                    amplitude: 8,
                    color: [getColor(this.chartData.rows[0].percent)],
                },
            },
        };
    },
};
</script>
<style lang="scss" scoped>
</style>