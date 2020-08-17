import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import Services from "../views/Services.vue";
import Portfolio from "../views/Portfolio.vue";
import Contact from "../views/Contact.vue";
import Succes from "../views/Succes.vue";

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
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: Portfolio
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  },
  {
    path: "/succes",
    name: "Succes",
    component: Succes
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
