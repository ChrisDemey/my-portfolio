<template>
    <Head>
        <Title>&#60;Portfolio :page="Projects" &#47;&#62;</Title>
        <Meta name="Projects page" content="All of my client projects"/>
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

    <div class="md:hidden absolute z-10 h-screen w-full">
        <ul class="h-screen px-6 pb-6 flex items-end overflow-y-auto space-x-10">
            <li v-for="(item, index) in projects" :key="index" class="space-y-4">
                <ImagesCard
                    :name="item.name"
                    :image="item.image"
                    @click="item.name === 'carsharing' ? showCarsharingSwiper = true : showDesksharingSwiper = true"
                />
                <DescriptionCard
                    :text="item.text"
                />
            </li>
        </ul>
    </div>

    <div class="hidden md:block absolute z-10 h-screen w-full">
      <ul class="h-2/3 flex justify-center items-end space-x-6 pb-4">
        <li v-for="(item, index) in projects" :key="index" class="space-y-4">
          <ImagesCard
              :name="item.name"
              :image="item.image"
              @click="item.name === 'carsharing' ? showCarsharingSwiper = true : showDesksharingSwiper = true"
          />
        </li>
      </ul>
      <ul class="h-1/3 flex justify-center space-x-6 pt-4">
        <li v-for="(item, index) in projects" :key="index">
          <DescriptionCard
              :text="item.text"
          />
        </li>
      </ul>
    </div>

</template>

<script setup lang="ts">
const showCarsharingSwiper = ref(false)
const showDesksharingSwiper = ref(false)

const projects = [
    { name:'carsharing', image:'/images/projects/carsharing/trips_list.png', text: 'carsharing_description' },
    { name:'desksharing', image:'/images/projects/desksharing/devices_filter.png', text: 'desksharing_description' },
]

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
