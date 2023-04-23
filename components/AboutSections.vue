<template>
    <div class="absolute z-10 h-full w-full">
        <div class="pb-4 flex items-end justify-center h-2/3 max-w-4xl mx-auto">
            <div class="flex bg-center bg-cover rounded-xl w-full py-6 px-8 shadow-neon-inner border-2 border-teal-300"
                 style="
                      --color: rgb(94 234 212);
                      background-image: linear-gradient(90deg, rgb(0,0,0,0), rgb(0,0,0,0.80) , rgb(0,0,0,0.90)), url('https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80');
                      background-blend-mode: multiply;
                    ">
                <div class="w-1/2"></div>
                <div class="w-1/2">
                    <p class="text-justify text-teal-300 drop-shadow-neon">
                        Je m'appelle Christophe, j'ai {{ myAge(new Date('1990-01-30')) }} ans et j'ai suivi une formation de 7 mois en développement web à BeCode Charleroi. Au cours de cette formation, j'ai appris plusieurs langages de programmation et me suis spécialisé dans le Front-End. J'ai également effectué un stage de 3 mois à Alstom (au sein de A6K à Charleroi), où j'ai pu approfondir mes connaissances et découvrir de nouveaux frameworks.
                    </p>
                </div>
            </div>
        </div>
        <div class="pt-4 h-1/3 max-w-4xl mx-auto">
            <div class="flex bg-center bg-cover rounded-xl w-full py-6 px-8 shadow-neon-inner border-2 border-teal-300"
                 style="
                      --color: rgb(94 234 212);
                      background-image: linear-gradient(-90deg, rgb(0,0,0,0), rgb(0,0,0,0.70) , rgb(0,0,0,0.90)), url('https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80');
                      background-blend-mode: multiply;
                    ">
                <div class="w-1/2">
                    <p class="text-justify text-teal-300 drop-shadow-neon">
                        Après avoir terminé ma formation, j'ai décroché un contrat en tant que développeur web et je suis maintenant passionné par ce métier. Mon objectif est de continuer à apprendre de nouveaux langages et à acquérir de l'expérience dans le domaine du développement web.
                    </p>
                </div>
                <div class="w-1/2"></div>
            </div>
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
