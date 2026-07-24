<template>
  <v-container>
    <v-row>
      <ProductSkeleton v-if="productsStore.loading" />

      <v-col v-else-if="productsStore.error" cols="12">
        <v-alert type="error">{{ productsStore.error }}</v-alert>
      </v-col>

      <v-col v-else-if="productsStore.filteredProducts.length === 0" cols="12">
        <v-alert type="info">Nenhum produto encontrado com esses filtros.</v-alert>
      </v-col>

      <v-col v-else v-for="product in productsStore.filteredProducts" :key="product.id" cols="12" sm="6" md="4" lg="3">
        <v-card class="pa-3" elevation="0" border>
          <router-link :to="`/produto/${product.id}`" class="text-decoration-none">
            <v-img :src="product.image" height="250" cover class="rounded">
              <v-btn icon size="small" variant="outlined" class="favorite-btn" @click.stop.prevent>
                <v-icon>mdi-heart-outline</v-icon>
              </v-btn>
            </v-img>

            <v-card-text class="px-0">
              <div class="text-subtitle-1 font-weight-bold text-black">
                {{ product.name }}
              </div>

              <div class="text-body-2 text-grey">
                {{ product.description }}
              </div>

              <div class="text-h6 font-weight-bold mt-2 text-black">
                {{ formatPrice(product.price) }}
              </div>
            </v-card-text>
          </router-link>

          <v-card-actions class="pt-0 pb-0">
            <v-btn color="black" variant="flat" prepend-icon="mdi-cart-plus" block @click="cartStore.addItem(product)">
              Adicionar ao carrinho
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import ProductSkeleton from "./ProductSkeleton.vue";
import { useProductsStore } from "@/store/products";
import { useCartStore } from "@/store/cart";

const productsStore = useProductsStore();
const cartStore = useCartStore();

function formatPrice(value: number) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

onMounted(() => {
  productsStore.fetchProducts();
  productsStore.fetchFilters();
});
</script>

<style scoped>
.square-btn {
  border-radius: 4px;
}
</style>