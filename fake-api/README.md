# Fake API — Undefined Clothes

API fake com [json-server](https://github.com/typicode/json-server), pronta pra alimentar o front-end
do e-commerce enquanto não existe um back-end real.

## 1. Como rodar

Copie a pasta `fake-api` pra dentro (ou ao lado) do seu projeto e rode:

```bash
cd fake-api
npm install
npm run api
```

A API sobe em **http://localhost:3001** (seu front continua na 3000, sem conflito).

## 2. Endpoints disponíveis

O json-server gera rotas REST completas a partir do `db.json`:

| Método | Rota                     | O que faz                          |
|--------|--------------------------|-------------------------------------|
| GET    | `/products`              | Lista todos os produtos             |
| GET    | `/products/:id`          | Detalhe de um produto               |
| GET    | `/products?brand=Nike`   | Filtra por marca                    |
| GET    | `/products?category=Casual` | Filtra por categoria             |
| GET    | `/products?price_gte=400&price_lte=700` | Filtra por faixa de preço |
| GET    | `/products?q=dunk`       | Busca por texto (nome, descrição)   |
| GET    | `/products?_sort=price&_order=asc` | Ordena por preço           |
| GET    | `/brands`                | Lista de marcas (pro filtro)        |
| GET    | `/categories`            | Lista de categorias (pro filtro)    |
| POST   | `/cart`                  | Adiciona item ao carrinho           |
| GET    | `/cart`                  | Lista itens do carrinho             |
| DELETE | `/cart/:id`              | Remove item do carrinho             |
| POST   | `/users`                 | Cria usuário (mock de cadastro)     |

O `--delay 400` no script simula latência de rede real (400ms) — assim você é
obrigado a implementar loading state de verdade, não só o caminho feliz.

## 3. Exemplo de integração com Pinia (store de produtos)

```ts
// src/stores/products.ts
import { defineStore } from 'pinia'

const API_URL = 'http://localhost:3001'

interface Product {
  id: number
  name: string
  brand: string
  category: string
  description: string
  price: number
  stock: number
  sizes: number[]
  image: string
}

export const useProductsStore = defineStore('products', {
  state: () => ({
    items: [] as Product[],
    loading: false,
    error: null as string | null,
  }),
  actions: {
    async fetchProducts(filters?: { brand?: string; category?: string; q?: string }) {
      this.loading = true
      this.error = null
      try {
        const params = new URLSearchParams(filters as Record<string, string>)
        const res = await fetch(`${API_URL}/products?${params}`)
        if (!res.ok) throw new Error('Falha ao carregar produtos')
        this.items = await res.json()
      } catch (e) {
        this.error = (e as Error).message
      } finally {
        this.loading = false
      }
    },
    async fetchProductById(id: number) {
      const res = await fetch(`${API_URL}/products/${id}`)
      if (!res.ok) throw new Error('Produto não encontrado')
      return (await res.json()) as Product
    },
  },
})
```

No componente:

```vue
<script setup lang="ts">
import { onMounted } from 'vue'
import { useProductsStore } from '@/stores/products'

const store = useProductsStore()
onMounted(() => store.fetchProducts())
</script>

<template>
  <v-skeleton-loader v-if="store.loading" type="card" />
  <v-alert v-else-if="store.error" type="error">{{ store.error }}</v-alert>
  <v-row v-else>
    <v-col v-for="p in store.items" :key="p.id" cols="12" sm="6" md="4">
      <!-- seu card de produto aqui -->
    </v-col>
  </v-row>
</template>
```

## 4. Por que isso vale pro seu portfólio

Isso resolve o item "Consumir uma API de verdade" do roadmap: com o `--delay`,
você é forçado a tratar **loading, erro e estado vazio** — que é justamente o
que separa um projeto estático de um projeto que parece produção.

Quando quiser, dá pra trocar isso por uma API real (Node/Express, NestJS)
mantendo os mesmos endpoints — o front não precisa mudar quase nada.
