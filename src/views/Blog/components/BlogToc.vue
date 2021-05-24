<template>
  <div class="blog-toc-container">
    <h2>目录</h2>
    <TreeList :dataList="toc" @select="handleSelect" />
  </div>
</template>

<script>
import TreeList from "./TreeList";
export default {
  components: {
    TreeList,
  },
  props: {
    toc: {
      type: Array,
    },
  },
  methods: {
    handleSelect(item) {
      location.hash = item.anchor;
    },
  },
};
</script>

<style scoped lang="less">
.blog-toc-container {
  h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
    margin: 0;
  }
}
</style>
