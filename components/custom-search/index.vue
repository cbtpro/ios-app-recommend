<template>
  <van-search v-model="searchKey" placeholder="Search…" @update:model-value="onSearchHandle" />
</template>

<script setup lang="ts">
import { debounce } from '@/utils/perf';

defineOptions({
  name: 'CustomSearch'
})

const model = defineModel({ type: String })

const searchKey = ref(model.value)

const onSearchHandle = debounce((value: string) => {
  model.value = value
}, 300)

</script>