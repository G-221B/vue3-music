<template>
    <div class="menuBox">
        <div v-for="menu in menuList" :key="menu.name">
            <div class="title">{{ menu.name }}</div>
            <div v-for="child in menu.childs" :key="child.name">
                <div class="name">
                    <span></span>
                    <RouterLink :to="child.key">{{ child.name }}</RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { MenuList } from '@/constants/menu';
import { reactive } from 'vue';

const menuList = reactive(MenuList);
</script>

<style lang="scss">
.menuBox {
    width: 224px;
    height: 100%;
    background-color: #171718;
    color: #e2e8f0;
    .title {
        margin: 40px;
    }
}
</style>
