<template>
  <div>
    <ul class="mui-table-view">
   <!-- 实际方式 -->
     <!-- <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id" >
        <router-link :to="'/home/newsinfo'+item.id">
          <img class="mui-media-object mui-pull-left" :src="item.src">
          <div class="mui-media-body">{{item.title}}
            <p class="mui-ellipsis">
              <span>发布时间：{{item.time}}</span>
              <span>点击：{{item.click}}次</span>
            </p>
          </div>
        </router-link>
      </li> -->




      <li class="mui-table-view-cell mui-media">
        <router-link to="/home/newsinfo">
          <img class="mui-media-object mui-pull-left" src="../../images/dl3.jpg">
          <div class="mui-media-body">幸福
            <p class="mui-ellipsis">
              <span>发布时间：123133132</span>
              <span>点击：202次</span>
            </p>
          </div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media">
        <router-link to="/home/newsinfo">
          <img class="mui-media-object mui-pull-left" src="../../images/ab3.jpg">
          <div class="mui-media-body">木屋
            <p class="mui-ellipsis">
              <span>发布时间：123133132</span>
              <span>点击：202次</span>
            </p>
          </div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media">
        <router-link to="/home/newsinfo">
          <img class="mui-media-object mui-pull-left" src="../../images/dl3.jpg">
          <div class="mui-media-body">CBD
            <p class="mui-ellipsis">
              <span>发布时间：123133132</span>
              <span>点击：202次</span>
            </p>
          </div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media">
        <router-link to="/home/newsinfo">
          <img class="mui-media-object mui-pull-left" src="../../images/dl3.jpg">
          <div class="mui-media-body">幸福
            <p class="mui-ellipsis">
              <span>发布时间：123133132</span>
              <span>点击：202次</span>
            </p>
          </div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media">
        <router-link to="/home/newsinfo">
          <img class="mui-media-object mui-pull-left" src="../../images/ab3.jpg">
          <div class="mui-media-body">木屋
            <p class="mui-ellipsis">
              <span>发布时间：123133132</span>
              <span>点击：202次</span>
            </p>
          </div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media">
        <router-link to="/home/newsinfo">
          <img class="mui-media-object mui-pull-left" src="../../images/dl3.jpg">
          <div class="mui-media-body">CBD
            <p class="mui-ellipsis">
              <span>发布时间：123133132</span>
              <span>点击：202次</span>
            </p>
          </div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media">
        <router-link to="/home/newsinfo">
          <img class="mui-media-object mui-pull-left" src="../../images/dl3.jpg">
          <div class="mui-media-body">幸福
            <p class="mui-ellipsis">
              <span>发布时间：123133132</span>
              <span>点击：202次</span>
            </p>
          </div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media">
        <router-link to="/home/newsinfo">
          <img class="mui-media-object mui-pull-left" src="../../images/ab3.jpg">
          <div class="mui-media-body">木屋
            <p class="mui-ellipsis">
              <span>发布时间：123133132</span>
              <span>点击：202次</span>
            </p>
          </div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media">
        <router-link to="/home/newsinfo">
          <img class="mui-media-object mui-pull-left" src="../../images/dl3.jpg">
          <div class="mui-media-body">CBD
            <p class="mui-ellipsis">
              <span>发布时间：123133132</span>
              <span>点击：202次</span>
            </p>
          </div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media">
        <router-link to="/home/newsinfo">
          <img class="mui-media-object mui-pull-left" src="../../images/dl3.jpg">
          <div class="mui-media-body">幸福
            <p class="mui-ellipsis">
              <span>发布时间：123133132</span>
              <span>点击：202次</span>
            </p>
          </div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media">
        <router-link to="/home/newsinfo">
          <img class="mui-media-object mui-pull-left" src="../../images/ab3.jpg">
          <div class="mui-media-body">木屋
            <p class="mui-ellipsis">
              <span>发布时间：123133132</span>
              <span>点击：202次</span>
            </p>
          </div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media">
        <router-link to="/home/newsinfo">
          <img class="mui-media-object mui-pull-left" src="../../images/dl3.jpg">
          <div class="mui-media-body">CBD
            <p class="mui-ellipsis">
              <span>发布时间：123133132</span>
              <span>点击：202次</span>
            </p>
          </div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media">
        <router-link to="/home/newsinfo">
          <img class="mui-media-object mui-pull-left" src="../../images/dl3.jpg">
          <div class="mui-media-body">幸福
            <p class="mui-ellipsis">
              <span>发布时间：123133132</span>
              <span>点击：202次</span>
            </p>
          </div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media">
        <router-link to="/home/newsinfo">
          <img class="mui-media-object mui-pull-left" src="../../images/ab3.jpg">
          <div class="mui-media-body">木屋
            <p class="mui-ellipsis">
              <span>发布时间：123133132</span>
              <span>点击：202次</span>
            </p>
          </div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media">
        <router-link to="/home/newsinfo">
          <img class="mui-media-object mui-pull-left" src="../../images/dl3.jpg">
          <div class="mui-media-body">CBD
            <p class="mui-ellipsis">
              <span>发布时间：123133132</span>
              <span>点击：202次</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
    <router-view></router-view>
    <h1>这是newslist子路由</h1>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
	  id: "",
	  inewlist:[]
    };
  },
  created() {
	  // getNewlist()
  },
  methods: {
    getNewlist() {
	const _this=this
      axios
        .get("/user?ID=12345")
        .then(function(response) {
         _this.newlist=response;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>

<style>
.mui-table-view .mui-media-object {
  max-width: 24px;
}
.mui-ellipsis {
  color: blue;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
}
</style>