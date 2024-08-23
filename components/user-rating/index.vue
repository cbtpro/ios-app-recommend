<template>
  <van-rate
    v-bind:model-value="rating"
    :size="16"
    color="#ffd21e"
    void-icon="star"
    void-color="#eee"
  />
  ({{ ratingCount }})
</template>

<script setup lang="ts">
defineOptions({
  name: "UserRating",
});
interface IProps {
  /** 评分 */
  rating?: number;
  /** 评分人数 */
  ratingCount?: number;
  /** 默认尺寸 */
  size?: number,
}
withDefaults(defineProps<IProps>(), {
  rating: 0,
  ratingCount: 0,
  /** 默认尺寸 */
  size: 18,
})

</script>
