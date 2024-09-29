<template>
    <Head>
        <Title>&#60;Portfolio :page="Why code?" &#47;&#62;</Title>
        <Meta name="code vs no-code" content="Why not asking for a developer?"/>
    </Head>
    <Container class="text-white">
        <template #top>
            <div class="w-full">
                <header class="flex [&>*]:w-1/2 text-center mb-4 uppercase">
                    <h1 style="--color: rgb(94 234 212)" class="text-base md:text-lg font-extralight drop-shadow-neon text-[--color]">
                        code
                    </h1>
                    <h1 style="--color: rgb(236 72 153)" class="text-base md:text-lg font-extralight drop-shadow-neon text-[--color]">
                        no code
                    </h1>
                </header>
                <ComparisonFirstPart />
            </div>
        </template>
        <template #bottom>
            <ComparisonSecondPart />
        </template>
    </Container>
</template>
