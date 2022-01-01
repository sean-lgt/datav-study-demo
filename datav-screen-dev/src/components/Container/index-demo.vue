<template>
    <div id="imooc-screen-container"
         :ref="refName">
        <template v-if="ready">
            <slot></slot>

        </template>
        <!-- sdausdfhaihfdisah -->
    </div>
</template>
<script>
import { ref, getCurrentInstance, onMounted, onUnmounted, nextTick } from "vue";
import { debounce } from "./util/index.js";
export default {
    name: "DvFullScreenContainer",
    props: {
        options: Object,
    },
    setup(ctx) {
        const refName = "imoocContainer";
        const width = ref(0); //设计稿的宽度
        const height = ref(0); // 设计稿的高度
        const originalWidth = ref(0); // 屏幕视口的宽度
        const originalHeight = ref(0); // 屏幕视口的高度
        const ready = ref(false);
        let context;
        let dom;

        const initSize = () => {
            return new Promise((resolve) => {
                nextTick(() => {
                    dom = context.$refs[refName];
                    // 获取大屏的真实尺寸
                    if (
                        ctx.options &&
                        ctx.options.width &&
                        ctx.options.height
                    ) {
                        width.value = ctx.options.width;
                        height.value = ctx.options.height;
                    } else {
                        width.value = dom.clientWidth;
                        height.value = dom.clientHeight;
                    }
                    // 获取画布尺寸（屏幕）
                    if (!originalWidth.value || !originalHeight.value) {
                        originalWidth.value = window.screen.width;
                        originalHeight.value = window.screen.height;
                    }

                    console.log(
                        `【init】设计稿宽度：${width.value};设计稿高度：${height.value};画布区域宽度：${originalWidth.value};画布区域高度：${originalHeight.value}`
                    );
                    resolve();
                });
            });
        };

        const updateSize = () => {
            if (width.value && height.value) {
                dom.style.width = `${width.value}px`;
                dom.style.height = `${height.value}px`;
            } else {
                dom.style.width = `${originalWidth.value}px`;
                dom.style.height = `${originalHeight.value}px`;
            }
        };

        const updateScale = () => {
            // 获取真实的视口尺寸
            const currentWidth = document.body.clientWidth;
            const currentHeight = document.body.clientHeight;
            // 获取大屏最终的宽高
            const realWidth = width.value || originalWidth.value;
            const realHeight = width.value || originalHeight.value;
            const widthScale = currentWidth / realWidth;
            const heightScale = currentHeight / realHeight;
            dom.style.transform = `scale(${widthScale},${heightScale})`;
        };

        const onResize = async () => {
            await initSize();
            updateScale();
        };

        onMounted(async () => {
            ready.value = false;
            context = getCurrentInstance().ctx;
            await initSize();
            updateSize();
            updateScale();
            window.addEventListener("resize", onResize);
            ready.value = true;
            // window.addEventListener("resize", debounce(100, onResize));
        });
        onUnmounted(() => {
            // 销毁事件的监听
            window.removeEventListener("resize", onResize);
        });
        console.log("获取vue的实例", require("vue"));

        return {
            refName,
            initSize,
            updateSize,
            updateScale,
            onResize,
            ready,
        };
    },
};
</script>

<style lang="scss" scoped>
#imooc-screen-container {
    position: fixed;
    top: 0;
    left: 0;
    overflow: hidden;
    transform-origin: left top; //画布置于可视区域
    z-index: 999;
}
</style>