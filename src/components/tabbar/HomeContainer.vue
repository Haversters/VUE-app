<template>
  <div>
    <!-- 轮播图 -->
    <div class="lunbo">
      <mt-swipe :auto="3000" class="toobbar">
        <mt-swipe-item>
          <img :src="imgList" alt>
        </mt-swipe-item>
         <mt-swipe-item>
          <img :src="imgList2" alt>
        </mt-swipe-item>
        <mt-swipe-item>
          <img :src="imgList3" alt>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <!-- 九宫格 -->
    <div>
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/newslist">
            <span class="mui-icon">
              <img src="../../images/menu1.png" alt class="imggg">
            </span>
            <div class="mui-media-body">新闻资讯</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/photolist">
            <span class="mui-icon">
              <img src="../../images/menu2.png" alt class="imggg">
            </span>
            <div class="mui-media-body">图片分享</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/goodlist">
            <span class="mui-icon">
              <img src="../../images/menu3.png" alt class="imggg">
            </span>
            <div class="mui-media-body">商品购买</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="">
            <span class="mui-icon">
              <img src="../../images/menu4.png" alt class="imggg">
            </span>
            <div class="mui-media-body">留言反馈</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="">
            <span class="mui-icon">
              <img src="../../images/menu5.png" alt class="imggg">
            </span>
            <div class="mui-media-body">视频专区</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="">
            <span class="mui-icon">
              <img src="../../images/menu6.png" alt class="imggg">
            </span>
            <div class="mui-media-body">联系我们</div>
          </router-link>
        </li>
      </ul>
    </div>
    <h1>HomeContainer</h1>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      imgList: "",
      imgList2: "",
      imgList3: ""
    };
  },
  created() {
    this.getLunbotu();
  },
  methods: {
    getLunbotu() {
      // 获取轮播图数据的方法
      // this.$http.get("http://vue.studyit.io/api/getlunbo").then(result => {
      //   console.log(result.body);
      //   // if (result.body.status === 0) {
      //   //   // 成功了
      //   //   this.lunbotuList = result.body.message;
      //   // } else {
      //   //   // 失败的
      //   //   Toast("加载轮播图失败。。。");
      //   // }
      // })
      const _this = this;
      function getUserAccount() {
        return axios.get(
          "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3982204607,1862921847&fm=27&gp=0.jpg"
        );
      }

      function getUserPermissions() {
        return axios.get(
          "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2700119383,2812317980&fm=27&gp=0.jpg"
        );
      }
       function getUserPermissionss() {
        return axios.get(
          "data:image/jpeg;base64,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"
        );
      }

      axios.all([getUserAccount(), getUserPermissions(),getUserPermissionss()]).then(
        axios.spread(function(acct, perms,three) {
          // 两个请求现在都执行完成
          _this.imgList = acct.config.url;
          _this.imgList2 = perms.config.url;
           _this.imgList3 = three.config.url;
          // console.log(_this.imgList, _this.imgList2,_this.imgList3);
        })
      );
      // axios
      //   .get("https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2700119383,2812317980&fm=27&gp=0.jpg")
      //   .then(function(response) {
      //   //   console.log(response.config.url)
      //   //  const str= JSON.stringify(response.config.url)
      //     _this.imgList=response.config.url
      //     console.log(_this.imgList)
      //   })
      //   .catch(function(error) {
      //     console.log(123);
      //   });
    }
  }
};
</script>

<style  scoped>
.lunbo img{
  width: 100%;
  height: 100%;
}
.toobbar {
  height: 200px;
}
.mui-grid-view.mui-grid-9 {
  border: none;
  background-color: white;
}
.imggg {
  height: 60px;
  width: 60px;
}

</style>
