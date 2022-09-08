import Home from "../views/Home.vue";
export default [
  {
    path:'/',
    redirect:'/home'
  }
  ,
  {
    name: "home",
    path: "/home",
    component: () => import("@/views/Home"),
  },
  {
    name: "user",
    path: "/user",
    component: () => import("@/views/User"),
  },
  {
    name: "mall",
    path: "/mall",
    component: () => import("@/views/Mall"),
  },
  {
    name:'login',
    path:'/login',
    component:()=>import("@/views/Login")
  }
];
