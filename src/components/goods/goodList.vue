<template>
  <div class="good-list">
    <div class="good-phone">
      <router-link to="/home/goodsinfo?id=1">
        <div class="phone-img">
          <img v-lazy="'http://img2.imgtn.bdimg.com/it/u=1437331062,2041796822&fm=26&gp=0.jpg'" alt>
        </div>
        <div class="middle-phone">
          <h4>苹果(iphone) 苹果4S 32g 全网通</h4>
          <div class="sizee">
            <span class="now">￥3899</span>
            <span class="old">￥5899</span>
          </div>
          <p class="sizez">
            <span>热卖中</span>
            <span>剩：60件</span>
          </p>
        </div>
      </router-link>
    </div>
    <div class="good-phone">
      <router-link to="/home/goodsinfo?id=1">
        <div class="phone-img">
          <img v-lazy="'http://img2.imgtn.bdimg.com/it/u=1437331062,2041796822&fm=26&gp=0.jpg'" alt>
        </div>
        <div class="middle-phone">
          <h4>苹果(iphone) 苹果4S 32g 全网通</h4>
          <div class="sizee">
            <span class="now">￥3899</span>
            <span class="old">￥5899</span>
          </div>
          <p class="sizez">
            <span>热卖中</span>
            <span>剩：60件</span>
          </p>
        </div>
      </router-link>
    </div>
    <div class="good-phone">
      <router-link to="/home/goodsinfo?id=1">
        <div class="phone-img">
          <img v-lazy="'http://img2.imgtn.bdimg.com/it/u=1437331062,2041796822&fm=26&gp=0.jpg'" alt>
        </div>
        <div class="middle-phone">
          <h4>苹果(iphone) 苹果4S 32g 全网通</h4>
          <div class="sizee">
            <span class="now">￥3899</span>
            <span class="old">￥5899</span>
          </div>
          <p class="sizez">
            <span>热卖中</span>
            <span>剩：60件</span>
          </p>
        </div>
      </router-link>
    </div>
    <div class="good-phone">
      <router-link to="/home/goodsinfo?id=1">
        <div class="phone-img">
          <img v-lazy="'http://img2.imgtn.bdimg.com/it/u=1437331062,2041796822&fm=26&gp=0.jpg'" alt>
        </div>
        <div class="middle-phone">
          <h4>苹果(iphone) 苹果4S 32g 全网通</h4>
          <div class="sizee">
            <span class="now">￥3899</span>
            <span class="old">￥5899</span>
          </div>
          <p class="sizez">
            <span>热卖中</span>
            <span>剩：60件</span>
          </p>
        </div>
      </router-link>
    </div>
    <div class="good-phone">
      <router-link to="/home/goodsinfo?id=1">
        <div class="phone-img">
          <img v-lazy="'http://img2.imgtn.bdimg.com/it/u=1437331062,2041796822&fm=26&gp=0.jpg'" alt>
        </div>
        <div class="middle-phone">
          <h4>苹果(iphone) 苹果4S 32g 全网通</h4>
          <div class="sizee">
            <span class="now">￥3899</span>
            <span class="old">￥5899</span>
          </div>
          <p class="sizez">
            <span>热卖中</span>
            <span>剩：60件</span>
          </p>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      list: [
        {
          name: "iphone4s",
          src:
            "http://img2.imgtn.bdimg.com/it/u=1437331062,2041796822&fm=26&gp=0.jpg"
        },
        {
          name: "iphone",
          src:
            "http://img4.imgtn.bdimg.com/it/u=3404156790,3445997090&fm=26&gp=0.jpg"
        }
      ]
    };
  },
  created() {
    this.getgoodlist();
  },
  methods: {
    getgoodlist() {
      const _this = this;
      // console.log(_this);

      //   axios
      //     .get("/user?ID=12345")
      //     .then(function(response) {
      //     _this.$route.params
      //     })
      //     .catch(function(error) {
      //       console.log(error);
      //     });
    }
  }
};
</script>
<style scoped>
.good-list {
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 7px;
  position: relative;
}
.phone-img {
  height: 146px;
  /* border: 1px solid red; */
}
.good-phone:hover {
  border: none;
  box-shadow: 1px 1px 6px gray;
}
.good-phone {
  width: 48%;
  height: 280px;
  margin-bottom: 10px;
  box-shadow: 0 0 6px gray;
  border: 1px solid gray;
}
h4 {
  color: black;
}
.good-phone .sizee .now {
  color: gray;
  font-size: 14px;
}
.good-phone .sizee .old {
  color: gray;
  font-size: 14px;
}
.sizez {
  color: gray;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
}
.middle-phone {
  padding: 3px;
}
h4 {
  padding-bottom: 10px;
}
.sizee {
  color: gray;
  padding-bottom: 20px;
}
img {
  width: 100%;
  height: 100%;
}
image[lazy="loading"] {
  width: 40px;
  height: 300px;
  margin: auto;
}
</style>

