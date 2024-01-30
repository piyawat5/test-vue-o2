import { ref } from "vue"

function collapse(init: boolean) {

    const dropdown = ref()
    const isShow = ref<boolean>(init)
    const toggle = () => {
        isShow.value = !isShow.value
    }
    return { isShow, toggle, dropdown }
}

export default { collapse }