<template>
    <div class="fly-box"
         :ref="refName">
        <svg :width="width"
             :height="height">
            <defs>
                <path :id="pathId"
                      :d="path"
                      fill="none"></path>
                <radialGradient :id="radialGradientId"
                                cx="50%"
                                cy="50%"
                                fx="50%"
                                fy="50%"
                                r="50%">
                    <stop offset="0%"
                          stop-color="#fff"
                          stop-opacity="1"></stop>
                    <stop offset="100%"
                          stop-color="#fff"
                          stop-opacity="0"></stop>
                </radialGradient>
                <mask :id="maskId">
                    <circle :r="starLength"
                            cx="0"
                            cy="0"
                            :fill="`url(#${radialGradientId})`">
                        <animateMotion :dur="`${starDuration}s`"
                                       :path="path"
                                       rotate="auto"
                                       repeatCount="indefinite">
                        </animateMotion>
                    </circle>
                </mask>
            </defs>
            <use :href="`#${pathId}`"
                 stroke-width="1"
                 :stroke="lineColor"></use>
            <use :href="`#${pathId}`"
                 stroke-width="3"
                 :stroke="starColor"
                 :mask="`url(#${maskId})`"></use>
        </svg>
        <div class="fly-box-content">
            <slot></slot>
        </div>
    </div>
</template>
<script>
import { ref, onMounted, getCurrentInstance, computed } from "vue";
import { v4 as uuidv4 } from "uuid";
export default {
    name: "FlyBox",
    props: {
        lineColor: {
            type: String,
            default: "#235fa7",
        },
        starColor: {
            type: String,
            default: "#4fd2dd",
        },
        starLength: {
            type: [Number, String],
            default: 50,
        },
        starDuration: {
            type: Number,
            default: 3,
        },
    },
    setup(ctx) {
        const uuid = uuidv4();
        console.log("uuid", uuid);
        // 获取到真实的宽高
        const width = ref(0);
        const height = ref(0);
        const refName = "fly-box";
        // 生成唯一的ID
        const pathId = `${refName}-path-${uuidv4()}`;
        const radialGradientId = `${refName}-gradient-${uuidv4()}`;
        const maskId = `${refName}-mask-${uuidv4()}`;

        const path = computed(
            () =>
                `M5 5 L${width.value - 5} 5 L${width.value - 5} ${
                    height.value - 5
                } L5 ${height.value - 5} Z`
        );

        const init = () => {
            const instance = getCurrentInstance(); //获取组件实例
            const dom = instance.ctx.$refs[refName]; //拿到dom元素 获取宽高
            width.value = dom.clientWidth;
            height.value = dom.clientHeight;
            console.log("dom", dom);
        };

        onMounted(() => {
            init();
        });

        return {
            width,
            height,
            refName,
            path,
            pathId,
            radialGradientId,
            maskId,
        };
    },
};
</script>
<style lang="scss" scoped>
.fly-box {
    position: relative;
    width: 100%;
    height: 100%;
    svg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .fly-box-content {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding: 5px;
    }
}
</style>
