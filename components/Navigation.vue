<template>
    <div class="w-full absolute z-50 flex items-center justify-center">
        <div class="px-4 md:px-8 pt-4 md:pt-6 w-full max-w-7xl flex justify-between md:justify-end md:space-x-8 items-center">
            <div style="--color: rgb(94 234 212)" class="relative md:hidden">
                <svg @click="showMenu = !showMenu" class="text-teal-300 w-10 drop-shadow-neon" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M21 6v2H3V6h18zM3 18h18v-2H3v2zm0-5h18v-2H3v2z"/>
                </svg>
                <div v-if="showMenu" class="absolute bg-black/80 px-4 py-2 mt-1 ml-1 rounded-lg border-2 border-teal-300 shadow-neon-inner flex flex-col space-y-1">
                    <NavLinks />
                </div>
            </div>
            <div class="hidden md:flex space-x-8">
                <NavLinks />
            </div>
            <RepoLink />
        </div>
    </div>
</template>

<script setup lang="ts">
const showMenu = ref(false)
</script>
