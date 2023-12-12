<script setup lang="ts">
import {Avatar} from "@/shared/avatar";
import {Typography} from "@/shared/text";
import {Button} from "@/shared/button";
import {Icon} from "@/shared/icon";
import {onBeforeUnmount, onMounted, ref} from "vue";
import {usePersonStore} from "@/entities/person";

interface Props {
  data: {
    avatar: string,
    name: string,
    menu?: any[]
  }
}

const props = defineProps<Props>()
const {data} = props
const personStore = usePersonStore();
const {setIsAuth} = personStore;
const isLocalVisible = ref(false)


const toggleVisibleMenu = () => {
  isLocalVisible.value = !isLocalVisible.value
}
const onClickItem = (value: string) => {
  if (value === 'logout') {
    setIsAuth(false)
  }
}
const isCloseMenu = () => {
  isLocalVisible.value = false
}

onBeforeUnmount(() => {
  document.removeEventListener('click', isCloseMenu)
})
onMounted(() => {
  document.addEventListener('click', isCloseMenu)
})
</script>

<template>
  <div @click.stop :class="['user-menu', `is-open_${isLocalVisible}`]">
    <Avatar
        class="user-menu_avatar"
        :img="data.avatar"
        @click="toggleVisibleMenu"
    />
    <Typography
        class="user-menu_name"
        tag-name="span"
        size="s"
        @click="toggleVisibleMenu"
    >
      {{ data.name }}
    </Typography>
    <Button
        class="user-menu_button"
        decoration="none"
        @click="toggleVisibleMenu"

    >
      <template #leftIcon>
        <Icon type="chevron"/>
      </template>
    </Button>
    <ul v-if="isLocalVisible" class="user-menu_list">
      <li
          v-for="(item, index) in data.menu"
          :key="`${item.label}-${index}`"
          class="list_item"
      >
        <RouterLink
            v-if="item.link"
            :to="item.link"
            class="item_link"
        >
          <Typography
              tag-name="span"
              size="m"
              class="item_text"
          >
            {{ item.label }}
          </Typography>
        </RouterLink>
        <Typography
            v-else
            tag-name="span"
            size="m"
            class="item_text"
            @click="onClickItem(item.action)"
        >
          {{ item.label }}
        </Typography>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.user-menu {
  align-items: center;
  grid-gap: 10px;
  display: grid;
  grid-template-columns: max-content 1fr max-content;
  padding: 8px;
}

.user-menu.is-open_true {
  border-radius: 4px;
  background-color: var(--main-surface);
  box-shadow: var(--shadow-default-s);
}

.user-menu_avatar,
.user-menu_name,
.user-menu_button {
  cursor: pointer;
}

.item_link {
  text-decoration: none;
}

.list_item {
  padding: 8px;
  cursor: pointer;
  user-select: none;
}

.user-menu_list {
  display: grid;
  grid-gap: 10px;
  grid-column: 1/4;
}

@media screen and (max-width: 1207px) {
  .user-menu_name,
  .user-menu_button {
    display: none;
  }
  .user-menu {
    grid-template-columns: 1fr;
  }
  .user-menu_list {
    grid-column: unset;
  }
}
</style>