<script setup lang="ts">
// import HelloWorld02Vue from "./components/HelloWorld02.vue";
// import HelloWorld03Vue from "./components/HelloWorld03.vue";
// import HelloWorld04Vue from "./components/HelloWorld04.vue";
import TransitionVue from "./components/Transition.vue";
</script>

<template>
  <TransitionVue></TransitionVue>
</template>

<style>
.container {
  max-width: 300px !important;
}
#app {
  padding: 48px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
