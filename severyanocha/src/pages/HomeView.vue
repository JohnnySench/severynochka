<script setup lang="ts">
import {Header} from '@/widgets/header'
import {BottomTabNavigator} from "@/widgets/bottom-tab-navigator";
import {Footer} from "@/widgets/footer";
import {Content} from "@/shared/content";
import {Carousel} from "@/features/carousel";
</script>

<template>
  <Header/>
  <BottomTabNavigator/>
  <Content>
    <template #content>
      <Carousel
        :autoplay="2000"
        :items-to-show="1"
        :wrap-around="true"
      />
    </template>
  </Content>
  <Footer/>
</template>

<style scoped>
</style>
