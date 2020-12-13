import { useState } from "react";
import {
  Questionnaire,
  Question,
  QuestionId,
  AnswerId,
} from "types/questionnaire";
import { useSelector, useDispatch } from "react-redux";
import { setTestAnswer } from "constants/actions";
import { TRANSITION_DELAY } from "constants/animation";

export type OngoingQuestionnaire = {
  /** Undefined if the user has reached the end of the test */
  currentQuestion?: Question & { index: number };
  isCompleted: boolean;
  correctAnswers: number;
  totalAnswers: number;
} & Questionnaire;

export type OngoingQuestionnaireActions = {
  answerQuestion: (questionId: QuestionId, answerId: AnswerId) => void;
  goToNextQuestion: (delay?: boolean) => void;
  goToQuestion: (questionId: QuestionId, delay?: boolean) => void;
};

export default (): [OngoingQuestionnaire, OngoingQuestionnaireActions] => {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.currentTest.questions);
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
          setTestAnswer({
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
