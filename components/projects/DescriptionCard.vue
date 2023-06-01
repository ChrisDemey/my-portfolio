<template>
    <div style="--color: rgb(236 72 153)" class="hidden md:flex max-w-4xl items-center space-x-8">

        <div v-for="item in projectDescription" :key="item" class="bg-black/50 overflow-y-auto px-6 py-4 w-96 h-48 rounded-xl border-2 border-[--color] shadow-neon-inner">
            <p style="--color: rgb(94 234 212)" class="drop-shadow-neon-sm text-[--color] text-justify">
                {{ item.text }}
            </p>
        </div>

    </div>
</template>

<script setup lang="ts">
const projectDescription = [
    { text:'J\'ai commencé le projet pendant mon stage de 3 mois, au sein de Alstom, et poursuivi son développement par la suite. Ce site permet aux employés de l\'entreprise de partager des trajets en voiture pour se rendre au travail. Il leur permet également de créer des profils, de proposer ou de rechercher des trajets, et renseigner leur propre voiture ainsi que des destinations fixes. Le développement a été mis en suspends suite à la pandémie de Covid-19.' },
    { text:'Toujours à Alstom pour ce second projet, il permet la réservation de bureaux pour répondre aux besoins des employés qui doivent travailler sur place pendant la pandémie de Covid-19. Le site est uniquement accessible aux employés de l\'entreprise et leur permet de réserver un bureau à l\'avance pour s\'assurer qu\'ils auront un espace de travail. il permet également de visualiser la disponibilité des bureaux en temps réel et de les réserver pour des périodes de temps spécifiques.' }
]
</script>
