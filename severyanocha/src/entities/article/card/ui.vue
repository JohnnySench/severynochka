<script setup lang="ts">

</script>

<template>
  <article class="article-card">
    <slot name="image"/>
    <div class="article-card__info">
      <slot name="date"/>
      <slot name="title"/>
      <slot name="description"/>
      <slot name="button"/>
    </div>
  </article>
</template>

<style scoped>
  .article-card {
    cursor: pointer;
    overflow: hidden;
    width: 376px;
    height: 420px;
    background-color: var(--main-surface);
    border-radius: 4px;
    box-shadow: var(--shadow-default-xs);
  }
  .article-card:hover {
    box-shadow: var(--shadow-primary-m);
  }
  .article-card__info {
    display: flex;
    flex-direction: column;
    grid-row-gap: 10px;
    padding: 10px;
  }

  @media screen and (max-width: 1207px) {
    .article-card {
      width: 224px;
    }
  }
  @media screen and (max-width: 767px) {
    .article-card {
      width: 336px;
      height: 300px;
    }
  }
</style>