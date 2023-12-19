<script setup lang="ts">

</script>

<template>
  <div class="container">
    <slot/>
  </div>
</template>

<style scoped>
  .container {
    max-width: 1208px;
    margin: 0 auto;
    width: 100%;
  }
  @media screen and (max-width: 1207px) {
    .container {
      max-width: 768px;
    }
  }
  @media screen and (max-width: 767px) {
    .container {
      max-width: 336px;
    }
  }
</style>