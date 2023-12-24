<script setup lang="ts">
const props = defineProps({
    background: String,
    noImage: Boolean,
})

const bg = props.background === undefined ? "bg-gradient-to-br from-blue-900 to-slate-900" : props.background
const classes = "grid place-items-center h-screen " + bg

const showImage = props.noImage === undefined ? true : ! props.noImage

</script>

<template>
    <div :class="classes">
        <img v-if="showImage" src="../assets/background.png" class="absolute w-full -bottom-20 z-0"/>
        <div class="max-w-7xl flex flex-col gap-8 items-center z-10">
            <slot></slot>
        </div>
    </div>
</template>