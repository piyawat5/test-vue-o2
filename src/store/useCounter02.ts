import { defineStore } from "pinia";
import { ref } from "vue";

// interface CounterState {
//     count: number;
// }

export const useCounter02 = defineStore("jookroo", {
    state: () => {
        const count = ref<number>(0);
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