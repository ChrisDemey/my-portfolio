<template>
    <div style="--color: rgb(94 234 212)" class="pt-3 pb-4 md:py-6 px-4 md:px-12 w-full max-w-4xl shadow-neon-inner bg-black/60 rounded-xl">
        <h3 style="--color: rgb(236 72 153)" class="flex flex-col w-full items-center justify-center uppercase text-pink-400 drop-shadow-neon">
            <p class="text-md md:text-xl font-thin">- {{ $t("my_stack") }} -</p>
            <p class="animate-blink text-3xl md:text-5xl tracking-widest">Nevtal</p>
        </h3>
        <div class="flex justify-around font-medium text-sm md:text-xl text-teal-300">
            <div class="flex flex-col items-center">
                <NuxtIcon />
                <p class="drop-shadow-neon">N<span class="font-thin">uxt</span>3</p>
            </div>
            <div class="flex flex-col items-center">
                <VueIcon />
                <p class="drop-shadow-neon">V<span class="font-thin">ue</span></p>
            </div>
            <div class="flex flex-col items-center">
                <TailwindIcon />
                <p class="drop-shadow-neon">Ta<span class="font-thin">ilwind</span></p>
            </div>
            <div class="flex flex-col items-center">
                <LaravelIcon />
                <p class="drop-shadow-neon">L<span class="font-thin">aravel</span></p>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
</script>
