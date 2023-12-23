<script setup lang="ts">
import BaseLayout from "../components/BaseLayout.vue";
</script>

<template>
    <BaseLayout>
        <h1 class="font-serif text-center text-9xl text-white">You're Getting Old</h1>
        <h3 class="text-center text-5xl text-red-700">Online Christmas edition</h3>
    
        <RouterLink to="/game/new" class="bg-red-800 rounded-lg w-1/2 p-5 text-white mt-8 text-5xl text-center">Start a Game</RouterLink>
        <RouterLink to="/rules" class="bg-green-800 rounded-lg w-1/2 p-5 text-white text-5xl text-center">How to Play</RouterLink>
    </BaseLayout>
</template>