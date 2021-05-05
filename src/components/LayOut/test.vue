<template>
  <div class="test-container">
    <Layout>
      <template v-slot:left>
        <div class="left">Lorem ipsum dolor sit amet,</div>
      </template>

      <div class="main">
        consectetur adipisicing elit. Accusamus quidem natus molestias nesciunt
        odio consectetur beatae alias possimus? Ducimus aliquid obcaecati
        corrupti odio quam aperiam accusantium dignissimos assumenda veritatis
        rerum?
      </div>

      <template #right>
        <div class="right">Lorem, ipsum dolor.</div>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "./index";
export default {
  components: {
    Layout,
  },
};
</script>

<style scoped lang="less">
.test-container {
  margin: 0 auto;
  border: 2px dotted #008c8c;
  .left {
    width: 200px;
    background: lightblue;
    height: 100%;
  }
  .main {
    box-sizing: border-box;
    width: 100%;
    background: lightcoral;
    padding: 10px;
    height: 100%;
  }
  .right {
    width: 150px;
    background: lightpink;
    height: 100%;
  }
}
</style>