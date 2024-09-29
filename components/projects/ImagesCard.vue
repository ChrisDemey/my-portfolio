<template>
    <div style="--color: rgb(94 234 212)" class="text-[--color]">

        <div class="group cursor-pointer bg-black/50 px-4 md:px-8 pb-3 md:pb-6 pt-2 md:pt-3 w-96 aspect-video rounded-xl border-2 border-[--color] shadow-neon-inner">
            <h3 style="--color: rgb(236 72 153)" class="relative z-10 mb-2 text-3xl text-center text-pink-400 uppercase drop-shadow-neon-sm">
                {{ props.name }}
            </h3>
            <img class="object-cover w-full h-full duration-200 ease-in-out transform rounded-lg bg-gray-600/75 drop-shadow-none group-hover:drop-shadow-neon" :src="props.image" alt="image">
        </div>

    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
const props = defineProps({
    name: String,
    image: String
})
</script>
