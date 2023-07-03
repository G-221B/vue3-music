<template>
  <div class="pageWrapper">
    <Menu></Menu>
  </div>
</template>

<script setup lang="ts">
import Menu from './components/Menu/index.vue';
console.log('menu', Menu)
</script>

<style scoped lang="scss">
.pageWrapper {
  width: 100%;
  height: 100%;
}
</style>
