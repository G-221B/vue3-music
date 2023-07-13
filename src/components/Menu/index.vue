<template>
    <div class="menuBox">
        <div v-for="menu in menuList" :key="menu.name" class="menuCategory">
            <div class="title">{{ menu.name }}</div>
            <div v-for="child in menu.childs" :key="child.name">
                <RouterLink :to="child.key" class="item">
                    <SvgIcon
                        :name="child.iconName"
                        width="18px"
                        height="18px"
                        color="red"
                    ></SvgIcon>
                    <span class="name">{{ child.name }}</span>
                </RouterLink>
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
        margin-bottom: 8px;
    }
    .menuCategory {
        margin-bottom: 40px;
    }
    .item {
        display: flex;
        width: 144px;
        padding: 6px 16px;
        align-items: center;
        border-radius: 4px;
        margin-top: 6px;
        text-decoration: none;
        color: #e2e8f0;
        &:hover {
            cursor: pointer;
            background-color: #44403c;
        }
        &.router-link-active {
            background-image: linear-gradient(
                to right,
                rgb(45, 212, 191),
                rgb(52, 211, 153)
            );
        }
        .name {
            margin-left: 4px;
            font-size: 14px;
        }
    }
}
</style>
