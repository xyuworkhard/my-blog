<template>
  <div class="blog-container">
    <LayOut>
      <BlogList />
      <template #right>
        <BlogCategory />
      </template>
    </LayOut>
  </div>
</template>

<script>
import LayOut from "@/components/LayOut";
import BlogList from "./components/BlogList";
import BlogCategory from "./components/BlogCategory";
export default {
  data() {
    return {};
  },
  components: {
    LayOut,
    BlogList,
    BlogCategory,
  },

  methods: {},
};
</script>

<style>
</style>