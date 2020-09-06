import React, { useState, FunctionComponent } from "react";
import { StyleSheet } from "react-native";

import Question from "components/Question";
import questions from "assets/questions/meteorology";
import useOngoingQuestionnaire from "hooks/useOngoingQuestionnaire";
import Overview from "components/Overview";
import { Button, Text } from "native-base";
import shuffle from "utils/shuffle";
import { useSelector } from "react-redux";
import { QuestionnaireState } from "reducers/questionnaire";

const Questionnaire: FunctionComponent<{}> = () => {
  const questions = useSelector((state) => state.questions);

  const [
    questionnaire,
    { answerQuestion, goToNextQuestion, goToQuestion },
  ] = useOngoingQuestionnaire({
    questions,
    isFinished: false,
  });
  const { currentQuestion, isCompleted } = questionnaire;
  const [overview, setOverview] = useState(false);

  const answerQuestionAndGoToNext = (questionId: string, answerId: string) => {
    answerQuestion(questionId, answerId);
    goToNextQuestion(true);
  };

  const goToQuestionFromOverview = (questionId: string) => {
    goToQuestion(questionId, false);
    setOverview(false);
  };

  return (
    <>
      {overview || !currentQuestion ? (
        <Overview {...questionnaire} goToQuestion={goToQuestionFromOverview} />
      ) : (
        <>
          <Question
            {...currentQuestion}
            answerQuestion={answerQuestionAndGoToNext}
          />
          <Button onPress={() => setOverview(true)}>
            <Text>Overview</Text>
          </Button>
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 8,
  },
  answer: {
    marginVertical: 8,
  },
});

export default Questionnaire;
