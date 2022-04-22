import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Movie from "../views/MovieView.vue";
import Actors from "../components/actors/actors.vue";
import ActorDetails from "../components/actors/actor-details.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/movie/:id",
    name: "one",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "movie" */ "../views/MovieView.vue"),
  },
  {
    path: "/actors",
    name: "actors",
    component: Actors,
  },
  {
    path: "/actor/:id",
    name: "actor",
    component: ActorDetails,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
