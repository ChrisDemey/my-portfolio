<template>
    <div style="--color: rgb(94 234 212)" class="pt-3 pb-4 md:py-6 px-4 md:px-12 w-full max-w-4xl shadow-neon-inner bg-black/60 rounded-xl">
        <h3 style="--color: rgb(236 72 153)" class="flex flex-col w-full items-center justify-center uppercase text-pink-400 drop-shadow-neon">
            <span class="text-md md:text-xl font-thin">- {{ $t("my_stack") }} -</span>
            <span class="animate-blink text-3xl md:text-5xl tracking-widest">Nevtal</span>
        </h3>
        <div class="flex justify-around">
            <NuxtIcon />
            <VueIcon />
            <TailwindIcon />
            <LaravelIcon />
        </div>
        <div class="flex justify-around text-center font-medium w-full text-sm md:text-xl text-teal-300 drop-shadow-neon">
            <p class="w-full">N<span class="font-thin">uxt</span>3</p>
            <p class="w-full">V<span class="font-thin">ue</span></p>
            <p class="w-full">Ta<span class="font-thin">ilwind</span></p>
            <p class="w-full">L<span class="font-thin">aravel</span></p>
        </div>
    </div>
</template>
