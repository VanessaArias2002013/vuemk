import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => 
    import("../views/About.vue"),
  },

  {
    path: "/detail/:id",
    name: "detail",
    component: () => import("../views/Detail.vue"),
  },
  {
    path: "//checkout",
    name: "checkout",
    component: () => import("../views/Checkout.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
