/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getQuestionBlock = /* GraphQL */ `
  query GetQuestionBlock($id: ID!) {
    getQuestionBlock(id: $id) {
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
export const listQuestionBlocks = /* GraphQL */ `
  query ListQuestionBlocks(
    $filter: ModelQuestionBlockFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestionBlocks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        code
        name
        questions {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getQuestion = /* GraphQL */ `
  query GetQuestion($id: ID!) {
    getQuestion(id: $id) {
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
export const listQuestions = /* GraphQL */ `
  query ListQuestions(
    $filter: ModelQuestionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getTest = /* GraphQL */ `
  query GetTest($id: ID!) {
    getTest(id: $id) {
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
export const listTests = /* GraphQL */ `
  query ListTests(
    $filter: ModelTestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        questions {
          id
          questionBlockId
          correctAnswerId
          question
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
      nextToken
    }
  }
`;
