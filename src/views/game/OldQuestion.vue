<script setup lang="ts">
import { useQuestionStore } from '@/stores/questions'

const questions = useQuestionStore()
const displayQuestion = questions.nextOldQuestion()
</script>

<template>
    <BaseLayout background="bg-gradient-to-b from-red-700 to-red-900">
        <h1 class="font-serif text-center text-6xl text-white">You're getting Old if:</h1>
        <p class="text-center text-7xl text-white">{{ displayQuestion }}</p>
        <RouterLink to="/game/redeem" class="bg-green-800 rounded-lg w-1/2 p-5 text-white text-5xl text-center mt-4">Redeem</RouterLink>
    </BaseLayout>
</template>