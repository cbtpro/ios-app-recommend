<template>
  <van-search v-model="searchKey" placeholder="Search…" @update:model-value="onSearchHandle" />
</template>

<script setup lang="ts">
import { debounce } from '@/utils/perf';

interface IProps {
  modelValue?: string;
}

defineOptions({
  name: 'CustomSearch'
})

const props = withDefaults(defineProps<IProps>(), {
  modelValue: '',
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const { modelValue } = toRefs(props)
const searchKey = ref(modelValue.value)

watch(modelValue, (value, oldValue) => {
  if (value !== oldValue) {
    searchKey.value = value
  }
})

const onSearchHandle = debounce((value: string) => {
  emit('update:modelValue', value)
}, 800)

</script>