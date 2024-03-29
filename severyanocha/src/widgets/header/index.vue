<script setup lang="ts">
import {Container} from "@/shared/container";
import {Logo} from '@/shared/logo'
import {Button} from '@/shared/button'
import {Icon} from '@/shared/icon'
import {Field} from '@/shared/field'
import {Navigation} from "@/features/header/navigation";
import {UserMenu} from "@/features/header/user-menu";
import {DropdownMenu} from "@/features/header/dropdown-menu";
import {reactive, ref} from "vue";
import {usePersonStore} from "@/entities/person";
import {useScreenStore} from "@/entities/screen";
import {storeToRefs} from "pinia";

const screenStore = useScreenStore()
const {getPlatform} = storeToRefs(screenStore)
const personStore = usePersonStore();
const {person, isAuth} = storeToRefs(personStore)
const navItems = reactive([
  {label: 'Избранное', icon: 'favorite', count: 0, link: '/favorite'},
  {label: 'Заказы', icon: 'orders', count: 0, link: '/orders'},
  {label: 'Корзина', icon: 'cart', count: 1, link: '/cart'},
])
const userMenu = reactive({
  avatar: person.value.avatar,
  name: person.value.name,
  menu: [
    {
      label: 'Профиль',
      link: '/profile'
    },
    {
      label: 'Выйти',
      action: 'logout'
    }
  ]
})
const searchField = ref('')
const isDropdownHidden = ref<boolean>(true)
const onSubmit = () => console.log('SEND TO SERVER')
const toggleDropdown = () => isDropdownHidden.value = !isDropdownHidden.value
</script>

<template>
  <header class="header">
    <div class="header_content">
      <Container class="header_container">
        <div class="header_logo">
          <RouterLink to="/">
            <Logo
                :bg-color="'white'"
                colorful
                :orientation="'horizontal'"
                :with-text="getPlatform === 'desktop'"
            />
          </RouterLink>
        </div>
        <div class="header_catalog">
          <Button
              @mouseenter="toggleDropdown"
              color="secondary"
          >
            <template #leftIcon>
              <Icon type="menu"/>
            </template>
            <template #default>
              Каталог
            </template>
          </Button>
        </div>
        <div class="header_search">
          <Field
              v-model="searchField"
              placeholder="Найти товар"
              size="m"
              :on-submit="onSubmit"
          >
            <template #rightIcon>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M2.5 10.5C2.5 6.08172 6.08172 2.5 10.5 2.5C14.9183 2.5 18.5 6.08172 18.5 10.5C18.5 14.9183 14.9183 18.5 10.5 18.5C6.08172 18.5 2.5 14.9183 2.5 10.5ZM10.5 3.5C6.63401 3.5 3.5 6.63401 3.5 10.5C3.5 14.366 6.63401 17.5 10.5 17.5C14.366 17.5 17.5 14.366 17.5 10.5C17.5 6.63401 14.366 3.5 10.5 3.5Z"
                      fill="#414141"/>
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M15.4463 15.4464C15.6415 15.2512 15.9581 15.2512 16.1534 15.4464L21.3534 20.6464C21.5486 20.8417 21.5486 21.1583 21.3534 21.3535C21.1581 21.5488 20.8415 21.5488 20.6463 21.3535L15.4463 16.1535C15.251 15.9583 15.251 15.6417 15.4463 15.4464Z"
                      fill="#414141"/>
              </svg>
            </template>
          </Field>
        </div>
        <div class="header_navigation">
          <Navigation :data="navItems"/>
        </div>
        <div class="header_user-menu">
          <UserMenu v-if="isAuth" :data="userMenu"/>
          <Button
              v-else
              color="primary"
              class="header_login-btn"
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
    <DropdownMenu
        v-if="!isDropdownHidden"
        @mouseleave="toggleDropdown"
    />
  </header>
</template>

<style scoped>

.header_container {
  height: 72px;
  display: flex;
  align-items: center;
  background: var(--main-surface);
}

.header {
  position: sticky;
  top: 0;
  left: 0;
  z-index: 2;
}

.header_content {
  position: relative;
  z-index: 1;
  box-shadow: var(--shadow-default-s);
  background-color: #FFFFFF;
}

.header_catalog {
  width: 140px;
  margin-left: 40px;
}

.header_search {
  width: 374px;
  margin-left: 16px;
}

.header_navigation {
  margin: 0 24px 0 40px;
}

.header_user-menu {
  width: 217px;
  position: relative;
}

.header_user-menu:deep(.user-menu) {
  position: absolute;
  left: 0;
  top: -28px;
  width: 100%;
}

.header_login-btn {
  width: 157px;
}

@media screen and (max-width: 1207px) {
  .header_container {
    grid-gap: 20px;
  }
  .header_navigation {
    margin: unset;
  }
  .header_login-btn {
    width: max-content;
  }
  .header_catalog {
    width: unset;
    margin-left: unset;
  }
  .header_login-btn:deep(.typography),
  .header_catalog:deep(.typography) {
    display: none;
  }
  .header_catalog:deep(.button) {
    width: max-content;
  }
  .header_search {
    margin-left: unset;
  }
  .header_search:deep(.field_input) {
    width: 100%;
  }
  .header_user-menu {
    width: 56px;
  }
  .header_user-menu:deep(.user-menu) {
    width: max-content;
  }
}

@media screen and (max-width: 767px) {
  .header_navigation,
  .header_user-menu,
  .header_catalog {
    display: none;
  }
  .header_logo {
    display: flex;
    align-items: center;
  }
  .header_logo:deep(svg) {
    width: 39px;
  }
  .header_search {
    width: 100%;
  }

}
</style>