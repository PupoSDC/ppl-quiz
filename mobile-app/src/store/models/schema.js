export const schema = {
  models: {
    QuestionBlock: {
      name: "QuestionBlock",
      fields: {
        id: {
          name: "id",
          isArray: false,
          type: "ID",
          isRequired: true,
          attributes: [],
        },
        code: {
          name: "code",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: [],
        },
        name: {
          name: "name",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: [],
        },
        questions: {
          name: "questions",
          isArray: true,
          type: {
            model: "Question",
          },
          isRequired: true,
          attributes: [],
          isArrayNullable: false,
          association: {
            connectionType: "HAS_MANY",
            associatedWith: "questionBlockId",
          },
        },
      },
      syncable: true,
      pluralName: "QuestionBlocks",
      attributes: [
        {
          type: "model",
          properties: {},
        },
        {
          type: "auth",
          properties: {
            rules: [
              {
                allow: "private",
                operations: ["read"],
              },
            ],
          },
        },
      ],
    },
    Question: {
      name: "Question",
      fields: {
        id: {
          name: "id",
          isArray: false,
          type: "ID",
          isRequired: true,
          attributes: [],
        },
        questionBlockId: {
          name: "questionBlockId",
          isArray: false,
          type: "ID",
          isRequired: true,
          attributes: [],
        },
        correctAnswerId: {
          name: "correctAnswerId",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: [],
        },
        question: {
          name: "question",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: [],
        },
        answers: {
          name: "answers",
          isArray: true,
          type: {
            nonModel: "Answer",
          },
          isRequired: true,
          attributes: [],
          isArrayNullable: false,
        },
        image: {
          name: "image",
          isArray: false,
          type: "String",
          isRequired: false,
          attributes: [],
        },
        explanation: {
          name: "explanation",
          isArray: false,
          type: "String",
          isRequired: false,
          attributes: [],
        },
        testQuestionsId: {
          name: "testQuestionsId",
          isArray: false,
          type: "ID",
          isRequired: false,
          attributes: [],
        },
      },
      syncable: true,
      pluralName: "Questions",
      attributes: [
        {
          type: "model",
          properties: {},
        },
        {
          type: "key",
          properties: {
            name: "questionsByQuestionBlock",
            fields: ["questionBlockId"],
          },
        },
        {
          type: "auth",
          properties: {
            rules: [
              {
                allow: "private",
                operations: ["read"],
              },
            ],
          },
        },
      ],
    },
    Test: {
      name: "Test",
      fields: {
        id: {
          name: "id",
          isArray: false,
          type: "ID",
          isRequired: true,
          attributes: [],
        },
        questions: {
          name: "questions",
          isArray: true,
          type: {
            model: "Question",
          },
          isRequired: true,
          attributes: [],
          isArrayNullable: false,
          association: {
            connectionType: "HAS_MANY",
            associatedWith: "testQuestionsId",
          },
        },
        answers: {
          name: "answers",
          isArray: true,
          type: {
            nonModel: "Answer",
          },
          isRequired: true,
          attributes: [],
          isArrayNullable: false,
        },
        finished: {
          name: "finished",
          isArray: false,
          type: "Boolean",
          isRequired: true,
          attributes: [],
        },
      },
      syncable: true,
      pluralName: "Tests",
      attributes: [
        {
          type: "model",
          properties: {},
        },
        {
          type: "auth",
          properties: {
            rules: [
              {
                provider: "userPools",
                ownerField: "owner",
                allow: "owner",
                identityClaim: "cognito:username",
                operations: ["create", "update", "delete", "read"],
              },
            ],
          },
        },
      ],
    },
  },
  enums: {},
  nonModels: {
    Answer: {
      name: "Answer",
      fields: {
        id: {
          name: "id",
          isArray: false,
          type: "String",
          isRequired: false,
          attributes: [],
        },
        answer: {
          name: "answer",
          isArray: false,
          type: "String",
          isRequired: false,
          attributes: [],
        },
      },
    },
  },
  version: "5f256e911f138f9e6b5948cfb2b3aa7f",
};
