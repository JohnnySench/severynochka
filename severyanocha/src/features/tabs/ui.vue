<script setup lang="ts">
import {Typography} from "@/shared/text";

interface Props {
  names: { name: string, title: string, id: number }[],
  selectedTab?: number
}

const props = withDefaults(defineProps<Props>(), {
  selectedTab: 1
})
const emits = defineEmits<{(e: 'click-on-tab', id: number): void }>()
const changeTab = (id: number) => {
  emits('click-on-tab', id)
}

</script>

<template>
  <div class="tab-nav">
    <button
        v-for="tab in names"
        :key="tab.name"
        :class="['tab-nav__item', {'selected': tab.id === selectedTab}]"
        @click="changeTab(tab.id)"
    >
      <Typography class="item__text" tag-name="span" size="xs">{{tab.title}}</Typography>
    </button>
  </div>
  <div class="tab-content">
    <slot />
  </div>
</template>

<style scoped>
.tab-nav {
  display: grid;
  align-items: center;
  grid-gap: 24px;
  grid-template-columns: repeat(4, max-content);
  margin-bottom: 24px;

  @media screen and (max-width: 1207px) {
    grid-gap: 16px;
    margin-bottom: 16px;
  }
  @media screen and (max-width: 767px) {
    grid-gap: 8px;
    margin-bottom: 16px;
    grid-template-columns: repeat(3, max-content);
  }
}

.tab-nav__item {
  border: none;
  border-radius: 4px;
  padding: 4px 8px;
  height: 32px;
  width: max-content;
  background-color: var(--grayscale-lightest);
}

.item__text {
  color: var(--grayscale-hardest);
}
.selected .item__text {
  color: var(--main-on-secondary);
}

.tab-nav__item:hover {
  box-shadow: var(--shadow-default-l);
  color: #fff;
  transition: 0.2s
}

.tab-nav__item.selected {
  background-color: var(--main-secondary);
  color: #fff;
}
.selected:hover {
  box-shadow: var(--shadow-secondary-l);
}

.tab-content {
  border-radius: 4px;
  width: 100%;
  background: #fff;
}
</style>