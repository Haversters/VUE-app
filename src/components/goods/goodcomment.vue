<template>
  <div class="goodcomment">
    <commentlun></commentlun>
  </div>
</template>
<script>
import commentlun from "../subcomponents/comment.vue";
export default {
  data() {
    return {
      id: this.$route.id
    };
  },
  created() {
    this.getid();
  },
  methods: {
    getid() {
      console.log(123);
      console.log(this.$route.query.id);
    }
  },
  components: {
    commentlun
  }
};
</script>
<style scoped>
.goodcomment {
  margin-top: 30px;
}
</style>
