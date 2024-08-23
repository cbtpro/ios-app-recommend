<template>
  <div>
    <van-sticky>
      <CustomSearch v-model="searchKey" />
    </van-sticky>
    <RecommendedHeader>
      <template #title>
        <h1 class="title">
          <div class="text">Recommend</div>
        </h1>
      </template>
    </RecommendedHeader>
    <RecommendedList />
  </div>
</template>

<script setup lang="ts">
/**
 * 筛选关键词，支持应用名称、开发者名称、应用描述
 * 全局状态管理
 */
const searchKey = useState('searchKey', () => '')

</script>

<style lang="scss" scoped>
.title {
  display: flex;
  align-items: center;
  height: 80px;
  padding: 0 32px;
  .text {
    font-size: 32px;
    font-weight: 400;
  }
}
</style>
