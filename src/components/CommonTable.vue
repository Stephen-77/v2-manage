<template>
  <div class="common-table">
      <el-table :data="tableData" stripe>
        <el-table-column v-for="item in tableLabel" :key="item.prop" :prop="item.prop" :label="item.label" show-overflow-tooltip>
            <template slot-scope="scope">
                <span style="margin-left:15px">{{scope.row[item.prop]}}</span>
            </template>
        </el-table-column>
        <el-table-column label="操作" min-width="180">
            <template slot-scope="scope">
                <el-button type="" size="mini" @click="handleEdit(scope.row)">编辑</el-button>
                <el-button type="danger" size="mini" @click="handleDelete(scope.row)">删除</el-button>
            </template>
            
        </el-table-column>
      </el-table>
    <el-pagination
        layout="prev, pager, next"
        :total="config.total"
        class="pager"
        :current-page.sync="config.page"
        :page-size="20"
        >
    </el-pagination>
  </div>
</template>

<script>
export default {
    name:'CommonTable',
    props:['tableData','tableLabel','config'],
    data() {
        return {
            
        }
    },
    methods: {
        handleEdit(row){
            this.$emit('edit',row)
        },
        handleDelete(row){
            this.$emit('del',row)
        },
        changepage(page){
            this.$emit('changePage',page)
        }
    },
}
</script>
<style lang="less" scoped>
.common-table{

    height: calc(100%-62px);
    position: relative;
    background: #fff;
    .el-table{
        padding-bottom: 30px;
    }
    .pager{
        position: absolute;
        bottom: 0;
        right: 0;
        margin-right: 20px;
    }
}
</style>