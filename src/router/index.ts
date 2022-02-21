import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import UsersView from "../views/UsersView.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: UsersView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
