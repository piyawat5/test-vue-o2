<script setup lang="ts">
import { onBeforeMount, ref } from "vue";
import HelloWorld, { RoleEnum } from "./components/HelloWorld.vue";
import HelloWorld02Vue from "./components/HelloWorld02.vue";
import HelloWorld03Vue from "./components/HelloWorld03.vue";
import HelloWorld04Vue from "./components/HelloWorld04.vue";
const role = ref(RoleEnum.ADMIN);
onBeforeMount(() => {
  role.value = RoleEnum.USER;
});
</script>

<template>
  <div class="container">
    <HelloWorld03Vue></HelloWorld03Vue>
    <HelloWorld04Vue></HelloWorld04Vue>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld :role="role" />
  <hr />
  <HelloWorld02Vue></HelloWorld02Vue>
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
