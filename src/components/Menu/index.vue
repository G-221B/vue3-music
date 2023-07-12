<template>
    <div class="menuBox">
        <div v-for="menu in menuList" :key="menu.name">
            <div class="title">{{ menu.name }}</div>
            <div v-for="child in menu.childs" :key="child.name">
                <div class="item">
                    <span></span>
                    <RouterLink :to="child.key" class="name">{{
                        child.name
                    }}</RouterLink>
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

<style lang="scss" scoped>
.menuBox {
    width: 224px;
    padding: 40px 24px;
    background-color: #171718;
    color: #e2e8f0;
    .title {
        padding: 8px 16px;
        font-size: 12px;
        margin-bottom: 40px;
    }
    .name {
        padding: 6px 16px;
        font-size: 14px;
        text-decoration: none;
        color: #e2e8f0;
    }
}
</style>
