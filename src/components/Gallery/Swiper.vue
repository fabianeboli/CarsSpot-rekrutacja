<script setup lang='ts'>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle';

const { carType } = defineProps<{ carType: string }>();

</script>

<template>
  <Swiper class="w-screen" :slides-per-view="'auto'" :space-between="64" :modules="[Pagination]"
    :pagination="{ clickable: true }" :loop="true">
    <swiper-slide v-for="i in 5">
      <img v-if="carType === 'Samochody osobowe'" class="max-w-[600px] min-h-[446px] w-full sm:h-auto" loading="lazy" :src="`/car_${i}.png`"
        :alt="`car ${i}`" :aria-label="`Picture of car ${i} of ${3}`" />
      <img v-else class="max-w-[600px] min-h-[446px] w-full sm:h-auto" loading="lazy" :src="`/truck_${i}.png`" :alt="`truck ${i}`" />
    </swiper-slide>
  </Swiper>


</template>

<style>
.swiper-slide {
  @apply !w-[80%] md:!w-[41.7%]
}

.swiper-pagination {
  @apply !gap-x-2.5 !justify-center !pt-12 !pb-20 !relative !mx-auto !left-[-92px]
}

.swiper-pagination-bullet {
  @apply !w-2 !h-2 !bg-customGray !opacity-100
}

.swiper-pagination-bullet-active {
  @apply !bg-accent
}
</style>