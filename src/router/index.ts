import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env?.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../pages/HomePage.vue"),
    },
    {
      path: "/aboutPage",
      name: "About",
      component: () => import("../pages/AboutPage.vue"),
    },
    {
      path: "/stockPage",
      name: "Contact",
      component: () => import("../pages/StockPage.vue"),
    },
  ],
});

export default router;
