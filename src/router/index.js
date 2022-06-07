import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import("../views/About.vue")
  }
  ,
  {
  path: '/secure',
  name: 'Secure',
  component: function () {
    return import('../views/Secure.vue')
  }
}
,{
   path: '/login',
   name: 'Login',
   component: function () {
     return import('../views/Login.vue')
   }}
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
