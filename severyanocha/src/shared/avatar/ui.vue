<script setup lang="ts">
interface Props {
  img: string
}
const props = defineProps<Props>()
const {img} = props
</script>

<template>
  <div class="avatar">
    <img :src="img" alt="avatar">
  </div>
</template>

<style scoped>
  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
  }
</style>