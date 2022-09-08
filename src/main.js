import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from './store/index'
import http from 'axios'
import "element-ui/lib/theme-chalk/index.css";
import { MessageBox,Message,Button, Select,Container, Aside, Main, Header,MenuItem,MenuItemGroup,Menu,Submenu,Dropdown,DropdownMenu,DropdownItem,Row,Card,Col, Table, TableColumn, Breadcrumb, BreadcrumbItem, Tag, Form, FormItem, Input, Switch, DatePicker, Dialog,Option, Pagination } from "element-ui";
import '@/assets/less/index.less'
import '@/assets/less/home.less'
import '@/assets/less/common.less'
import '@/assets/less/reset.less'

import '@/mock/mockServer'
// 引入统一接口
import * as API from '@/api/index'

Vue.config.productionTip = false;
Vue.use(Button);
Vue.use(Select);
Vue.use(Container);
Vue.use(Aside);
Vue.use(Main);
 Vue.use(Header);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(Dropdown),Vue.use(DropdownItem),Vue.use(DropdownMenu),Vue.use(Row),Vue.use(Card),Vue.use(Col);
Vue.use(Table),Vue.use(TableColumn),Vue.use(Breadcrumb),Vue.use(BreadcrumbItem),Vue.use(Tag);
Vue.use(Form),Vue.use(FormItem),Vue.use(Select),Vue.use(Input),Vue.use(Switch),Vue.use(DatePicker),Vue.use(Dialog);
Vue.use(Option),Vue.use(Pagination)

Vue.prototype.$messgae=Message
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$http=http
new Vue({
  router,
  store,
  render: (h) => h(App),
  beforeCreate(){
    Vue.prototype.$bus=this
    Vue.prototype.$API=API
  }
}).$mount("#app");
