<template>
  <div class="photo-info">
    <div class="top-nav">
      <h4>12月19日，长沙，迪丽热巴参加运动品牌活动</h4>
      <div class="top-title">
        <span>发表时间：2015-04-18</span>
        <span>点击：22次</span>
      </div>
    </div>
    <div class="thumbs">
      <vue-preview :slides="slide1" @close="handleClose" class="preview-img"></vue-preview>
    </div>
    <div class="middle-photo">
      <p>迪丽热巴（Dilraba），1992年6月3日出生于新疆乌鲁木齐市，中国内地影视女演员，毕业于上海戏剧学院。2013年，迪丽热巴因主演个人首部电视剧《阿娜尔罕》而出道。2014年，她主演了奇幻剧《逆光之恋》</p>
      <h3>发表评论</h3>
    </div>
    <cmt-box></cmt-box>
  </div>
</template>
<script>
import comment from "../subcomponents/comment";
export default {
  data() {
    return {
      slide1: [
        {
          src:
            "https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg",
          msrc:
            "https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg",
          alt: "picture1",
          title: "Image Caption 1",
          w: 600,
          h: 400
        },
        {
          src:
            "https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg",
          msrc:
            "https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg",
          alt: "picture2",
          title: "Image Caption 2",
          w: 600,
          h: 400
        }
      ]
    };
  },
  components: {
    "cmt-box": comment
  }
};
</script>
<style scoped>
.photo-info {
  padding: 5px;
}
.top-nav {
  height: 60px;
  border-bottom: 1px solid gray;
  position: relative;
}
.top-nav h4 {
  text-align: center;
  padding-bottom: 10px;
  color: blue;
}
.top-title {
  display: flex;
  justify-content: space-between;
  padding-bottom: 0;
  color: gray;
  font-size: 14px;
}
.middle-photo {
  border-bottom: 1px solid gray;
  margin-bottom: 10px;
}
.suolue {
  width: 33%;
}
.thumbs {
  overflow: hidden;
}
.thumbs img {
  display: block;
  width: 100%;
  height: 100%;
  margin: 10px;
  box-shadow: 0 0 8px #999;
}
.preview-img .my-gallery figure {
  margin: 1em 10px;
  width: 29%;
  float: left;
}
</style>
