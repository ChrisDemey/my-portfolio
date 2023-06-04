<template>
    <div style="--color: rgb(94 234 212)" class="flex items-center space-x-2 text-white">
        <span class="text-teal-300 drop-shadow-neon-sm">en</span>
        <div class="relative inline-flex flex-col justify-center w-10 align-middle select-none">
            <!-- ball -->
            <input
                style="--color: rgb(236 72 153)"
                type="checkbox"
                name="toggle"
                id="toggle"
                class="shadow-neon translate-x-0 absolute z-10 block h-3 mx-1 aspect-square rounded-full bg-pink-400 appearance-none cursor-pointer transition duration-200 ease-in"
                :class="{ 'translate-x-5': $i18n.locale === 'fr' }"
                @change="$i18n.setLocale($i18n.locale === 'en' ? 'fr' : 'en')"
                :checked="$i18n.locale === 'fr'"
            />
            <!-- toggle -->
            <label
                for="toggle"
                class="block border-2 border-teal-300 drop-shadow-neon-sm overflow-hidden h-5 rounded-full cursor-pointer transition duration-200 ease-in"
            ></label>
        </div>
        <span class="text-teal-300 drop-shadow-neon-sm">fr</span>
    </div>
</template>
