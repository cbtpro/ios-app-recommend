<template>
  <div class="container">
    <slot name="title">
      <div class="title">推荐</div>
    </slot>
    <div class="recommend">
      <div class="recommend-item" v-for="item in list" :key="item.id.label">
        <Item :data="item" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import useConfig from "@/utils/config";
import { filterFn } from '@/utils/index'

import Item from "./item.vue";

defineOptions({
  name: "RecommendHeader",
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

const searchKey = useState("searchKey", () => "");

const list = ref(topApps.value?.feed.entry)

watch(searchKey, (value, oldValue) => {
  if (!value) {
    list.value = topApps.value?.feed.entry;
  } else if (value !== oldValue) {
    list.value = topApps.value? filterFn(topApps.value, value) : [];
  }
})
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
    // width: 750px;
    overflow-x: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
