<template>
    <div style="--color: rgb(236 72 153)" class="flex items-center max-w-4xl space-x-8">

        <div class="bg-black/50 overflow-y-auto px-6 py-4 w-96 h-48 rounded-xl border-2 border-[--color] shadow-neon-inner">
            <p style="--color: rgb(94 234 212)" class="drop-shadow-neon-sm font-extralight text-[--color] text-justify">
                {{ $t(props.text) }}
            </p>
        </div>

    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
const props = defineProps({
    text: String
})
</script>
