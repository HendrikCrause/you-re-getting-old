<script setup lang="ts">
import client_qr from '@/assets/client-qr.png'
</script>

<template>
    <BaseLayout>
        <h1 class="font-serif text-center text-7xl text-white">Online Score</h1>
        <p class="text-white text-4xl">Everyone scan this QR code:</p>
        <img :src="client_qr" class="w-1/2" />
        <RouterLink to="/client/start" class="text-purple-600 underline text-2xl">Or follow this link</RouterLink>
        <RouterLink to="/game/old" class="bg-green-800 rounded-lg w-1/2 p-5 text-white text-5xl text-center mt-4">Start</RouterLink>
    </BaseLayout>
</template>