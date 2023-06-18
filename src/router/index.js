import Vue from "vue";
import Router from "vue-router";
import GetStarted from "@/views/GetStarted.vue";
import Main from "@/views/Main.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "GetStarted",
      component: GetStarted,
    },
    {
      path: "/main",
      name: "Main",
      component: Main,
    },
  ],
});
