import { useMemo } from "react";
import { useSelector } from "react-redux";
import { QuestionBankStatistics } from "types/Statistics";
import questionBanks from "assets/questions";

export default (): QuestionBankStatistics[] => {
  const seenQuestions = useSelector((state) => state.statistics.questions);

  return useMemo(
    () =>
      questionBanks.map(({ questions }) =>
        questions.reduce<QuestionBankStatistics>(
          (
            { totalQuestions, answeredQuestions, correctlyAnsweredQuestions },
            { id, correct }
          ) => {
            const statistics = seenQuestions[id];
            const answered = Boolean(statistics?.answers.length);
            const answers = statistics?.answers ?? [undefined];
            const lastAnswer = answers[answers.length - 1];
            const correctlyAnswered = lastAnswer === correct;

            return {
              totalQuestions: totalQuestions + 1,
              answeredQuestions: answeredQuestions + Number(answered),
              correctlyAnsweredQuestions:
                correctlyAnsweredQuestions + Number(correctlyAnswered),
            };
          },
          {
            totalQuestions: 0,
            answeredQuestions: 0,
            correctlyAnsweredQuestions: 0,
          }
        )
      ),
    [questionBanks, seenQuestions]
  );
};
