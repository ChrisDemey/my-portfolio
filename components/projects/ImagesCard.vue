<template>
    <div style="--color: rgb(94 234 212)" class="text-[--color] max-w-4xl flex items-center space-x-8">

        <div v-for="item in projectImages" :key="item" class="group cursor-pointer bg-black/50 px-8 pb-6 pt-3 w-96 aspect-video rounded-xl border-2 border-[--color] shadow-neon-inner">
            <h3 style="--color: rgb(236 72 153)" class="mb-2 text-center text-2xl uppercase text-pink-400 drop-shadow-neon">
                {{ item.name }}
            </h3>
            <img class="bg-gray-600/75 drop-shadow-none transform duration-200 ease-in-out group-hover:drop-shadow-neon h-full w-full object-cover rounded-lg" :src="item.image" alt="image">
        </div>

    </div>
</template>

<script setup lang="ts">
const projectImages = [
    { name:'carsharing', image:'/images/projects/carsharing/trips_list.png' },
    { name:'desksharing', image:'/images/projects/desksharing/devices_filter.png' },
]
</script>
