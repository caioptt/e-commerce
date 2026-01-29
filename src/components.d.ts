
export {}

/* prettier-ignore */
declare module 'vue' {
  export interface GlobalComponents {
    AppBar: typeof import('./components/layout/appBar.vue')['default']
    Carousel: typeof import('./components/layout/carousel.vue')['default']
    Footer: typeof import('./components/layout/footer.vue')['default']
    ProductCard: typeof import('./components/products/ProductCard.vue')['default']
    ProductFilter: typeof import('./components/products/ProductFilter.vue')['default']
    ProductSkeleton: typeof import('./components/products/ProductSkeleton.vue')['default']
    RouterLink: typeof import('vue-router')['RouterLink']
    RouterView: typeof import('vue-router')['RouterView']
  }
}
