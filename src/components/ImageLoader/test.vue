<template>
  <div class="test-container">
    <ImageLoader
      src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
      placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
      :duration="3000"
      @loaded="handleLoad"
    ></ImageLoader>
  </div>
</template>

<script>
import ImageLoader from "./index";
export default {
  components: {
    ImageLoader,
  },
  methods: {
    handleLoad() {
      alert("image over");
    },
  },
};
</script>

<style>
.test-container {
  width: 500px;
  height: 500px;
  border: 2px;
  margin: 0 auto;
}
</style>