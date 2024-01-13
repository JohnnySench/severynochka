<script setup lang="ts">
interface Props {
  tagName: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'span',
  bold?: boolean,
  size?: 'xs' | 's' | 'm' | 'l' | 'xl'
}

const props = defineProps<Props>()

const {tagName, bold, size} = props;
</script>

<template>
  <component
      :is="tagName"
      :class="['typography', size ?`size_${size}`: '', bold ? 'bold' : '', `tagName_${tagName}`]"
  >
    <slot/>
  </component>
</template>

<style scoped>
@media screen and (max-width: 767px){
  .size_xs {
    font-size: 8px;
  }

  .size_s {
    font-size: 12px;
  }

  .size_m {
    font-size: 14px;
  }

  .size_l {
    font-size: 20px;
  }

  .size_xl {
    font-size: 32px;
  }
  .tagName_h1 {
    font-size: 48px;
  }

  .tagName_h2 {
    font-size: 36px;
  }

  .tagName_h3 {
    font-size: 24px;
  }

  .tagName_h4 {
    font-size: 20px;
  }

  .tagName_h5 {
    font-size: 16px;
  }
}

.typography {
  line-height: 150%;
  font-style: normal;
  color: var(--main-on-surface)
}

.size_xs {
  font-size: 12px;
}

.size_s {
  font-size: 16px;
}

.size_m {
  font-size: 18px;
}

.size_l {
  font-size: 24px;
}

.size_xl {
  font-size: 36px;
}

.bold {
  font-weight: 700;
}

.tagName_h1 {
  font-size: 64px;
}

.tagName_h2 {
  font-size: 48px;
}

.tagName_h3 {
  font-size: 36px;
}

.tagName_h4 {
  font-size: 24px;
}

.tagName_h5 {
  font-size: 18px;
}

</style>