<template>
  <div class="recommended-list">
    <div
      class="recommended-list-item"
      v-for="(item, index) in freeApps?.feed.entry"
      :key="item.id.label"
    >
      <Item :index="index" :data="item" :additional-datas="additionalDatas" />
    </div>
  </div>
</template>

<script setup lang="ts">
import useConfig from "@/utils/config";

import Item from "./item.vue";

defineOptions({
  name: "RecommendFreeApps",
});

const { api, buildApiUrl } = useConfig();

const {
  data: freeApps,
  error,
  refresh,
} = await useAsyncData<IOSApp.TopApps>("freeApps", async () => {
  const url = buildApiUrl(api.appleTopFreeAppsUrl, { limit: 100 });
  const response = await $fetch(url);
  const data = JSON.parse(response as string) as IOSApp.TopApps;
  return data; // 将字符串解析为 JSON 对象
});

/**
 * 使用响应式数据处理初次查询的数据
 */
const {
  data: additionalDatas,
  error: additionalError,
  refresh: refreshAdditionalData,
} = useAsyncData<IOSApp.AppDetail | undefined>(
  "additionalData",
  async () => {
    if (!freeApps.value) {
      return undefined;
    }
    const ids = freeApps.value.feed.entry.map(
      (item) => item.id.attributes["im:id"]
    );
    if (!ids) {
      return undefined;
    }
    const url = buildApiUrl(api.appleLookupApsUrl, {
      id: ids.filter((item) => !!item).join(","),
    });
    const response = await $fetch(url);
    const data = JSON.parse(response as string) as IOSApp.AppDetail;
    return data; // 将字符串解析为 JSON 对象
  },
  {
    immediate: true,
  }
);

</script>

<style lang="scss" scoped>
.recommended-list {
  padding: 32px 32px;
  width: 750px;
  display: flex;
  row-gap: 16px;
  flex-direction: column;
  .recommended-list-item {
    &:nth-of-type(odd) {
      ::v-deep .logo {
        border-radius: 0px;
      }
    }
  }
}
</style>
