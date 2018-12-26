<template>
  <div class="mui-numbox" data-numbox-min="1" data-numbox-max="9">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input
      id="test"
      class="mui-input-numbox"
      type="number"
      @change="countChanged"
      value="1"
      ref="numbox"
    >
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>
<script>
import mui from "../../lib/mui/js/mui.js";
export default {
  mounted() {
    // 初始化数字选择框组件
    mui(".mui-numbox").numbox();
    console.log(this.max);
  },
  data() {
    return {};
  },
  mounted() {
    this.countChanged()
  },
  methods: {
    countChanged() {
      var cnt = this.$refs.numbox.value;
      this.$store.commit("addcount", cnt);
      // console.log(this.$store.state.count);
    }
  }
};
</script>
<style scoped>
</style>
