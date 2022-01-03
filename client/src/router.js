
import Vue from "vue";
import Router from "vue-router";
import Dashboard from "./views/Dashboard.vue";
import Register from "./views/Register.vue";
import Login from "./views/Login.vue";
import Admin from "./views/Admin.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/admin",
      name: "admin",
      component: Admin,
    },
    {
      path: "/",
      name: "dashboard",
      component: Dashboard,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("./views/About.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: Register,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
  ],
});
