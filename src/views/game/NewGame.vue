<template>
    <BaseLayout>
        <h1 class="font-serif text-center text-5xl text-white">Starting a new Game</h1>

        <p class="text-white text-3xl">How would you like to keep score?</p>
    
        <RouterLink to="/game/online" class="bg-red-800 rounded-lg w-1/2 p-5 text-white mt-8 text-3xl text-center">Online</RouterLink>
        <RouterLink to="/game/print" class="bg-green-800 rounded-lg w-1/2 p-5 text-white mt-8 text-3xl text-center">Print</RouterLink>
    </BaseLayout>
</template>