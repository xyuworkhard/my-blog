<template>
  <div class="pager-container" v-if="pageTotalNumber > 1">
    <a
      href="#"
      class="page-number"
      :class="{ disabled: current === 1 }"
      @click="handleClick(1)"
      >首页</a
    >
    <a
      href="#"
      class="page-number"
      :class="{ disabled: current === 1 }"
      @click="handleClick(current - 1)"
      >上一页</a
    >
    <!-- <a
      href="#"
      class="page-number"
      v-for="(item, index) in pageNumber"
      :key="index"
      :class="{ actived: current === index + 1 }"
      >{{ item }}</a
    > -->
    <a
      href="#"
      class="page-number"
      v-for="(item, index) in pageNumber"
      :key="index"
      :class="{ actived: current === item }"
      @click="handleClick(item)"
      >{{ item }}</a
    >
    <a
      href="#"
      class="page-number"
      :class="{ disabled: current === pageTotalNumber }"
      @click="handleClick(current + 1)"
      >下一页</a
    >
    <a
      href="#"
      class="page-number"
      :class="{ disabled: current === pageTotalNumber }"
      @click="handleClick(pageTotalNumber)"
      >尾页</a
    >
  </div>
</template>

<script>
// import xx from "@/xxx" //@代表src
export default {
  props: {
    //当前页
    current: {
      type: Number,
      default: 1,
    },
    //数据量
    total: {
      type: Number,
      default: 0,
    },
    //每页条数
    limit: {
      type: Number,
      default: 10,
    },
    //展示的数据个数
    visibleNumber: {
      type: Number,
      default: 10,
    },
  },
  data() {
    return {};
  },
  methods: {
    handleClick(newPage) {
      if (newPage < 1) {
        newPage = 1;
      }
      if (newPage > this.pageTotalNumber) {
        newPage = this.pageTotalNumber;
      }
      if (newPage == this.current) return;
      this.$emit("pageChange", newPage);
    },
  },
  computed: {
    pageTotalNumber() {
      return Math.ceil(this.total / this.limit);
    },
    minNumber() {
      let min = this.current - Math.floor(this.visibleNumber / 2);
      if (min < 1) {
        min = 1;
      }
      return min;
    },
    maxNumber() {
      let max = this.minNumber + this.visibleNumber - 1;
      if (max > this.pageTotalNumber) {
        max = this.pageTotalNumber;
      }
      return max;
    },
    pageNumber() {
      let num = [];
      for (let i = this.minNumber; i <= this.maxNumber; i++) {
        num.push(i);
      }
      return num;
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/colorVar.less"; //css导入~@代表src目录
.pager-container {
  margin: 10px 0 5px;
  display: flex;
  justify-content: center;
  .page-number {
    padding: 0 15px;
    height: 28px;
    line-height: 28px;
    background-color: #fff;
    color: #333;
    font-size: 12px;
    border: 1px solid #eee;
    border-right: none;
    display: inline-block;
    &:hover,
    &.actived {
      color: #fff;
      background: @primary;
    }
    &.disabled {
      cursor: not-allowed;
      background-color: #fff;
      color: @lightWords;
    }
  }

  .page-number:last-of-type {
    border-right: 1px solid #eee;
  }
}
</style>