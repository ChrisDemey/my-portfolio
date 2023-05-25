<template>
    <Swiper
        style="--color: rgb(236 72 153)"
        class="w-full"
        :modules="[Navigation, Pagination]"
        :navigation="true"
        :pagination="true"
        :loop="true"
    >
        <SwiperSlide
            class="py-10"
            v-for="(item, index) in props.images"
            :key="index"
        >
            <img
                class="border-4 border-pink-400 shadow-neon-inner w-11/12 mx-auto aspect-video object-cover rounded-xl"
                :src="item.image"
                alt="image"
            >
        </SwiperSlide>
    </Swiper>
</template>

<script setup lang="ts">
import { Pagination, Navigation } from 'swiper';
import { defineProps } from 'vue'
const props = defineProps({
    images: Array
})
</script>

<style>
.swiper-button-next,
.swiper-button-prev {
    @apply text-pink-400 drop-shadow-neon;
}
.swiper-pagination-bullet {
    @apply shadow-neon-inner;
}
</style>
