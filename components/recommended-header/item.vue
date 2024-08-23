<template>
  <div class="item">
    <a :href="data.link[0].attributes.href">
      <img :src="data['im:image'][0].label" alt="data['im:image'][0].label" class="logo" />
      <h1 class="recommend-item-title single-line-ellipsis">{{ data["im:name"].label }}</h1>
      <h2 class="recommend-item-sub-title">游戏</h2>
    </a>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  data: IOSApp.Entry
}
defineProps<IProps>()
</script>


<style lang="scss" scoped>
.item {
  width: 128px;
  // height: 128px;
  display: flex;
  column-gap: 32px;
  .logo {
    width: 128px;
    height: 128px;
    border-radius: 25%;
  }
  .recommend-item-title {
    font-size: 32px;
    width: 128px;
    color: #000;
    font-weight: 400;
  }

  .recommend-item-sub-title {
    font-size: 32px;
    width: 128px;
    color: #5b55558f;
    font-weight: 400;
    text-align: center;
  }
}
</style>