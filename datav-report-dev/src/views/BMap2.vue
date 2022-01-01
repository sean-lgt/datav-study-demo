<!--
 * @Author: your name
 * @Date: 2021-10-07 14:39:37
 * @LastEditTime: 2021-10-07 15:43:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \data-screen-study\imooc-datav-report-dev\src\views\BMap2.vue
-->
<template>
    <div>
        <ve-map :data="chartData"></ve-map>
    </div>
</template>

<script>
export default {
    data() {
        return {
            chartData: {
                columns: ['位置', '税收'],
                rows: [
                    {
                        位置: '上海',
                        税收: 123,
                    },
                    {
                        位置: '北京',
                        税收: 466,
                    },
                ],
            },
        };
    },
};
</script>
<style lang="scss" scoped>
</style>