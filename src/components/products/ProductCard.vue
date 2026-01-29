<template>
  <v-container>
    <v-row>
      <!-- SKELETON -->
      <ProductSkeleton v-if="loading" />

      <!-- PRODUTOS -->
      <v-col
        v-else
        v-for="(product, index) in products"
        :key="index"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <v-card class="pa-3" elevation="0">
          <v-img :src="product.image" height="250" cover />

          <v-card-text>
            <div class="text-subtitle-1 font-weight-bold">
              {{ product.name }}
            </div>
            <div class="text-body-2 text-grey">
              {{ product.description }}
            </div>
            <div class="text-h6 font-weight-bold mt-2">
              {{ product.price }}
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import ProductSkeleton from "./ProductSkeleton.vue";

import tenis1 from "@/assets/products/air force.png";
import tenis2 from "@/assets/products/dunk low.png";
import tenis3 from "@/assets/products/air max 95.png";
import tenis4 from "@/assets/products/superstar.png";
import tenis5 from "@/assets/products/puma rs-x.png";
import tenis6 from "@/assets/products/new balance.png";

const loading = ref(true);

const products = [
  {
    name: "Nike Air Force 1",
    description: "Tênis casual confortável",
    price: "R$ 699,90",
    image: tenis1,
  },
  {
    name: "Nike Dunk Low",
    description: "Estilo urbano",
    price: "R$ 649,90",
    image: tenis2,
  },
  {
    name: "Nike Air Max",
    description: "Amortecimento premium",
    price: "R$ 799,90",
    image: tenis3,
  },
  {
    name: "Adidas Superstar II",
    description: "Casual clássico",
    price: "R$ 332,90",
    image: tenis4,
  },
  {
    name: "Puma RS-X",
    description: "Design moderno",
    price: "R$ 559,90",
    image: tenis5,
  },
  {
    name: "New Balance 574",
    description: "Conforto diário",
    price: "R$ 599,99",
    image: tenis6,
  },
];

onMounted(() => {
  // Simula chamada API
  setTimeout(() => {
    loading.value = false;
  }, 700);
});
</script>
<style scoped>
.square-btn {
  border-radius: 4px;
}
</style>
