<template>
    <NuxtLink
      v-for="item in links"
      :key="item.name"
      :to="item.path"
      @mouseover="handleMouseEnter"
      @mouseout="handleMouseLeave"
      style="--color: rgb(94 234 212)"
      :class="$route.path === item.path ? 'text-pink-400 drop-shadow-neon-active': 'drop-shadow-neon-sm text-teal-300 hover:text-pink-400'"
      class="uppercase md:text-sm whitespace-nowrap"
    >
      {{ $t(item.name) }}
    </NuxtLink>
</template>

<script setup lang="ts">
import { changeColorsStore } from '~/store/store'

const links= [
  { name: 'home_nav', path: '/' },
  { name: 'whycode_nav', path: '/nocode' },
  { name: 'projects_nav', path: '/projects' },
  { name: 'skills_nav', path: '/skills' },
  { name: 'about_nav', path: '/about' },
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
