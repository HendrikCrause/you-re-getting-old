import { defineStore } from "pinia";
import { oldQuestionTexts } from "../data/old-questions"
import { redeemQuestionTexts } from "../data/redeem-questions"
import { ref, type Ref } from "vue";

export const useQuestionStore = defineStore('questions', () => {
    const oldQuestions: Ref<string[]> = ref(oldQuestionTexts)
    const redeemQuestions: Ref<string[]> = ref(redeemQuestionTexts)

    function nextOldQuestion(): string {
        const next = oldQuestions.value[Math.floor(Math.random() * oldQuestions.value.length)]
        oldQuestions.value = oldQuestions.value.filter(t => t != next)
        return next
    }

    function nextRedeemQuestion(): string {
        const next = redeemQuestions.value[Math.floor(Math.random() * redeemQuestions.value.length)]
        redeemQuestions.value = redeemQuestions.value.filter(t => t != next)
        return next
    }

    return { 
        oldQuestions, 
        redeemQuestions,
        nextOldQuestion,
        nextRedeemQuestion
    }
})