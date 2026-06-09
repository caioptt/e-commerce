<template>
  <v-container class="py-8">
    <h1 class="text-h4 font-weight-bold mb-6">
      Carrinho
    </h1>

    <v-row>
      <!-- Lista de produtos -->
      <v-col cols="12" md="8">
        <v-card
          v-for="item in cartItems"
          :key="item.id"
          class="mb-4 pa-4"
          elevation="0"
          border
        >
          <v-row align="center">
            <v-col cols="4" sm="3">
              <v-img
                :src="item.image"
                aspect-ratio="1"
                cover
                class="rounded"
              />
            </v-col>

            <v-col cols="8" sm="5">
              <h3 class="text-subtitle-1 font-weight-bold">
                {{ item.name }}
              </h3>

              <p class="text-body-2 text-grey mb-2">
                {{ item.description }}
              </p>

              <p class="font-weight-bold">
                {{ item.price }}
              </p>
            </v-col>

            <v-col cols="12" sm="4" class="d-flex align-center justify-sm-end">
              <v-btn
                icon
                variant="outlined"
                size="small"
                @click="decreaseQuantity(item.id)"
              >
                <v-icon>mdi-minus</v-icon>
              </v-btn>

              <span class="mx-4 font-weight-bold">
                {{ item.quantity }}
              </span>

              <v-btn
                icon
                variant="outlined"
                size="small"
                @click="increaseQuantity(item.id)"
              >
                <v-icon>mdi-plus</v-icon>
              </v-btn>

              <v-btn
                icon
                variant="text"
                color="red"
                class="ml-3"
                @click="removeItem(item.id)"
              >
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>

      <!-- Resumo -->
      <v-col cols="12" md="4">
        <v-card class="pa-5" elevation="0" border>
          <h2 class="text-h6 font-weight-bold mb-4">
            Resumo do pedido
          </h2>

          <div class="d-flex justify-space-between mb-2">
            <span>Subtotal</span>
            <strong>{{ subtotal }}</strong>
          </div>

          <div class="d-flex justify-space-between mb-2">
            <span>Frete</span>
            <strong>Grátis</strong>
          </div>

          <v-divider class="my-4" />

          <div class="d-flex justify-space-between text-h6 font-weight-bold">
            <span>Total</span>
            <span>{{ subtotal }}</span>
          </div>

          <v-btn
            block
            color="black"
            class="mt-6"
            size="large"
          >
            Finalizar compra
          </v-btn>

          <v-btn
            block
            variant="outlined"
            class="mt-3"
            to="/"
          >
            Continuar comprando
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

import tenis1 from '@/assets/products/air force.png'
import tenis2 from '@/assets/products/dunk low.png'

const cartItems = ref([
  {
    id: 1,
    name: 'Nike Air Force 1',
    description: 'Tênis casual confortável para o dia a dia',
    price: 'R$ 699,90',
    priceValue: 699.9,
    quantity: 1,
    image: tenis1,
  },
  {
    id: 2,
    name: 'Nike Dunk Low',
    description: 'Estilo urbano com design clássico',
    price: 'R$ 649,90',
    priceValue: 649.9,
    quantity: 1,
    image: tenis2,
  },
])

const subtotal = computed(() => {
  const total = cartItems.value.reduce((sum, item) => {
    return sum + item.priceValue * item.quantity
  }, 0)

  return total.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
})

function increaseQuantity(id: number) {
  const item = cartItems.value.find(item => item.id === id)

  if (item) {
    item.quantity++
  }
}

function decreaseQuantity(id: number) {
  const item = cartItems.value.find(item => item.id === id)

  if (item && item.quantity > 1) {
    item.quantity--
  }
}

function removeItem(id: number) {
  cartItems.value = cartItems.value.filter(item => item.id !== id)
}
</script>