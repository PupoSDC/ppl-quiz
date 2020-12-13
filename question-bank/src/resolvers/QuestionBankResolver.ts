import { Args, Query, Resolver } from "type-graphql";
import { GetQuestionBankEntryArguments, QuestionBankEntry, QuestionBankEntryMetaData } from "../types/QuestionBank";
import questions from "../questions";

@Resolver()
class QuestionnaireResolver {
  private questionsMap = questions;

  @Query((returns) => [QuestionBankEntryMetaData])
  questionBankMetaData(): QuestionBankEntryMetaData[] {
    return this.questionsMap.map(({ name, questions, id }) => ({
      name,
      numberOfQuestions: questions.length,
      id,
    }));
  }

  @Query((returns) => QuestionBankEntry)
  questionBankEntry(@Args() { id }: GetQuestionBankEntryArguments ): QuestionBankEntry {
    const entry = this.questionsMap.find((entry) => entry.id === id);
    if (!entry) {
        throw new Error("Invalid question block");
    }
    return {
        ...entry,
        numberOfQuestions: entry.questions.length,
    };
  }
}

export default QuestionnaireResolver;
