<template>
    <div class="absolute z-50 flex items-center justify-center w-full">
        <div class="flex items-center justify-between w-full px-4 pt-4 md:px-8 md:pt-6 max-w-7xl md:justify-end md:space-x-8">
            <div style="--color: rgb(94 234 212)" class="relative md:hidden">
                <svg @click="showMenu = !showMenu" class="w-10 text-teal-300 cursor-pointer drop-shadow-neon" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M21 6v2H3V6h18zM3 18h18v-2H3v2zm0-5h18v-2H3v2z"/>
                </svg>
                <div v-if="showMenu" class="absolute flex flex-col px-4 py-2 mt-1 ml-1 space-y-1 border-2 border-teal-300 rounded-lg bg-black/80 shadow-neon-inner">
                    <NavLinks />
                </div>
            </div>
            <div class="hidden space-x-8 md:flex">
                <NavLinks />
            </div>
            <div class="flex space-x-6">
                <RepoLink />
                <LanguageSwitcher />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const showMenu = ref(false)
</script>
