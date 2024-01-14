<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import {Carousel, Slide} from "vue3-carousel";
import bgDesktop from '@/assets/carousel-bg1-desktop.png'
import bgTablet from '@/assets/carousel-bg1-tablet.png'
import bgMobile from '@/assets/carousel-bg1-mobile.png'
import {reactive} from "vue";
import {Typography} from "@/shared/text";

interface Props {
  autoplay: number,
  itemsToShow: number,
  wrapAround: boolean
}

const props = withDefaults(defineProps<Props>(), {
  autoplay: 3000,
  itemsToShow: 1,
  wrapAround: true
})

const slides = reactive([
  {
    label: 'Доставка бесплатно от 1000',
    href: '/',
    background: {
      desktop: bgDesktop,
      tablet: bgTablet,
      mobile: bgMobile
    },
  },
  {
    label: 'Доставка платно',
    href: '/',
    background: {
      desktop: bgDesktop,
      tablet: bgTablet,
      mobile: bgMobile
    },
  },
])

const {autoplay, itemsToShow, wrapAround} = props;
</script>

<template>
  <carousel
      :autoplay="autoplay"
      :items-to-show="itemsToShow"
      :wrap-around="wrapAround"
      class="carousel"
  >
    <slide v-for="slide in slides" :key="slide.label">
      <div class="slide">
        <picture>
          <source class="slide__background" :srcset="slide.background.mobile" media="(max-width:  767px)"/>
          <source class="slide__background" :srcset="slide.background.tablet" media="(max-width:  1207px)"/>
          <img class="slide__background" :src="slide.background.desktop" alt="Фон к слайдеру"/>
        </picture>
        <Typography bold class="slide__text" tag-name="h2">{{ slide.label }}</Typography>
      </div>
    </slide>
  </carousel>
</template>

<style scoped>
.slide {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
}

.slide__background {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  background-color: var(--main-surface);
  object-fit: cover;
}

.slide__text {
  margin-left: 20%;
  user-select: none;
}

@media screen and (max-width: 1207px) {
  .slide {
    height: 160px;
  }

  .slide__text {
    font-size: 24px;
    margin-left: 15%;
  }
}

@media screen and (max-width: 767px) {
  .slide {
    height: 80px;
  }

  .slide__text {
    font-size: 16px;
    margin-left: unset;
  }
}

</style>