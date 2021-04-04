import questions from "assets/questions";
import { QuestionBlock, QuestionBlockId } from "types/questionBank";
import { QuestionBankStatistics, QuestionsHeatMap } from "types/statistics";
import { TestQuestion } from "types/test";

export const getTestScore = (questions: TestQuestion[]) => {
  const correctAnswers = questions.filter(
    ({ correct, selected }) => correct === selected
  );
  return (correctAnswers.length / questions.length) * 100;
};

export const getBlocksInTest = (
  questions: TestQuestion[]
): QuestionBlockId[] => {
  return Object.keys(
    questions.reduce<Record<QuestionBlockId, unknown>>((sum, question) => {
      sum[question.questionBlockId] = 1;
      return sum;
    }, {})
  );
};

export const getQuestionBankStatistics = (
  questionBank: QuestionBlock[],
  questionsHeatMap: QuestionsHeatMap
): QuestionBankStatistics[] => {
  return questionBank.map(({ questions, name, id }) => {
    let answeredQuestions = 0;
    let correctlyAnsweredQuestions = 0;

    questions.forEach(({ id, correct }) => {
      const entry = questionsHeatMap[id];
      if (entry) {
        answeredQuestions += 1;
        correctlyAnsweredQuestions += Number(
          entry.answers.slice(-1)[0] === correct
        );
      }
    });

    return {
      name,
      questionBlockId: id,
      totalQuestions: questions.length,
      answeredQuestions,
      correctlyAnsweredQuestions,
    };
  });
};
