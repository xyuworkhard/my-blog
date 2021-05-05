<template>
  <div class="placeData-container">
    <Icon type="empty"></Icon>
    <p>{{ text }}</p>
  </div>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  props: {
    text: {
      type: String,
      default: "暂无数据",
    },
  },
  components: {
    Icon,
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
@import "~@/styles/colorVar.less";
.placeData-container {
  .self-center();
  color: @gray;
  text-align: center;
  //   .self-center(fixed);
}
.icon-container {
  font-size: 72px;
}
</style>