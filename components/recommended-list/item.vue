<template>
  <div class="item">
    <a :href="data.link[0].attributes.href">
      <div class="info">
        <img
          :src="data['im:image'][0].label"
          :alt="data['im:image'][0].label"
          class="logo"
        />
        <div class="base-info">
          <h1 class="recommend-item-title single-line-ellipsis">
            {{ data["im:name"].label }}
          </h1>
          <h2 class="recommend-item-sub-title">
            {{ data.category.attributes.label }}
          </h2>
          <div v-if="rating" class="rating">
            <UserRating :rating="rating" :rating-count="ratingCount" />
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  data: IOSApp.Entry;
  additionalDatas: IOSApp.AppDetail;
}
const props = defineProps<IProps>();
const { data, additionalDatas } = toRefs(props);
/** app Id */
const id = data.value.id.attributes["im:id"];
const detailData = computed(() => {
  return additionalDatas.value.results.find((item) => `${item.trackId}` === id);
});
const rating = computed(() => {
  return detailData.value?.averageUserRating;
})
const ratingCount = computed(() => {
  return detailData.value?.userRatingCount;
})
</script>

<style lang="scss" scoped>
.item {
  width: 686px;
  // height: 128px;
  display: flex;
  flex-direction: row;
  row-gap: 32px;
  .info {
    display: flex;
    flex-direction: row;
    .logo {
      width: 128px;
      height: 128px;
      border-radius: 25%;
    }
    .base-info {
      margin-left: 16px;
      .recommend-item-title {
        font-size: 32px;
        color: #000;
        font-weight: 400;
      }

      .recommend-item-sub-title {
        font-size: 28px;
        width: 128px;
        color: #5b55558f;
        font-weight: 400;
        text-align: left;
        text-wrap: nowrap;
      }
    }
  }
}
</style>
