<script setup lang="ts">
import router from '@/router';
import { useScoreStore } from '@/stores/score';

const scoreStore = useScoreStore()

function clickedReset() {
    scoreStore.reset()
    router.push("/client/start")
}

</script>

<template>
    <h2>Your score has reached</h2>
    <h1>{{ scoreStore.score }}</h1>
    <h3>Sorry to say, but you're really getting old</h3>

    <button @click="clickedReset">Play Again</button>
</template>