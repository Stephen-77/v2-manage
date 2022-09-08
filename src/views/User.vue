<template>
  <div class="message">
    <el-dialog
      :title="operateType == 'add' ? '新增用户' : '更新用户'"
      :visible.sync="ishow"
    >
      <common-form
        :formLabel="operateFormLabel"
        :form="operateForm"
        :inline="true"
      ></common-form>
      <div class="dialog-footer" slot="footer">
        <el-button @click="ishow = false">取消</el-button>
        <el-button type="primary" @click="confirm">确定</el-button>
      </div>
    </el-dialog>
    <div class="message-header">
      <el-button type="primary" @click="addUser">新增用户</el-button>
       <!-- <common-form
        :formLabel="formLabel"
        :form="searchForm"
        :inline="true"
        class="search"
      >
      </common-form> -->
      <el-input v-model="searchForm[0].keyword" placeholder="请输入"></el-input>
      <el-button type="primary" @click="getList">搜索</el-button>
    </div>
    <common-table :tableData="tableData" :tableLabel="tableLabel" :config="config"
      @changPage="getList" @edit="editUser" @del="delUser"
    ></common-table>
  </div>
</template>

<script>
import CommonForm from "@/components/CommonForm.vue";
import CommonTable from '@/components/CommonTable.vue';
export default {
  components: { CommonForm, CommonTable },
  name: "User",
  data() {
    return {
      operateType: "add",
      ishow: false,
      operateFormLabel: [
        {
          model: "name",
          label: "姓名",
          type: "input",
        },
        {
          model: "age",
          label: "年龄",
          type: "input",
        },
        {
          model: "sex",
          label: "性别",
          type: "select",
          opts: [
            {
              label: "男",
              value: 1,
            },
            {
              label: "女",
              value: 0,
            },
          ],
        },
        {
          model: "birth",
          label: "出生日期",
          type: "date",
        },
        {
          model: "addr",
          label: "地址",
          type: "input",
        },
      ],
      operateForm: {
        name: "",
        addr: "",
        age: "",
        birth: "",
        sex: "",
      },
      formLabel:[
        {
          model:'keyword',
          label:'',
          type:'input'
        }
      ],
      searchForm:[{
        keyword:''
      }],
      tableData:[],
      tableLabel:[{
        prop:'name',
        label:'姓名'
      },
      {
        prop:'age',
        label:'年龄'
      },{
        prop:'sexlabel',
        label:'性别'
      }
      ,{
        prop:'birth',
        label:'生日'
      }
      ,{
        prop:'addr',
        label:'地址'
      }
      ],
      config:
        {
          page:1,
          total:30
        }
      
    };
  },
  methods: {
    confirm() {},
    async getList(name=''){
      this.config.loading=true
      name?(this.config.page=1):''

      // const params={name:'zs'}
      // {name,page:this.config.page}
      const result=await this.$API.getUser()
      this.tableData=result.list.map(item =>{item.sexlabel=item.sex==0?'女':'男';return item})
      this.config.total=result.count
      this.config.loading=false
      console.log(this.tableData);
      console.log(result);
    },
    addUser(){
      this.ishow=true
      this.operateType='add'
      this.operateForm={
        name: "",
        addr: "",
        age: "",
        birth: "",
        sex: "",
      }
    },
    editUser(row){
      this.ishow=true
      this.operateType='edit'
      this.operateForm=row
    },
    delUser(row){
      this.$confirm('此操作将永久删除此文件！继续吗？','提示',{
        confirmButtonText:'确认',
        cancelButtonText:'取消',
        type:'warning'
      }).then(()=>{
        const id=row.id
        const res=this.$API.deleteUser({id})
        console.log(res);
        if(res.code==2000){
          this.$message({
            type:'success',
            message:'删除成功'
          })
          this.getList()
        }
      })
    }
  },
  mounted(){
    this.getList()
    // console.log(this.tableData);
  }
};
</script>
<style lang="less" scoped>
.message{
  .message-header{
    display: flex;
    justify-items: space-between;
    align-items: center;
    
  }
}
</style>