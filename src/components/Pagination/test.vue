<template>
  <div>
    <Pagination
      :total="203"
      :current="current"
      @pageChange="dealPageChange"
    ></Pagination>
  </div>
</template>

<script>
import Pagination from "./index";
export default {
  //   name: "myapp", //如果组件在没有注册的时候（vue tool中显示的名称）指定名称，会使用该名称
  data() {
    return {
      current: 3,
    };
  },
  components: {
    Avatar,
    Icon,
    Pagination,
  },
  methods: {
    dealPageChange(val) {
      // @pageChange="dealPageChange($event)"
      console.log(val);
      this.current = val;
    },
  },
};
</script>

<style lang="less" scoped>
.iconfont {
  color: red;
  font-size: 30px;
}
</style>
