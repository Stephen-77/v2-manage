<template>
  <div class="tabs">
      <el-tag v-for="item,index in tabList" :key="item.path" :closable="item.name!=='home'" :effect="item.name==$route.name?'dark':'plain'" type="small" @click="changeMenu(item)" @close="handlerClose(item,index)">{{item.label}}</el-tag>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
    name:'CommomTab',
    computed:{
        ...mapState('tab',['tabList'])
    },
    methods: {
        ...mapMutations('tab',['closeTag']),
      changeMenu(item){
          this.$router.push({
              name:item.name
          })
      }  ,
      handlerClose(item,index){
          const length=this.tabList.length-1
          if(this.$route.name!=item.name){
              this.closeTag(index)
              return;
          }
          if(length==index){
            this.closeTag(index)

              this.$router.push({
                  name:this.tabList[index-1].name
              })
          }
          else{
               
          }
      }
    },
}
</script>
<style lang="less" scoped>
.el-tag{
    margin-right: 10px;
    cursor: pointer;
}
</style>