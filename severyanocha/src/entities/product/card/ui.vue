<script setup lang="ts">
import {useSlots} from "vue";
import {Typography} from "@/shared/text";
import {Rating} from "@/shared/rating";


const slots = useSlots()
</script>

<template>
  <article :class="['product-card', slots.discount ? '' : 'card']">
    <div class="product-card__header header">
      <div class="product-card__image">
        <slot name="image"></slot>
      </div>
      <div v-if="slots.basket" class="header__top">
        <slot name="basket"></slot>
        <slot name="like"></slot>
      </div>
      <div v-else class="header__top---right">
        <slot name="like"></slot>
      </div>
      <div class="header__bottom">
        <slot name="discount"></slot>
      </div>
    </div>
    <div class="product-card__information information">
      <div v-if="slots.discount" class="information__price price">
        <div class="price__discount">
          <div>
            <slot name="priceDiscount"/>
          </div>
          <Typography class="price__text" tag-name="span" size="xs">С картой</Typography>
        </div>
        <div class="price__no-discount">
          <div>
            <slot name="fullPrice"/>
          </div>
          <Typography class="price__text" tag-name="span" size="xs">Обычная</Typography>
        </div>
      </div>
      <div v-else class="information__price full-price">
        <div class="price__no-discount">
          <slot name="fullPrice"></slot>
        </div>
      </div>
      <div class="information__name-product">
        <slot name="nameProduct"/>
      </div>
      <div class="information__stars">
        <slot name="stars"/>
      </div>
      <div class="information__button">
        <slot name="button" />
      </div>
    </div>
  </article>
</template>

<style scoped>
.information {
  padding: 0 8px 8px 8px;
}
.product-card {
  border-radius: 4px;
  overflow: hidden;
  box-shadow: var(--shadow-default-xs);
  height: 349px;
  background-color: var(--main-surface);
}
.product-card:hover {
  box-shadow: var(--shadow-primary-m);
}
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.product-card__image {
  height: 160px;
  align-items: center;
  display: flex;
}
.information__price {
  margin-bottom: 8px;
}
.information__name-product {
  margin-bottom: 8px;
}
.information__stars {
  height: 16px;
  margin-bottom: 8px;
}
.price {
  height: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.price .price__no-discount {
  text-align: right;
}
.price__text {
  color: var(--grayscale-light)
}
.header {
  margin-bottom: 8px;
  position: relative;
}
.header__bottom {
  position: absolute;
  left: 10px;
  bottom: 10px;
}

.header__top {
  position: absolute;
  top: 8px;
  left: 8px;
  right: 8px;
  display: flex;
  justify-content: space-between;
}
.header__top---right {
  position: absolute;
  top: 8px;
  left: 8px;
  right: 8px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

@media screen and (max-width: 767px) {
  .product-card {
    height: 343px;
  }
  .information {
    height: 175px;
  }
  .price {
    height: 33px;
  }
  .information__name-product {
    height: 54px;
  }

}
</style>