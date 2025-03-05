<template>
  <div class="absolute z-10 w-full h-screen">
    <div
      class="flex items-end justify-center max-w-4xl px-4 pb-4 mx-auto h-2/3 md:px-0"
    >
      <slot name="top"></slot>
    </div>
    <div
      class="flex items-start justify-center max-w-4xl px-4 pt-4 mx-auto h-1/3 md:px-0"
    >
      <slot name="bottom"></slot>
    </div>
  </div>
</template>
