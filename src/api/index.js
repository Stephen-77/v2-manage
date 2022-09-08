import requests from "./axios";
import mockRequests from "./mock";

export const mock = () => mockRequests({ url: "/home" });
export const getUser = (params) => mockRequests({ url: "/getuser" ,method:'get',params});
export const deleteUser = (params) => mockRequests({ url: "/deluser" ,method:'post',params});
// export const getMenu=()=>requests({url:'/home',method:'post'})
