import { useState } from "react";
import {
  Questionnaire,
  Question,
  QuestionId,
  AnswerId,
} from "types/Questionnaire";
import { TRANSITION_DELAY } from "constants/Animations";
import { useSelector, useDispatch } from "react-redux";
import { setQuestionnaireAnswer } from "constants/Actions";

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
};

export default (
  questionnaire: Questionnaire
): [OngoingQuestionnaire, OngoingQuestionnaireActions] => {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questions);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const currentQuestion = questions[currentQuestionIndex] && {
    ...questions[currentQuestionIndex],
    index: currentQuestionIndex,
  };

  const answeredQuestions = questions.filter((q) => q.selected);
  const totalAnswers = answeredQuestions.length;
  const isCompleted = totalAnswers === questions.length;
  const correctAnswers = answeredQuestions.filter(
    (q) => q.selected === q.correct
  ).length;

  return [
    {
      questions,
      currentQuestion,
      isCompleted,
      correctAnswers,
      totalAnswers,
    },
    {
      answerQuestion: (questionId, answerId) => {
        dispatch(
          setQuestionnaireAnswer({
            questionId,
            answerId,
          })
        );
      },
      goToNextQuestion: (delay) => {
        setTimeout(
          () => setCurrentQuestionIndex((index) => index + 1),
          delay ? TRANSITION_DELAY : 0
        );
      },
      goToQuestion: (questionId, delay) => {
        const index = questions.findIndex(({ id }) => id === questionId);
        if (index > -1) {
          setTimeout(
            () => setCurrentQuestionIndex(index),
            delay ? TRANSITION_DELAY : 0
          );
        }
      },
    },
  ];
};
