<template>
    <Head>
        <Title>
            &#60;Portfolio :page="Projects" &#47;&#62;
        </Title>
    </Head>

    <Modal
        v-if="showCarsharingSwiper"
        @close="showCarsharingSwiper = false"
    >
        <Carousel
            :images="carsharingImages"
        />
    </Modal>

    <Modal
        v-if="showDesksharingSwiper"
        @close="showDesksharingSwiper = false"
    >
        <Carousel
            :images="desksharingImages"
        />
    </Modal>

    <Container>
        <template #top>
            <div class="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 space-x-0 md:space-x-8">
                <ImagesCard
                    name="carsharing"
                    image="/images/projects/carsharing/trips_list.png"
                    @click="showCarsharingSwiper = true"
                />
                <ImagesCard
                    name="desksharing"
                    image="/images/projects/desksharing/devices_filter.png"
                    @click="showDesksharingSwiper = true"
                />
            </div>
        </template>

        <template #bottom>
            <DescriptionCard />
        </template>

    </Container>
</template>

<script setup lang="ts">
const showCarsharingSwiper = ref(false)
const showDesksharingSwiper = ref(false)

const carsharingImages = [
    { image:'/images/projects/carsharing/trips_list.png' },
    { image:'/images/projects/carsharing/trip_details.png' },
    { image:'/images/projects/carsharing/my_vehicle.png' },
    { image:'/images/projects/carsharing/my_places.png' },
    { image:'/images/projects/carsharing/creating_trip.png' },
]

const desksharingImages = [
  { image:'/images/projects/desksharing/devices_filter.png' },
  { image:'/images/projects/desksharing/settings_page.png' },

]
</script>
