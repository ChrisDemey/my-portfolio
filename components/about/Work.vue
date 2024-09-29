<template>
    <div
        class="flex w-full px-5 py-4 bg-center bg-cover border-2 border-teal-300 rounded-xl md:py-6 md:px-8 shadow-neon-inner"
        style="
            --color: rgb(94 234 212);
            background-image: linear-gradient(-90deg, rgb(0,0,0,0), rgb(0,0,0,0.70) , rgb(0,0,0,0.90)), url('/images/about/work.jpeg');
            background-blend-mode: multiply;
    ">
        <div class="w-full md:w-1/2">
            <p class="text-base text-justify text-teal-300 font-extralight drop-shadow-neon-sm md:text-lg">
                {{ $t("about_work") }}
            </p>
        </div>
        <div class="w-0 md:w-1/2"></div>
    </div>
</template>
