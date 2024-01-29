import { defineStore } from "pinia";
import { ref } from "vue";

export const useCounter02 = defineStore("jookroo", {
    state: () => {
        const count = ref(0);
        return { count }
    },
    actions: {
        increment() {
            this.count += 1
        },
        decrement() {
            this.count -= 1
        },
    }
})