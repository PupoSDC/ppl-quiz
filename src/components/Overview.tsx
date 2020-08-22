import { StackScreenProps } from "@react-navigation/stack";
import * as React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import {
  Question as QuestionType,
  OngoingQuestionnaireActions,
} from "types/Questionnaire";

type QuestionProps = QuestionType &
  Pick<OngoingQuestionnaireActions, "answerQuestion">;

const Question: React.FunctionComponent<QuestionProps> = ({
  id: questionId,
  question,
  answers,
  selected,
  answerQuestion,
}) => (
  <View style={styles.container}>
    <Text style={styles.title}>{question}</Text>
    {answers.map(({ answer, id: answerId }) => (
      <View style={styles.answer} key={answerId}>
        <Button
          color={selected === answerId ? "#cfcfcf" : undefined}
          onPress={() => answerQuestion(questionId, answerId)}
          title={answer}
        />
      </View>
    ))}
  </View>
);

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

export default Question;
