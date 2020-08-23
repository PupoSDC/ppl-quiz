import { useState } from "react";
import {
  Questionnaire,
  OngoingQuestionnaire,
  OngoingQuestionnaireActions,
} from "types/Questionnaire";
import { TRANSITION_DELAY } from "constants/Animations";

export default (
  questionnaire: Questionnaire
): [OngoingQuestionnaire, OngoingQuestionnaireActions] => {
  const [state, setState] = useState(questionnaire);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const currentQuestion = state.questions[currentQuestionIndex];
  const answeredQuestions = state.questions.filter((q) => q.selected);
  const totalAnswers = answeredQuestions.length;
  const isCompleted = totalAnswers === state.questions.length;
  const correctAnswers = answeredQuestions.filter(
    (q) => q.selected === q.correct
  ).length;

  return [
    {
      ...state,
      currentQuestion,
      isCompleted,
      correctAnswers,
      totalAnswers,
    },
    {
      answerQuestion: (questionId, answerId) => {
        setTimeout(
          () => setCurrentQuestionIndex((index) => index + 1),
          TRANSITION_DELAY
        );
        setState(({ questions, ...state }) => ({
          ...state,
          questions: questions.map((question) => {
            if (question.id !== questionId) {
              return question;
            }
            return {
              selected: answerId,
              ...question,
            };
          }),
        }));
      },
      finishTest: () => {
        setState((state) => ({ ...state, isFinished: true }));
      },
    },
  ];
};
