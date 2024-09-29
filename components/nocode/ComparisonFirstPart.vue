<template>
    <div style="--color: white" class="w-full text-center space-y-3 md:space-y-6 [&>*]:space-y-px [&>*]:md:space-y-2 [&>*]:px-4 [&>*]:py-2 [&>*]:md:py-3 [&>*]:border-2 [&>*]:bg-black/80 [&>*]:rounded-xl [&>*]:border-white [&>*]:shadow-neon-inner">
        <div>
            <h3 class="text-sm font-thin md:text-lg">{{ $t("custom_title") }}</h3>
            <ul class="text-xs md:text-base font-extralight flex space-x-4 md:space-x-6 [&>*]:w-1/2 [&>*]:text-start">
                <li style="--color: rgb(94 234 212)" class="text-[--color] drop-shadow-neon-sm">
                    <span class="mr-2">✓</span>{{ $t("custom_code") }}
                </li>
                <li style="--color: rgb(236 72 153)" class="text-[--color] drop-shadow-neon-sm">
                    <span class="mr-2">X</span>{{ $t("custom_nocode") }}
                </li>
            </ul>
        </div>
        <div>
            <h3 class="text-sm font-thin md:text-lg">{{ $t("perf_title") }}</h3>
            <ul class="text-xs md:text-base font-extralight flex space-x-4 md:space-x-6 [&>*]:w-1/2 [&>*]:text-start">
                <li style="--color: rgb(94 234 212)" class="text-[--color] drop-shadow-neon-sm">
                    <span class="mr-2">✓</span>{{ $t("perf_code") }}
                </li>
                <li style="--color: rgb(236 72 153)" class="text-[--color] drop-shadow-neon-sm">
                    <span class="mr-2">X</span>{{ $t("perf_nocode") }}
                </li>
            </ul>
        </div>
        <div>
            <h3 class="text-sm font-thin md:text-lg">{{ $t("control_title") }}</h3>
            <ul class="text-xs md:text-base font-extralight flex space-x-4 md:space-x-6 [&>*]:w-1/2 [&>*]:text-start">
                <li style="--color: rgb(94 234 212)" class="text-[--color] drop-shadow-neon-sm">
                    <span class="mr-2">✓</span>{{ $t("control_code") }}
                </li>
                <li style="--color: rgb(236 72 153)" class="text-[--color] drop-shadow-neon-sm">
                    <span class="mr-2">X</span>{{ $t("control_nocode") }}
                </li>
            </ul>
        </div>
        <div>
            <h3 class="text-sm font-thin md:text-lg">{{ $t("scale_title") }}</h3>
            <ul class="text-xs md:text-base font-extralight flex space-x-4@ md:space-x-6 [&>*]:w-1/2 [&>*]:text-start">
                <li style="--color: rgb(94 234 212)" class="text-[--color] drop-shadow-neon-sm">
                    <span class="mr-2">✓</span>{{ $t("scale_code") }}
                </li>
                <li style="--color: rgb(236 72 153)" class="text-[--color] drop-shadow-neon-sm">
                    <span class="mr-2">X</span>{{ $t("scale_nocode") }}
                </li>
            </ul>
        </div>
    </div>
</template>