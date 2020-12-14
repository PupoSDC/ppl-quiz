import { Question } from "./Questionnaire";

export type QuestionBankEntry = {
  id: string;
  name: string;
  lastUpdated?: string;
  numberOfQuestions: number;
  questions?: {
    [id: string]: Question;
  };
};

export type QuestionBank = {
  entries: Record<string, QuestionBankEntry>;
};

export type QuestionBankMetaData = Pick<
  QuestionBankEntry,
  "id" | "name" | "numberOfQuestions"
>[];
