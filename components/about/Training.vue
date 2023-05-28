<template>
    <div class="flex bg-center bg-cover rounded-xl w-full py-6 px-8 shadow-neon-inner border-2 border-teal-300"
         style="
              --color: rgb(94 234 212);
              background-image: linear-gradient(90deg, rgb(0,0,0,0), rgb(0,0,0,0.9) , rgb(0,0,0,0.9)), url('/images/about/training.jpeg');
              background-blend-mode: multiply;
    ">
        <div class="w-1/2"></div>
        <div class="w-1/2">
            <p class="text-justify text-teal-300 drop-shadow-neon-sm">
                Je m'appelle Christophe, j'ai {{ myAge(new Date('1990-01-30')) }} ans et j'ai suivi une formation de 7 mois en développement web à BeCode (Charleroi). Au cours de cette formation, j'ai appris plusieurs langages de programmation et me suis spécialisé dans le Front-End. J'ai également effectué un stage de 3 mois à Alstom (au sein de A6K à Charleroi), où j'ai pu approfondir mes connaissances et découvrir de nouveaux frameworks.
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
