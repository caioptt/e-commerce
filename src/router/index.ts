import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import('@/views/home.vue')
    },
    {
      path: "/produto/:id",
      name: "product-detail",
      component: () => import('@/components/products/productPage.vue')
    },
    {
      path: "/Cart",
      name: "cart",
      component: () => import('@/components/menus/cart.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/components/menus/login.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/components/menus/register.vue'),
    }
  ],
});

export default router;