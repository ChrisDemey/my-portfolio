<template>
    <Head>
        <Title>
            &#60;Portfolio :page="Projects" &#47;&#62;
        </Title>
    </Head>
    <Container>

        <template #top>
            <ImagesCard />
        </template>

        <template #bottom>
            <DescriptionCard />
        </template>

    </Container>
</template>
