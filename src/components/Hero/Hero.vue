<script setup lang='ts'>
import { onMounted, ref } from 'vue';
const isVisibleHeroImage = ref<boolean>(false);
const isVisibleHeroText = ref<boolean>(false);

onMounted(() => {
  setTimeout(() => {
    isVisibleHeroText.value = true
  }, 20)

  setTimeout(() => {
    isVisibleHeroImage.value = true
  }, 300)
})
</script>

<template>
  <section class="h-[825px]">
    <Transition name="fade-in">
      <div v-show="isVisibleHeroText" class="flex flex-col justify-center items-start py-20 px-10 md:p-[120px]">
        <h1 class="font-header text-primary text-[76.29px] leading-[83.92px] tracking-[-0.04em] mb-8">Sprzedajemy
          Samochody
          <span class="block">Z Europy</span>
        </h1>

        <p class="font-secondHeader text-base text-primary leading-6 mb-12">Kup komfortowy pojazd, aby każda podróż
          <span class="block">była wyjątkowym przeżyciem.</span>
        </p>

        <div class="flex gap-x-6">
          <a href="#gallery"
            class="bg-accent px-6 py-3 rounded-lg leading-[22.5px] text-customWhite text-[15px] font-semibold tracking-[-0.02em] hover:scale-105 duration-300">Zobacz
            zdjęcia</a>
          <a href="tel:123456789"
            class="border border-accent px-6 py-3 rounded-lg  leading-[22.5px] text-accent text-[15px] font-semibold tracking-[-0.02em] hover:scale-105 duration-300">Zadzwoń
            do nas</a>
        </div>
      </div>
    </Transition>

    <Transition name="slide-from-right">
      <div v-show="isVisibleHeroImage" class="relative">
        <img class="hidden xl:block absolute h-[668.05px] w-[671.83px] bottom-0 right-20 -z-1"
          src="../../assets/WheelTracks.png" alt="Wheel Tracks" aria-label="Wheel Tracks image">
      </div>
    </Transition>

    <Transition name="slide-from-right">
      <div v-if="isVisibleHeroImage" class="relative">
        <img class="hidden xl:block absolute h-[404.37px] w-[1064px] right-0 -bottom-36 z-50 "
          src="../../assets/Hero.png" alt="CarsSpot Banner" aria-label="CarsSpot Banner">
      </div>
    </Transition>
  </section>

</template>

<style scoped>
.slide-from-right-enter-active,
.slide-from-right-leave-active {
  transition: all 0.5s ease;
}

.slide-from-right-enter-from {
  transform: translateX(100%);
  transition: all .5s ease-out;
}

.slide-from-right-leave-to {
  transform: translateX(-100%);
  transition: all .5s ease-out;
}

.fade-in-enter-active,
.fade-in-leave-active {
  transition: all .5s ease-in-out;
}

.fade-in-enter-from {
  opacity: 0;
}

.fade-in-leave-to {
  opacity: 0;
}
</style>