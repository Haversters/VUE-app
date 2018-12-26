<template>
  <div>
    <div class="mui-card" v-for="(item,i) in carlist" :key="item.id">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <mt-switch v-model="flag" @change="getflag"></mt-switch>
          <img
            src="https://ss0.baidu.com/73F1bjeh1BF3odCf/it/u=857899011,2604383956&fm=85&s=6612C22B28614611F0A8FFF70300C025"
            alt
          >
          <div class="right">
            <h4>苹果味的迪丽热巴</h4>
            <div>
              <span>￥{{item.price}}</span>
              <div class="mui-numbox" data-numbox-min="1" data-numbox-max="100">
                <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
                <input
                  :id="item.id"
                  class="mui-input-numbox"
                  type="number"
                  @change="countChanged"
                  :value="item.count"
                  ref="numbox"
                >
                <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
              </div>
              <a href="#" @click.prevent="remove(item.id,i)">删除</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 结算区域 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <div>
            <p>总计(不含运费)</p>
            <p>
              已勾选商品
              <span class="red">{{count}}</span>件,总价
              <span class="red">{{money}}</span>
            </p>
          </div>
          <div>
            <mt-button type="danger">去结算</mt-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mui from "../../lib/mui/js/mui.js";
import numbox from "../subcomponents/carnumbox";
export default {
  mounted() {
    // 初始化数字选择框组件
    mui(".mui-numbox").numbox();
  },
  data() {
    return {
      flag: true,
      count: 0,
      money: 0,
      carlist: JSON.parse(localStorage.getItem("car"))
    };
  },
  created() {
    this.getflagg();
  },
  methods: {
    //获取开关按钮的状态
    getflag() {
      if (this.flag) {
        this.count = this.carlist[0].count;
        this.money = this.count * this.carlist[0].price;
        return true;
      } else {
        this.count = 0;
        this.money = this.count * this.carlist[0].price;
      }
    },
    getflagg() {
      if (this.flag) {
        this.count = this.carlist[0].count;
        this.money = this.count * this.carlist[0].price;
        return true;
      }
    },
    //获取id对象
    // getcarlist() {
    //   var c = JSON.parse(localStorage.getItem("car"));
    //   console.log(c, 123);
    // },
    // 设置默认值
    // setiptval() {
    //   console.log(this.carlist);
    // },
    countChanged() {
      var cnt = this.$refs.numbox[0].value;
      var cnd = this.$refs.numbox[0].id;
      var car = JSON.parse(localStorage.getItem("car"));
      // console.log(car, cnd);
      car.some(item => {
        item.id = parseInt(item.id);
        if (item.id == cnd) {
          item.count = parseInt(cnt);
        }
      });

      this.$store.commit("updated", {
        id: cnd,
        count: cnt
      });
      if (this.flag) {
        this.count = JSON.parse(localStorage.getItem("car"))[0].count;
        this.money = JSON.parse(localStorage.getItem("car"))[0].price;
      } else {
        this.count = 0;
        this.money = JSON.parse(localStorage.getItem("car"))[0].count * JSON.parse(localStorage.getItem("car"))[0].price;
      }
    },
    remove(id, index) {
      this.carlist.splice(index, 1);
      this.$store.commit("remove", id);
    }
  }
  // components:{
  //   numbox
  // }
};
</script>

<style  scoped>
.mui-card-content-inner {
  background-color: aqua;
  display: flex;
  justify-content: space-between;
}
.right {
  text-align: center;
}
img {
  height: 70px;
  width: 70px;
  background-color: pink;
}
</style>