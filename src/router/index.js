import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import HomeHot from "../views/HomeHot.vue";
import HomeSearch from "../views/HomeSearch.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  }, {
    path: "/homeHot",
    name: "HomeHot",
    component: HomeHot
  },{
    path: "/homeSearch",
    name: "HomeSearch",
    component: HomeSearch
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  routes
});

export default router;
