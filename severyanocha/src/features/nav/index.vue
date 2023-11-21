<script setup lang="ts">
interface Props {
  title: string,
  typeIcon: string,
  action: () => void
}

import {Icon} from '@/shared/icon'
import {computed} from "vue";
import {Typography} from "@/shared/text";

const navLinks = computed<Props[]>(() => {
  return [
    {
      title: 'Избранное',
      typeIcon: 'favorite',
      action: () => console.log('перехожу в избранное '),
    },
    {
      title: 'Заказы',
      typeIcon: 'orders',
      action: () => console.log('перехожу в заказы')
    },
    {
      title: 'Корзина',
      typeIcon: 'bucket',
      action: () => console.log('перехожу в корзину')
    }
  ]
})
</script>

<template>
  <div class="nav_wrapper">
    <div
        v-for="(link, index) in navLinks"
        :key="index"
        @click="link.action"
        class="nav-item">
      <div>
        <Icon :type="link.typeIcon"/>
      </div>
      <Typography
          :tag-name="'span'"
          :size="'xs'"
      >
        {{link.title}}
      </Typography>
    </div>
  </div>
</template>

<style scoped>
.nav_wrapper {
  display: flex;
  flex-wrap: nowrap;
}
  .nav-item {
    margin-right: 24px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
</style>