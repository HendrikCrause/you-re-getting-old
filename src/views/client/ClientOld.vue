<script setup lang="ts">
import router from '@/router';
import { useScoreStore } from '@/stores/score';


const scoreStore = useScoreStore()

function clickedYes() {
    scoreStore.score += 1

    if(scoreStore.score == 10) {
        router.push("/client/finished")
    } else {
        router.push("/client/redeem")
    }
}

function clickedNo() {
    router.push("/client/redeem")
}

function clickedReset() {
    scoreStore.reset()
    router.push("/client/start")
}

</script>

<template>
    <BaseLayout background="bg-gradient-to-b from-red-700 to-red-900">
        <p class="text-white text-xl">Current score: {{ scoreStore.score }}</p>
        <h2 class="text-white text-4xl text-center">Does the scenario on screen apply to you?</h2>
    
        <button @click="clickedYes" class="bg-blue-800 rounded-lg w-1/2 p-5 text-white text-4xl text-center mt-4">Yes</button>
        <button @click="clickedNo" class="bg-green-800 rounded-lg w-1/2 p-5 text-white text-4xl text-center mt-4">No</button>
        <button @click="clickedReset" class="w-1/2 p-5 text-purple-500 text-2xl text-center underline">Reset</button>
    </BaseLayout>
</template>