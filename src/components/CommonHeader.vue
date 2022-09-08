<template>
  <div class="content">
    <div class="l-content">
      <el-button icon="el-icon-menu" size="mini" @click="collapseMenu"></el-button>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item v-for="i,index in tabList" :key="index" :to="{ path: i.path }">{{i.label}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="r-content">
      <el-dropdown size="mini">
        <span>
          <img :src="userimg" alt="" srcset="" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: "CommmonHeader",
  data() {
    return {
      userimg: require("@/assets/images/user.png"),
    };
  },
  computed:{
    ...mapState('tab',['tabList'])
  },
  methods: {
      collapseMenu(){
          this.$bus.$emit('collapse')
      }
  },
};
</script>

<style lang="less" scoped>
.content {
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  .l-content {
    display: flex;
    align-items: center;
    .el-button {
      margin-right: 40px;
    }
  }
  .r-content {
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
  }
}
</style>