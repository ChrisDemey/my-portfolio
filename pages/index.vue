<template>
    <Head>
        <Title>&#60;Portfolio :page="Welcome" &#47;&#62;</Title>
        <Meta name="Home page" content="Landing page of my website"/>
    </Head>
    <Container>
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
    </Container>
</template>
