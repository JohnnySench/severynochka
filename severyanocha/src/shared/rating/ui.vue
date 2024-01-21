<script setup lang="ts">
import {Icon} from "@/shared/icon";
import {computed} from "vue";

interface Props {
  rating: number
}

const props = withDefaults(defineProps<Props>(), {
  rating: 0
})

const stars = computed(() => {
  let starsSettings = []
  for (let i = 0; i < 5; i++) {
    if (i >= props.rating) {
      const set = {
        isCompleted: false,
        type: 'star'
      }
      starsSettings.push(set)
    } else {
      const set = {
        isCompleted: true,
        type: 'starDone'
      }
      starsSettings.push(set)
    }
  }
  return starsSettings
})


</script>

<template>
  <Icon
      v-for="(star, index) in stars"
      :key="index"
      :type="star.isCompleted ? 'starDone' : 'star'"
  />
</template>

<style scoped>

</style>