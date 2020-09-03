import { StackScreenProps } from "@react-navigation/stack";
import React, { useState, FunctionComponent } from "react";
import { StyleSheet } from "react-native";

import Question from "components/Question";
import questions from "assets/questions/operationalProcedures";
import useOngoingQuestionnaire from "hooks/useOngoingQuestionnaire";
import Overview from "components/Overview";
import { Button, Text } from "native-base";
import shuffle from "utils/shuffle";

const examQuestions = shuffle(questions)
  .slice(0, 24)
  .map(({ answers, ...question }) => ({
    answers: shuffle(answers),
    ...question,
  }));

const Questionnaire: FunctionComponent<{}> = () => {
  const [
    questionnaire,
    { answerQuestion, goToNextQuestion, goToQuestion },
  ] = useOngoingQuestionnaire({
    questions: examQuestions,
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
