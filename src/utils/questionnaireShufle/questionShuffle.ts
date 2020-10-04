import questions from "assets/questions/airLaw/flightAcademy";
import { Question } from "types/Questionnaire";
import { QuestionsHeatMap, QuestionsHeatMapEntry } from "types/Statistics";
import perfectShuffle from "./perfectShuffle";

export enum ShuffleMode {
  NEVER_SEEN_BEFORE = "NEVER_SEEN_BEFORE",
  NEVER_SEEN_BEFORE_AND_WRONG = "NEVER_SEEN_BEFORE_AND_WRONG",
  WRONG = "WRONG",
  BIASED_ALL = "BIASED_ALL",
  ALL = "ALL",
}

export default (
  questions: Question[],
  questionsHeatMap: QuestionsHeatMap = {},
  mode: ShuffleMode = ShuffleMode.ALL
): Question[] => {
  if (mode === ShuffleMode.ALL) return perfectShuffle(questions);

  const mappedQuestions: Array<[
    Question,
    QuestionsHeatMapEntry
  ]> = questions.map((question) => [
    question,
    questionsHeatMap[question.id] || {
      answers: [],
      timesCorrect: 0,
      timesWrong: 0,
    },
  ]);

  if (mode === ShuffleMode.BIASED_ALL) {
    return mappedQuestions
      .sort(function sortPrioritizingWrongAndUnanswered([, a], [, b]) {
        const wrongnessWeight =
          a.timesWrong - a.timesCorrect - (b.timesWrong - b.timesCorrect);
        const appearenceWeight = b.answers.length - a.answers.length;
        return wrongnessWeight !== 0 ? wrongnessWeight : appearenceWeight;
      })
      .sort(() => Math.random() - 0.5)
      .map(([question]) => question);
  }

  // NEVER_SEEN_BEFORE, WRONG, NEVER_SEEN_BEFORE_AND_WRONG
  return perfectShuffle(
    mappedQuestions.reduce<Question[]>((questions, [question, { answers }]) => {
      const neverSeenBefore = answers.length === 0;
      const wrong =
        !neverSeenBefore && answers[answers.length - 1] !== question.correct;

      const passedFilter = (() => {
        switch (mode) {
          case ShuffleMode.NEVER_SEEN_BEFORE:
            return neverSeenBefore;
          case ShuffleMode.WRONG:
            return wrong;
          case ShuffleMode.NEVER_SEEN_BEFORE_AND_WRONG:
            return neverSeenBefore || wrong;
        }
      })();

      return passedFilter ? [...questions, question] : questions;
    }, [])
  );
};
