import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import Services from "../views/Services.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/diensten",
    name: "Diensten",
    component: Services
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
