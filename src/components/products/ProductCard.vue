<template>
  <v-container>
    <v-row>
      <ProductSkeleton v-if="loading" />

      <v-col v-else v-for="(product, index) in products" :key="index" cols="12" sm="6" md="4" lg="3">
        <v-card class="pa-3" elevation="0" border>
          <v-img :src="product.image" height="250" cover class="rounded">
            <v-btn icon size="small" variant="outlined" class="favorite-btn">
              <v-icon>mdi-heart-outline</v-icon>
            </v-btn>
          </v-img>

          <v-card-text class="px-0">
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

          <v-card-actions class=" pt-0 pb-0">
            <v-btn color="black" variant="flat" prepend-icon="mdi-cart-plus" block>
              Adicionar ao carrinho
            </v-btn>
          </v-card-actions>
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
