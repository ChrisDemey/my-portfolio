<template>
    <div class="relative flex w-full px-5 py-4 bg-center bg-cover border-2 border-teal-300 rounded-xl md:py-6 md:px-8 shadow-neon-inner"
        style="
            --color: rgb(94 234 212);
            background-image: linear-gradient(90deg, rgb(0,0,0,0.4), rgb(0,0,0,0.9) , rgb(0,0,0,0.9)), url('/images/about/training.jpeg');
            background-blend-mode: multiply;
    ">
        <div class="w-0 md:w-1/2"></div>
        <div class="w-full md:w-1/2">
            <p class="text-base text-justify text-teal-300 font-extralight drop-shadow-neon-sm md:text-lg">
                {{ $t("about_training", { age: myAge(new Date('1990-01-30')) }) }}
            </p>
        </div>
    </div>
</template>

<script setup>
const myAge = (dob) => {
    const diff = Date.now() - dob.getTime()
    const age = new Date(diff)
    return Math.abs(age.getUTCFullYear() - 1990 + 20)
}
</script>
