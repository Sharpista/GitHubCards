import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Inventario from "@/views/Inventario.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/inventario/:nome",
    name: "inventario",
    component: Inventario,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return window.scrollTo({
      top: 0,
    });
  },
});

export default router;
