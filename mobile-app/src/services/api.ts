/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateQuestionBlockInput = {
  id?: string | null;
  code: string;
  name: string;
};

export type ModelQuestionBlockConditionInput = {
  code?: ModelStringInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelQuestionBlockConditionInput | null> | null;
  or?: Array<ModelQuestionBlockConditionInput | null> | null;
  not?: ModelQuestionBlockConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type QuestionBlock = {
  __typename: "QuestionBlock";
  id?: string;
  code?: string;
  name?: string;
  questions?: ModelQuestionConnection;
  createdAt?: string;
  updatedAt?: string;
};

export type ModelQuestionConnection = {
  __typename: "ModelQuestionConnection";
  items?: Array<Question | null> | null;
  nextToken?: string | null;
};

export type Question = {
  __typename: "Question";
  id?: string;
  questionBlockId?: string;
  correctAnswerId?: string;
  question?: string;
  answers?: Array<Answer>;
  image?: string | null;
  explanation?: string | null;
  createdAt?: string;
  updatedAt?: string;
};

export type Answer = {
  __typename: "Answer";
  id?: string | null;
  answer?: string | null;
};

export type UpdateQuestionBlockInput = {
  id: string;
  code?: string | null;
  name?: string | null;
};

export type DeleteQuestionBlockInput = {
  id?: string | null;
};

export type CreateQuestionInput = {
  id?: string | null;
  questionBlockId: string;
  correctAnswerId: string;
  question: string;
  answers: Array<AnswerInput>;
  image?: string | null;
  explanation?: string | null;
};

export type AnswerInput = {
  id?: string | null;
  answer?: string | null;
};

export type ModelQuestionConditionInput = {
  questionBlockId?: ModelIDInput | null;
  correctAnswerId?: ModelStringInput | null;
  question?: ModelStringInput | null;
  image?: ModelStringInput | null;
  explanation?: ModelStringInput | null;
  and?: Array<ModelQuestionConditionInput | null> | null;
  or?: Array<ModelQuestionConditionInput | null> | null;
  not?: ModelQuestionConditionInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type UpdateQuestionInput = {
  id: string;
  questionBlockId?: string | null;
  correctAnswerId?: string | null;
  question?: string | null;
  answers?: Array<AnswerInput> | null;
  image?: string | null;
  explanation?: string | null;
};

export type DeleteQuestionInput = {
  id?: string | null;
};

export type CreateTestInput = {
  id?: string | null;
  answers: Array<string>;
  finished: boolean;
};

export type ModelTestConditionInput = {
  answers?: ModelIDInput | null;
  finished?: ModelBooleanInput | null;
  and?: Array<ModelTestConditionInput | null> | null;
  or?: Array<ModelTestConditionInput | null> | null;
  not?: ModelTestConditionInput | null;
};

export type ModelBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type Test = {
  __typename: "Test";
  id?: string;
  questions?: Array<Question>;
  answers?: Array<string>;
  finished?: boolean;
  createdAt?: string;
  updatedAt?: string;
  owner?: string | null;
};

export type UpdateTestInput = {
  answers?: Array<string> | null;
  finished?: boolean | null;
};

export type DeleteTestInput = {
  id?: string | null;
};

export type ModelQuestionBlockFilterInput = {
  id?: ModelIDInput | null;
  code?: ModelStringInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelQuestionBlockFilterInput | null> | null;
  or?: Array<ModelQuestionBlockFilterInput | null> | null;
  not?: ModelQuestionBlockFilterInput | null;
};

export type ModelQuestionBlockConnection = {
  __typename: "ModelQuestionBlockConnection";
  items?: Array<QuestionBlock | null> | null;
  nextToken?: string | null;
};

export type ModelQuestionFilterInput = {
  id?: ModelIDInput | null;
  questionBlockId?: ModelIDInput | null;
  correctAnswerId?: ModelStringInput | null;
  question?: ModelStringInput | null;
  image?: ModelStringInput | null;
  explanation?: ModelStringInput | null;
  and?: Array<ModelQuestionFilterInput | null> | null;
  or?: Array<ModelQuestionFilterInput | null> | null;
  not?: ModelQuestionFilterInput | null;
};

export type ModelTestFilterInput = {
  answers?: ModelIDInput | null;
  finished?: ModelBooleanInput | null;
  and?: Array<ModelTestFilterInput | null> | null;
  or?: Array<ModelTestFilterInput | null> | null;
  not?: ModelTestFilterInput | null;
};

export type ModelTestConnection = {
  __typename: "ModelTestConnection";
  items?: Array<Test | null> | null;
  nextToken?: string | null;
};

export type CreateQuestionBlockMutationVariables = {
  input?: CreateQuestionBlockInput;
  condition?: ModelQuestionBlockConditionInput | null;
};

export type CreateQuestionBlockMutation = {
  createQuestionBlock?: {
    __typename: "QuestionBlock";
    id: string;
    code: string;
    name: string;
    questions?: {
      __typename: "ModelQuestionConnection";
      items?: Array<{
        __typename: "Question";
        id: string;
        questionBlockId: string;
        correctAnswerId: string;
        question: string;
        image?: string | null;
        explanation?: string | null;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateQuestionBlockMutationVariables = {
  input?: UpdateQuestionBlockInput;
  condition?: ModelQuestionBlockConditionInput | null;
};

export type UpdateQuestionBlockMutation = {
  updateQuestionBlock?: {
    __typename: "QuestionBlock";
    id: string;
    code: string;
    name: string;
    questions?: {
      __typename: "ModelQuestionConnection";
      items?: Array<{
        __typename: "Question";
        id: string;
        questionBlockId: string;
        correctAnswerId: string;
        question: string;
        image?: string | null;
        explanation?: string | null;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteQuestionBlockMutationVariables = {
  input?: DeleteQuestionBlockInput;
  condition?: ModelQuestionBlockConditionInput | null;
};

export type DeleteQuestionBlockMutation = {
  deleteQuestionBlock?: {
    __typename: "QuestionBlock";
    id: string;
    code: string;
    name: string;
    questions?: {
      __typename: "ModelQuestionConnection";
      items?: Array<{
        __typename: "Question";
        id: string;
        questionBlockId: string;
        correctAnswerId: string;
        question: string;
        image?: string | null;
        explanation?: string | null;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateQuestionMutationVariables = {
  input?: CreateQuestionInput;
  condition?: ModelQuestionConditionInput | null;
};

export type CreateQuestionMutation = {
  createQuestion?: {
    __typename: "Question";
    id: string;
    questionBlockId: string;
    correctAnswerId: string;
    question: string;
    answers: Array<{
      __typename: "Answer";
      id?: string | null;
      answer?: string | null;
    }>;
    image?: string | null;
    explanation?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateQuestionMutationVariables = {
  input?: UpdateQuestionInput;
  condition?: ModelQuestionConditionInput | null;
};

export type UpdateQuestionMutation = {
  updateQuestion?: {
    __typename: "Question";
    id: string;
    questionBlockId: string;
    correctAnswerId: string;
    question: string;
    answers: Array<{
      __typename: "Answer";
      id?: string | null;
      answer?: string | null;
    }>;
    image?: string | null;
    explanation?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteQuestionMutationVariables = {
  input?: DeleteQuestionInput;
  condition?: ModelQuestionConditionInput | null;
};

export type DeleteQuestionMutation = {
  deleteQuestion?: {
    __typename: "Question";
    id: string;
    questionBlockId: string;
    correctAnswerId: string;
    question: string;
    answers: Array<{
      __typename: "Answer";
      id?: string | null;
      answer?: string | null;
    }>;
    image?: string | null;
    explanation?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateTestMutationVariables = {
  input?: CreateTestInput;
  condition?: ModelTestConditionInput | null;
};

export type CreateTestMutation = {
  createTest?: {
    __typename: "Test";
    id: string;
    questions: Array<{
      __typename: "Question";
      id: string;
      questionBlockId: string;
      correctAnswerId: string;
      question: string;
      answers: Array<{
        __typename: "Answer";
        id?: string | null;
        answer?: string | null;
      }>;
      image?: string | null;
      explanation?: string | null;
      createdAt: string;
      updatedAt: string;
    }>;
    answers: Array<string>;
    finished: boolean;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type UpdateTestMutationVariables = {
  input?: UpdateTestInput;
  condition?: ModelTestConditionInput | null;
};

export type UpdateTestMutation = {
  updateTest?: {
    __typename: "Test";
    id: string;
    questions: Array<{
      __typename: "Question";
      id: string;
      questionBlockId: string;
      correctAnswerId: string;
      question: string;
      answers: Array<{
        __typename: "Answer";
        id?: string | null;
        answer?: string | null;
      }>;
      image?: string | null;
      explanation?: string | null;
      createdAt: string;
      updatedAt: string;
    }>;
    answers: Array<string>;
    finished: boolean;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type DeleteTestMutationVariables = {
  input?: DeleteTestInput;
  condition?: ModelTestConditionInput | null;
};

export type DeleteTestMutation = {
  deleteTest?: {
    __typename: "Test";
    id: string;
    questions: Array<{
      __typename: "Question";
      id: string;
      questionBlockId: string;
      correctAnswerId: string;
      question: string;
      answers: Array<{
        __typename: "Answer";
        id?: string | null;
        answer?: string | null;
      }>;
      image?: string | null;
      explanation?: string | null;
      createdAt: string;
      updatedAt: string;
    }>;
    answers: Array<string>;
    finished: boolean;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type GetQuestionBlockQueryVariables = {
  id?: string;
};

export type GetQuestionBlockQuery = {
  getQuestionBlock?: {
    __typename: "QuestionBlock";
    id: string;
    code: string;
    name: string;
    questions?: {
      __typename: "ModelQuestionConnection";
      items?: Array<{
        __typename: "Question";
        id: string;
        questionBlockId: string;
        correctAnswerId: string;
        question: string;
        image?: string | null;
        explanation?: string | null;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListQuestionBlocksQueryVariables = {
  filter?: ModelQuestionBlockFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListQuestionBlocksQuery = {
  listQuestionBlocks?: {
    __typename: "ModelQuestionBlockConnection";
    items?: Array<{
      __typename: "QuestionBlock";
      id: string;
      code: string;
      name: string;
      questions?: {
        __typename: "ModelQuestionConnection";
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type GetQuestionQueryVariables = {
  id?: string;
};

export type GetQuestionQuery = {
  getQuestion?: {
    __typename: "Question";
    id: string;
    questionBlockId: string;
    correctAnswerId: string;
    question: string;
    answers: Array<{
      __typename: "Answer";
      id?: string | null;
      answer?: string | null;
    }>;
    image?: string | null;
    explanation?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListQuestionsQueryVariables = {
  filter?: ModelQuestionFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListQuestionsQuery = {
  listQuestions?: {
    __typename: "ModelQuestionConnection";
    items?: Array<{
      __typename: "Question";
      id: string;
      questionBlockId: string;
      correctAnswerId: string;
      question: string;
      answers: Array<{
        __typename: "Answer";
        id?: string | null;
        answer?: string | null;
      }>;
      image?: string | null;
      explanation?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type GetTestQueryVariables = {
  id?: string;
};

export type GetTestQuery = {
  getTest?: {
    __typename: "Test";
    id: string;
    questions: Array<{
      __typename: "Question";
      id: string;
      questionBlockId: string;
      correctAnswerId: string;
      question: string;
      answers: Array<{
        __typename: "Answer";
        id?: string | null;
        answer?: string | null;
      }>;
      image?: string | null;
      explanation?: string | null;
      createdAt: string;
      updatedAt: string;
    }>;
    answers: Array<string>;
    finished: boolean;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type ListTestsQueryVariables = {
  filter?: ModelTestFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListTestsQuery = {
  listTests?: {
    __typename: "ModelTestConnection";
    items?: Array<{
      __typename: "Test";
      id: string;
      questions: Array<{
        __typename: "Question";
        id: string;
        questionBlockId: string;
        correctAnswerId: string;
        question: string;
        image?: string | null;
        explanation?: string | null;
        createdAt: string;
        updatedAt: string;
      }>;
      answers: Array<string>;
      finished: boolean;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type OnCreateQuestionBlockSubscription = {
  onCreateQuestionBlock?: {
    __typename: "QuestionBlock";
    id: string;
    code: string;
    name: string;
    questions?: {
      __typename: "ModelQuestionConnection";
      items?: Array<{
        __typename: "Question";
        id: string;
        questionBlockId: string;
        correctAnswerId: string;
        question: string;
        image?: string | null;
        explanation?: string | null;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateQuestionBlockSubscription = {
  onUpdateQuestionBlock?: {
    __typename: "QuestionBlock";
    id: string;
    code: string;
    name: string;
    questions?: {
      __typename: "ModelQuestionConnection";
      items?: Array<{
        __typename: "Question";
        id: string;
        questionBlockId: string;
        correctAnswerId: string;
        question: string;
        image?: string | null;
        explanation?: string | null;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteQuestionBlockSubscription = {
  onDeleteQuestionBlock?: {
    __typename: "QuestionBlock";
    id: string;
    code: string;
    name: string;
    questions?: {
      __typename: "ModelQuestionConnection";
      items?: Array<{
        __typename: "Question";
        id: string;
        questionBlockId: string;
        correctAnswerId: string;
        question: string;
        image?: string | null;
        explanation?: string | null;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateQuestionSubscription = {
  onCreateQuestion?: {
    __typename: "Question";
    id: string;
    questionBlockId: string;
    correctAnswerId: string;
    question: string;
    answers: Array<{
      __typename: "Answer";
      id?: string | null;
      answer?: string | null;
    }>;
    image?: string | null;
    explanation?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateQuestionSubscription = {
  onUpdateQuestion?: {
    __typename: "Question";
    id: string;
    questionBlockId: string;
    correctAnswerId: string;
    question: string;
    answers: Array<{
      __typename: "Answer";
      id?: string | null;
      answer?: string | null;
    }>;
    image?: string | null;
    explanation?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteQuestionSubscription = {
  onDeleteQuestion?: {
    __typename: "Question";
    id: string;
    questionBlockId: string;
    correctAnswerId: string;
    question: string;
    answers: Array<{
      __typename: "Answer";
      id?: string | null;
      answer?: string | null;
    }>;
    image?: string | null;
    explanation?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnCreateTestSubscriptionVariables = {
  owner?: string;
};

export type OnCreateTestSubscription = {
  onCreateTest?: {
    __typename: "Test";
    id: string;
    questions: Array<{
      __typename: "Question";
      id: string;
      questionBlockId: string;
      correctAnswerId: string;
      question: string;
      answers: Array<{
        __typename: "Answer";
        id?: string | null;
        answer?: string | null;
      }>;
      image?: string | null;
      explanation?: string | null;
      createdAt: string;
      updatedAt: string;
    }>;
    answers: Array<string>;
    finished: boolean;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type OnUpdateTestSubscriptionVariables = {
  owner?: string;
};

export type OnUpdateTestSubscription = {
  onUpdateTest?: {
    __typename: "Test";
    id: string;
    questions: Array<{
      __typename: "Question";
      id: string;
      questionBlockId: string;
      correctAnswerId: string;
      question: string;
      answers: Array<{
        __typename: "Answer";
        id?: string | null;
        answer?: string | null;
      }>;
      image?: string | null;
      explanation?: string | null;
      createdAt: string;
      updatedAt: string;
    }>;
    answers: Array<string>;
    finished: boolean;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type OnDeleteTestSubscriptionVariables = {
  owner?: string;
};

export type OnDeleteTestSubscription = {
  onDeleteTest?: {
    __typename: "Test";
    id: string;
    questions: Array<{
      __typename: "Question";
      id: string;
      questionBlockId: string;
      correctAnswerId: string;
      question: string;
      answers: Array<{
        __typename: "Answer";
        id?: string | null;
        answer?: string | null;
      }>;
      image?: string | null;
      explanation?: string | null;
      createdAt: string;
      updatedAt: string;
    }>;
    answers: Array<string>;
    finished: boolean;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};
