<script setup lang="ts">
import Typography from "@/shared/text/ui/Typography.vue";
import {useSlots} from "vue";

interface Props {
  color?: 'primary' | 'secondary' | 'grayscale' | 'error',
  decoration?: 'outline' | 'default' | 'none',
  size?: 'L' | 'M' | 'S',
  disabled?: boolean,
}

const props = withDefaults(defineProps<Props>(), {
  color: 'primary',
  decoration: 'default',
  size: 'M',
  disabled: false
})


const {decoration, size, disabled, color} = props
const slots = useSlots()
const classes = ['button', `size_${size}`, `decoration_${decoration}`, `color_${color}`]
</script>

<template>
  <button
      :class="classes"
      :disabled="disabled"
      @click="$emit('clickOnBtn')"
  >
    <slot name="leftIcon"/>
    <Typography
        v-if="slots.default"
        class="button_text"
        :tag-name="'p'"
        :size="'s'"
    >
      <slot/>
    </Typography>
    <slot name="rightIcon"/>
  </button>
</template>

<style scoped>
.button {
  display: flex;
  align-items: center;
  border: none;
  width: 100%;
  border-radius: 4px;
  cursor: pointer;
  transition: all .1s ease-in-out;
}

.button_text {
  width: 100%;
  align-items: center;
}

.button.size_M {
  grid-gap: 8px;
  padding: 8px;
}

.button.color_secondary {
  background-color: var(--main-secondary);
}

.button.color_secondary .button_text {
  color: var(--main-on-secondary)
}

.button.color_primary {
  background-color: var(--main-primary);
}

.button.color_primary .button_text {
  color: var(--main-on-primary);
}

.button.decoration_none {
  background-color: unset;
  border-color: unset;
}

.button.decoration_none:deep(path) {
  fill: var(--main-on-surface);
}
</style>