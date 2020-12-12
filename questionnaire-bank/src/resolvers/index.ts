import { NonEmptyArray } from "type-graphql";
import TestResolver from "./TestResolver";
import QuestionBankResolver from "./QuestionBankResolver";

const resolvers: NonEmptyArray<Function> = [TestResolver, QuestionBankResolver];

export default resolvers;
