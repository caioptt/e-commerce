<template>
  <v-carousel :show-arrows="false" :height="carouselHeight" cycle hide-delimiter-background>
    <v-carousel-item v-for="(item, i) in items" :key="i">
      <v-img :src="item.src" :cover="true" :height="carouselHeight" />

      <div v-if="!isMobile" class="carousel-overlay">
        <h2 class="text-h4 font-weight-bold">{{ item.title }}</h2>
        <p class="text-body-1">{{ item.subtitle }}</p>
      </div>
    </v-carousel-item>
  </v-carousel>
</template>

<script setup>
import { computed } from "vue";
import { useDisplay } from "vuetify";

const { smAndDown, mdAndDown } = useDisplay();

const isMobile = computed(() => smAndDown.value);

const carouselHeight = computed(() => {
  if (smAndDown.value) return 280;
  if (mdAndDown.value) return 420;
  return 520;
});

const items = [
  {
    src: new URL("@/assets/carousel/1.png", import.meta.url).href,
    title: "Encontre os produtos mais desejados",
    subtitle: "Nike, Adidas, New Balance e mais",
  },
  {
    src: new URL("@/assets/carousel/2.png", import.meta.url).href,
    title: "As melhores opções",
    subtitle: "Escolha seu estilo",
  },
  {
    src: new URL("@/assets/carousel/3.png", import.meta.url).href,
    title: "Explore outras opções",
    subtitle: "Novidades e lançamentos",
  },
  {
    src: new URL("@/assets/carousel/4.png", import.meta.url).href,
    title: "Explore outras opções",
    subtitle: "Novidades e lançamentos",
  },
];
</script>

<style scoped>
.carousel-overlay {
  position: absolute;
  left: 48px;
  bottom: 48px;
  color: white;
  max-width: 520px;
  text-shadow: 0 6px 18px rgba(0, 0, 0, 0.877);
}
</style>
