<script setup lang="ts">
import {Container} from "@/shared/container";
import Typography from "@/shared/text/ui/Typography.vue";
import {useCatalogStore} from "@/entities/catalog";
import {storeToRefs} from "pinia";

const catalogStore = useCatalogStore()
const {getCatalogSections} = storeToRefs(catalogStore)
</script>

<template>
  <div class="dropdown-menu">
    <Container>
      <ul class="dropdown-menu_list">
        <li
            v-for="section in getCatalogSections"
            :key="section.label"
            class="list_item"
        >
          <RouterLink :to="section.link">
            <Typography
                class="item__text"
                bold
                size="s"
                tag-name="span"
            >
              {{ section.label }}
            </Typography>
          </RouterLink>
        </li>
      </ul>
    </Container>
  </div>
</template>

<style scoped>
.dropdown-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--main-surface);
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, .15);
  animation: .5s 1 forwards slideDown;
  opacity: 0;
}

.dropdown-menu_list {
  padding: 40px 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 24px;
}

.item__text:hover {
  color: var(--main-primary);
}

@keyframes slideDown {
  from {
    top: 0;
    opacity: 0;
  }
  to {
    opacity: 1;
    top: 72px;
  }
}
</style>