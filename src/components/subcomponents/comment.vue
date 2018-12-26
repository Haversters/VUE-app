<template>
  <div class="comment">
    <textarea placeholder="请输入要BB的内容" maxlength="120" v-model="msg"></textarea>
    <mt-button type="primary" size="large" @click="postList">发表评论</mt-button>
    <h4>评论区</h4>
    <div class="cmt-list">
      <div class="cmt-item" v-for="(item, i) in comments" :key="item.add_time">
        <div
          class="cmt-title"
        >第{{ i+1 }}楼&nbsp;&nbsp;用户：{{ item.name }}&nbsp;&nbsp;发表时间：{{item.timee | dataFilter("YYYY-MM-DD")}}</div>
        <div class="cmt-body">{{ item.content === 'undefined' ? '此用户很懒，嘛都没说': item.content }}</div>
      </div>
    </div>
    <mt-button
      type="danger"
      size="large"
      plain
      @click="getMore"
    >加载更多{{timee | dataFilter("YYYY-MM-DD HH:mm:ss")}}</mt-button>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
import axios from "axios"
export default {
  data() {
    return {
      pageindex: 1,
      timee: new Date(),
      comments: [
        {
          name: "匿名用户",
          timee: this.timee,
          content: "怕是个傻子呦"
        },
        {
          name: "匿名用户",
          timee: this.timee,
          content: "怕是个傻子呦"
        },
        {
          name: "匿名用户",
          timee: this.timee,
          content: "怕是个傻子呦"
        },
        {
          name: "匿名用户",
          timee: this.timee,
          content: "怕是个傻子呦"
        },
        {
          name: "匿名用户",
          timee: this.timee,
          content: "怕是个傻子呦"
        },
        {
          name: "匿名用户",
          timee: this.timee,
          content: "怕是个傻子呦"
        }
      ],
      msg: ""
    };
  },
  created() {
    // this.getcomment();
  },
  methods: {
    getcomment() {
      const _this = this;
      axios
        .get(
          "http://localhost:8888/api/private/v1/" +
            this.id +
            "?pageindex=" +
            this.page
        )
        .then(function(response) {
          _this.comments = this.response;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getMore() {
      this.pageindex++;
      this.getcomment();
    },
    postList() {
      if (this.msg.trime().length === 0) {
        return Toast("别闹，评论不能为空");
      }
      const _this = this;
      axios
        .post(
          "http://localhost:8888/api/private/v1/" +
            this.id +
            "?pageindex=" +
            this.page,
          {
            content: this.msg.trim()
          }
        )
        .then(function(response) {
          if (response.body.statu == 0) {
            const cmt = {
              name: "匿名用户",
              timee: _this.timee,
              msg: _this.msg
            };
            _this.comments.unshift(cmt);
            this.msg = "";
          }
        })
        .catch(function(error) {
          console.log(error);
        });
      // console.log(this.msg.trim().length);
      if (this.msg.trim().length == 0) {
        return Toast("别闹，评论不能为空");
      }
      const cmt = {
        name: "匿名用户",
        timee: this.timee,
        content: this.msg
      };
      this.comments.unshift(cmt);
      this.msg = "";
    }
  }
  // props: ["id"]
};
</script>
<style>
.comment {
  padding-bottom: 50px;
}
</style>

