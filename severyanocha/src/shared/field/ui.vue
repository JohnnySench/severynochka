<script setup lang="ts">

import {useSlots} from "vue";

interface Props {
  onSubmit: () => void,
  disabled?: boolean,
  size?: 'm' | 'l',
  placeholder: string
}

const modelValue = defineModel<string>()

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  size: 'm',
  onSubmit: () => {}
})

const slots = useSlots()

const {disabled, size, placeholder} = props
</script>

<template>
  <div
      :class="['field', `disabled_${disabled}`, `size_${size}`, `left-icon_${!!(slots.leftIcon)}`, `right-icon_${!!(slots.rightIcon)}`]">
    <slot name="label"/>
    <div class="field_container">
      <div v-if="slots.leftIcon" class="field_icon field_left-icon" @click="onSubmit">
        <slot name="leftIcon"/>
      </div>
      <input
          @keyup.enter="onSubmit"
          v-model="modelValue"
          class="field_input"
          type="text"
          :disabled="disabled"
          :placeholder="placeholder"
      />
      <div v-if="slots.rightIcon" class="field_icon field_right-icon" @click="onSubmit">
        <slot name="rightIcon"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.field:deep(.typography) {
  color: var(--grayscale-hard);
}

.field_input::placeholder {
  color: var(--grayscale-hard);
}

.field_input {
  transition: all .2s ease-in-out;
  width: 100%;
  border-radius: 4px;
  border: 1px solid var(--grayscale-light);
  background: var(--main-surface);
}
.field_input:focus {
  border: 1px solid var(--main-secondary);
  box-shadow: var(--shadow-secondary-m);
  background: var(--main-surface);
  caret-color: var(--main-secondary);
}
.field_input:disabled {
  border-radius: 4px;
  border: 1px solid var(--grayscale-light);
  background: var(--grayscale-lightest);
}

.field_container {
  position: relative;
}

.field.size_m .field_input {
  height: 40px;
  padding: 8px 16px;
  font-size: 16px;
}

.field.size_l .field_input {
  height: 60px;
  padding: 12px 16px;
  font-size: 24px;
}
.field_icon {
  width: 24px;
  height: 24px;
  position: absolute;
  cursor: pointer;
}

.size_m.left-icon_true .field_input {
  padding: 8px 16px 8px 40px;
}

.size_m.left-icon_true .field_left-icon {
  top: 50%;
  left: 8px;
  transform: translate(0, -50%)
}
.size_l.left-icon_true .field_input {
  padding: 18px 14px 18px 52px;
}

.size_l.left-icon_true .field_left-icon {
  top: 50%;
  left: 14px;
  transform: translate(0, -50%)
}

.size_m.right-icon_true .field_input {
  padding: 8px 40px 8px 16px;
}

.size_m.right-icon_true .field_right-icon {
  top: 50%;
  right: 8px;
  transform: translate(0, -50%)
}
.size_l.right-icon_true .field_input {
  padding: 18px 52px 18px 14px;
}

.size_l.right-icon_true .field_right-icon {
  top: 50%;
  right: 14px;
  transform: translate(0, -50%)
}
</style>