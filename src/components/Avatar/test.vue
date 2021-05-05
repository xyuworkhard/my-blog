<template>
  <div>
    <Avatar :url="url"></Avatar>
  </div>
</template>

<script>
import Avatar from "./index";
export default {
  components: { Avatar },
  data() {
    return {
      url:
        "https://img2.baidu.com/it/u=3681880960,455182084&fm=26&fmt=auto&gp=0.jpg",
    };
  },
  component: {
    Avatar,
  },
};
</script>

<style>
</style>