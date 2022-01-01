<template>
    <div class="home">
        <top-view></top-view>
        <sales-view></sales-view>
        <bottom-view></bottom-view>
        <map-view></map-view>
    </div>
</template>

<script>
import TopView from '../components/TopView/TopView';
import SalesView from '../components/SalesView/SalesView';
import BottomView from '../components/BottomView/BottomView';
import MapView from '../components/MapView/MapView';
import { test } from '../api/index';
export default {
    name: 'Home',
    components: {
        TopView,
        SalesView,
        BottomView,
        MapView,
    },
    mounted() {
        test();
    },
    // 使用 provide + inject 进行组件间通信
    provide() {
        return {
            reportData: ['aaaa'],
            wordCloudData: ['aaaa'],
            mapData: ['aaaa'],
        };
    },
};
</script>

<style>
.home {
    width: 100%;
    min-height: 100%;
    background: #eee;
    padding: 20px;
    box-sizing: border-box;
}
</style>
