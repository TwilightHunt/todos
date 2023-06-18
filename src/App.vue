<template>
  <div id="app">
    <fade-transition :duration="200" origin="center top" mode="out-in">
      <router-view></router-view>
    </fade-transition>
  </div>
</template>

<script>
import { FadeTransition } from "vue2-transitions";
export default {
  name: "App",
  components: { FadeTransition },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
