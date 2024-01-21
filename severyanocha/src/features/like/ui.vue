<script setup lang="ts">
import {Icon} from "@/shared/icon";

interface Props {
  like: boolean
}

const props = withDefaults(defineProps<Props>(), {
  like: false
})
const emits = defineEmits<{(e: 'click'):void}>()
const clickOnLike = () => {
  emits('click')
}
</script>

<template>
  <button :class="['like', like ? 'selected' : 'no-selected']" @click="clickOnLike">
    <Icon type="like" />
  </button>
</template>

<style scoped>
.like {
  display: flex;
  padding: 8px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.like:hover {
  background-color: #FCD5BA;
}
.selected {
  background-color: transparent;
  opacity: unset;
}
.no-selected {
  background-color: var(--grayscale-lightest);
  opacity: 0.5;
}
</style>