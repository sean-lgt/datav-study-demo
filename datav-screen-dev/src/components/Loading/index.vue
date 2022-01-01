<template>
    <div class="loading">
        <svg :width="width"
             :height="height"
             viewBox="0 0 50 50"
             preserveAspectRatio="xMidYMid meet">
            <!-- 
                 stroke-dasharray = 2pi*r/4 = 2*3.1415926 * 20 /4
              -->
            <circle cx="25"
                    cy="25"
                    r="20"
                    fill="transparent"
                    stroke-width="3"
                    stroke-dasharray="31.415, 31.415"
                    stroke-linecap="round"
                    :stroke="outsideColor">
                <animateTransform attributeName="transform"
                                  type="rotate"
                                  values="0, 25 25;360, 25 25"
                                  dur="1.5s"
                                  repeatCount="indefinite" />
                <animate attributeName="stroke"
                         :values="outsideColorAnimation"
                         :dur="`${duration}s`"
                         repeatCount="indefinite" />
            </circle>
            <circle cx="25"
                    cy="25"
                    r="10"
                    fill="transparent"
                    stroke-width="3"
                    stroke-dasharray="15.7, 15.7"
                    stroke-linecap="round"
                    :stroke="insideColor">
                <animateTransform attributeName="transform"
                                  type="rotate"
                                  values="360, 25 25;0, 25 25"
                                  dur="1.5s"
                                  repeatCount="indefinite" />
                <animate attributeName="stroke"
                         :values="insideColorAnimation"
                         :dur="`${duration}s`"
                         repeatCount="indefinite" />
            </circle>
        </svg>
        <div class="loading-tip">
            <slot />
        </div>
    </div>
</template>

<script>
import { computed } from "vue";
export default {
    name: "DataVLoading",
    props: {
        width: {
            type: [Number, String],
            default: 50,
        },
        height: {
            type: [Number, String],
            default: 50,
        },
        outsideColor: {
            type: String,
            default: "#02bcfe",
        },
        insideColor: {
            type: String,
            default: "#3be6cb",
        },
        duration: {
            type: Number,
            default: 3,
        },
    },
    setup(ctx) {
        // 获取传入的颜色设置动画转圈颜色 需要ctx上下文获取props
        const outsideColorAnimation = computed(
            () => `${ctx.outsideColor};${ctx.insideColor};${ctx.outsideColor}`
        );
        const insideColorAnimation = computed(
            () => `${ctx.insideColor};${ctx.outsideColor};${ctx.insideColor}`
        );
        return {
            outsideColorAnimation,
            insideColorAnimation,
        };
    },
};
</script>
<style lang="scss" scoped>
.loading {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .loading-tip {
        font-size: 15px;
    }
}
</style>