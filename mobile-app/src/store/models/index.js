// @ts-check
import { initSchema } from "@aws-amplify/datastore";
import { schema } from "./schema";

const { QuestionBlock, Question, Test, Answer } = initSchema(schema);

export { QuestionBlock, Question, Test, Answer };
