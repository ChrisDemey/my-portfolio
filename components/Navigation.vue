<template>
  <nav class="flex text-white">
    <div class="w-1/3 pl-5">
      <img
        class="contrast-125 size-10"
        src="../public/favicon.ico"
        alt="logo"
      />
    </div>
    <ul class="flex items-center justify-center w-1/3 space-x-4 text-white">
      <NuxtLink
        v-for="item in links"
        :key="item.name"
        :to="item.path"
        @mouseover="handleMouseEnter"
        @mouseout="handleMouseLeave"
        style="--color: rgb(94 234 212)"
        :class="
          $route.path === item.path
            ? 'text-pink-200 drop-shadow-neon-active'
            : 'drop-shadow-neon-sm text-teal-200 hover:text-pink-200'
        "
        class="uppercase md:text-sm whitespace-nowrap"
      >
        {{ $t(item.name) }}
      </NuxtLink>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { changeColorsStore } from "~/store/store";

const links = [
  { name: "home_nav", path: "/" },
  { name: "whycode_nav", path: "/nocode" },
  { name: "projects_nav", path: "/projects" },
  { name: "skills_nav", path: "/skills" },
  { name: "about_nav", path: "/about" },
  { name: "contact_nav", path: "/contact" },
];

const colorsStore = changeColorsStore();

const handleMouseEnter = (event: MouseEvent) => {
  colorsStore.changeShadowColor(event);
};

const handleMouseLeave = (event: MouseEvent) => {
  colorsStore.resetShadowColor(event);
};
</script>
