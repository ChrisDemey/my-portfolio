<template>
    <div style="--color: rgb(236 72 153)" class="hidden md:flex max-w-4xl items-center space-x-8">

        <div v-for="item in projectDescription" :key="item" class="bg-black/50 overflow-y-auto px-6 py-4 w-96 h-48 rounded-xl border-2 border-[--color] shadow-neon-inner">
            <p style="--color: rgb(94 234 212)" class="drop-shadow-neon-sm text-[--color] text-justify">
                {{ $t(item.text) }}
            </p>
        </div>

    </div>
</template>

<script setup lang="ts">
const projectDescription = [
    { text: 'carsharing_description' },
    { text:'desksharing_description' }
]
</script>
