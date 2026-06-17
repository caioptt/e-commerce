<template>
  <v-app-bar position="fixed" color="black" elevation="1">
    <v-app-bar-nav-icon v-if="isMobile" @click="drawer = !drawer" />

    <v-toolbar-title class="pt-1 pb-0">
      <router-link to="/" class="logo-link">
        <v-img width="210" height="210" src="@/assets/logo-img-w.png" alt="Logo" contain />
      </router-link>
    </v-toolbar-title>

    <template v-if="!isMobile">
      <v-btn variant="text">Infantil</v-btn>
      <v-btn variant="text">Masculino</v-btn>
      <v-btn variant="text">Feminino</v-btn>
      <v-spacer />

      <v-text-field v-model="search" variant="underlined" label="O que você procura?" density="compact" hide-details />
      <v-spacer />

      <v-btn to="/login" variant="text">Login</v-btn>
      <v-btn variant="text"><v-icon icon="mdi-heart-outline" /></v-btn>
      <v-btn to="/cart" variant="text"><v-icon icon="mdi-shopping-outline" /></v-btn>
    </template>
  </v-app-bar>

  <v-navigation-drawer color="black" v-model="drawer" temporary location="left">
    <v-btn variant="text">Login</v-btn>
    <v-btn variant="text"><v-icon icon="mdi-heart-outline" /></v-btn>
    <v-btn variant="text"><v-icon icon="mdi-shopping-outline" /></v-btn>
    <v-list>
      <v-list-item title="Home" />
      <v-list-item title="Infantil" />
      <v-list-item title="Masculino" />
      <v-list-item title="Feminino" />
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref, computed } from "vue";
import { useDisplay } from "vuetify";

const drawer = ref(false);

const { mdAndDown } = useDisplay();

const isMobile = computed(() => mdAndDown.value);
</script>
