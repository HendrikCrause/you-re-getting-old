<script setup lang="ts">
const props = defineProps({
    background: String
})

const bg = props.background === undefined ? "bg-gradient-to-br from-blue-900 to-slate-900" : props.background
const classes = "grid place-items-center h-screen " + bg

</script>

<template>
    <div :class="classes">
        <div class="max-w-7xl flex flex-col gap-8 items-center">
            <slot></slot>
        </div>
    </div>
</template>