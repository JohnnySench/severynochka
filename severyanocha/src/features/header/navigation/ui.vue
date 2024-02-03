<script setup lang="ts">
import {Typography} from "@/shared/text";
import {Icon} from "@/shared/icon";
import {useBasketStore} from "@/entities/product";
import {storeToRefs} from "pinia";


interface Props {
  data: {
    label: string,
    icon: string,
    count: number,
    link: string
  }[]
}
const {countBasket} = storeToRefs(useBasketStore())
const props = defineProps<Props>()
const {data} = props
</script>

<template>
  <nav class="header-navigation">
    <ul class="header-navigation_list">
      <li v-for="item in data" :key="item.label" class="list-item">
        <RouterLink :to="item.link" class="item">
          <Icon :type="item.icon"/>
          <Typography tag-name="span" size="xs">{{ item.label }}</Typography>
          <span v-if="item.count > 0" class="item_count">{{countBasket}}</span>
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.header-navigation_list {
  display: flex;
  grid-gap: 24px;
}
.item {
  position: relative;
  display: flex;
  grid-gap: 8px;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
}
.item_count {
  font-size: 12px;
  position: absolute;
  right: 6px;
  top: -6px;
  padding: 2px 4px;
  color: var(--main-on-primary);
  background: var(--main-primary);
  border-radius: 4px;
}
</style>