<template>
  <div class="site-aside-container">
    <template v-if="fetchData">
      <Avatar :url="fetchData.avatar" />
      <h1 class="title">{{ fetchData.siteTitle }}</h1>
    </template>

    <Menu />
    <Contact v-if="fetchData" />
    <p v-if="fetchData" class="footer">
      {{ fetchData.icp }}
    </p>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Menu from "./Menu";
import Contact from "./Contact";
import { mapState } from "vuex";
export default {
  components: {
    Avatar,
    Menu,
    Contact,
  },
  computed: mapState("setting", ["fetchData"]),
};
</script>

<style scoped lang="less">
@import "~@/styles/colorVar.less";
.site-aside-container {
  width: 100%;
  height: 100%;
  background: @dark;
  padding: 20px 0;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
}
.avatar-container {
  margin: 0 auto;
}
.footer {
  text-align: center;
  font-size: 12px;
  color: #666;
}
.title {
  font-size: 1em;
  color: #fff;
  text-align: center;
}
</style>
<style>
::-webkit-scrollbar {
  width: 6px;
  background-color: rgba(170, 170, 170, 0.4);
}
::-webkit-scrollbar-thumb {
  background-color: #aaa;
  border-radius: 4px;
}
</style>
