<template>
    <div style="--color: rgb(94 234 212)" class="flex items-center space-x-2 text-white">
        <span class="text-teal-300 drop-shadow-neon-sm">en</span>
        <div class="relative inline-flex flex-col justify-center w-10 align-middle select-none">
            <!-- toggle -->
            <label
                for="toggle"
                class="block h-5 overflow-hidden transition duration-200 ease-in border-2 border-teal-300 rounded-full cursor-pointer drop-shadow-neon-sm"
            ></label>
            <!-- ball -->
            <input
                style="--color: rgb(236 72 153)"
                type="checkbox"
                id="toggle"
                aria-label="Language switcher"
                class="absolute z-10 block h-3 mx-1 transition duration-200 ease-in translate-x-0 bg-pink-400 rounded-full appearance-none cursor-pointer shadow-neon aspect-square"
                :class="{ 'translate-x-5': $i18n.locale === 'fr' }"
                @change="$i18n.setLocale($i18n.locale === 'en' ? 'fr' : 'en')"
                :checked="$i18n.locale === 'fr'"
            />
        </div>
        <span class="text-teal-300 drop-shadow-neon-sm">fr</span>
    </div>
</template>
