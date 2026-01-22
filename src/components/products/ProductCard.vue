<template>
  <v-container>
    <v-row>
      <v-col v-for="(product, index) in products" :key="index" cols="2">
        <v-card class="pa-3" elevation="0">
          <v-img :src="product.image" height="250" width="100%" cover />

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
import tenis1 from "@/assets/air force.png";
import tenis2 from "@/assets/dunk low.png";
import tenis3 from "@/assets/air max 95.png";
import tenis4 from "@/assets/superstar.png";
import tenis5 from "@/assets/puma rs-x.png";
import tenis6 from "@/assets/new balance.png";

const products = [
  {
    name: "Nike Air Force 1",
    description: "Tênis casual confortável para o dia a dia",
    price: "R$ 699,90",
    image: tenis1,
  },
  {
    name: "Nike Dunk Low",
    description: "Estilo urbano com design clássico",
    price: "R$ 649,90",
    image: tenis2,
  },
  {
    name: "Nike Air Max",
    description: "Amortecimento e conforto premium",
    price: "R$ 799,90",
    image: tenis3,
  },
  {
    name: "Adidas Superstar II",
    description: "Tênis casual confortável para o dia a dia",
    price: "R$ 332,90",
    image: tenis4,
  },
  {
    name: "Puma RS-X",
    description: "Estilo urbano com design clássico",
    price: "R$ 559,90",
    image: tenis5,
  },
  {
    name: "New Balance 574 Legacy",
    description: "Amortecimento e conforto premium",
    price: "R$ 599,99",
    image: tenis6,
  },
];
</script>

<style scoped>
.square-btn {
  border-radius: 4px;
}
</style>
