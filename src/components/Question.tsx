import React, { FunctionComponent } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import {
  Question as QuestionType,
  OngoingQuestionnaireActions,
} from "types/Questionnaire";

type QuestionProps = QuestionType &
  Pick<OngoingQuestionnaireActions, "answerQuestion">;

const Question: FunctionComponent<QuestionProps> = ({
  id: questionId,
  question,
  answers,
  selected,
  answerQuestion,
}) => (
  <View style={styles.container}>
    <Text style={styles.question}>{question}</Text>
    {answers.map(({ answer, id: answerId }) => (
      <View style={styles.answer} key={answerId}>
        <TouchableOpacity
          style={styles.answer}
          onPress={() => answerQuestion(questionId, answerId)}
        >
          <Text>{answer}</Text>
        </TouchableOpacity>
      </View>
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 20,
  },
  question: {
    fontSize: 14,
    marginVertical: 8,
  },
  answer: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    alignSelf: "stretch",
    margin: 10,
  },
});

export default Question;
