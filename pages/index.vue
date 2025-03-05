<template>
  <Head>
    <Title>&#60;Portfolio :page="Welcome" &#47;&#62;</Title>
    <Meta name="Home page" content="Landing page of my website" />
  </Head>
  <!-- <Container>
        <template #top>
            <Name class="-mb-2" />
        </template>
        <template #bottom>
            <div
                style="--color: rgb(236 72 153)"
                class="relative flex justify-center text-xl text-center text-pink-400 uppercase h-1/3 drop-shadow-neon-sm"
            >
                <p>{{ $t("asking_first") }} <NuxtLink to="/nocode" class="underline underline-offset-4 animate-blink">{{ $t("click") }}</NuxtLink> {{ $t("asking_two") }}</p>
            </div>
        </template>
    </Container> -->
  <!-- card -->
  <div
    class="relative z-50 px-10 py-8 text-white border shadow-2xl shadow-white/20 rounded-3xl border-white/20 bg-gray-800/20 backdrop-blur-sm"
  >
    <div class="flex items-center justify-center space-x-8">
      <img
        class="object-cover w-72 rounded-xl contrast-125 h-80"
        src="../public/images/profil_pic.png"
        alt=""
      />
      <div class="w-80">
        <h1 class="flex mb-6 -ml-20 text-xl uppercase">Hello, I'm Chriswave</h1>
        <h3
          class="inline-flex mb-1 text-4xl underline uppercase decoration-1 decoration-dashed underline-offset-8 text-nowrap"
        >
          Web developer
        </h3>
        <h3 class="mt-3 text-xl leading-7 text-justify">
          My job is to help people by crafting them
          <span
            style="--color: rgb(94 234 212)"
            class="text-teal-200 uppercase drop-shadow-neon-sm"
            >websites</span
          >
          &
          <span
            style="--color: rgb(236 72 153)"
            class="text-pink-200 uppercase animate-blink drop-shadow-neon-sm"
            >Digital solutions</span
          >
        </h3>
      </div>
    </div>
    <div class="inline-flex justify-center w-full mt-8">
      <div
        class="flex items-center space-x-4 text-xl uppercase border-2 border-dashed group rounded-xl"
      >
        <NuxtLink
          to="/projects"
          class="px-4 py-2 transition-all duration-300 group-hover:[&:not(:hover)]:blur-sm"
          >See my work</NuxtLink
        >
        <span class="text-base normal-case">or</span>
        <a
          class="px-4 py-2 transition-all duration-300 group-hover:[&:not(:hover)]:blur-sm"
          href="mailto:demey.christophe.dc@gmail.com"
          target="_blank"
          >Work with me</a
        >
      </div>
    </div>
  </div>
</template>
