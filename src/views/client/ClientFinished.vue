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
    <BaseLayout>
        <h2 class="text-white text-3xl text-center">Your score has reached</h2>
        <h1 class="text-white text-7xl">{{ scoreStore.score }}</h1>
        <h3 class="text-slate-300 text-2xl text-center max-w-60 font-serif font-light">Sorry to say, but you're really getting old</h3>
        <p class="text-white text-xl text-center max-w-64">This game is over. Ask the other players for their scores. Lowest score wins.</p>

        <button @click="clickedReset" class="bg-green-800 rounded-lg p-5 text-white text-3xl text-center mt-4">Play Again</button>
    </BaseLayout>
</template>