import React from "react";
import { StyleSheet } from "react-native";
import {
  Button,
  Drawer,
  DrawerItem,
  Layout,
  Text,
} from "@ui-kitten/components";
import useOngoingQuestionnaire from "hooks/useOngoingQuestionnaire";
import { useDispatch } from "react-redux";
import { setTestAnswer } from "constants/actions";

const QuestionScreen = () => {
  const dispatch = useDispatch();
  const [state, actions] = useOngoingQuestionnaire();
  const { currentQuestion } = state;
  const { answerQuestion, goToNextQuestion } = actions;
  console.log(currentQuestion?.id);
  return (
    <Layout style={styles.container}>
      <Text style={styles.question}>
        {`${(currentQuestion?.index ?? 0) + 1}) ${currentQuestion?.question}`}
      </Text>
      {currentQuestion?.answers.map(({ answer, id }) => (
        <Button
          key={id}
          style={styles.answer}
          appearance="outline"
          status="basic"
          onPress={() => {
            answerQuestion(currentQuestion.id, id);
            goToNextQuestion();
          }}
          children={answer}
        />
      ))}
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flexWrap: "wrap",
  },
  question: {
    margin: 5,
    marginBottom: 20,
    fontWeight: "bold",
  },
  answer: {
    margin: 5,
    marginBottom: 10,
  },
  controlContainer: {
    borderRadius: 4,
    margin: 5,
    padding: 6,
    justifyContent: "center",
    backgroundColor: "#3366FF",
  },
});

export default QuestionScreen;
