<template>
  <span>{{ counter.count.superCount }}:{{ counter.count.normal }}</span>
  <button @click="counter.increase(1)">INCREASE</button>
  <button @click="counter.decrease(1)">DECREASE</button>
  <hr />

  <span>{{ counter02.count }}</span>
  <button @click="counter02.increment">INCREASE</button>
  <button @click="counter02.decrement">DECREASE</button>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { useCounter01 } from "../store/useCounter01";
import { useCounter02 } from "../store/useCounter02";

interface User {
  name: string;
  phone: string;
}

export enum RoleEnum {
  ADMIN = "ADMIN",
  USER = "USER",
}

export default defineComponent({
  name: "HelloWorld",
  props: {
    role: {
      type: String as PropType<RoleEnum>,
      required: true,
      default: RoleEnum.ADMIN,
    },
  },
  setup() {
    const counter01 = useCounter01();
    const counter02 = useCounter02();
    return {
      counter: counter01,
      counter02: counter02,
      data: "",
      user: {} as User,
    };
  },
  methods: {
    something() {
      console.log("foooo");
    },
    getApiData() {
      this.data = "dataaaa";
      console.log(this.data);
      this.user = { ...this.user, name: "piyawat" };
      console.log(this.user);
    },
  },
  mounted() {
    this.getApiData();
    console.log(this.role);
  },
});
</script>

<style></style>
