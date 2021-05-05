<template>
  <div id="app">
    <Layout>
      <template #left>
        <div class="left">
          <SiteAside />
        </div>
      </template>
      <div class="main">
        <RouterView />
      </div>
    </Layout>
  </div>
</template>

<script>
import SiteAside from "@/components/SiteAside";
import Layout from "@/components/LayOut";
export default {
  name: "myapp", //如果组件在没有注册的时候（vue tool中显示的名称）指定名称，会使用该名称
  data() {
    return {};
  },
  components: {
    SiteAside,
    Layout,
  },
  methods: {},
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";

#app {
  .self-fill(fixed);
  .left {
    width: 230px;

    height: 100%;
  }
  .main {
    box-sizing: border-box;
    width: 100%;
    background: lightblue;
    padding: 10px;
    height: 100%;
  }
}
</style>
