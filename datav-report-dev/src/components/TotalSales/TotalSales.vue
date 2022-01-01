<!--
 * @Author: your name
 * @Date: 2021-09-25 11:11:01
 * @LastEditTime: 2021-10-07 20:15:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \data-screen-study\imooc-datav-report-dev\src\components\TotalSales\TotalSales.vue
-->
<template>
    <common-card title="累计销售额"
                 value="2222">
        <template>
            <div class="compare-wrapper">
                <div class="compare">
                    <span>日同比</span>
                    <span class="emphasis">7.33%</span>
                    <div class="increase"></div>
                </div>
                <div class="compare">
                    <span>月同比</span>
                    <span class="emphasis">37.32%</span>
                    <div class="decrease"></div>
                </div>
            </div>
        </template>
        <template v-slot:footer>
            <span>昨日销售额 </span>
            <span class="emphasis">￥ 300,300,300</span>
        </template>
    </common-card>
</template>
<script>
import commonCardMixin from '../../utils/mixins/commonCardMixin';
export default {
    mixins: [commonCardMixin],
    // 接收上层组件的数据
    inject: ['reportData'],
    mounted() {
        console.log('【接收上层组件数据】', this.reportData);
    },
};
</script>
<style lang="scss" scoped>
.compare-wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.compare {
    // height: 50%;
    margin-top: 3px;
    // background: yellow;
    font-size: 12px;
    color: #333;
    display: flex;
    align-items: center;
}
</style>
