import { defineStore } from "pinia";
import { ref } from "vue";

export const useToggle = defineStore("toggle", {
    state: () => {
        const isShow = ref<boolean>(false);
        return { isShow }
    },
    actions: {
        toggle() {
            this.isShow = !this.isShow
        },
    }
})