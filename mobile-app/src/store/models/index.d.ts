import {
  ModelInit,
  MutableModel,
  PersistentModelConstructor,
} from "@aws-amplify/datastore";

export declare class Answer {
  readonly id?: string;
  readonly answer?: string;
  constructor(init: ModelInit<Answer>);
}

export declare class QuestionBlock {
  readonly id: string;
  readonly code: string;
  readonly name: string;
  readonly questions: Question[];
  constructor(init: ModelInit<QuestionBlock>);
  static copyOf(
    source: QuestionBlock,
    mutator: (
      draft: MutableModel<QuestionBlock>
    ) => MutableModel<QuestionBlock> | void
  ): QuestionBlock;
}

export declare class Question {
  readonly id: string;
  readonly questionBlockId: string;
  readonly correctAnswerId: string;
  readonly question: string;
  readonly answers: Answer[];
  readonly image?: string;
  readonly explanation?: string;
  readonly testQuestionsId?: string;
  constructor(init: ModelInit<Question>);
  static copyOf(
    source: Question,
    mutator: (draft: MutableModel<Question>) => MutableModel<Question> | void
  ): Question;
}

export declare class Test {
  readonly id: string;
  readonly questions: Question[];
  readonly answers: Answer[];
  readonly finished: boolean;
  constructor(init: ModelInit<Test>);
  static copyOf(
    source: Test,
    mutator: (draft: MutableModel<Test>) => MutableModel<Test> | void
  ): Test;
}
