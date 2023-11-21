<script setup lang="ts">
import { Avatar} from "@/shared/avatar";
import { Typography} from "@/shared/text";
import {Button} from "@/shared/button";
import {Icon} from "@/shared/icon";

interface Props {
  data: {
    avatar: string,
    name: string,
    menu?: any[]
  }
}
const props = defineProps<Props>()

const {data} = props

</script>

<template>
  <div class="user-menu">
    <Avatar class="user-menu_avatar" :img="data.avatar"/>
    <Typography class="user-menu_name" tag-name="span" size="s">{{data.name}}</Typography>
    <Button class="user-menu_button" decoration="none">
      <template #leftIcon>
        <Icon type="chevron"/>
      </template>
    </Button>
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
.user-menu_avatar,
.user-menu_name,
.user-menu_button {
  cursor: pointer;
}
</style>