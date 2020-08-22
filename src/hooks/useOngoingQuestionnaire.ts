import { useState } from "react";
import {
  Questionnaire,
  OngoingQuestionnaire,
  OngoingQuestionnaireActions,
} from "types/Questionnaire";

export default (
  questionnaire: Questionnaire
): [OngoingQuestionnaire, OngoingQuestionnaireActions] => {
  const [state, setState] = useState(questionnaire);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const currentQuestion = state.questions[currentQuestionIndex];
  const totalAnswers = state.questions.filter((q) => q.selected).length;
  const isCompleted = totalAnswers === state.questions.length;
  const correctAnswers = 0;

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
        setCurrentQuestionIndex((index) => index + 1);
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
