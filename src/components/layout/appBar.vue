<template>
  <v-app-bar position="fixed" color="white" elevation="1">
    <v-toolbar-title class="font-weight-bold">
      <v-img
        width="210px"
        height="210px"
        src="@/assets/logo-img.png"
        alt="Logo"
        contain
      ></v-img>
    </v-toolbar-title>

    <v-spacer />

    <v-text-field
      v-model="search"
      prepend-inner-icon="mdi-magnify"
      label="Buscar produtos"
      density="compact"
      hide-details
    />

    <v-spacer />

    <v-btn variant="text">Login</v-btn>
    <v-btn variant="text">Favoritos</v-btn>
    <v-btn variant="text">Sacola</v-btn>
  </v-app-bar>
</template>

<script setup>
import { ref } from "vue";

const search = ref("");
</script>

<style scoped></style>
