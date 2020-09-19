import React, { FunctionComponent } from "react";
import { StyleSheet, View, Image, Dimensions } from "react-native";
import { Button, Text } from "native-base";
import {
  Question as QuestionType,
  QuestionId,
  AnswerId,
} from "types/Questionnaire";

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
      <Text style={styles.question}>{`${index + 1}) ${question}`}</Text>
      {image && (
        <View style={styles.imageContainer}>
          <Image source={image} style={styles.image} resizeMode={"contain"} />
        </View>
      )}

      {answers.map(({ answer, id: answerId }) => (
        <View style={styles.answer} key={answerId}>
          <Button
            block
            vertical
            style={styles.answer}
            light={selected !== answerId}
            primary={selected === answerId}
            onPress={() => answerQuestion(questionId, answerId)}
          >
            <Text>{answer}</Text>
          </Button>
        </View>
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
