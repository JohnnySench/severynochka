<script setup lang="ts">
import Typography from "@/shared/text/ui/Typography.vue";
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

const classes = ['button', `size_${size}`, `decoration_${decoration}`, `color_${color}`]
</script>

<template>
  <button :class="classes" :disabled="disabled">
    <slot name="leftIcon"/>
    <Typography class="button_text" :tag-name="'p'" :size="'s'">
       <slot/>
    </Typography>
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
    color: var(--main-on-secondary)
  }
</style>