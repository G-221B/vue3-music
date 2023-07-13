<template>
    <svg aria-hidden="true" :width="props.width" :height="props.height">
        <use :xlink:href="'#' + props.name" :fill="props.color" />
    </svg>
</template>

<script setup lang="ts">
interface IPropsType {
    name: string;
    color: string;
    width: string;
    height: string;
}
const props = withDefaults(defineProps<IPropsType>(), {
    name: '',
    color: '#fff',
    width: '12px',
    height: '12px'
});
</script>

<style scoped></style>
