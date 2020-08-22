export type AnswerId = string;
export type QuestionId = string;

export type Answer = {
  id: AnswerId;
  answer: string;
};

export type Question = {
  id: QuestionId;
  question: string;
  answers: Answer[];
  selected?: AnswerId;
};

export type Questionnaire = {
  questions: Question[];
  isFinished: Boolean;
};

export type OngoingQuestionnaire = {
  /** Undefined if the user has reached the end of the test */
  currentQuestion?: Question;

  isCompleted: boolean;
  correctAnswers: number;
  totalAnswers: number;
} & Questionnaire;

export type OngoingQuestionnaireActions = {
  answerQuestion: (questionId: QuestionId, answerId: AnswerId) => void;
  finishTest: () => void;
};
