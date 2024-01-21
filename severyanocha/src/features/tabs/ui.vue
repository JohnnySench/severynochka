<script setup lang="ts">

interface Props {
  names: []
}

const props = defineProps<Props>()

</script>

<template>
  <div>
    <slot/>
  </div>
</template>

<style scoped>
  .tab-nav {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  .tab-nav__item {
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    border-radius: 7px;
    cursor: pointer;
    border: 1px solid red;
    padding: 0 20px;
    font-size: 15px;
  }
  .tab-nav__item:hover {
    background: orange;
    color: #fff;
    transition: 0.2s
  }
  .tab-nav__item .selected {
    background: green;
    color: #fff;
  }
  .tab-content {
    padding: 20px;
    border-radius: 7px;
    background: #fff;
  }
</style>