import { Question } from "types/questionBank";
import { QuestionsHeatMap, QuestionsHeatMapEntry } from "types/statistics";

export enum ShuffleMode {
  NEVER_SEEN_BEFORE = "NEVER_SEEN_BEFORE",
  NEVER_SEEN_BEFORE_AND_WRONG = "NEVER_SEEN_BEFORE_AND_WRONG",
  WRONG = "WRONG",
  BIASED_ALL = "BIASED_ALL",
  ALL = "ALL",
}

/**
 * Sorting algorithm that is strongly biased towards keeping the first
 * entries of an array in  the begining of the array.
 */
export const biasedShuffle = <T>(arr: T[]) => {
  return arr.sort(() => Math.random() - 0.5);
};

export const perfectShuffle = <T>(arr: T[]) => {
  const newArr = arr.slice();
  for (let i = newArr.length - 1; i > 0; i--) {
    const rand = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
  }
  return newArr;
};

export const questionnaireShuffle = (
  questions: Question[],
  questionsHeatMap: QuestionsHeatMap = {},
  mode: ShuffleMode = ShuffleMode.ALL
): Question[] => {
  if (mode === ShuffleMode.ALL) return perfectShuffle(questions);

  const mappedQuestions: Array<
    [Question, QuestionsHeatMapEntry]
  > = questions.map((question) => [
    question,
    questionsHeatMap[question.id] || {
      answers: [],
      timesCorrect: 0,
      timesWrong: 0,
    },
  ]);

  if (mode === ShuffleMode.BIASED_ALL) {
    return biasedShuffle(
      mappedQuestions.sort(function sortPrioritizingWrongAndUnanswered(
        [, a],
        [, b]
      ) {
        const wrongnessWeight =
          b.timesWrong - b.timesCorrect - (a.timesWrong - a.timesCorrect);
        const appearenceWeight = a.answers.length - b.answers.length;
        return wrongnessWeight !== 0 ? wrongnessWeight : appearenceWeight;
      })
    ).map(([question]) => question);
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
