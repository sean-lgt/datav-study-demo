<!--
 * @Author: your name
 * @Date: 2021-10-07 16:30:21
 * @LastEditTime: 2021-10-07 19:28:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \data-screen-study\imooc-datav-report-dev\src\components\WordCloud\WordCloud.vue
-->
<template>
    <!-- <div>1111</div> -->
    <ve-wordcloud :data="chartData"
                  height="100%"
                  :settings="chartSettings" />
    <!-- <div id="container"></div> -->

</template>
<script>
import 'echarts-wordcloud';
export default {
    data() {
        return {
            chartData: {
                columns: ['name', 'value'],
                rows: [
                    {
                        name: '慕课网',
                        value: '10',
                    },
                    {
                        name: '慕课网1',
                        value: '20',
                    },
                    {
                        name: '慕课网2',
                        value: '50',
                    },
                    {
                        name: '慕课网7',
                        value: '100',
                    },
                    {
                        name: '国足',
                        value: '200',
                    },
                    {
                        name: '长津湖',
                        value: '100',
                    },
                    {
                        name: '顶楼',
                        value: '90',
                    },
                ],
            },
            chartSettings: {
                color: [
                    'rgba(97,216,0,.7)',
                    'rgba(204,178,26,.7)',
                    'rgba(245,166,35,.7)',
                    'rgba(156,13,113,.7)',
                ],
            },
        };
    },
    // mounted() {
    //     const data = [0.68, 0.54, 0.2];
    //     const chart = this.$echarts.init(document.getElementById('container'));
    //     chart.setOption({
    //         series: [
    //             {
    //                 type: 'wordCloud',

    //                 // The shape of the "cloud" to draw. Can be any polar equation represented as a
    //                 // callback function, or a keyword present. Available presents are circle (default),
    //                 // cardioid (apple or heart shape curve, the most known polar equation), diamond (
    //                 // alias of square), triangle-forward, triangle, (alias of triangle-upright, pentagon, and star.

    //                 shape: 'circle',

    //                 // A silhouette image which the white area will be excluded from drawing texts.
    //                 // The shape option will continue to apply as the shape of the cloud to grow.

    //                 // maskImage: maskImage,

    //                 // Folllowing left/top/width/height/right/bottom are used for positioning the word cloud
    //                 // Default to be put in the center and has 75% x 80% size.

    //                 left: 'center',
    //                 top: 'center',
    //                 width: '70%',
    //                 height: '80%',
    //                 right: null,
    //                 bottom: null,

    //                 // Text size range which the value in data will be mapped to.
    //                 // Default to have minimum 12px and maximum 60px size.

    //                 sizeRange: [12, 60],

    //                 // Text rotation range and step in degree. Text will be rotated randomly in range [-90, 90] by rotationStep 45

    //                 rotationRange: [-90, 90],
    //                 rotationStep: 45,

    //                 // size of the grid in pixels for marking the availability of the canvas
    //                 // the larger the grid size, the bigger the gap between words.

    //                 gridSize: 8,

    //                 // set to true to allow word being draw partly outside of the canvas.
    //                 // Allow word bigger than the size of the canvas to be drawn
    //                 drawOutOfBound: false,

    //                 // If perform layout animation.
    //                 // NOTE disable it will lead to UI blocking when there is lots of words.
    //                 layoutAnimation: true,

    //                 // Global text style
    //                 textStyle: {
    //                     fontFamily: 'sans-serif',
    //                     fontWeight: 'bold',
    //                     // Color can be a callback function or a color string
    //                     color: function () {
    //                         // Random color
    //                         return (
    //                             'rgb(' +
    //                             [
    //                                 Math.round(Math.random() * 160),
    //                                 Math.round(Math.random() * 160),
    //                                 Math.round(Math.random() * 160),
    //                             ].join(',') +
    //                             ')'
    //                         );
    //                     },
    //                 },
    //                 emphasis: {
    //                     focus: 'self',

    //                     textStyle: {
    //                         textShadowBlur: 10,
    //                         textShadowColor: '#333',
    //                     },
    //                 },

    //                 // Data is an array. Each array item must have name and value property.
    //                 data: [
    //                     {
    //                         name: 'Farrah Abraham',
    //                         value: 366,
    //                         // Style of single text
    //                         textStyle: {},
    //                     },
    //                 ],
    //             },
    //         ],
    //     });
    // },
};
</script>
<style lang="scss" scoped>
#container {
    width: 200px;
    height: 200px;
}
</style>