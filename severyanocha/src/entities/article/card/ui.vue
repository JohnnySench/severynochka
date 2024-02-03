<script setup lang="ts">

</script>

<template>
  <article class="article-card">
    <slot name="image"/>
    <div class="article-card__info">
      <div>
        <slot name="date"/>
      </div>
      <div>
        <slot name="title"/>
      </div>
      <div>
        <slot name="description"/>
      </div>
      <div>
        <slot name="button"/>
      </div>
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
    height: 256px;
    display: flex;
    flex-direction: column;
    padding: 10px;
    justify-content: space-between;
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
    .article-card__info {
      height: 204px;
    }
  }
</style>