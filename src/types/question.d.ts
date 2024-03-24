export interface Questions {
  questions: Question[]
}

export interface Question {
  id:       number
  question: string
  options:  string[]
}
