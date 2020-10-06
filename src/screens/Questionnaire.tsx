import React, { useState, FunctionComponent } from "react";
import { Button, Text } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { StyleSheet } from "react-native";
import { useHistory } from "react-router-native";
import Question from "components/Question";
import useOngoingQuestionnaire from "hooks/useOngoingQuestionnaire";
import Overview from "components/Overview";
import { finishQuestionnaire } from "constants/Actions";
import { HOME } from "constants/Routes";

const Questionnaire: FunctionComponent<{}> = () => {
  const questions = useSelector((state) => state.questionnaire.questions);
  const { push } = useHistory();
  const dispatch = useDispatch();

  const [
    questionnaire,
    { answerQuestion, goToNextQuestion, goToQuestion },
  ] = useOngoingQuestionnaire();
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

  const finishTest = () => {
    dispatch(finishQuestionnaire({ questions }));
    push(HOME);
  };

  return (
    <>
      {overview || !currentQuestion ? (
        <Overview
          {...questionnaire}
          goToQuestion={goToQuestionFromOverview}
          finishTest={finishTest}
        />
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
