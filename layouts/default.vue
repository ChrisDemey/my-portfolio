<template>
  <!-- <Navigation /> -->
  <!-- <NuxtPage /> -->
  <!-- <SynthwaveBackground /> -->

  <!-- screen -->
  <div class="flex items-center justify-center w-full h-screen">
    <!-- main container -->
    <div class="w-full space-y-4 max-w-7xl">
      <Navigation />
      <!-- container -->
      <div class="relative h-full overflow-hidden">
        <div class="relative top-0 left-0 z-10">
          <img
            class="object-cover border opacity-60 border-purple-300/30 rounded-3xl"
            src="../public/images/synthwaveBackground.png"
          />
        </div>
        <div
          class="absolute inset-0 z-20 flex items-center justify-center overflow-y-auto"
        >
          <NuxtPage />
        </div>
      </div>
      <!-- socials -->
      <nav class="pr-5">
        <ul class="flex items-center justify-end space-x-4 text-white">
          <li>LinkedIn</li>
          <li>Youtube</li>
          <li>TikTok</li>
          <li>Malt</li>
        </ul>
      </nav>
    </div>
  </div>
</template>
