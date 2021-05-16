<template>
  <div class="site-aside-container">
    <Avatar
      url="https://img2.baidu.com/it/u=2909072015,3629141008&fm=26&fmt=auto&gp=0.jpg"
    />
    <h1 class="title">Super余的博客</h1>
    <Menu />
    <Contact />
    <p class="footer">黑ICP备17001719号</p>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Menu from "./Menu";
import Contact from "./Contact";
export default {
  components: {
    Avatar,
    Menu,
    Contact,
  },
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
