import { Args, Query, Resolver } from "type-graphql";
import {
  Questionnaire,
  testGeneratorArgs,
  Test,
  QuestionId,
} from "../types/Questionnaire";
import questions from "../questions";
import shuffle from "../utils/perfectShuffle";

@Resolver()
class QuestionnaireResolver {
  private questionsMap = questions;

  private getTestFromQuestionIds(questionIds: QuestionId[]) {
    return {
      questions: this.questionsMap
        .flatMap(({ questions }) => questions)
        .filter(({ id }) => questionIds.includes(id)),
    };
  }

  private generateNewTest(moduleIds: string[], numberOfQuestions: number) {
    return {
      questions: shuffle(
        this.questionsMap
          .filter(({ id }) => moduleIds.includes(id))
          .flatMap(({ questions }) => questions)
      ).slice(0, numberOfQuestions),
    };
  }

  @Query((returns) => [Questionnaire])
  questionnaires(): Questionnaire[] {
    return this.questionsMap.map(({ name, questions, id }) => ({
      name,
      numberOfQuestions: questions.length,
      id,
    }));
  }

  @Query((returns) => Test)
  test(@Args() { moduleIds, numberOfQuestions, questionIds }: testGeneratorArgs): Test {
    if (questionIds) return this.getTestFromQuestionIds(questionIds);
    if (moduleIds && numberOfQuestions) return this.generateNewTest(moduleIds, numberOfQuestions);

    throw new Error("Invalid arguments for getting / creating a test")
  }
}

export default QuestionnaireResolver;
