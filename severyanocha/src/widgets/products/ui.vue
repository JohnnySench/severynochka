<script setup lang="ts">
import {TitleToLink} from "@/shared/title-to-link";
import {ProductCard} from "@/entities/product"
import {Button} from "@/shared/button";
import type {ProductCardProps} from "./types";
import {Typography} from "@/shared/text";
import {Rating} from "@/shared/rating";
import {Like} from "@/features/like";

const {items, title, linkText, link} = defineProps<ProductCardProps>()
const emits = defineEmits<{ (e: 'add-to-basket', id: number): void }>()
const addToBasket = (id: number) => {
  emits('add-to-basket', id)
}
</script>

<template>
  <section class="card">
    <TitleToLink
        :title="title"
        :link="link"
        :link-text="linkText"
    />
    <div class="card-list">
      <ProductCard
          v-for="card in items"
          :key="card.nameProduct"
      >
        <template #image>
          <img class="card-list__image" :src="card.img" :alt="card.nameProduct">
        </template>
        <template #like>
          <Like :like="card.like"/>
        </template>
        <template v-if="card.discount" #discount>
          <Button
              size="S"
              color="primary"
              class="card__btn-discount"
          >
            <template #default>
              <span>-{{ card.discount }}%</span>
            </template>
          </Button>
        </template>
        <template #priceDiscount>
          <Typography class="card-list__price-discount" tag-name="h5" bold>{{ card.priceDiscount }}₽</Typography>
        </template>
        <template #fullPrice>
          <Typography class="card-list__full-price" tag-name="h5" :bold="!card.discount">{{ card.price }}₽</Typography>
        </template>
        <template #nameProduct>
          <Typography class="card-list__name-product" tag-name="span">{{ card.nameProduct }}</Typography>
        </template>
        <template #stars>
          <Rating :rating="card.rating"/>
        </template>
        <template #button>
          <Button
              color="secondary"
              class="card__btn"
              @click="addToBasket(card.id)"
          >
            <template #default>
              <span>В корзину</span>
            </template>
          </Button>
        </template>
      </ProductCard>
    </div>
  </section>
</template>

<style scoped>
.card {
  margin-bottom: 119px;
}
.card:last-child {
  margin-bottom: 0;
}

.card__btn-discount {
  width: 56px;
  height: 32px;
}

.card-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 40px;
}

.card-list:deep(span) {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}


@media screen and (max-width: 1207px) {
  .card-list {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 32px;
  }

  .card-list__image {
    object-fit: contain;
    width: 100%;
  }

}

@media screen and (max-width: 767px) {
  .card-list {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 16px;
  }
  .card-list__name-product {
    font-size: 12px;
  }
  .card-list:deep(span) {
    -webkit-line-clamp: 3;
  }
  .card-list__price-discount {
    font-size: 14px;
  }
  .card-list__full-price {
    font-size: 12px;
  }
}
</style>