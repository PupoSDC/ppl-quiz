/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createQuestionBlock = /* GraphQL */ `
  mutation CreateQuestionBlock(
    $input: CreateQuestionBlockInput!
    $condition: ModelQuestionBlockConditionInput
  ) {
    createQuestionBlock(input: $input, condition: $condition) {
      id
      code
      name
      questions {
        items {
          id
          questionBlockId
          correctAnswerId
          question
          image
          explanation
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateQuestionBlock = /* GraphQL */ `
  mutation UpdateQuestionBlock(
    $input: UpdateQuestionBlockInput!
    $condition: ModelQuestionBlockConditionInput
  ) {
    updateQuestionBlock(input: $input, condition: $condition) {
      id
      code
      name
      questions {
        items {
          id
          questionBlockId
          correctAnswerId
          question
          image
          explanation
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteQuestionBlock = /* GraphQL */ `
  mutation DeleteQuestionBlock(
    $input: DeleteQuestionBlockInput!
    $condition: ModelQuestionBlockConditionInput
  ) {
    deleteQuestionBlock(input: $input, condition: $condition) {
      id
      code
      name
      questions {
        items {
          id
          questionBlockId
          correctAnswerId
          question
          image
          explanation
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createQuestion = /* GraphQL */ `
  mutation CreateQuestion(
    $input: CreateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    createQuestion(input: $input, condition: $condition) {
      id
      questionBlockId
      correctAnswerId
      question
      answers {
        id
        answer
      }
      image
      explanation
      createdAt
      updatedAt
    }
  }
`;
export const updateQuestion = /* GraphQL */ `
  mutation UpdateQuestion(
    $input: UpdateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    updateQuestion(input: $input, condition: $condition) {
      id
      questionBlockId
      correctAnswerId
      question
      answers {
        id
        answer
      }
      image
      explanation
      createdAt
      updatedAt
    }
  }
`;
export const deleteQuestion = /* GraphQL */ `
  mutation DeleteQuestion(
    $input: DeleteQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    deleteQuestion(input: $input, condition: $condition) {
      id
      questionBlockId
      correctAnswerId
      question
      answers {
        id
        answer
      }
      image
      explanation
      createdAt
      updatedAt
    }
  }
`;
export const createTest = /* GraphQL */ `
  mutation CreateTest(
    $input: CreateTestInput!
    $condition: ModelTestConditionInput
  ) {
    createTest(input: $input, condition: $condition) {
      id
      questions {
        id
        questionBlockId
        correctAnswerId
        question
        answers {
          id
          answer
        }
        image
        explanation
        createdAt
        updatedAt
      }
      answers
      finished
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateTest = /* GraphQL */ `
  mutation UpdateTest(
    $input: UpdateTestInput!
    $condition: ModelTestConditionInput
  ) {
    updateTest(input: $input, condition: $condition) {
      id
      questions {
        id
        questionBlockId
        correctAnswerId
        question
        answers {
          id
          answer
        }
        image
        explanation
        createdAt
        updatedAt
      }
      answers
      finished
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteTest = /* GraphQL */ `
  mutation DeleteTest(
    $input: DeleteTestInput!
    $condition: ModelTestConditionInput
  ) {
    deleteTest(input: $input, condition: $condition) {
      id
      questions {
        id
        questionBlockId
        correctAnswerId
        question
        answers {
          id
          answer
        }
        image
        explanation
        createdAt
        updatedAt
      }
      answers
      finished
      createdAt
      updatedAt
      owner
    }
  }
`;
