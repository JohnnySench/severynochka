<script setup lang="ts">
import {Typography} from "@/shared/text";
import {type CardOfferProps} from "@/entities/offers/card";

const props = defineProps<CardOfferProps>()
</script>

<template>
  <article class="card-offer">
    <div class="card-offer__information">
      <Typography class="card-offer__title" bold tag-name="h4">{{ title }}</Typography>
      <Typography tag-name="span" size="xs">{{ description }}</Typography>
    </div>
    <img class="card-offer__image" :src="image" :alt="title">
  </article>
</template>

<style scoped>
.card-offer {
  cursor: pointer;
  border-radius: 4px;
  padding: 40px 30px;
  background-color: #E5FFDE;
  height: 200px;
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  transition: all .2s ease-in-out;
}

.card-offer:hover {
  background-color: #FCD5BA;
  box-shadow: var(--shadow-primary-m)
}

.card-offer__title {
  margin-bottom: 6px;
}

.card-offer__image {
  position: absolute;
  right: 0;
  top: 0;
}

@media screen and (max-width: 1207px) {
  .card-offer {
    overflow: hidden;
    height: 170px;
    padding: 20px;
  }

  .card-offer__image {
    height: 170px;
    right: -70px;
  }
  .card-offer__title {
    font-size: 18px;
  }
}

@media screen and (max-width: 767px) {
  .card-offer__title {
    font-size: 18px;
  }
  .card-offer__information {
    width: 174px;
  }
}
</style>