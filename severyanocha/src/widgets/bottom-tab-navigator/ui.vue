<script setup lang="ts">
import {UserMenu, useUserMenuStore} from "@/features/header/user-menu";
import {Button} from "@/shared/button";
import {Icon} from "@/shared/icon";
import {usePersonStore} from "@/entities/person";
import {storeToRefs} from "pinia";
import {reactive} from "vue";
import {Navigation} from "@/features/header/navigation";
import {Container} from "@/shared/container";

const personStore = usePersonStore();
const userMenuStore = useUserMenuStore()
const {menu} = storeToRefs(userMenuStore)
const {person, isAuth} = storeToRefs(personStore)

const userMenu = reactive({
  avatar: person.value.avatar,
  name: person.value.name,
  menu: menu
})
const navItems = reactive([
  {label: 'Каталог', icon: 'menu', count: 0, link: '/catalog'},
  {label: 'Избранное', icon: 'favorite', count: 0, link: '/favorite'},
  {label: 'Заказы', icon: 'orders', count: 0, link: '/orders'},
  {label: 'Корзина', icon: 'cart', count: 1, link: '/cart'},
])
</script>

<template>
  <div class="bottom-tab-navigator">
    <Container>
      <div class="bottom-tab-navigator_content">
        <Navigation :data="navItems"/>
        <UserMenu v-if="isAuth" :data="userMenu"/>
        <Button
            v-else
            color="primary"
            class="bottom-tab-navigator_login-btn"
        >
          <template #default>
            Войти
          </template>
          <template #rightIcon>
            <Icon type="login"/>
          </template>
        </Button>
      </div>
    </Container>
  </div>
</template>

<style scoped>
.bottom-tab-navigator {
  position: fixed;
  bottom: 0;
  left: 0;
  display: none;
  width: 100%;
  padding: 0 16px;
  height: 56px;
  box-shadow: var(--shadow-default-s);
  background-color: var(--main-surface);
}

.bottom-tab-navigator_content {
  display: grid;
  grid-template-columns: 1fr max-content;
  align-items: center;
  grid-gap: 5%;
  padding-top: 3px;
}

.bottom-tab-navigator:deep(.header-navigation_list) {
  justify-content: space-between;
}

.bottom-tab-navigator:deep(.item) {
  grid-gap: 4px;
}

.bottom-tab-navigator:deep(path) {
  fill: var(--main-on-surface);
}
.bottom-tab-navigator:deep(.user-menu) {
  position: relative;
  padding: 5px;
}
.bottom-tab-navigator:deep(.is-open_true) {
  box-shadow: unset;
}
.bottom-tab-navigator:deep(.user-menu_list) {
  position: absolute;
  bottom: 58px;
  right: 0;
  box-shadow: var(--shadow-default-s);
  border-radius: 5px;
  padding: 8px;
}

:deep(.item_count) {
  top: -3px;
  right: 0;
}

@media screen and (max-width: 767px) {
  .bottom-tab-navigator {
    display: flex;
  }
}

</style>