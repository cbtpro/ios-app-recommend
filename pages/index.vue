<template>
  <div>
    <CustomSearch />
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

<script setup lang="ts"></script>

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
