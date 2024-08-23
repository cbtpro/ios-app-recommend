<template>
  <div class="container">
    <slot name="title">
      <div class="title">推荐</div>
    </slot>
    <div class="recommend">
      <div
        class="recommend-item"
        v-for="item in topApps?.feed.entry"
        :key="item.id.label"
      >
        <Item :data="item" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAppRequest } from "@/composables/AppRequest";
import useConfig from "@/utils/config";

import Item from "./item.vue";

defineOptions({
  name: "Recommend",
});

const { api, buildApiUrl } = useConfig();

const {
  data: topApps,
  error,
  refresh,
} = await useAsyncData<IOSApp.TopApps>("topApps", async () => {
  const url = buildApiUrl(api.appleTopAppsUrl, { limit: 10 });
  const response = await $fetch(url);
  return JSON.parse(response as string); // 将字符串解析为 JSON 对象
});
</script>

<style lang="scss" scoped>
.container {
  // border-bottom: 8px solid #eee;
  .title {
    font-size: 32px;
    color: #222;
    margin-bottom: 20px;
  }

  .recommend {
    display: flex;
    column-gap: 32px;
    padding: 0 32px;
    justify-content: space-between;
    width: 750px;
    overflow-x: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
