<template>
  <v-container class="py-8">
    <h1 class="text-h4 font-weight-bold mb-6">
      Carrinho
    </h1>

    <v-row v-if="cartStore.items.length">
      <v-col cols="12" md="8">
        <v-card v-for="item in cartStore.items" :key="item.id" class="mb-4 pa-4" elevation="0" border>
          <v-row align="center">
            <v-col cols="4" sm="3">
              <v-img :src="item.image" aspect-ratio="1" cover class="rounded" />
            </v-col>

            <v-col cols="8" sm="5">
              <h3 class="text-subtitle-1 font-weight-bold">
                {{ item.name }}
              </h3>

              <p class="font-weight-bold">
                {{ formatPrice(item.price) }}
              </p>
            </v-col>

            <v-col cols="12" sm="4" class="d-flex align-center justify-sm-end">
              <v-btn variant="text" size="medium" @click="cartStore.decreaseQuantity(item.id)">
                <v-icon>mdi-minus</v-icon>
              </v-btn>

              <span class="mx-4 font-weight-bold">
                {{ item.quantity }}
              </span>

              <v-btn variant="text" size="medium" @click="cartStore.increaseQuantity(item.id)">
                <v-icon>mdi-plus</v-icon>
              </v-btn>

              <v-btn icon variant="text" color="red" class="ml-3" @click="cartStore.removeItem(item.id)">
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card class="pa-5" elevation="0" border>
          <h2 class="text-h6 font-weight-bold mb-4">
            Resumo do pedido
          </h2>

          <div class="d-flex justify-space-between mb-2">
            <span>Subtotal</span>
            <strong>{{ cartStore.subtotalFormatted }}</strong>
          </div>

          <div class="d-flex justify-space-between mb-2">
            <span>Frete</span>
            <strong>Grátis</strong>
          </div>

          <v-divider class="my-4" />

          <div class="d-flex justify-space-between text-h6 font-weight-bold">
            <span>Total</span>
            <span>{{ cartStore.subtotalFormatted }}</span>
          </div>

          <v-btn block color="black" class="mt-6" size="large">
            Finalizar compra
          </v-btn>

          <v-btn block variant="outlined" class="mt-3" size="large" to="/">
            Continuar comprando
          </v-btn>
        </v-card>
      </v-col>
    </v-row>

    <v-row v-else>
      <v-col cols="12" class="text-center py-12">
        <v-icon size="64" color="grey">mdi-cart-outline</v-icon>
        <p class="text-h6 mt-4">Seu carrinho está vazio</p>
        <v-btn color="black" class="mt-4" to="/">Continuar comprando</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useCartStore } from '@/store/cart'

const cartStore = useCartStore()

function formatPrice(value: number) {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}
</script>