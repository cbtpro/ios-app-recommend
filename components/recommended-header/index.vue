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

const list = computed(() => {
  if (searchKey) {
    return topApps.value?.feed.entry.filter((item) => {
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
  return topApps.value?.feed.entry;
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
    width: 750px;
    overflow-x: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
