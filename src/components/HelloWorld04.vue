<template>
  <div ref="dropdown" class="dropdown">
    <div @click="toggle.toggle()" class="dropdown-label">click here</div>
    <p v-if="toggle.isShow" class="dropdown-content">
      Sea of Tranquility a mote of dust suspended in a sunbeam hundreds of
      thousands concept of the number one realm of the galaxies radio telescope.
      As a patch of light descended from astronomers two ghostly white figures
      in coveralls and helmets are softly dancing emerged into
    </p>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { useToggle } from "../store/useToggle";

export default {
  setup() {
    const toggle = ref(useToggle());

    return {
      toggle,
    };
  },
};
</script>

<style>
.dropdown {
  width: 100%;
  border: 1px solid grey;
}
</style>
