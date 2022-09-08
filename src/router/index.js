import Vue from "vue";
import Router from "vue-router";
import routes from "./router";
Vue.use(Router);
let router= new Router({
  routes,
});
// router.beforeEach((to,from,next)=>{
  
// })
export default router