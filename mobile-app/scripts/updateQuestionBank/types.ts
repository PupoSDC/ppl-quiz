export type AnswerId = string;
export type QuestionId = string;
export type QuestionBlockId = string;

export type Answer = {
  id: AnswerId;
  answer: string;
};

export type Question = {
  id: QuestionId;
  correct: AnswerId;
  question: string;
  answers: Answer[];
  image?: string;
  explanation?: string;
};

export type QuestionBlock = {
  id: QuestionBlockId;
  name: string;
  questions: Question[];
};
