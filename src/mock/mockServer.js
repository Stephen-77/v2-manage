import Mock from "mockjs";
import home from "./home.json";
// import user from './user.json'
import user from './user'
Mock.mock("/mock/home", { code: 200, data: home });
Mock.mock("/mock/getuser",user.getUserList);
Mock.mock("/mock/deluser",'post',user.deleteUser);

