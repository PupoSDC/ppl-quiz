/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateQuestionBlock = /* GraphQL */ `
  subscription OnCreateQuestionBlock {
    onCreateQuestionBlock {
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
export const onUpdateQuestionBlock = /* GraphQL */ `
  subscription OnUpdateQuestionBlock {
    onUpdateQuestionBlock {
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
export const onDeleteQuestionBlock = /* GraphQL */ `
  subscription OnDeleteQuestionBlock {
    onDeleteQuestionBlock {
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
export const onCreateQuestion = /* GraphQL */ `
  subscription OnCreateQuestion {
    onCreateQuestion {
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
export const onUpdateQuestion = /* GraphQL */ `
  subscription OnUpdateQuestion {
    onUpdateQuestion {
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
export const onDeleteQuestion = /* GraphQL */ `
  subscription OnDeleteQuestion {
    onDeleteQuestion {
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
export const onCreateTest = /* GraphQL */ `
  subscription OnCreateTest($owner: String!) {
    onCreateTest(owner: $owner) {
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
export const onUpdateTest = /* GraphQL */ `
  subscription OnUpdateTest($owner: String!) {
    onUpdateTest(owner: $owner) {
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
export const onDeleteTest = /* GraphQL */ `
  subscription OnDeleteTest($owner: String!) {
    onDeleteTest(owner: $owner) {
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
