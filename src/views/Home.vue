<template>
  <el-row class="home" :gutter="24">
    <el-col :span="9">
      <el-card shadow="hover">
        <div class="user">
          <img :src="userimg" alt="" />
          <div class="userinfo">
            <p class="name">admin</p>
            <p class="access">超级管理员</p>
          </div>
        </div>
        <div class="login-info">
          <p>上次登录时间<span>2022年5月21日</span></p>
        </div>
      </el-card>
      <el-card style="margin-top: 20px" shadow="hover">
        <el-table :data="tableData">
          <el-table-column
            v-for="(i, index) in tablelabel"
            :key="i"
            :prop="index"
            :label="i"
          ></el-table-column>
        </el-table>
      </el-card>
    </el-col>
    <el-col :span="15">
      <div class="num">
        <el-card
          v-for="(i, index) in countData"
          :key="index"
          :body-style="{ display: 'flex', padding: 0 }"
          shadow="hover"
        >
          <i
            class="icon"
            :class="`el-icon-${i.icon}`"
            :style="{ background: i.color }"
          ></i>
          <div class="detail">
            <p class="num">{{ i.value }}</p>
            <p class="txt">{{ i.name }}</p>
          </div>
        </el-card>
      </div>
      <el-card> </el-card>
      <div class="graph">
        <el-card
          style="height: 280px"
          id="userecharts"
          ref="userEcharts"
        ></el-card>
        <el-card id="videoecharts"></el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import * as echarts from "echarts";

import { mapActions } from "vuex";
export default {
  name: "Home",
  data() {
    return {
      userimg: require("@/assets/images/user.png"),
      tableData: [
        {
          name: "oppo",
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800,
        },
        {
          name: "vivo",
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800,
        },
        {
          name: "苹果",
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800,
        },
        {
          name: "小米",
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800,
        },
        {
          name: "三星",
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800,
        },
        {
          name: "魅族",
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800,
        },
      ],
      tablelabel: {
        name: "课程",
        todayBuy: "今日购买",
        monthBuy: "本月购买",
        totalBuy: "总共购买",
      },
      countData: [
        {
          name: "今日支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "今日收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "今日未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
        {
          name: "本月支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "本月收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "本月未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
      ],
    };
  },
  computed: {
    // ...mapActions('tab',[])
  },
  methods: {
    async getMenu() {
      let result = await this.$API.mock();
      if (result.code == 200) {
        // console.log(result.data[0].userData);
        const userData = result.data[0].userData;
        const videoData = result.data[0].videoData;
        console.log(videoData);
        console.log(userData.map((item) => item.date));
        const userOption = {
          legend: {
            // 图例文字颜色
            textStyle: {
              color: "#333",
            },
          },
          grid: {
            left: "20%",
          },
          // 提示框
          tooltip: {
            trigger: "axis",
          },
          xAxis: {
            type: "category", // 类目轴
            data: userData.map((item) => item.date),
            axisLine: {
              lineStyle: {
                color: "#17b3a3",
              },
            },
            axisLabel: {
              interval: 0,
              color: "#333",
            },
          },
          yAxis: [
            {
              type: "value",
              axisLine: {
                lineStyle: {
                  color: "#17b3a3",
                },
              },
            },
          ],
          color: ["#2ec7c9", "#b6a2de"],
          series: [
            {
              name: "新增用户",
              data: userData.map((item) => item.new),
              type: "bar",
            },
            {
              name: "活跃用户",
              data: userData.map((item) => item.active),
              type: "bar",
            },
          ],
        };
        const u = echarts.init(document.getElementById("userecharts"));
        u.setOption(userOption);
        const videoOption={
          tooltip: {
            trigger: "item",
          },
          color: [
            "#0f78f4",
            "#dd536b",
            "#9462e5",
            "#a6a6a6",
            "#e1bb22",
            "#39c362",
            "#3ed1cf",
          ],
          series: [
            {
              name:'饼状图',
              data:videoData,
              type:'pie'
            }
          ],
        }
        const v=echarts.init(document.getElementById('videoecharts'))
        v.setOption(videoOption)
      }
    },
  },
  mounted() {
    this.getMenu();
  },
};
</script>

<style>
</style>