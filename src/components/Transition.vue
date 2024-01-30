<template>
  <!-- basic transition -->
  <!-- <button @click="isShow = !isShow">TOGGLE</button>
  <transition name="fade">
    <div v-if="isShow">Helloooooooo, My name is Piyawat Pintusornsri</div>
  </transition> -->

  <!-- slide-fade -->
  <!-- <button @click="isShow = !isShow">TOGGLE</button>
  <transition name="slide-fade">
    <div v-if="isShow">Helloooooooo, My name is Piyawat Pintusornsri</div>
  </transition> -->

  <!-- list transition -->
  <input type="text" v-model="newTodo.text" placeholder="Add a new todo.." />
  <button @click="addTodo">ADD</button>
  <div v-if="todos.length">
    <transition-group tag="ul" name="list">
      <li
        v-for="item in todos"
        @click="removeTodo(item.id)"
        class="order"
        :key="item.id"
      >
        {{ item.text }}
      </li>
    </transition-group>
  </div>
  <div v-else>Nothing left todo!!!</div>
</template>

<script lang="ts">
import { ref } from "vue";

export default {
  setup() {
    const isShow = ref<boolean>(false);

    const newTodo = ref({ text: "", id: 0 });
    const todos = ref([
      { text: "yoo", id: 1 },
      { text: "foo", id: 2 },
    ]);

    const addTodo = () => {
      // newTodo.value.id = todos.value[todos.value.length - 1].id + 1;
      newTodo.value.id = Math.random() * 10;
      todos.value = [{ ...newTodo.value }, ...todos.value];
      newTodo.value = { text: "", id: 0 };
    };
    const removeTodo = (id: number) => {
      todos.value = todos.value.filter((item) => item.id !== id);
    };

    return { removeTodo, addTodo, isShow, todos, newTodo };
  },
};
</script>

<style>
/* .fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 1.5s ease;
} */
/* .slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-60px);
}
.slide-fade-enter-to {
  opacity: 1;
  transform: translateY(0px);
}
.slide-fade-enter-active {
  animation: wobble 0.5s ease;
}
.slide-fade-leave-active {
  transition: all 0.5s ease;
}
@keyframes wobble {
  0% {
    transform: translateY(-60px);
    opacity: 0;
  }
  50% {
    transform: translateY(0px);
    opacity: 1;
  }
  60% {
    transform: translateX(8px);
  }
  70% {
    transform: translateX(-8px);
  }
  80% {
    transform: translateX(4px);
  }
  90% {
    transform: translateX(4px);
  }
  100% {
    transform: translateX(0);
  }
} */

.order {
  border-radius: 12px;
  border: 1px solid grey;
  background: grey;
  padding: 16px;
  margin-bottom: 12px;
  cursor: pointer;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: scale(0.6);
}
.list-enter-to,
.list-leave-from {
  opacity: 1;
  transform: scale(1);
}
.list-enter-active,
.list-leave-active {
  transition: all 0.4s ease;
}
</style>
