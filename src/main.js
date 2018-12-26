import Vue from 'vue'

// 引入vue-re
import axios from 'axios'

// Vue.use(axios)
Vue.prototype.$ajax = axios

// 引入moment.js
import moment from 'moment'
// 全局格式化时间
Vue.filter('dataFilter', function (datastr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(datastr).format(pattern)
})

// 引入vuex实现数据的全局使用
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    count: localStorage.getItem("count") || 0,
    car: JSON.parse(localStorage.getItem("car")) || []
  },
  mutations: {
    // 添加数据
    addToCar(state, goodinfo) {
      // console.log(goodinfo.id);
      var flag = false
      state.car.some(item => {
        if (item.id == goodinfo.id) {
          item.count = parseInt(item.count)
          item.count += parseInt(goodinfo.count)
          flag = true
          return true
        }
      })
      if (!flag) {
        state.car.push(goodinfo)
      }
      localStorage.setItem('car', JSON.stringify(state.car))
    },
    addcount(state, cnt) {
      state.count = cnt;
      localStorage.setItem("count", JSON.stringify(state.count))
    },
    updated(state, goodinfo) {
      state.car.some(item => {
        if (item.id == goodinfo.id) {
          item.count = parseInt(goodinfo.count)
          return true
        }
      })
      localStorage.setItem('car', JSON.stringify(state.car))
    },
    remove(state, id) {
      state.car.some((item, i) => {
        if (item.id == id) {
          state.car.splice(i, 1)
          return true
        }
      })
      localStorage.setItem('car', JSON.stringify(state.car))
    }
  },
  getters: {
    getAllcount(state) {
      var c = 0;
      state.car.forEach(item => {
        c += item.count
      })
      return c
    },
    getgoodscount(state) {
      var o = {}
      state.car.forEach(item => {
        o[item.id] = item.count
      })
      return o
    },
    //当在购物车修改数量时

  }
})

// 引入缩略图
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

// 引入公共路由模块
import VueRouter from 'vue-router'

Vue.use(VueRouter)
// 引入全部mint-ui，也可以使用部分代码优化量
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

// 引入mui
import './lib/mui/css/mui.min.css'

import './lib/mui/css/icons-extra.css'


import app from './router/App.vue'
// 引入自己的路由模块
import router from './router/router.js'



const vm = new Vue({
  el: '#app',
  data: {

  },
  render: c => c(app),
  router,
  store
})
