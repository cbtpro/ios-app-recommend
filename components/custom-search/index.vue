<template>
  <van-search v-model="searchKey" placeholder="请输入搜索关键词" />
</template>

<script setup lang="ts">
const searchKey = useState('searchKey', () => '')
</script>