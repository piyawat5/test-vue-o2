<template>
  <div class="body-container">
    <transition @before-enter="beforeEnter" @enter="enter" appear>
      <div class="title">AboutPage</div>
    </transition>
    <TransitionVue></TransitionVue>
  </div>
</template>

<script lang="ts">
import TransitionVue from "../components/Transition.vue";
import gsap from "gsap";

export default {
  components: { TransitionVue },
  setup() {
    const beforeEnter = (el: any) => {
      el.style.transform = "translateY(-60px)";
      el.style.opacity = 0;
    };
    const enter = (el: any, done: any) => {
      gsap.to(el, {
        duration: 1,
        opacity: 1,
        y: 0,
        ease: "bounce.out",
        onComplete: done,
      });
    };
    return { beforeEnter, enter };
  },
};
</script>

<style>
.title {
  margin: 24px 0;
  font-weight: bold;
  font-size: 24px;
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}
.fade-enter-active {
  transition: all 0.6s ease;
}
.body-container {
  padding: 12px;
  background: #ededed;
  border-radius: 4px;
  width: 100%;
  max-width: 700px;
}
</style>
