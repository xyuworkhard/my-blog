<template>
  <ul class="tree-list-container">
    <li v-for="(item, i) in dataList" :key="i">
      <span :class="{ actived: item.isSelect }" @click="sendData(item)">
        {{ item.name }}
      </span>
      <span
        v-if="item.aside"
        @click="sendData(item)"
        class="aside"
        :class="{ actived: item.isSelect }"
      >
        {{ item.aside }}
      </span>
      <!-- 组件内部自我递归 -->
      <TreeList :dataList="item.children" @select="sendData" />
    </li>
  </ul>
</template>

<script>
export default {
  name: "TreeList", //组件内部自我递归
  props: {
    dataList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
  methods: {
    sendData(value) {
      value.isActive = true;
      this.$emit("select", value);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/colorVar.less";
.tree-list-container {
  font-size: 14px;
  list-style: none;
  padding: 0;
  .tree-list-container {
    margin-left: 1em;
  }
  li {
    min-height: 32px;
    line-height: 32px;
    cursor: pointer;
    .actived {
      color: @warn;
      font-weight: bold;
    }
  }
}
.aside {
  font-size: 12px;
  margin-left: 1em;
  color: @gray;
}
</style>
