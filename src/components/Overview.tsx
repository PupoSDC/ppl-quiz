import React, { FunctionComponent } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { Question } from "types/Questionnaire";
import { GOOD, BAD } from "constants/Colors";

type OverviewProps = {
  correctAnswers: Question[];
  goToQuestion: (index: unknown) => void;
  finishTest: () => void;
  questions: Question[];
};

const Overview: FunctionComponent<OverviewProps> = ({
  correctAnswers,
  goToQuestion,
  finishTest,
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
          mode={selected ? "contained" : "outlined"}
          color={selected ? (correct === selected ? GOOD : BAD) : undefined}
          style={styles.questionButton}
          onPress={() => goToQuestion(id)}
        >
          <Text>{i + 1}</Text>
        </Button>
      ))}
    </View>
    <View style={styles.container}>
      <Button onPress={() => finishTest()}>
        <Text>Finish Test</Text>
      </Button>
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
