<script setup lang='ts'>

</script>

<template>
  <section class="grid grid-rows-1 grid-col-1 sm:grid-cols-2 gap-x-16">
    <img class="w-auto sm:h-auto" src="../../assets/car_1.png" alt="car 1" aria-label="Picture of car" />
    <img class="hidden sm:block sm:w-auto sm:h-auto" src="../../assets/car_2.png" alt="car 2"
      aria-label="Picture of car 2" />
    <div class="absolute hidden md:block">
      <img class="relative w-auto h-auto left-[92.5vw] " src="../../assets/car_3.png" alt="car 3"
        aria-label="Picture of car 3" />
    </div>
  </section>

  <section class="flex gap-x-2.5 justify-center pt-12 pb-20">
    <div class="w-2 h-2 bg-accent rounded-full"></div>
    <div v-for="() in 4" class="w-2 h-2 bg-customGray rounded-full"></div>
  </section>


</template>

<style scoped></style>