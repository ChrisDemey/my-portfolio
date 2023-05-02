<template>
    <div class="absolute z-10 h-full w-full">
        <div class="h-2/3 pb-4 mx-auto flex items-end justify-center max-w-4xl">
            <slot name="top"></slot>
        </div>
        <div class="h-1/3 pt-4 mx-auto flex items-start justify-center max-w-4xl">
            <slot name="bottom"></slot>
        </div>
    </div>
</template>
