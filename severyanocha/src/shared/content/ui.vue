<script setup lang="ts">
import {Container} from "@/shared/container";
</script>

<template>
  <main class="main">
    <slot name="slider" />
    <Container class="container-content">
      <slot name="content" />
    </Container>
  </main>
</template>

<style scoped>
  .main {
    min-height: calc(100vh - 126px - 72px);
  }
  .container-content {
    margin-top: 80px;
    display: grid;
    flex-direction: column;
    grid-row-gap: 120px;
    margin-bottom: 80px;
  }
  @media screen and (max-width: 1207px) {
    .container-content {
      grid-row-gap: 100px;
    }
  }
  @media screen and (max-width: 767px) {
    .main {
      min-height: calc(100vh - 262px - 72px);
    }
    .container-content {
      grid-row-gap: 80px;
    }
  }
</style>