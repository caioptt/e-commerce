<template>
    <v-container class="py-8">
        <v-alert v-if="error" type="error">{{ error }}</v-alert>

        <v-skeleton-loader v-else-if="loading" type="image, article" />

        <v-row v-else-if="product">
            <v-col cols="12" md="6">
                <v-img :src="product.image" height="400" cover class="rounded" />
            </v-col>

            <v-col cols="12" md="6">

                <h1 class="text-h4 font-weight-bold">{{ product.name }}</h1>
                <p class="text-body-1 text-grey mt-2">{{ product.description }}</p>
                <p class="text-h5 font-weight-bold mt-4">{{ formatPrice(product.price) }}</p>
                <p class="text-caption text-grey mt-4">
                    {{ product.stock }} unidades em estoque
                </p>

                <v-row>
                    <v-col cols="6" md="3"> <v-select variant="outlined" v-model="selectedSize" :items="product.sizes"
                            label="Tamanho" class="mt-4" style="max-width: 200px" /></v-col>

                    <v-col cols="6" md="3"><v-select variant="outlined" v-model="selectedColor" :items="product.colors"
                            label="Cor" class="mt-4" style="max-width: 200px" /></v-col>
                </v-row>

                <v-row>
                    <v-col cols="2" md="3"> <v-btn color="black" variant="flat" size="large" class="mt-2"
                            :disabled="!selectedSize || !selectedColor" @click="cartStore.addItem(product)">
                            Comprar agora
                        </v-btn>
                    </v-col>

                    <v-col cols="4" md="5">
                        <v-btn color="black" variant="flat" prepend-icon="mdi-shopping-outline" size="large"
                            class="mt-2" :disabled="!selectedSize || !selectedColor"
                            @click="cartStore.addItem(product)">
                            Adicionar ao carrinho
                        </v-btn>
                    </v-col>

                </v-row>



            </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useProductsStore, type Product } from "@/store/products";
import { useCartStore } from "@/store/cart";

const route = useRoute();
const productsStore = useProductsStore();
const cartStore = useCartStore();

const product = ref<Product | null>(null);
const loading = ref(true);
const error = ref<string | null>(null);
const selectedSize = ref<number | null>(null);
const selectedColor = ref<string | null>(null);

function formatPrice(value: number) {
    return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

onMounted(async () => {
    try {
        const id = Number(route.params.id);
        product.value = await productsStore.fetchProductById(id);
    } catch (e) {
        error.value = (e as Error).message;
    } finally {
        loading.value = false;
    }
});
</script>