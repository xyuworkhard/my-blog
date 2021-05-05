<template>
  <img
    :src="url"
    :style="{ width: size + 'px', height: size + 'px' }"
    class="avatar-container"
  />
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true,
    },
    // width: Number,
    // height: Number,
    size: {
      Number,
      default: 150,
    },
  },
};
</script>

<style scoped lang="less">
.avatar-container {
  border-radius: 50%;
  object-fit: cover;
  display: block;
  cursor: pointer;
}
</style>