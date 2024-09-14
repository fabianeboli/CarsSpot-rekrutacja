<script setup lang='ts'>
import { onMounted, ref } from 'vue';
import Header from './Header.vue';
import Swiper from './Swiper.vue';
const tabs = ['Samochody osobowe', 'Samochody dostawcze'];
const activeTab = ref(tabs[0]);
const isVisible = ref<boolean>(false);

const changeTab = (tabIndex: number) => {
  activeTab.value = tabs[tabIndex];
}

const getCurrentActiveTab = (): string => {
  return activeTab.value;
}

onMounted(() => {
    isVisible.value = true
})
</script>

<template>
  <Transition name="fade-in">
    <section v-show="isVisible" id="gallery" class="px-10 -mt-24 md:px-[88px] md:pt-[80px]">
      <Header :get-current-active-tab="getCurrentActiveTab" @change-tab="changeTab" />
      <Swiper :car-type="activeTab" />
    </section>
  </Transition>
</template>

<style scoped>
.fade-in-enter-active,
.fade-in-leave-active {
  transition: opacity 1s ease;
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