<template>
  <v-col v-for="n in 8" :key="n" cols="12" sm="6" md="4" lg="3">
    <v-card class="pa-3" elevation="0">
      <v-skeleton-loader type="image" height="250" />

      <v-card-text>
        <v-skeleton-loader type="text" width="70%" class="mb-2" />
        <v-skeleton-loader type="text" width="90%" />
        <v-skeleton-loader type="text" width="80%" />
        <v-skeleton-loader type="text" width="40%" class="mt-3" />
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const loading = ref(true);

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 1500);
});
</script>
