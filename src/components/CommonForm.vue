<template>
  <!--是否行内表单-->
  <el-form ref="form" label-width="100px">
    <!--标签显示名称-->
    <el-form-item v-for="item in formLabel" :key="item.label" :label="item.label">
      <!--根据type来显示是什么标签-->
      <el-input
        :placeholder="'请输入' + item.label"
        v-if="item.type === 'input'"
        v-model="form[item.model]"
      ></el-input>
      <el-switch v-if="item.type === 'switch'" v-model="form[item.model]"></el-switch>
      <el-date-picker
        type="date"
        placeholder="选择日期"
        v-if="item.type === 'date'"
        value-format="yyyy-MM-dd"
        v-model="form[item.model]"
      >
      </el-date-picker>
      <el-select  placeholder="请选择" v-if="item.type === 'select'" v-model="form[item.model]">
          <!--如果是select或者checkbox 、Radio就还需要选项信息-->
        <el-option v-for="i in item.opts" :key="i.value" :label="i.label" :value="i.value"></el-option>
    </el-select>
    </el-form-item>
    <el-form-item><slot></slot></el-form-item>
  </el-form>
</template>

<script>
export default {
    name:'CommonForm',
    props:['formLabel','form','inline'],
    data() {
        return {
            
        }
    },
}
</script>

<style lang="less" scoped>

</style>