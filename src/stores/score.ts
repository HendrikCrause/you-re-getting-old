import { defineStore } from "pinia";
import { ref } from "vue";

export const useScoreStore = defineStore("score", () => {
    const score = ref(0)

    function reset() {
        score.value = 0
    }

    return { score, reset }
})