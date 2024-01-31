<script setup lang="ts"></script>

<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/aboutPage">About</router-link>
    <router-link to="/stockPage">Contact</router-link>
  </div>

  <router-view v-slot="{ Component }">
    <transition name="route" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
</template>

<style>
#nav a {
  padding: 30px;
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
#app {
  padding: 48px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

/* route transitions */
.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}
.route-enter-active {
  transition: all 0.3s ease-out;
}
.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.route-leave-active {
  transition: all 0.3s ease-in;
}
</style>
