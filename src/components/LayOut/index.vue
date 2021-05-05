<template>
  <div class="layout-container">
    <div class="lay-left">
      <slot name="left"></slot>
    </div>

    <div class="lay-main">
      <slot></slot>
    </div>
    <div class="lay-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.layout-container {
  width: 100%;
  height: 100%;
  display: flex;
  .lay-left,
  .lay-right {
    flex: 0 0 auto;
    overflow: hidden;
  }
  .lay-main {
    flex: 1 1 auto;
    overflow: hidden;
  }
}
</style>