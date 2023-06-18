// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import "bootstrap/dist/css/bootstrap.css";
import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store/store";

Vue.config.productionTip = false;

/* eslint-disable no-new */
const app = new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>",
  render: (h) => h(App),
});

Vue.prototype.$store = store;
store.$app = app;
