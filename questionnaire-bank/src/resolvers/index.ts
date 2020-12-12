import { NonEmptyArray } from "type-graphql";
import QuestionnaireResolver from "./QuestionnaireResolver";

const resolvers: NonEmptyArray<Function> = [QuestionnaireResolver];

export default resolvers;
