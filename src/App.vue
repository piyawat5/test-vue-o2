<script setup lang="ts">
import { onBeforeMount, ref } from "vue";
import HelloWorld, { RoleEnum } from "./components/HelloWorld.vue";
import HelloWorld02Vue from "./components/HelloWorld02.vue";
const role = ref(RoleEnum.ADMIN);
onBeforeMount(() => {
  role.value = RoleEnum.USER;
});
</script>

<template>
  <div>
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

<style scoped>
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
