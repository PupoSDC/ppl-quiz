import { DocumentClient } from "aws-sdk/clients/dynamodb.js";
import { default as QuestionBank } from "./questions";

const db = new DocumentClient({ region: "eu-west-1" });

Object.values(QuestionBank).forEach((questionBlock) => {
  db.put({
    TableName: "QuestionBlock-hjjmtdzjpngmxlg4aa3ib57gtq-dev",
    Item: {
      id: questionBlock.id,
      name: questionBlock.name,
      code: questionBlock.id,
    },
  })
    .promise()
    .then(console.log)
    .catch(console.error);

  questionBlock.questions.forEach((question) => {
    db.put({
      TableName: "Question-hjjmtdzjpngmxlg4aa3ib57gtq-dev",
      Item: {
        id: question.id,
        questionBlockId: questionBlock.id,
        correctAnswerId: question.correct,
        question: question.question,
        answers: question.answers,
        image: question.image,
        explanation: question.explanation,
      },
    })
      .promise()
      .then(console.log)
      .catch(console.error);
  });
});
