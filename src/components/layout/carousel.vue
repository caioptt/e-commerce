<template>
  <v-carousel
    :show-arrows="false"
    height="1000"
    cycle
    hide-delimiter-background
  >
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
      cover
    />
  </v-carousel>
</template>

<script setup>
const items = [
  { src: new URL("@/assets/carousel/1.png", import.meta.url).href },
  { src: new URL("@/assets/carousel/2.png", import.meta.url).href },
  { src: new URL("@/assets/carousel/3.png", import.meta.url).href },
];
</script>
