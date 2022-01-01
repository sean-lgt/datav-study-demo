<!--
 * @Description: 
 * @Author: lgt
 * @Date: 2021-09-25 10:13:02
 * @LastEditTime: 2021-09-25 11:17:33
 * @LastEditors: Please set LastEditors
-->
<template>
    <div class="top-view">
        <el-row :gutter="20">
            <el-col :span="6">
                <el-card shadow="hover">
                    <total-sales></total-sales>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card shadow="hover">
                    <total-orders></total-orders>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card shadow="hover">
                    <today-user></today-user>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card shadow="hover">
                    <total-users></total-users>
                </el-card>
            </el-col>
        </el-row>
    </div>

</template>

<script>
import TodayUser from '../TodayUser/TodayUser.vue';
import TotalOrders from '../TotalOrders/TotalOrders.vue';
import TotalSales from '../TotalSales/TotalSales.vue';
import TotalUsers from '../TotalUsers/TotalUsers.vue';
export default {
    components: { TotalSales, TotalOrders, TodayUser, TotalUsers },
};
</script>

<style lang="scss" scoped>
</style>