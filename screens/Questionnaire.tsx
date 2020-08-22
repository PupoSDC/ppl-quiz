import { StackScreenProps } from "@react-navigation/stack";
import * as React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import { RootStackParamList } from "types";
import Question from "components/Question";
import { AnswerId } from "types/Questionnaire";

const mockQuestion = {
  id: "ALW100",
  question:
    "What is the primary purpose of an aircraft accident investigation?",
  answers: [
    {
      answer: "To Determine the guilty party and draw legal consequences",
      id: "ALW100-1",
    },
    {
      answer: "To identify the reasons and work out safety recommendations",
      id: "ALW100-2",
    },
    {
      answer:
        "To clarify questions of liability within the meaning of compensation for passengers",
      id: "ALW100-3",
    },
    {
      answer:
        "To work for the public prosecutor and help to follow-up flight accidents",
      id: "ALW100-4",
    },
  ],
};

export default function NotFoundScreen({
  navigation,
}: StackScreenProps<RootStackParamList, "NotFound">) {
  const [selected, setSelected] = React.useState<AnswerId>();
  return (
    <Question
      {...mockQuestion}
      onAnswerSelected={(qid, aid) => setSelected(aid)}
    />
  );
}

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
