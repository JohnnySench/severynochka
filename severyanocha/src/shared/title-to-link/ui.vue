<script setup lang="ts">
import {Typography} from "@/shared/text";
import {Button} from "@/shared/button/index";
import {Icon} from "@/shared/icon/index";

interface Props {
  title: string,
  link?: string,
  linkText?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Акции',
})
</script>

<template>
  <div class="card-link">
    <Typography tag-name="h3" bold>{{ title }}</Typography>
    <RouterLink v-if="!!link" class="link" :to="link">
      <Typography class="link__text" tag-name="span" size="s">{{ linkText }}</Typography>
      <Button
          class="link__button"
          decoration="none"
          size="M"
      >
        <template #leftIcon>
          <Icon type="chevron"/>
        </template>
      </Button>
    </RouterLink>
  </div>
</template>

<style scoped>
.card-link {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 41px;
}
.link__text {
  padding: 8px;
}
.link__text:deep(span) {
  cursor: pointer;
}
.link__button:deep(svg) {
  cursor: pointer;
  transform: rotate(-90deg);
}
.link__button {
  padding: 0 !important;
}
.link {
  display: grid;
  grid-column-gap: 8px;
  grid-template-columns: repeat(2, max-content);
  align-items: center;
}
@media screen and (max-width: 1207px) {
   .card-link {
     margin-bottom: 32px;
   }
}
@media screen and (max-width: 767px) {
  .card-link {
    margin-bottom: 16px;
  }
  .card-link:deep(h3) {
    font-size: 24px;
  }
  .link {
    grid-column-gap: 8px;
  }
}
</style>