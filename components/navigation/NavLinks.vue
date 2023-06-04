<template>
    <NuxtLink
        v-for="item in links"
        :key="item.name"
        :to="item.path"
        @mouseover="handleMouseEnter"
        @mouseout="handleMouseLeave"
        style="--color: rgb(94 234 212)"
        :class="$route.path === item.path ? 'text-pink-400 drop-shadow-neon-active': 'drop-shadow-neon text-teal-300 hover:text-pink-400'"
        class="md:text-sm font-bold uppercase"
    >
      {{ $t(item.name) }}
    </NuxtLink>
</template>

<script setup lang="ts">
import { changeColorsStore } from '~/store/store'

const links= [
  { name: 'home_nav', path: '/' },
  { name: 'about_nav', path: '/about' },
  { name: 'skills_nav', path: '/skills' },
  { name: 'projects_nav', path: '/projects' },
  { name: 'contact_nav', path: '/contact' }
]

const colorsStore = changeColorsStore()

const handleMouseEnter = (event: MouseEvent) => {
  colorsStore.changeShadowColor(event)
}

const handleMouseLeave = (event: MouseEvent) => {
  colorsStore.resetShadowColor(event)
}
</script>
