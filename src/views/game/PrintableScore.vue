<template>
    <BaseLayout>
        <h1 class="font-serif text-center text-7xl text-white">Printable Score</h1>

        <ul class="text-slate-200 text-2xl">
            <li>Download the PDF scorecard from the link below</li>
            <li>Make enough printouts so each player can have one</li>
            <li>Use any token on the cards to track scores</li>
            <li>Remember old promts gain 1 point and redeem prompts lose 1 point</li>
            <li>Once everyone is ready, start the game</li>
        </ul>

        <a href="/scorecard.pdf" target="_blank" class="text-purple-500 text-4xl">PDF Scorecard</a>

        <RouterLink to="/game/old" class="bg-green-800 rounded-lg w-1/2 p-5 text-white text-4xl text-center mt-4">Start</RouterLink>
    </BaseLayout>
</template>