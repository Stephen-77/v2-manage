<template>
  <el-container>
    <el-aside>
      <commmon-aside></commmon-aside>
    </el-aside>
    <el-container>
      <el-header>
        <common-header></common-header>
      </el-header>
      <el-main>
        <common-tab></common-tab>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonTab from '@/components/CommonTab.vue';
import CommmonAside from "../components/CommonAside.vue";
import CommonHeader from "../components/CommonHeader.vue";
export default {
  name: "Home",
  components: { CommmonAside, CommonHeader, CommonTab },
};
</script>

<style lang="less" scoped>
.el-container {
  height: 100% !important;
}
.el-header,
.el-footer {
  background-color: #e3ebf4;
  color: #333;
}
.el-aside {
  // width: 201px !important;
  width: auto !important;
}
</style>