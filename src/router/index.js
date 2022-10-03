import { createWebHistory, createRouter } from "vue-router";
import RestaurantPage from "@/views/Pages/RestaurantPage.vue";
import MenuPage from "@/views/Pages/MenuPage.vue";
import AddtoCartPage from "@/views/Pages/AddtoCartPage.vue"
import OrderPage from "@/views/Pages/OrderPage.vue"

const routes = [
  {
    path: "/restaurants/:slug",
    name: "RestaurantPage",
    component: RestaurantPage,
    props: true,
  },
  {
    path: "/restaurants/:slug/menu",
    name: "MenuPage",
    component: MenuPage,
    props: true,
  },
  {
    path: "/restaurants/:slug/:itemSlug",
    name: "AddtoCartPage",
    component: AddtoCartPage,
    props: true,
  },
  {
    path: "/restaurants/:slug/OrderPage/:itemSlug",
    name: "OrderPage",
    component: OrderPage,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;