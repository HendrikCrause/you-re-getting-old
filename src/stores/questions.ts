import { defineStore } from "pinia";
import { oldQuestionTexts } from "../data/old-questions"
import { redeemQuestionTexts } from "../data/redeem-questions"
import { computed, ref, type Ref } from "vue";

type Question = {
    text: string,
    seen: boolean
}

function randomChoice(questions: Question[]): Question {
    return questions[(Math.floor(Math.random() * questions.length))]
}

export const useQuestionStore = defineStore('questions', () => {
    const oldQuestions: Ref<Question[]> = ref(oldQuestionTexts.map(t => ({text: t, seen: false})))
    const redeemQuestions: Ref<Question[]> = ref(redeemQuestionTexts.map(t => ({text: t, seen: false})))

    const unseenOldQuestions = computed(() => oldQuestions.value.filter(q => q.seen == false))
    const unseenRedeemQuestions = computed(() => redeemQuestions.value.filter(q => q.seen == false))

    function nextOldQuestion() {
        const choice = randomChoice(unseenOldQuestions.value)
        choice.seen = true
        return choice
    }

    function nextRedeemQuestion() {
        const choice = randomChoice(unseenRedeemQuestions.value)
        choice.seen = true
        return choice
    }

    return { 
        oldQuestions, 
        redeemQuestions, 
        unseenOldQuestions, 
        unseenRedeemQuestions,
        nextOldQuestion,
        nextRedeemQuestion
    }
})