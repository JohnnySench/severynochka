<script setup lang="ts">
import {Container} from "@/shared/container";
import {Logo} from '@/shared/logo'
import {Button} from '@/shared/button'
import {Icon} from '@/shared/icon'
</script>

<template>
  <header class="header">
    <Container class="header_container">
      <Logo :bg-color="'white'" colorful :orientation="'horizontal'" with-text/>
      <div class="header_catalog">
        <Button color="secondary">
          Каталог
          <template #leftIcon>
            <Icon type="menu"/>
          </template>
        </Button>
      </div>
    </Container>
  </header>
</template>

<style scoped>
.header_container {
  height: 72px;
  display: flex;
  align-items: center;
}

.header {
  position: sticky;
  top: 0;
  left: 0;
  box-shadow: var(--shadow-default-s);
  background: var(--main-surface);
}
.header_catalog {
  width: 140px;
  margin-left: 40px;
}
</style>