/* eslint-disable @typescript-eslint/no-explicit-any */
import data from '../data/questions.json'
import type { Question, Questions } from '../types/question.d'

type QuestionType = {
  question: Question
}

export function useQuestion(id: number): QuestionType {
  const questions = data as any as Questions
  const question = questions.questions.find((q) => q.id === id)!

  return {
    question
  }
}
