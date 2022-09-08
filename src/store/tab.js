import {gethome} from '@/api/index'
const actions={
    
}
const mutations={
   selectMenu(state,val){
      if(val.name!=='home'){
         state.currentMenu=val
         const result=state.tabList.findIndex(item=>item.name==val.name)
         if(result==-1){
            state.tabList.push(val)
         }
         else{
            state.currentMenu=null
         }
      }
   },
   closeTag(state,val){
      // const result=state.tabList.findIndex(item=>item.name==val.name)
      // console.log(result);
      // if(result!=-1){
      //    state.tabList.splice()
      // }
      state.tabList.splice(val,1)
   }
}
const state={
   tabList:[
      {
         name:'home',
         path:'/home',
         icon:'home',
         label:'首页'
      }
   ],
   currentMenu:[]
}
export default {
   namespaced:true,
   actions,
   state,
   mutations
}