<script setup lang="ts">

const setupSteps = [
    "First things first, scan your scorecard using the QR code, or if you don’t know what a QR code is ask the younger-looking person sitting next to you.",
    "Alternatively your group may want to print your scorecards, click the “print” button instead.",
    "Now that you are ready to play the game, your eyes must be on the TV screen right before you, as if you are watching an episode of 7de laan.",
    "On the TV screen the players will presented with prompts, each displayed in big bold letters for everyone to see.",
]

const gameSteps = [
    "The aim of the game is to establish who of you is getting old and who is staying updated with the years since 2000.",
    "On the screen you’ll first be presented with “an old” question. If the question applies to you, you’ll have to click yes and gain 1 point.",
    "Once everyone made peace with the fact that they’ll soon be counting grey hair, a saving grace question will appear on the screen. Yes, you’ll be able to redeem yourselves. Only if the redeem question applies to you, you’ll be able to overwrite the “getting old status” and redeem your youth by losing 1 point when you click yes.",
    "The questions will want to push your “old” status up very quickly, so stay alert.",
    "Once a player reaches 10 points, the game is over. The winner is whoever has the lowest score",
]

</script>

<template>
    <BaseLayout noImage=true>
        <h1 class="font-serif text-center text-6xl text-white">How to play</h1>

        <h3 class="text-white text-3xl">Setup</h3>
        <ul class="text-white text-xl list-disc max-w-screen-lg">
            <li v-for="step in setupSteps" :key="step">{{ step }}</li>
        </ul>

        <h3 class="text-white text-3xl">Gameplay</h3>
        <ul class="text-white text-xl list-disc max-w-screen-lg">
            <li v-for="step in gameSteps" :key="step">{{ step }}</li>
        </ul>

        <RouterLink to="/game/new" class="bg-red-800 rounded-lg w-1/2 p-4 text-white text-center text-3xl">Start a Game
        </RouterLink>
        <RouterLink to="/" class="bg-green-800 rounded-lg w-1/2 p-4 text-white text-center text-3xl">Home Page</RouterLink>
    </BaseLayout>
</template>