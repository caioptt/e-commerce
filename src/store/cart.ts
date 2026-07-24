import { defineStore } from 'pinia'
import type { Product } from './products'

export interface CartItem {
    id: number
    name: string
    price: number
    image: string
    quantity: number
}

const STORAGE_KEY = 'undefined-clothes-cart'

function loadCart(): CartItem[] {
    try {
        const raw = localStorage.getItem(STORAGE_KEY)
        return raw ? JSON.parse(raw) : []
    } catch {
        return []
    }
}

export const useCartStore = defineStore('cart', {
    state: () => ({
        items: loadCart() as CartItem[],
    }),

    getters: {
        totalItems: state => state.items.reduce((sum, i) => sum + i.quantity, 0),

        subtotal: state => state.items.reduce((sum, i) => sum + i.price * i.quantity, 0),

        subtotalFormatted(): string {
            return this.subtotal.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
            })
        },
    },

    actions: {
        persist() {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(this.items))
        },

        addItem(product: Product) {
            const existing = this.items.find(i => i.id === product.id)

            if (existing) {
                existing.quantity++
            } else {
                this.items.push({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    quantity: 1,
                })
            }

            this.persist()
        },

        increaseQuantity(id: number) {
            const item = this.items.find(i => i.id === id)
            if (item) item.quantity++
            this.persist()
        },

        decreaseQuantity(id: number) {
            const item = this.items.find(i => i.id === id)
            if (item && item.quantity > 1) item.quantity--
            this.persist()
        },

        removeItem(id: number) {
            this.items = this.items.filter(i => i.id !== id)
            this.persist()
        },

        clearCart() {
            this.items = []
            this.persist()
        },
    },
})