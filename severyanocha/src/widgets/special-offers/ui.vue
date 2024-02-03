<script setup lang="ts">
import {CardOffer, type CardOfferProps} from "@/entities/offers";
import {TitleToLink} from "@/shared/title-to-link";


interface Props {
  data: CardOfferProps[]
}

const props = defineProps<Props>()
</script>

<template>
  <section class="special-offers">
    <TitleToLink :title="'Специальные предложения'"/>
    <div class="special-offers__cards">
      <CardOffer
          v-for="item in data"
          :key="item.title"
          :title="item.title"
          :description="item.description"
          :href="item.href"
          :image="item.image"
      />
    </div>
  </section>
</template>

<style scoped>
.special-offers__cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px;
}

@media screen and (max-width: 1207px) {
  .special-offers__cards {
    grid-gap: 32px;
  }
  .special-offers:deep(.card-link) {
    margin-bottom: 32px;
  }
}

@media screen and (max-width: 767px) {
  .special-offers__cards {
    grid-template-columns: 1fr;
    grid-gap: 16px;
  }
  .special-offers:deep(.card-link) {
    margin-bottom: 16px;
  }
}
</style>