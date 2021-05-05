<template>
  <nav class="menu-container">
    <!-- :to="item.link" -->
    <RouterLink
      v-for="item in items"
      :key="item.link"
      :to="{ name: item.link }"
      :exact="item.exact"
      active-class="selected"
      exact-active-class=""
    >
      <div class="icon">
        <Icon :type="item.icon" />
      </div>
      <span>{{ item.title }}</span>
    </RouterLink>
  </nav>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  components: {
    Icon,
  },
  data() {
    return {
      items: [
        {
          link: "home",
          title: "首页",
          icon: "home",
          exact: true,
        },
        {
          link: "blog",
          title: "文章",
          icon: "blog",
          exact: false, // 只要当前路径以link开头，当前菜单就是选中的
        },
        {
          link: "about",
          title: "关于我",
          icon: "about",
          exact: true,
        },
        {
          link: "project",
          title: "项目&效果",
          icon: "code",
          exact: true,
        },
        {
          link: "message",
          title: "留言板",
          icon: "chat",
          exact: true,
        },
      ],
    };
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/colorVar.less";
.menu-container {
  color: @gray;
  margin: 24px 0;
  a {
    &.selected {
      background: darken(@words, 3%);
    }
    padding: 0 50px;
    display: block;
    display: flex;
    align-items: center;
    height: 45px;
    .icon {
      width: 24px;
    }
    &:hover {
      color: #fff;
    }
  }
}
</style>
