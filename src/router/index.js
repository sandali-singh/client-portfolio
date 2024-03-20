// import Vue from "vue";
// import VueRouter from "vue-router";
// import HomeView from "../views/Home_View.vue";
// import About from "../views/About_View.vue";
// import Agprop from "../views/Agprop_View.vue";
// import Aura from "../views/Aura_View.vue";
// import Darwin from "../views/Darwin_View.vue";
// import Musixverse from "../views/Musixverse_View.vue";
// import Ongoing from "../views/Ongoing_View.vue";
// import Other from "../views/Other_View.vue";

// Vue.use(VueRouter);

// const routes = [
//   {
//     path: "/",
//     name: "home",
//     component: HomeView,
//   },
//   {
//     path: "/about",
//     name: "about",
//     component: About,
//   },
//   {
//     path: "/agprop",
//     name: "agprop",
//     component: Agprop,
//   },
//   {
//     path: "/aura",
//     name: "aura",
//     component: Aura,
//   },
//   {
//     path: "/darwin",
//     name: "darwin",
//     component: Darwin,
//   },
//   {
//     path: "/musixverse",
//     name: "musixverse",
//     component: Musixverse,
//   },
//   {
//     path: "/ongoing",
//     name: "ongoing",
//     component: Ongoing,
//   },
//   {
//     path: "/other",
//     name: "other",
//     component: Other,
//   },
// ];

// const router = new VueRouter({
//   mode: "history",
//   base: process.env.BASE_URL,
//   routes,
// });

// export default router;

import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home_View.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/About_View.vue"),
  },
  {
    path: "/agprop",
    name: "agprop",
    component: () => import("../views/Agprop_View.vue"),
  },
  {
    path: "/aura",
    name: "aura",
    component: () => import("../views/Aura_View.vue"),
  },
  {
    path: "/darwin",
    name: "darwin",
    component: () => import("../views/Darwin_View.vue"),
  },
  {
    path: "/musixverse",
    name: "musixverse",
    component: () => import("../views/Musixverse_View.vue"),
  },
  {
    path: "/ongoing",
    name: "ongoing",
    component: () => import("../views/Ongoing_View.vue"),
  },
  {
    path: "/other",
    name: "other",
    component: () => import("../views/Other_View.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
