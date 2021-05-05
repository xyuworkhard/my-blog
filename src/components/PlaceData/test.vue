<template>
  <div class="test-container">
    <PlaceData text="没有数据" />
  </div>
</template>

<script>
import PlaceData from "./index";
export default {
  components: {
    PlaceData,
  },
};
</script>

<style  lang="less">
.test-container {
  width: 500px;
  height: 500px;
  margin: 0 auto;
  position: relative;
  border: 1px solid #666;
}
</style>