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
      path: "/Cart",
      name: "cart",
      component: () => import('@/components/menus/cart.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/components/menus/login.vue'),
    }
  ],
});

export default router;
