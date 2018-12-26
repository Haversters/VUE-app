// 引入axios
import axios from 'axios'

// 创建新的axios实例
var $http
// 配置请求地址
$http = axios.create({
    baseURL: 'http://127.0.0.1'
})

// 添加请求拦截器
$http.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  //设置公有token
  $http.defaults.headers.common['H-TOKEN'] = '我的tokey'
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
$http.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  // 如果是错误返回  这里可以统一抛出错误
  return response;
}, function (error) {
  // 对响应错误做点什么
  // 异常处理
  return Promise.reject(error);
});
//导出$http
export default $http
