import { ImageSourcePropType } from "react-native";

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
  selected?: AnswerId;

  image?: ImageSourcePropType;

  /** Index of the question in a test. */
  index?: number;

  explanation?: string;
};

export type QuestionBlock = {
  id: QuestionBlockId;
  name: string;
  questions: Question[];
};
