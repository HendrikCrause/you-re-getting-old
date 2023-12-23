<script setup lang="ts">
    import { useQuestionStore } from '@/stores/questions'

    const questions = useQuestionStore()
</script>

<template>
    <h1 class="font-serif text-center text-6xl text-white">You're getting Old if:</h1>

    <p class="text-center text-7xl text-white">{{ questions.nextOldQuestion().text }}</p>

    <button>
        <RouterLink to="/game/redeem">Redeem</RouterLink>
    </button>
</template>