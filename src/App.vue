<template>
    <div class="pageWrapper">
        <Menu></Menu>
        <RouterView></RouterView>
    </div>
</template>

<script setup lang="ts">
import useUserStore from '@/store/userStore';
import Menu from '@/components/Menu/index.vue';

import { ref } from 'vue';

const name = ref<string | number>('name');

const userStore = useUserStore();

console.log(userStore.name, name);
userStore.changeName('ggg');
console.log(userStore.name);
console.log(userStore.nameAndId);

function a(): number {
    const t = 1;
    return t;
}
a();
</script>

<style scoped lang="scss">
.pageWrapper {
    display: flex;
    width: 100%;
    height: 100%;
}
</style>
