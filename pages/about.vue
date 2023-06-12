<template>
    <Head>
        <Title>&#60;Portfolio :page="My timeline" &#47;&#62;</Title>
        <Meta name="About page" content="I let you know my recent timeline"/>
    </Head>
    <Container>
        <template #top>
            <Training />
        </template>
        <template #bottom>
            <Work />
        </template>
    </Container>
</template>
