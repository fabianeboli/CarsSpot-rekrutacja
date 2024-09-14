<script setup lang='ts'>
import { ref } from 'vue';

const props = defineProps<{ getCurrentActiveTab: () => string}>()

defineEmits('changeTab');

</script>

<template>
  <div class="mb-20">
    <div class="mb-6">
      <h2 class="font-secondHeader text-[21.5px] leading-[32.25px] text-accent">Prezentacja firmy</h2>
      <h1 class="font-header text-[40px] leading-[48px] text-headerTitle">Zobacz naszą Galerię zdjęć</h1>
    </div>

    <nav>
      <ul class="flex gap-x-12 sm:text-[15px] leading-[22.5px] tracking-[-0.02em] font-sans">
        <button @click="$emit('changeTab', 0)" :class="{ 'text-accent font-semibold border-b border-accent': props.getCurrentActiveTab() === 'Samochody osobowe' }">Samochody osobowe</button>
        <button @click="$emit('changeTab', 1)" :class="{ 'text-accent font-semibold border-b border-accent': props.getCurrentActiveTab() === 'Samochody dostawcze' }">Samochody dostawcze</button>
      </ul>
    </nav>
  </div>
</template>

<style scoped></style>