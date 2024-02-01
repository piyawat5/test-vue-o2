<template>
  <div>
    <div>StockPage</div>
    <div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt odio
      deleniti doloribus accusamus nisi maxime fugiat praesentium libero?
      Explicabo voluptatem velit veniam totam qui? Dolorum et ullam alias
      facilis hic. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Nesciunt odio deleniti doloribus accusamus nisi maxime fugiat praesentium
      libero? Explicabo voluptatem velit veniam totam qui? Dolorum et ullam
      alias facilis hic. Lorem ipsum dolor sit amet, consectetur adipisicing
      elit. Nesciunt odio deleniti doloribus accusamus nisi maxime fugiat
      praesentium libero? Explicabo voluptatem velit veniam totam qui? Dolorum
      et ullam alias facilis hic. Lorem ipsum dolor sit amet, consectetur
      adipisicing elit. Nesciunt odio deleniti doloribus accusamus nisi maxime
      fugiat praesentium libero? Explicabo voluptatem velit veniam totam qui?
      Dolorum et ullam alias facilis hic. Lorem ipsum dolor sit amet,
      consectetur adipisicing elit. Nesciunt odio deleniti doloribus accusamus
      nisi maxime fugiat praesentium libero? Explicabo voluptatem velit veniam
      totam qui? Dolorum et ullam alias facilis hic. Lorem ipsum dolor sit amet,
      consectetur adipisicing elit. Nesciunt odio deleniti doloribus accusamus
      nisi maxime fugiat praesentium libero? Explicabo voluptatem velit veniam
      totam qui? Dolorum et ullam alias facilis hic. Lorem ipsum dolor sit amet,
      consectetur adipisicing elit. Nesciunt odio deleniti doloribus accusamus
      nisi maxime fugiat praesentium libero? Explicabo voluptatem velit veniam
      totam qui? Dolorum et ullam alias facilis hic. Lorem ipsum dolor sit amet,
      consectetur adipisicing elit. Nesciunt odio deleniti doloribus accusamus
      nisi maxime fugiat praesentium libero? Explicabo voluptatem velit veniam
      totam qui? Dolorum et ullam alias facilis hic. Lorem ipsum dolor sit amet,
      consectetur adipisicing elit. Nesciunt odio deleniti doloribus accusamus
      nisi maxime fugiat praesentium libero? Explicabo voluptatem velit veniam
      totam qui? Dolorum et ullam alias facilis hic. Lorem ipsum dolor sit amet,
      consectetur adipisicing elit. Nesciunt odio deleniti doloribus accusamus
      nisi maxime fugiat praesentium libero? Explicabo voluptatem velit veniam
      totam qui? Dolorum et ullam alias facilis hic. Lorem ipsum dolor sit amet,
      consectetur adipisicing elit. Nesciunt odio deleniti doloribus accusamus
      nisi maxime fugiat praesentium libero? Explicabo voluptatem velit veniam
      totam qui? Dolorum et ullam alias facilis hic.
    </div>
    <div class="grid">
      <Animate :animationType="'fade'">
        <div class="target">jamepi</div>
      </Animate>
      <Animate :animationType="'fade'">
        <div class="target">jamepi</div>
      </Animate>
      <Animate :animationType="'fade'">
        <div class="target">jamepi</div>
      </Animate>
      <Animate :animationType="'fade'">
        <div class="target">jamepi</div>
      </Animate>
      <Animate :animationType="'fade'">
        <div class="target">jamepi</div>
      </Animate>
      <Animate :animationType="'fade'">
        <div class="target">jamepi</div>
      </Animate>
      <Animate :animationType="'fade'">
        <div class="target">jamepi</div>
      </Animate>
      <Animate :animationType="'zoom'">
        <div class="target">jamepi</div>
      </Animate>
      <Animate :animationType="'zoom'">
        <div class="target">jamepi</div>
      </Animate>
      <Animate :animationType="'zoom'">
        <div class="target">jamepi</div>
      </Animate>
      <Animate :animationType="'zoom'">
        <div class="target">jamepi</div>
      </Animate>
      <Animate :animationType="'zoom'">
        <div class="target">jamepi</div>
      </Animate>
    </div>
  </div>
</template>

<script lang="ts">
import Animate from "../components/animate.vue";
export default {
  components: {
    Animate,
  },
  setup() {
    return {};
  },
};
</script>

<style>
.grid {
  display: grid;
  gap: 100px;
  grid-template-columns: 1fr 1fr;
}
.demo {
  max-width: 600px;
  border: 2px solid #2c3e50;
  padding: 2rem;
  margin: 2rem auto;
  background-color: #42b983;
}
.target {
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #43b883;
  border-radius: 10px;
}
</style>
