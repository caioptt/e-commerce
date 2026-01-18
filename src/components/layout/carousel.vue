<template>
  <v-container>
    <v-carousel
      height="600"
      cycle
      show-arrows="hover"
      hide-delimiter-background
    >
      <v-carousel-item
        v-for="(src, i) in items"
        :key="i"
        :src="src"
        cover
      ></v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script setup>
const items = [
  "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
  "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
  "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
  "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
];
</script>
