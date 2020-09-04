import { useState } from "react";
import {
  Questionnaire,
  Question,
  QuestionId,
  AnswerId,
} from "types/Questionnaire";
import { TRANSITION_DELAY } from "constants/Animations";

export type OngoingQuestionnaire = {
  /** Undefined if the user has reached the end of the test */
  currentQuestion?: Question;

  isCompleted: boolean;
  correctAnswers: number;
  totalAnswers: number;
} & Questionnaire;

export type OngoingQuestionnaireActions = {
  answerQuestion: (questionId: QuestionId, answerId: AnswerId) => void;
  goToNextQuestion: (delay?: boolean) => void;
  goToQuestion: (questionId: QuestionId, delay?: boolean) => void;
  finishTest: () => void;
};

export default (
  questionnaire: Questionnaire
): [OngoingQuestionnaire, OngoingQuestionnaireActions] => {
  const [state, setState] = useState(questionnaire);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const currentQuestion = state.questions[currentQuestionIndex] && {
    ...state.questions[currentQuestionIndex],
    index: currentQuestionIndex,
  };

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
        setState(({ questions, ...state }) => ({
          ...state,
          questions: questions.map((question) =>
            question.id !== questionId
              ? question
              : {
                  ...question,
                  selected: answerId,
                }
          ),
        }));
      },
      goToNextQuestion: (delay) => {
        setTimeout(
          () => setCurrentQuestionIndex((index) => index + 1),
          delay ? TRANSITION_DELAY : 0
        );
      },
      goToQuestion: (questionId, delay) => {
        const index = state.questions.findIndex(({ id }) => id === questionId);
        if (index > -1) {
          setTimeout(
            () => setCurrentQuestionIndex(index),
            delay ? TRANSITION_DELAY : 0
          );
        }
      },
      finishTest: () => {
        setState((state) => ({ ...state, isFinished: true }));
      },
    },
  ];
};
