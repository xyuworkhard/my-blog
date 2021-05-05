<template>
  <div class="contact-container">
    <ul class="list">
      <li v-for="(item, index) in dataList" :key="index">
        <a :href="item.links">
          <Icon :type="item.icon"></Icon>
          <span>{{ item.text }}</span>
        </a>
        <div class="image" v-if="item.qrcode">
          <img :src="item.qrcode" alt="" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  // props: {
  //   dataList: {
  //     type: Array,
  //     default: function () {
  //       return [];
  //     },
  //   },
  // },
  data() {
    return {
      dataList: [
        {
          text: "Github",
          icon: "github",
          qrcode: "",
          links: "https://github.com/xyuworkhard",
        },
        {
          text: "xyuworkhard@gmail.com",
          icon: "mail",
          qrcode: "",
          links: "mailto:xyuworkhard@gmail.com",
        },
        {
          text: "1357525676",
          icon: "qq",
          qrcode: "/contact/qq.png",
          links:
            "tencent://message/?Menu=yes&uin=918113439&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45",
        },
        {
          text: "Riven",
          icon: "weixin",
          qrcode: "/contact/wechat.png",
          links: "#",
        },
      ],
    };
  },
  components: {
    Icon,
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/global.less";
@import "~@/styles/colorVar.less";
.contact-container {
  .list {
    padding-left: 10px;
  }
  li {
    color: @gray;
    padding: 6px;
    position: relative;
    a:hover {
      color: inherit;
      background: inherit;
    }
    .icon-container {
      font-size: 26px;
      vertical-align: middle;
      &.iconweixin {
        font-size: 30px;
      }
    }
    span {
      height: 30px;
      line-height: 30px;
      padding: 8px 15px 8px 8px;
      font-size: 14px;
    }
    .image {
      width: 140px;
      height: 140px;
      position: absolute;
      bottom: 40px;
      left: 6px;
      padding: 2px;
      background: #fff;
      border-radius: 5px;
      border: 1px solid #666;
      transform: scaleY(0);
      transform-origin: center bottom;
      transition: 0.5s;
      //   &::after {
      //     content: "";
      //     display: block;
      //     border-top: 10px solid #333;
      //     border-right: 10px solid transparent;
      //     border-bottom: 10px solid transparent;
      //     border-left: 10px solid transparent;
      //     width: 0;
      //     height: 0;
      //     position: absolute;
      //     bottom: -20px;
      //     left: 60px;
      //   }
      &::after {
        content: "";
        width: 8px;
        height: 8px;
        position: absolute;
        bottom: -4px;
        left: 50%;
        background: #fff;
        transform: translateX(-50%) rotate(45deg);
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  li:hover .image {
    transform: scaleY(1);
  }
}
</style>