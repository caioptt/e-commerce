<template>
  <v-container class="pa-0">
    <v-card class="align-center, pa-3" max-width="344">
      <v-img
        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        height="250px"
        width="100%"
      ></v-img>
      <v-card-title>{{ product.name }}</v-card-title>
      <v-card-actions>
        <v-row>
          <v-col class="" cols="8">
            <v-card-subtitle>R$ {{ product.price }}</v-card-subtitle></v-col
          >
          <v-col class="pl-0" cols="4"
            ><v-btn
              size="small"
              color="black"
              variant="outlined"
              icon="mdi-shopping-outline"
              class="square-btn"
            ></v-btn
          ></v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
interface Product {
  id: number;
  name: string;
  price: number;
}

defineProps<{
  product: Product;
}>();
</script>

<style scoped>
.square-btn {
  border-radius: 4px;
}
</style>
