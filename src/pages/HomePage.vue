<template>
  <div>
    <div class="title">HomePage</div>

    <transition-group
      appear
      @before-enter="beforEnter"
      @enter="enter"
      class="animate-container"
    >
      <div v-for="(item, i) in menus" :key="i" class="box" :data-index="i">
        {{ item }}
      </div>
    </transition-group>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import gsap from "gsap";

export default {
  setup() {
    const menus = ref<string[]>(["menu1", "menu2", "menu3", "menu4"]);
    const beforEnter = (el: any) => {
      el.style.transform = "translateY(100px)";
      el.style.opacity = 0;
    };
    const enter = (el: any, done: any) => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        onComplete: done,
        delay: el.dataset.index * 0.2,
      });
    };
    return { menus, beforEnter, enter };
  },
};
</script>

<style>
.title {
  margin: 24px 0;
  font-weight: bold;
  font-size: 24px;
}
.box {
  margin: 4px 0;
  padding: 12px;
  background: #efefef;
  border-radius: 4px;
}
</style>
