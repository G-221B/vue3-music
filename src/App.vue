<template>
    <div class="pageWrapper">
        <Menu></Menu>
    </div>
</template>

<script setup lang="ts">
import Menu from './components/Menu/index.vue'
function a(): number {
    const t = 1;
    return t;
}
a();
</script>

<style scoped lang="scss">
.pageWrapper {
    width: 100%;
    height: 100%;
}
</style>
