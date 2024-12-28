<template>
  <Head>
    <Title>&#60;Portfolio :page="Projects" &#47;&#62;</Title>
    <Meta name="Projects page" content="All of my client projects" />
  </Head>

  <Modal v-if="showCarsharingSwiper" @close="showCarsharingSwiper = false">
    <Carousel :images="carsharingImages" />
  </Modal>

  <Modal v-if="showDesksharingSwiper" @close="showDesksharingSwiper = false">
    <Carousel :images="desksharingImages" />
  </Modal>

  <div class="absolute z-10 w-full h-screen md:hidden">
    <ul class="flex items-end h-screen px-6 pb-6 space-x-10 overflow-y-auto">
      <li v-for="(item, index) in projects" :key="index" class="space-y-4">
        <ImagesCard
          :name="item.name"
          :image="item.image"
          @click="
            item.name === 'carsharing'
              ? (showCarsharingSwiper = true)
              : (showDesksharingSwiper = true)
          "
        />
        <DescriptionCard :text="item.text" />
      </li>
    </ul>
  </div>

  <div class="absolute z-10 hidden w-full h-screen md:block">
    <div class="flex flex-col justify-end pb-4 h-2/3">
      <alstom-logo />
      <ul class="flex items-end justify-center space-x-6">
        <li v-for="(item, index) in projects" :key="index" class="space-y-4">
          <ImagesCard
            :name="item.name"
            :image="item.image"
            @click="
              item.name === 'carsharing'
                ? (showCarsharingSwiper = true)
                : (showDesksharingSwiper = true)
            "
          />
        </li>
      </ul>
    </div>
    <ul class="flex justify-center pt-4 space-x-6 h-1/3">
      <li v-for="(item, index) in projects" :key="index">
        <DescriptionCard :text="item.text" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const showCarsharingSwiper = ref(false);
const showDesksharingSwiper = ref(false);

const projects = [
  {
    name: "carsharing",
    image: "/images/projects/carsharing/trips_list.png",
    text: "carsharing_description",
  },
  {
    name: "desksharing",
    image: "/images/projects/desksharing/devices_filter.png",
    text: "desksharing_description",
  },
];

const carsharingImages = [
  { image: "/images/projects/carsharing/trips_list.png" },
  { image: "/images/projects/carsharing/trip_details.png" },
  { image: "/images/projects/carsharing/my_vehicle.png" },
  { image: "/images/projects/carsharing/my_places.png" },
  { image: "/images/projects/carsharing/creating_trip.png" },
];

const desksharingImages = [
  { image: "/images/projects/desksharing/devices_filter.png" },
  { image: "/images/projects/desksharing/settings_page.png" },
];
</script>
