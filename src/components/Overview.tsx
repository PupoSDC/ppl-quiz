import React, { FunctionComponent } from "react";
import { StyleSheet, View } from "react-native";
import {
  OngoingQuestionnaire,
  OngoingQuestionnaireActions,
} from "types/Questionnaire";
import { Button, Text } from "native-base";

type QuestionProps = OngoingQuestionnaire &
  Pick<OngoingQuestionnaireActions, "goToQuestion">;

const Overview: FunctionComponent<QuestionProps> = ({
  correctAnswers,
  goToQuestion,
  questions,
}) => (
  <View>
    <Text style={styles.title}>
      {correctAnswers} / {questions.length}
    </Text>
    <View style={styles.container}>
      {questions.map(({ selected, correct, id }, i) => (
        <Button
          key={id}
          style={styles.questionButton}
          light={!selected}
          primary={selected ? selected === correct : undefined}
          danger={selected ? selected !== correct : undefined}
          onPress={() => goToQuestion(id)}
        >
          <Text>{i + 1}</Text>
        </Button>
      ))}
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 8,
    alignItems: "center",
  },
  questionButton: {
    margin: 2,
    padding: 3,
    minWidth: 70,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Overview;
