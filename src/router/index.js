import { createRouter, createWebHistory } from "vue-router";
import WeatherView from "@/views/WeatherView";

const routes = [
  {
    name: "",
    path: "/",
    component: WeatherView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
