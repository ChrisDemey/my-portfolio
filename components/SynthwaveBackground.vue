<template>
    <div class="absolute z-0 w-full h-screen flex flex-col overflow-hidden">
        <!-- space -->
        <img class="absolute z-0 w-full h-screen object-cover" src="/images/space.jpeg" alt="space_img">
        <!-- glowing sun -->
        <div class="absolute z-10 w-full h-screen grid place-items-center bg-gradient-to-t from-indigo-500/50 to-transparent">
            <!-- glow effect -->
            <div class="absolute blur-lg animate-glow w-80 h-80 rounded-full bg-gradient-to-b from-pink-500 to-teal-500 to-55%"></div>
            <!-- sun -->
            <div class="sun absolute h-80 grid grid-cols-1 aspect-square grid-rows-1 rounded-full"></div>
        </div>
        <!-- mountains -->
        <div class="z-20 relative h-2/3 flex items-end justify-center [&>*]:border-l-transparent [&>*]:border-b-black [&>*]:border-r-transparent">
            <div class="-ml-20 border-l-[170px] border-b-[60px] border-r-[170px]"></div>
            <div class="-ml-48 border-l-[230px] border-b-[90px] border-r-[230px]"></div>
            <div class="-ml-40 border-l-[100px] border-b-[40px] border-r-[100px]"></div>
            <div class="-ml-32 border-l-[170px] border-b-[60px] border-r-[170px]"></div>
            <div class="-ml-52 border-l-[230px] border-b-[120px] border-r-[230px]"></div>
            <div class="-ml-60 border-l-[230px] border-b-[90px] border-r-[230px]"></div>
            <div class="-ml-28 border-l-[70px] border-b-[30px] border-r-[70px]"></div>
            <div class="-ml-20 border-l-[170px] border-b-[60px] border-r-[170px]"></div>
            <div class="-ml-20 border-l-[100px] border-b-[30px] border-r-[100px]"></div>
            <div class="-ml-32 border-l-[180px] border-b-[50px] border-r-[180px]"></div>
        </div>
        <!-- line -->
        <div class="w-full relative z-20 h-0.5 bg-gradient-to-r from-black via-teal-400 to-black"></div>
        <!-- moving grid -->
        <div class="z-20 relative perspective overflow-hidden w-full h-1/3 bg-gradient-to-t from-indigo-900 to-black">
            <div class="grid-moving background-animated origin-top bg-top h-screen"></div>
        </div>
    </div>
</template>

<style>
.sun {
    @apply shadow-neon;
}
.sun::before {
    content: "";
    grid-area: 1 / 1;
    background: linear-gradient(#ec4899, #14b8a6 65%);
    border-radius: inherit;

    --mask: linear-gradient(to top,
    #000 1.5% , #0000 2%   , #0000 5%   , #000 5.5%
    ,#000 7.5% , #0000 8%   , #0000 10.6%, #000 11.1%
    ,#000 13.6%, #0000 14.1%, #0000 16.3%, #000 16.8%
    ,#000 19.8%, #0000 20.3%, #0000 22.1%, #000 22.6%
    ,#000 26.1%, #0000 26.6%, #0000 28%  , #000 28.5%
    ,#000 32.5%, #0000 33%  , #0000 34%  , #000 34.5%
    ,#000 39%  , #0000 39.5%, #0000 40.1%, #000 40.6%
    ) no-repeat;

    -webkit-mask: var(--mask);
    mask: var(--mask);
}
</style>
