import { ref, reactive } from "vue"

function useCounterRef(init: number) {
    const count = ref(init)
    const onClick = () => {
        count.value++
    }
    return { count, onClick }
}

function useCounterReactive(init: number) {
    const countRT = reactive({ count: init })
    const onClickRT = () => {
        countRT.count++
    }
    return { countRT, onClickRT }
}

export default { useCounterReactive, useCounterRef }