<script setup lang="ts">
import {TitleToLink} from "@/shared/title-to-link";
import {Tabs} from "@/features/tabs";
import {ref} from "vue";

const tabs = [
  {name: 'Shelur', title: 'п.Щельяюр', id: 1},
  {name: 'Vertep', title: 'д.Вертеп', id: 2},
  {name: 'Redbor', title: 'с.Краснобор', id: 3},
  {name: 'Dieyor', title: 'д.Диюр', id: 4},
]
const selectedTab = ref(1)

const changeTab = (id: number) => selectedTab.value = id
</script>

<template>
  <section class="location">
    <TitleToLink :title="'Наши магазины'"/>
    <Tabs
        :names="tabs"
        :selected-tab="selectedTab"
        @click-on-tab="changeTab"
    >
      <div class="map-container">
        <div class="map-container__item" v-if="selectedTab === 1">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1872.6611221037442!2d39.76718564692446!3d64.55403114793735
            !2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x441842624d86b053%3A0xaf9b0db295232069!2z0JPQmNCf0J_Qng!5e0
              !3m2!1sru!2sru!4v1705836799276!5m2!1sru!2sru"
                  width="1207" height="354" style="border:0;" allowfullscreen loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div class="map-container__item" v-if="selectedTab === 2">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2858.5917582332645!2d39.785361021735724!3d64
              .549972423841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4418423e2a5c874d%3A0x42616057cfef9c07!2z0KbQo9Cc
                !5e0!3m2!1sru!2sru!4v1705836901461!5m2!1sru!2sru" width="600" height="450" style="border:0;"
                  allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
        <div v-if="selectedTab === 3" class="map-container__item">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2447.2192335506647!2d39.781316433751755!
              3d64.53411030176919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x441842f0593806e5%3A0x8473bd3f002d87a3!
                2z0KHQuNGC0Lg!5e0!3m2!1sru!2sru!4v1705837287805!5m2!1sru!2sru" width="600" height="450" style="border:0;"
                  loading="lazy" referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
        <div v-if="selectedTab === 4" class="map-container__item">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4886.764189258715!2d39.84814216551503!3d64.
              57688731996215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4418423ac943913d%3A0x40079abca1c23a08!2z0
                JDQniDCq9Ch0J_QniDCq9CQ0YDQutGC0LjQutCwwrs!5e0!3m2!1sru!2sru!4v1705837420315!5m2!1sru!2sru" width="600"
                  height="450" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </Tabs>
  </section>
</template>

<style scoped>
  .map-container__item {
    height: 354px;
    overflow: hidden;
    border-radius: 4px;
  }
  iframe {
    width: 100% !important;
    height: 354px !important;
  }
  @media screen and (max-width: 1207px) {
    .location:deep(.card-link) {
      margin-bottom: 32px;
    }
  }
  @media screen and (max-width: 767px) {
    .location:deep(.card-link) {
      margin-bottom: 16px;
    }
  }

</style>