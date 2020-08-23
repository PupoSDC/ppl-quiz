import { StackScreenProps } from "@react-navigation/stack";
import React, { useState, FunctionComponent } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import Question from "components/Question";
import questions from "assets/questions/airLaw";
import useOngoingQuestionnaire from "hooks/useOngoingQuestionnaire";
import Overview from "components/Overview";

const Questionnaire: FunctionComponent<{}> = () => {
  const [questionnaire, { answerQuestion }] = useOngoingQuestionnaire({
    questions,
    isFinished: false,
  });
  const { currentQuestion, isCompleted } = questionnaire;
  return currentQuestion ? (
    <Question {...currentQuestion} answerQuestion={answerQuestion} />
  ) : (
    <Overview {...questionnaire} />
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
