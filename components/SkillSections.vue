<template>
    <div class="absolute z-10 h-full w-full">
    <!-- my stack -->
        <div class="h-2/3 flex flex-col space-y-4 items-center justify-end pb-4">
            <div style="--color: rgb(94 234 212)" class="py-6 px-12 max-w-4xl shadow-neon-inner bg-black/50 rounded-xl">
                <h3 style="--color: rgb(236 72 153)" class="text-center uppercase text-5xl text-pink-400 drop-shadow-neon">
                    my stack
                </h3>
                <div class="flex space-x-20">
                    <VueIcon />
                    <TailwindIcon />
                    <LaravelIcon />
                </div>
            </div>
        </div>
    <!-- learning -->
        <div class="h-1/3 flex flex-col space-y-4 items-center justify-start pt-4">
            <div style="--color: rgb(236 72 153)" class="py-4 px-8 max-w-4xl shadow-neon-inner bg-black/50 rounded-xl">
                <h3 style="--color: rgb(94 234 212)" class="mb-4 text-center uppercase text-xl text-teal-300 drop-shadow-neon">
                    currently learning . . .
                </h3>
                <div class="flex justify-center">
                    <PythonIcon />
                    <ReactIcon />
                </div>
            </div>
        </div>
    </div>
</template>
