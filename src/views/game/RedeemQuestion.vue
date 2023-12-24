<script setup lang="ts">
import type BaseLayout from '@/components/BaseLayout.vue';
import { useQuestionStore } from '@/stores/questions'

const questions = useQuestionStore()
const displayQuestion = questions.nextRedeemQuestion()
</script>

<template>
    <BaseLayout background="bg-gradient-to-b from-green-700 to-green-900">
        <h1 class="font-serif text-center text-7xl text-white">Redeem your youth if:</h1>
        <p class="text-center text-7xl text-white">{{ displayQuestion }}</p>
        <RouterLink to="/game/old" class="bg-red-800 rounded-lg w-1/2 p-5 text-white text-5xl text-center mt-4">Next</RouterLink>
        <RouterLink to="/game/finished" class="bg-gray-800 rounded-lg w-1/2 p-5 text-white text-5xl text-center mt-4">Stop</RouterLink>
    </BaseLayout>
</template>