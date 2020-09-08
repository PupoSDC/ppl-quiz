export type AnswerId = string;
export type QuestionId = string;

export type Answer = {
  id: AnswerId;
  answer: string;
};

export type Question = {
  id: QuestionId;
  correct: AnswerId;
  question: string;
  answers: Answer[];
  selected?: AnswerId;

  /** Index of the question in a test. */
  index?: number;

  explanation?: string;
};
