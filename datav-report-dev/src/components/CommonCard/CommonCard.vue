<!--
 * @Author: your name
 * @Date: 2021-09-25 11:07:53
 * @LastEditTime: 2021-09-25 13:01:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \data-screen-study\imooc-datav-report-dev\src\components\CommonCard\CommonCard.vue
-->
<template>
    <div class="common-card">
        <div class="title">{{title}}</div>
        <div class="value">￥ {{value}}</div>
        <div class="chart">
            <slot></slot>
        </div>
        <div class="line"></div>
        <div class="total">
            <slot name="footer"></slot>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        title: String,
        value: String,
    },
};
</script>

<style lang="scss">
.emphasis {
    margin-left: 5px;
    color: #333;
    font-weight: 700;
    font-size: 12px;
}
// 三角形
.increase {
    width: 0;
    height: 0;
    border-width: 3px;
    border-color: transparent transparent red transparent;
    border-style: solid;
    margin: 0 0 3px 5px;
}
.decrease {
    width: 0;
    height: 0;
    border-width: 3px;
    border-color: green transparent transparent transparent;
    border-style: solid;
    margin: 3px 0 0 5px;
}
</style>
<style lang="scss" scoped>
.title {
    font-size: 12rpx;
    color: #999;
}
.value {
    font-size: 25px;
    color: #000;
    margin-top: 5px;
    letter-spacing: 1px;
}
.chart {
    height: 50px;
    // background: red;
}
.line {
    margin: 10px 0;
    border-top: 1px solid #eee;
}
.total {
    color: #666;
    font-size: 12px;
}
</style>