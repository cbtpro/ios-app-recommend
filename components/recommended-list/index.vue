<template>
  <div class="recommended-list">
    <div
      class="recommended-list-item"
      v-for="(item, index) in list"
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

const searchKey = useState("searchKey", () => "");

const list = computed(() => {
  if (searchKey) {
    return freeApps.value?.feed.entry.filter((item) => {
      const {
        /** 应用名称 */
        "im:name": name,
        /** 应用作者 */
        "im:artist": artist,
        /** 应用描述 */
        summary,
      } = item;
      /** 转换小写后的应用名称 */
      const localeName = name.label ? name.label.toLocaleLowerCase() : '';
      /** 转换小写后的作者 */
      const localArtist = artist.label ? artist.label.toLocaleLowerCase() : '';
      /** 转化小写后的描述 */
      const localSummary = summary.label ? summary.label.toLocaleLowerCase() : '';
      /** 转换小写后的搜索关键词 */
      const localeLowerCaseSearchKey = searchKey.value ? searchKey.value.toLocaleLowerCase() : '';
      /** 是否匹配应用名称 */
      const ifMatchName = localeName.indexOf(localeLowerCaseSearchKey) !== -1;
      /** 是否匹配作者 */
      const ifMatchArtist = localArtist.indexOf(localeLowerCaseSearchKey) !== -1;
      /** 是否匹配描述 */
      const ifMatchSummary =
        localSummary.indexOf(localeLowerCaseSearchKey) !== -1;
      return ifMatchName || ifMatchArtist || ifMatchSummary;
    });
  }
  return freeApps.value?.feed.entry;
});
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
      :deep(.logo) {
        border-radius: 0px;
      }
    }
  }
}
</style>
