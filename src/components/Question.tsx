import React, { FunctionComponent } from "react";
import { StyleSheet, View, Image, Dimensions } from "react-native";
import { Button } from "react-native-paper";
import Markdown from "react-native-markdown-display";
import {
  Question as QuestionType,
  QuestionId,
  AnswerId,
} from "types/Questionnaire";
import Answer from "./Answer";

type QuestionProps = QuestionType & {
  answerQuestion: (questionId: QuestionId, answerId: AnswerId) => void;
};

const Question: FunctionComponent<QuestionProps> = ({
  id: questionId,
  question,
  image,
  answers,
  selected,
  index = 0,
  answerQuestion,
}) => {
  return (
    <View style={styles.container}>
      <Markdown>{`## ${index + 1}) ${question}`}</Markdown>
      {image && (
        <View style={styles.imageContainer}>
          <Image source={image} style={styles.image} resizeMode={"contain"} />
        </View>
      )}

      {answers.map(({ answer, id: answerId }) => (
        <Answer
          key={answerId}
          onPress={() => answerQuestion(questionId, answerId)}
          selected={answerId === selected}
        >
          {answer}
        </Answer>
      ))}
    </View>
  );
};

const win = Dimensions.get("window");

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
    width: "100%",
    margin: 5,
    padding: 3,
  },
  answerContent: {
    height: 60,
  },
  imageContainer: {
    flexDirection: "row",
  },
  image: {
    flex: 1,
    alignSelf: "stretch",
    width: win.width > 500 ? 500 : win.width * 0.8,
    height: win.width > 500 ? 250 : win.width * 0.4,
  },
});

export default Question;
