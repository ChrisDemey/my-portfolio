<template>
    <div class="absolute z-50 w-full h-screen bg-gray-800/75">
        <div class="relative h-full grid place-content-center">
            <div style="--color: rgb(236 72 153)" class="absolute z-50 top-4 right-4 text-white">
                <svg @click="$emit('close')" class="cursor-pointer w-10 text-pink-400 animate-blink drop-shadow-neon" viewBox="0 0 16 16">
                    <path fill="currentColor" fill-rule="evenodd" d="M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94L4.28 3.22Z" clip-rule="evenodd"/>
                </svg>
            </div>
            <slot></slot>
        </div>
    </div>
</template>
