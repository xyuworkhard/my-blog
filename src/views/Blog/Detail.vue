<template>
  <LayOut>
    <div class="main-container" v-loading="isLoading" ref="scrollContainer">
      <Detail :blog="fetchData" v-if="fetchData"></Detail>
      <BlogComment v-if="!isLoading" />
    </div>
    <template #right>
      <div class="right-container" v-loading="isLoading">
        <Toc :toc="fetchData.toc" v-if="fetchData"></Toc>
      </div>
    </template>
  </LayOut>
</template>

<script>
import getFetchData from "@/mixins/getInitData";
import { getBlog } from "@/api/blog";
import LayOut from "@/components/LayOut";
import Detail from "./components/BlogDetail";
import Toc from "./components/BlogToc";
import BlogComment from "./components/BlogComment";
import scrollContainer from "@/mixins/scrollContainer";
import { titleController } from "@/utils";
export default {
  name: "blogDetail",
  mixins: [getFetchData({}), scrollContainer("scrollContainer")],
  data() {
    return {
      fetchData: {},
    };
  },
  components: {
    LayOut,
    Detail,
    Toc,
    BlogComment,
  },
  methods: {
    async getFetchData() {
      let res = await getBlog(this.$route.params.id);
      titleController.setRouteTitle(res.title);
      return res;
    },
  },
  updated() {
    //解决刷新不选中
    let hashs = location.hash;
    location.hash = "";
    setTimeout(() => {
      location.hash = hashs;
    }, 50);
  },
};
</script>

<style scoped lang="less">
.main-container {
  overflow-y: scroll;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  width: 100%;
  overflow-x: hidden;
  scroll-behavior: smooth;
}
.right-container {
  width: 300px;
  height: 100%;
  overflow-y: scroll;
  box-sizing: border-box;
  position: relative;
  padding: 20px;
}
</style>