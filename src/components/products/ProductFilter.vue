<template>
  <v-container class="align-center">
    <v-card class="pa-5" max-width="100%">
      <v-row no-gutters>
        <v-col cols="4" class="px-2">
          <v-select variant="outlined" v-model="brand" density="compact" hide-details clearable label="Marca"
            :items="productsStore.brands" @update:model-value="(val) => productsStore.setBrandFilter(val || '')" />
        </v-col>

        <v-col cols="4" class="px-2">
          <v-select variant="outlined" v-model="category" density="compact" hide-details clearable label="Categoria"
            :items="productsStore.categories"
            @update:model-value="(val) => productsStore.setCategoryFilter(val || '')" />
        </v-col>

        <v-col cols="4" class="px-2">
          <v-select variant="outlined" v-model="sort" density="compact" hide-details clearable label="Preço"
            :items="sortOptions" item-title="text" item-value="value"
            @update:model-value="(val) => productsStore.setSort(val || '')" />
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useProductsStore } from "@/store/products";

const productsStore = useProductsStore();

const brand = ref("");
const category = ref("");
const sort = ref("");

const sortOptions = [
  { text: "Menor preço", value: "price_asc" },
  { text: "Maior preço", value: "price_desc" },
];
</script>