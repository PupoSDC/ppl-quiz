import React, { FunctionComponent } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { OngoingQuestionnaire } from "types/Questionnaire";

const Overview: FunctionComponent<OngoingQuestionnaire> = ({
  correctAnswers,
  questions,
}) => (
  <View style={styles.container}>
    <Text style={styles.title}>
      {correctAnswers} / {questions.length}
    </Text>
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
});

export default Overview;
