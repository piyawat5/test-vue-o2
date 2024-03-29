import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCounter01 = defineStore("counter01", () => {
    //reducers 
    const count = ref({
        superCount: 0,
        normal: 0
    });
    // const objCount = reactive({
    //     superCount: computed(() => count.normal * 10),
    //     normal: computed(() => count.normal)
    // })
    const doubleCount = computed(() => count.value.normal * 2)

    //actions
    const increase = (value: number = 1) => {
        count.value.normal += value;
        count.value.superCount = count.value.normal * 2
    }
    const decrease = (value: number = 1) => {
        count.value.normal -= value;
        count.value.superCount = count.value.normal * 2
    }
    return {
        count, doubleCount, increase, decrease,
    }
})