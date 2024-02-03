<script setup lang="ts">
import {Header} from '@/widgets/header'
import {BottomTabNavigator} from "@/widgets/bottom-tab-navigator";
import {Footer} from "@/widgets/footer";
import {Content} from "@/shared/content";
import {Carousel} from "@/features/carousel";
import {Products} from "@/widgets/products";
import {Articles} from "@/widgets/articles";
import {LocationMap} from "@/widgets/location";
import {SpecialOffers} from "@/widgets/special-offers";
import {reactive} from "vue";

import product1PNG from "@/assets/product-1.png"
import product2PNG from "@/assets/product-2.png"
import product3PNG from "@/assets/product-3.png"
import product4PNG from "@/assets/product-4.png"
import offer1PNG from "@/assets/offer-1.png"
import offer2PNG from "@/assets/offer-2.png"
import article1PNG from '@/assets/article1PNG.png'
import article2PNG from '@/assets/article2PNG.png'
import article3PNG from '@/assets/article3PNG.png'

const specialOffers = reactive([
  {
    title: 'Оформите карту «Северяночка»',
    href: '/',
    description: 'И получайте бонусы при покупке в магазинах и на сайте',
    image: offer1PNG
  },
  {
    title: 'Покупайте акционные товары',
    href: '/',
    description: 'И получайте вдвое больше бонусов',
    image: offer2PNG
  },
])
const productCards = reactive([
  {
    title: "Акции",
    link: "/",
    linkText: "Все акции",
    items: [
      {
        nameProduct: "Г/Ц Блинчики с мясом вес, Россия",
        img: product1PNG,
        discount: 50,
        priceDiscount: "44,50",
        price: "50,50",
        rating: 3,
        id: 22333,
        like: true
      },
      {
        nameProduct: "Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное",
        img: product2PNG,
        discount: 50,
        priceDiscount: "44,50",
        price: "50,50",
        rating: 2,
        id: 21212,
        like: false,
      },
      {
        nameProduct: "Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан",
        img: product3PNG,
        discount: 50,
        priceDiscount: "44,50",
        price: "50,50",
        rating: 2,
        id: 21210,
        like: false,
      },
      {
        nameProduct: "Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сыром",
        img: product4PNG,
        discount: 50,
        priceDiscount: "44,50",
        price: "50,50",
        rating: 2,
        id: 21131,
        like: false
      }
    ]
  },
  {
    title: "Новинки",
    link: "/",
    linkText: "Все новинки",
    items: [
      {
        nameProduct: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
        img: product1PNG,
        discount: 0,
        priceDiscount: null,
        price: "599,99",
        rating: 2,
        id: 10221,
        like: false,
      }
    ]
  }
])
const articleCards = reactive([
  {
    title: "Статьи",
    link: "/article",
    linkText: "Все статьи",
    items: [
      {
        title: "Режим использования масок и перчаток на территории магазинов",
        description: "Подробная информация о режимах использования масок и перчаток на территории магазинов \"ЛЕНТА\". Информация обновляется каждый будний день.",
        date: '05.03.2021',
        image: article1PNG
      },
      {
        title: "Весеннее настроение для каждой",
        description: "8 Марта – это не просто Международный женский день, это ещё день тюльпанов, приятных сюрпризов и праздничных тёплых пожеланий",
        date: '05.07.2021',
        image: article2PNG
      },
      {
        title: "ЗОЖ или ФАСТФУД. А вы на чьей стороне? Голосуем!",
        description: "Голосуйте за любимые категории, выбирайте категорию-победителя в мобильном приложении и получайте кешбэк 10% баллами в апреле!",
        date: '22.02.2020',
        image: article3PNG
      },
    ]
  },
])
const addToBasket = (id: number) => console.log(id)
</script>

<template>
  <Header/>
  <BottomTabNavigator/>
  <Content>
    <template #slider>
      <Carousel
          :autoplay="3000"
          :items-to-show="1"
          :wrap-around="true"
      />
    </template>
    <template #content>
      <Products
          v-for="card in productCards"
          :key="card.linkText"
          :items="card.items"
          :link-text="card.linkText"
          :link="card.link"
          :title="card.title"
          @add-to-basket="addToBasket"
      />
      <SpecialOffers :data="specialOffers"/>
      <LocationMap/>
      <Articles
          v-for="({items, linkText, link, title}) in articleCards"
          :key="title"
          :items="items"
          :link-text="linkText"
          :link="link"
          :title="title"
      />
    </template>
  </Content>
  <Footer/>
</template>

<style scoped>
</style>
