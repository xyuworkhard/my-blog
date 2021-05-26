<template>
  <div class="blog-toc-container">
    <h2>目录</h2>
    <TreeList :dataList="tocWithSelect" @select="handleSelect" />
  </div>
</template>

<script>
import TreeList from "./TreeList";
import { debounce } from "@/utils/index";
export default {
  components: {
    TreeList,
  },
  props: {
    toc: {
      type: Array,
    },
  },
  data() {
    return {
      activeAnchor: "",
    };
  },
  computed: {
    tocWithSelect() {
      let dealArray = (arr = []) => {
        return arr.map((item) => {
          return {
            ...item,
            isSelect: item.anchor == this.activeAnchor,
            children: dealArray(item.children),
          };
        });
      };
      return dealArray(this.toc);
    },
    getAnchorDom() {
      let newArray = [];
      let getdom = (arr = []) => {
        arr.forEach((item) => {
          newArray.push(document.getElementById(item.anchor));
          if (item.children && item.children.length > 0) {
            getdom(item.children);
          }
        });
      };
      getdom(this.toc);
      return newArray;
    },
  },
  created() {
    this.debounceFn = debounce(this.setAnchorSelect, 50);
    this.$bus.$on("scrollContainer", this.debounceFn);
  },
  destroyed() {
    this.$bus.$off("scrollContainer", this.debounceFn);
  },
  methods: {
    handleSelect(item) {
      location.hash = item.anchor;
    },
    setAnchorSelect() {
      let distance = 200;
      this.activeAnchor = "";
      for (const item of this.getAnchorDom) {
        if (!item) {
          continue;
        }
        let top = item.getBoundingClientRect().top;
        if (top >= 0 && top <= distance) {
          //规定范围内
          this.activeAnchor = item.id;
          return;
        } else if (top > distance) {
          //规定范围下方
          return;
        } else {
          //规定范围上方
          this.activeAnchor = item.id;
        }
      }
    },
  },
};
</script>

<style scoped lang="less">
.blog-toc-container {
  h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
    margin: 0;
  }
}
</style>
