<script setup lang="ts">
import {ArticleCard} from "@/entities/article";
import {TitleToLink} from "@/shared/title-to-link";
import type {ArticleCardProps} from './types'
import {Typography} from "@/shared/text";
import {Button} from "@/shared/button";

const props = defineProps<ArticleCardProps>()
</script>

<template>
  <section class="articles">
    <TitleToLink
        :title="title"
        :link="link"
        :link-text="linkText"
    />
    <div class="card-list">
      <ArticleCard
          v-for="card in items"
          :key="card.title"
          class="card-list__item"
      >
        <template #image>
          <img
              class="card-list__image"
              :src="card.image"
              alt="article"
          >
        </template>
        <template #date>
          <div>
            <Typography tag-name="span" size="xs">{{ card.date }}</Typography>
          </div>
        </template>
        <template #title>
          <Typography tag-name="h5" bold>{{ card.title }}</Typography>
        </template>
        <template #description>
          <Typography tag-name="span" size="s">{{ card.description }}</Typography>
        </template>
        <template #button>
          <RouterLink to="/description">
            <Button color="secondary">Подробнее</Button>
          </RouterLink>
        </template>
      </ArticleCard>
    </div>
  </section>
</template>

<style scoped>
.card-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;

  :deep(.size_xs) {
    color: var(--grayscale-hard)
  }

  @media screen and (max-width: 1207px) {
    grid-gap: 32px;
    :deep(h5) {
      font-size: 16px;
    }

    :deep(.size_s) {
      font-size: 12px;
    }

  }
  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-row-gap: 20px;
    :deep(.size_xs) {
      font-size: 8px;
    }
  }
}
.card-list__item:deep(.button.color_secondary) {
  background-color: var(--main-secondary-muted);
  color: var(--main-secondary);
}
.card-list__item:deep(.button) {
  width: 150px;
  @media screen and (max-width: 1207px) {
    height: 40px;
  }
  @media screen and (max-width: 767px) {
    height: 40px;
  }
}
.card-list__item:deep(.button_text) {
  color: var(--main-secondary) !important;
}
.card-list__item:hover:deep(.button.color_secondary) {
  background-color: var(--main-secondary);
  color: var(--main-secondary);
}
.card-list__item:hover:deep(.button_text) {
  color: var(--main-on-primary) !important;
}


.card-list__image {
  overflow: hidden;
  width: 100%;
  height: 162px;
  @media screen and (max-width: 1207px) {
    object-fit: cover;
    width: 224px;
    height: 156px;
  }
  @media screen and (max-width: 767px) {
    width: 336px;
    height: 96px;
  }
}

</style>