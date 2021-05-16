<template>
  <div
    class="carousel-item-container"
    @mousemove="handleMove"
    @mouseleave="handleMouseLeave"
    ref="carouselContainer"
  >
    <div class="carousel-img" ref="carouselImg" :style="moveStyle">
      <ImageLoader
        :src="carousel.bigImg"
        placeholder="carousel.midImg"
        @loaded="showWords"
      ></ImageLoader>
    </div>
    <div class="title" ref="title">{{ carousel.title }}</div>
    <div class="desc" ref="desc">{{ carousel.description }}</div>
  </div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader";
export default {
  props: ["carousel"],
  components: {
    ImageLoader,
  },
  data() {
    return {
      titleWidth: 0,
      descWidth: 0,
      containerSize: null, //外成容器
      innerSize: null, //里面图片,
      disX: 0,
      disY: 0,
    };
  },
  mounted() {
    this.titleWidth = this.$refs.title.clientWidth;
    this.descWidth = this.$refs.desc.clientWidth;
    this.setDomSize();
    this.disX = this.center.x;
    this.disY = this.center.y;
    window.addEventListener("resize", this.setSize);
  },
  destroyed() {
    window.removeEventListener("resize", this.setSize);
  },
  computed: {
    moveStyle() {
      if (!this.innerSize || !this.containerSize) {
        return;
      }
      const extraWidth = this.innerSize.width - this.containerSize.width; // 多出的宽度
      const extraHeight = this.innerSize.height - this.containerSize.height; //多出的高度
      const left = (-extraWidth / this.containerSize.width) * this.disX;
      const top = (-extraHeight / this.containerSize.height) * this.disY;
      return {
        transform: `translate(${left}px, ${top}px)`,
      };
    },
    center() {
      return {
        x: this.containerSize.width / 2,
        y: this.containerSize.height / 2,
      };
    },
  },
  methods: {
    showWords() {
      this.$refs.title.style.opacity = 1;
      this.$refs.title.style.width = 0;
      // 强制让浏览器渲染一次
      this.$refs.title.clientWidth; // reflow
      this.$refs.title.style.transition = "1s";
      this.$refs.title.style.width = this.titleWidth + "px";

      // 描述也是一样
      this.$refs.desc.style.opacity = 1;
      this.$refs.desc.style.width = 0;
      // 强制让浏览器渲染一次
      this.$refs.desc.clientWidth; // reflow
      this.$refs.desc.style.transition = "2s 1s";
      this.$refs.desc.style.width = this.descWidth + "px";
    },
    setDomSize() {
      this.containerSize = {
        width: this.$refs.carouselContainer.clientWidth,
        height: this.$refs.carouselContainer.clientHeight,
      };
      this.innerSize = {
        width: this.$refs.carouselImg.clientWidth,
        height: this.$refs.carouselImg.clientHeight,
      };
    },
    handleMove(e) {
      // 获取container style
      let rect = this.$refs.carouselContainer.getBoundingClientRect();
      this.disX = e.clientX - rect.left;
      this.disY = e.clientY - rect.top;
    },
    handleMouseLeave() {
      this.disX = this.center.x;
      this.disY = this.center.y;
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/colorVar.less";
.carousel-item-container {
  // background: @dark;
  width: 100%;
  height: 100%;
  color: #fff;
  position: relative;
  overflow: hidden;
  .carousel-img {
    width: 110%;
    height: 110%;
    position: absolute;
    left: 0;
    top: 0;
    transition: 0.3s;
  }
  .title,
  .desc {
    position: absolute;
    letter-spacing: 3px;
    left: 30px;
    color: #fff;
    text-shadow: 1px 0 0 rgba(0, 0, 0, 0.5), -1px 0 0 rgba(0, 0, 0, 0.5),
      0 1px 0 rgba(0, 0, 0, 0.5), 0 -1px 0 rgba(0, 0, 0, 0.5);
    white-space: nowrap;
    overflow: hidden;
    opacity: 0;
  }
  .title {
    top: calc(50% - 40px);
    font-size: 2em;
  }
  .desc {
    top: calc(50% + 20px);
    font-size: 1.2em;
    color: lighten(@gray, 20%);
  }
}
</style>