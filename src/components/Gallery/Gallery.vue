<script setup lang='ts'>
import { ref } from 'vue';
import Header from './Header.vue';
import Swiper from './Swiper.vue';
const tabs = ['Samochody osobowe', 'Samochody dostawcze'];
const activeTab = ref(tabs[0]);
console.log(activeTab.value);

const changeTab = (tabIndex: number) => {
  console.log("tab index: " + tabIndex);
  activeTab.value = tabs[tabIndex];
}

const getCurrentActiveTab = () :string => {
  console.log("current tab: " + activeTab.value);
  return activeTab.value;
}
</script>

<template>
  <section id="gallery" class="px-10 -mt-24 md:px-[88px] md:pt-[80px]">
    <Header :get-current-active-tab="getCurrentActiveTab" @change-tab="changeTab"/>
    <Swiper :car-type="activeTab" />
  </section>
</template>

<style scoped></style>