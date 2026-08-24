import { defineStore } from 'pinia'

const API_URL = 'http://localhost:3001'

export interface Product {
    id: number
    name: string
    brand: string
    category: string
    description: string
    price: number
    stock: number
    sizes: number[]
    colors: string[]
    image: string
}

interface Filters {
    brand: string
    category: string
    sort: '' | 'price_asc' | 'price_desc'
}

export const useProductsStore = defineStore('products', {
    state: () => ({
        items: [] as Product[],
        brands: [] as string[],
        categories: [] as string[],
        loading: false,
        error: null as string | null,
        filters: {
            brand: '',
            category: '',
            sort: '',
        } as Filters,
    }),

    getters: {
        filteredProducts(state): Product[] {
            let result = [...state.items]

            if (state.filters.brand) {
                result = result.filter(p => p.brand === state.filters.brand)
            }

            if (state.filters.category) {
                result = result.filter(p => p.category === state.filters.category)
            }

            if (state.filters.sort === 'price_asc') {
                result = result.sort((a, b) => a.price - b.price)
            } else if (state.filters.sort === 'price_desc') {
                result = result.sort((a, b) => b.price - a.price)
            }

            return result
        },
    },

    actions: {
        async fetchProducts() {
            this.loading = true
            this.error = null

            try {
                const res = await fetch(`${API_URL}/products`)
                if (!res.ok) throw new Error('Não foi possível carregar os produtos.')
                this.items = await res.json()
            } catch (e) {
                this.error = (e as Error).message
            } finally {
                this.loading = false
            }
        },

        async fetchFilters() {
            try {
                const [brandsRes, categoriesRes] = await Promise.all([
                    fetch(`${API_URL}/brands`),
                    fetch(`${API_URL}/categories`),
                ])
                this.brands = await brandsRes.json()
                this.categories = await categoriesRes.json()
            } catch {
                // filtros são só um extra, não trava a tela se falhar
            }
        },

        async fetchProductById(id: number): Promise<Product> {
            const res = await fetch(`${API_URL}/products/${id}`)
            if (!res.ok) throw new Error('Produto não encontrado.')
            return res.json()
        },

        setBrandFilter(brand: string) {
            this.filters.brand = brand
        },

        setCategoryFilter(category: string) {
            this.filters.category = category
        },

        setSort(sort: Filters['sort']) {
            this.filters.sort = sort
        },
    },
})