<script setup lang='ts'>
import { ref } from 'vue';
const fullText = "Mauris varius ipsum mauris, rutrum lobortis magna efficitur a. Donec egestas, nisl vehicula feugiat ornare, diam turpis efficitur mi, ac venenatis eros ipsum ac arcu. Vestibulum et eiusmod eu irure eu aute dolor ut exercitation veniam dolor sunt veniam id culpa. Ullamco anim tempor ullamco commodo esse eiusmod culpa non proident mollit. Incididunt occaecat adipisicing eiusmod cillum occaecat fugiat et reprehenderit ea excepteur minim."

const isExtended = ref<boolean>(false);

const toggleExtended = () => {
  isExtended.value = !isExtended.value;
};

const formatParagraph = () => {
  return isExtended.value ? fullText : `${fullText.substring(0, fullText.indexOf("Vestibulum et") + "Vestibulum et".length)} [...]`
}
</script>

<template>
  <section class="text-white w-full">
    <h1 class="font-header text-[25px] leading-[37.5px] tracking-[-0.03em] pb-4">
      Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit nulla commodo.
    </h1>

    <p class="font-secondHeader pb-6 text-[14px] leading-[21px]">
      {{ formatParagraph() }}
    </p>


    <button @click="toggleExtended"
      class="font-secondHeader flex text-[14px] leading-[21px] gap-x-[3.19px] border-b-[1.5px] pb-1.5">{{ isExtended ?
        'Zwiń' : 'Rozwiń' }}<img :class="{ 'rotate-180': isExtended }" src="../../assets/arrow_down.svg" alt="arrow down"
        aria-label="arrow down" /> </button>
  </section>
</template>

<style scoped></style>
