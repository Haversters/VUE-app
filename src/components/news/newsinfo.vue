<template>
  <div>
    <h1>这是/home/newsinfo/页面</h1>
    <!-- 大标题 -->
    <!-- <h3 class="title">{{ newsinfo.title }}</h3> -->
    <!-- 子标题 -->
    <!-- <p class="subtitle">
      <span>发表时间：{{ newsinfo.add_time | dateFormat }}</span>
      <span>点击：{{ newsinfo.click }}次</span>
    </p>-->
    <!-- 内容 -->
    <!-- <div class="content" v-html="item.content"></div> -->
    <!-- 底部的router-view公共评论页区域 -->
    <comment-box :id="this.id"></comment-box>
  </div>
</template>

<script>
import comment from "../subcomponents/comment.vue"



export default {
  // data() {
  //   return {
  //     id: this.params.id,
  //     infolist: {}
  //   };
  // },
  // created() {
  //   getinfolist();
  // },
  // methods: {
  //   getinfolist() {
  //     const _this = this;
  //     axios
  //       .get("/home/newsinfo" + _this.id)
  //       .then(function(response) {
  //         _this.infolist = response;
  //       })
  //       .catch(function(error) {
  //         console.log(error);
  //       });
  //   }
  // },
  components:{
    "comment-box":comment
  }
};
</script>
<style >
</style>