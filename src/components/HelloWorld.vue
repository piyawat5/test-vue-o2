<template>
  <span>{{ counter.count.superCount }}:{{ counter.count.normal }}</span>
  <button @click="counter.increase">INCREASE</button>
  <button @click="counter.decrease">DECREASE</button>
  <hr />

  <span>{{ counter02.count }}</span>
  <button @click="counter02.increment">INCREASE</button>
  <button @click="counter02.decrement">DECREASE</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useCounter01 } from "../store/useCounter01";
import { useCounter02 } from "../store/useCounter02";

export default defineComponent({
  name: "HelloWorld",
  data() {
    const counter01 = useCounter01();
    const counter02 = useCounter02();
    return {
      counter: counter01,
      counter02: counter02,
      data: "",
    };
  },
  methods: {
    something() {
      console.log("foooo");
    },
    getApiData() {
      this.data = "dataaaa";
      console.log(this.data);
    },
  },
  mounted() {
    this.getApiData();
  },
});
</script>

<style></style>
