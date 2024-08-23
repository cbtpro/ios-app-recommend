<template>
  <van-search v-model="searchKey" placeholder="Search…" />
</template>

<script setup lang="ts">
const searchKey = useState('searchKey', () => '')
</script>