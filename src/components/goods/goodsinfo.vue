<template>
  <div>
    <!-- <button @click="getgoodid">获取id</button> -->
    <!-- 第一个框 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <mt-swipe :auto="5000">
          <mt-swipe-item class="swiper" v-for="item in lunbotu" :key="item.src">
            <img :src="item.src" alt>
          </mt-swipe-item>
          <!-- <mt-swipe-item class="swiper">
            <img src="http://img2.imgtn.bdimg.com/it/u=1437331062,2041796822&fm=26&gp=0.jpg" alt>
          </mt-swipe-item>
          <mt-swipe-item class="swiper">
            <img
              src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2700119383,2812317980&fm=27&gp=0.jpg"
              alt
            >
          </mt-swipe-item>-->
        </mt-swipe>
      </div>
    </div>
    <!-- 中间框 -->
    <div class="mui-card middleBox">
      <div class="mui-card-header">苹果官网4s 32G全网通</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <div>
            <p>
              <span>
                市场价：
                <del>￥2699</del>
              </span>
              销售价:
              <span class="red">￥2199</span>
            </p>
          </div>
          <div>
            <span>购买数量：</span>
            <numbox></numbox>
          </div>
          <div>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small" @click="addtoshopcar">加入购物车</mt-button>
          </div>
        </div>
      </div>
    </div>
    <!-- 最下面 -->
    <div class="mui-card bottombox">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>
            商品货号：
            <span>SD2932214404</span>
          </p>
          <p>
            商品货号：
            <span>60件</span>
          </p>
          <p>
            上架时间：
            <span>2015-04-20 01:19:30</span>
          </p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" @click="godesc(1)">图文介绍</mt-button>
        <mt-button type="danger" size="large" plain @click="gocomment">商品评论</mt-button>
      </div>
    </div>
  </div>
</template>
<script>
import numBox from "../subcomponents/numbox.vue";
import axios from "axios";
export default {
  data() {
    return {
      id: this.$route.query.id,
      goodinfo: {},
      lunbotu: [
        {
          src:
            "http://img2.imgtn.bdimg.com/it/u=1437331062,2041796822&fm=26&gp=0.jpg"
        },
        {
          src:
            "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2700119383,2812317980&fm=27&gp=0.jpg"
        }
      ],
      count: 1
    };
  },
  mounted() {
    // this.getgoodinfo();
    // this.getlocationstorge();
  },
  methods: {
    getgoodinfo() {
      const _this = this;
      axios
        .get("/goodinfo/2")
        .then(function(response) {
          _this.goodinfo = response.body.message[0];
        })
        .catch(function(error) {
          console.log(error);
        });
      // console.log(this.$route.query.id);
    },
    getgoodid() {
      // console.log(this.$route.query);
    },
    godesc(id) {
      this.$router.push({ path: "/home/gooddesc/", query: { id: 1 } });
    },
    gocomment() {
      this.$router.push({ path: "/home/goodcomment", query: { id: "2" } });
    },
    // 使用store
    addtoshopcar() {
      const goodinfo = {
        id: this.$route.query.id,
        count: parseInt(this.$store.state.count),
        price: 2399,
        select: true
      };
      this.$store.commit("addToCar", goodinfo);
    },
    // 自动获取locationstorge里面存储的数据
    // getlocationstorge() {
    //   // var locationcar = localStorage.getItem("car");
    //   // console.log(locationcar);
    //   // console.log(this.$store.state.car);
    //   // this.$store.commit("updatecar", locationcar);
    //   // localStorage.setItem("car",locationcar)
    // }
  },
  components: {
    numbox: numBox
  }
};
</script>
<style  scoped>
.mui-card-content {
  height: 200px;
}
.swiper {
  text-align: center;
}
img {
  /* width: 100%; */
  height: 100%;
}
/* 中部布局 */
.mui-card-header {
  font-size: 16px;
  font-weight: 700;
}
.middleBox p {
  color: black;
}
.middleBox {
  height: 200px;
}
.bottombox .mui-card-content-inner {
  height: 100%;
}
.bottombox p span {
  color: gray;
}
.bottombox {
  height: 500px;
}
p span {
  font-size: 12px;
  color: black;
}
.red {
  color: red;
  font-size: 14px;
}
.middleBox div {
  margin-bottom: 10px;
}
.mui-card-footer {
  display: block;
}
button {
  margin-bottom: 10px;
}
</style>