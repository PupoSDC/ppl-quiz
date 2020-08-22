import { StackScreenProps } from "@react-navigation/stack";
import React, { useState, FunctionComponent } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import { RootStackParamList } from "../types";
import Question from "components/Question";
import { AnswerId } from "types/Questionnaire";
import questions from "assets/questions/airLaw";
import useOngoingQuestionnaire from "hooks/useOngoingQuestionnaire";

const Questionnaire: FunctionComponent<{}> = () => {
  const [
    { currentQuestion, isCompleted },
    { answerQuestion },
  ] = useOngoingQuestionnaire({ questions, isFinished: false });
  return <Question {...currentQuestion} onAnswerSelected={answerQuestion} />;
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
