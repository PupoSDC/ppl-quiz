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
  image?: ImageSourcePropType;
  explanation?: string;
};

export type QuestionReference = {
  questionId: QuestionId;
  selected?: AnswerId;
  answers: AnswerId[];
};

export type Questionnaire = {
  questions: Question[];
};
