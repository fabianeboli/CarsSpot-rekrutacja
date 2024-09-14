<script setup lang='ts'>
import { onMounted, ref } from 'vue';
const isVisible = ref<boolean>(false);

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 0)
})
</script>

<template>
  <Transition name="fade-in">
    <nav v-show="isVisible" class="flex justify-between py-4 md:px-[120px] flex-wrap mx-5 md:mx-0">
      <div class="my-auto">
        <img src="../../assets/CarsSpot.png" alt="CarsSpot Banner" aria-label="CarsSpot Banner">
      </div>

      <ul class="flex items-center gap-x-2.5 text-base text-primary mt-1">
        <li class="hover:text-accent duration-500"><a href="#gallery">Galeria zdjęć</a></li>
        <li class="hover:text-accent duration-500">FaQ</li>
      </ul>

      <a href="tel:123456789"
        class="my-10 mx-auto sm:mx-0 sm:my-0 bg-accent px-6 py-3 rounded-lg text-base leading-[22.5px] text-customWhite text-[15px] font-semibold tracking-[-0.02em] text-center z-50 hover:scale-105 duration-300">Zadzwoń
        do Nas
      </a>
    </nav>
  </Transition>
</template>

<style scoped>
.fade-in-enter-active,
.fade-in-leave-active {
  transition: opacity 0.5s ease;
}

.fade-in-enter-from,
.fade-in-leave-to {
  opacity: 0;
}

.slide-from-right-enter-active,
.slide-from-right-leave-active {
  transition: transform 0.5s ease;
}
</style>