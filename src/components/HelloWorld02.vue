<template>
  <div>Ref:</div>
  <button @click="onClick">{{ count }}</button>
  <div>Reactive:</div>
  <button @click="onClickRT">{{ countRT.count }}</button>
</template>

<script lang="ts">
import { onMounted } from "vue";
import useCounter from "./../hooks/useCounter";

export default {
  setup() {
    const { count, onClick } = useCounter.useCounterRef(0);
    const { countRT, onClickRT } = useCounter.useCounterReactive(0);
    onMounted(() => {});

    return {
      count,
      onClick,
      countRT,
      onClickRT,
    };
  },
};
</script>

<style></style>
