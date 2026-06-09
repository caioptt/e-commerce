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
  ],
});

export default router;
