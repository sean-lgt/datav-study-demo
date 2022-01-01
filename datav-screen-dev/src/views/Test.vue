<!--
 * @Author: your name
 * @Date: 2021-10-15 22:35:33
 * @LastEditTime: 2021-10-16 23:18:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \imooc-datav-screen-dev\src\views\Test.vue
-->
<template>
    <div class="test"
         @click="increment">{{state.count}}</div>
    <div>doublecount:{{doubleCount}}</div>
</template>

<script>
import {
    reactive,
    watchEffect,
    computed,
    watch,
    onMounted,
    ref,
    getCurrentInstance,
} from "vue";

// 使用 vuex
import { useStore } from "vuex";

export default {
    // console.log("")
    setup() {
        // 类似 react hooks 中的 useState
        const state = reactive({
            count: 1,
        });
        const increment = () => {
            state.count++;
        };
        // 计算属性
        const doubleCount = computed(() => state.count * 2);
        // 监听
        watch(
            () => state.count,
            () => {
                console.log("state.conunt change", state.count);
            }
        );
        // 生命周期函数
        onMounted(() => {
            console.log("组件被挂载到页面上");
            console.log("【当前组件实例信息】", getCurrentInstance());
            const { ctx } = getCurrentInstance();
            console.log("【当前的路由】", ctx.$router);
            console.log("【使用vuex】", number.value);
            updateNumberByAction();
            // updateNumber();
        });
        // 类似 react hooks 中的 useEffect
        watchEffect(() => {
            // document.body.innerHTML = `count:${state.count}`;
            // document.body.addEventListener("click", increment);
        });

        // 使用 vuex
        const store = useStore();
        const number = computed(() => store.state.number);
        const updateNumber = () => {
            store.commit("SET_NUMBER", 4);
        };
        const updateNumberByAction = () => {
            store.dispatch("setNumber", 400);
        };
        return {
            state,
            increment,
            doubleCount,
        };
    },
};
</script>

<style lang="scss" scoped>
.test {
    color: red;
}
</style>
