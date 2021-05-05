<template>
  <div class="test-container">
    <Contact></Contact>
  </div>
</template>

<script>
import Contact from "./index";
export default {
  data() {
    return {};
  },
  components: {
    Contact,
  },
};
</script>

<style scoped>
.test-container {
  margin-top: 200px;
}
</style>