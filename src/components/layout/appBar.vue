<template>
  <v-app-bar position="fixed" color="black" elevation="1">
    <v-toolbar-title class="pt-1 pb-0">
      <v-img
        width="210px"
        height="210px"
        src="@/assets/logo-img-w.png"
        alt="Logo"
        contain
      ></v-img>
    </v-toolbar-title>

    <v-btn variant="text">Infantil</v-btn>
    <v-btn variant="text">Masculino</v-btn>
    <v-btn variant="text">Feminino</v-btn>
    <v-spacer />

    <v-text-field
      v-model="search"
      variant="underlined"
      label="O que você procura?"
      density="compact"
      hide-details
    />
    <v-spacer />

    <v-btn variant="text">Login</v-btn>
    <v-btn variant="text"><v-icon icon="mdi-heart-outline" /></v-btn>
    <v-btn variant="text"><v-icon icon="mdi-shopping-outline" /></v-btn>
  </v-app-bar>
</template>

<script setup>
import { ref } from "vue";

const search = ref("");
</script>

<style scoped>
.search-wrapper {
  color: rgba(0, 0, 0, 0.6);
}
</style>
