<template>
  <div class="imageloader-container">
    <img :src="placeholder" alt="" class="img-place" v-if="removeImg" />
    <img
      :src="src"
      alt=""
      :style="{ opacity: imgLoadOpacity, transition: duration + 'ms' }"
      @load="handleLoad"
    />
  </div>
</template>

<script>
export default {
  props: {
    duration: {
      type: Number,
      default: 500,
    },
    src: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      loadEnd: false,
      removeImg: true,
    };
  },
  computed: {
    imgLoadOpacity() {
      return this.loadEnd ? 1 : 0;
    },
  },
  methods: {
    handleLoad() {
      this.loadEnd = true;
      setTimeout(() => {
        this.removeImg = false;
        this.$emit("loaded");
      }, this.duration);
    },
  },
};
</script>

<style scopd lang="less">
@import "~@/styles/mixin.less";
.imageloader-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  img {
    .self-fill();
    object-fit: cover;
  }
  .img-place {
    filter: blur(2vw);
  }
}
</style>