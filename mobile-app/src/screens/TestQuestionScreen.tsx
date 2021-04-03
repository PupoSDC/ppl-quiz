import React from "react";
import { StyleSheet } from "react-native";
import { Button, Layout, Text } from "@ui-kitten/components";
import { Question } from "types/questionBank";
import {
  Directions,
  FlingGestureHandler,
  State,
} from "react-native-gesture-handler";
import { QuestionState } from "types/test";
import { DrawerScreenProps } from "types/navigation";
import { TRANSITION_DELAY } from "constants/Animations";

export type QuestionScreenParams = Question &
  QuestionState & {
    index: number;
  };
export type QuestionScreenProps = DrawerScreenProps<QuestionScreenParams>;

const TestQuestionScreen: React.FunctionComponent<QuestionScreenProps> = ({
  route,
  navigation,
}) => {
  const { answers, selected, correct, index, question } = route.params;
  return (
    <FlingGestureHandler
      direction={Directions.RIGHT | Directions.LEFT}
      onHandlerStateChange={({ nativeEvent }) => {
        if (nativeEvent.state === State.ACTIVE) {
          if (Directions.RIGHT) {
            navigation.navigate("Question", { index: index - 1 });
          }
          if (Directions.LEFT) {
            navigation.navigate("Question", { index: index + 1 });
          }
        }
      }}
    >
      <Layout style={styles.container}>
        <Text style={styles.question}>{`${index + 1}) ${question}`}</Text>
        <Layout style={styles.answersContainer}>
          {answers.map(({ answer, id: answerId }) => (
            <Button
              key={answerId}
              style={styles.answer}
              appearance="outline"
              status={
                selected === answerId
                  ? selected === correct
                    ? "success"
                    : "danger"
                  : "basic"
              }
              onPress={() => {
                if (correct === answerId) {
                  setTimeout(() => {
                    // navigation.navigate("Question", { index: index + 1 });
                  }, TRANSITION_DELAY);
                }
              }}
              children={answer}
            />
          ))}
        </Layout>
      </Layout>
    </FlingGestureHandler>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  question: {
    margin: 5,
    marginBottom: 20,
    fontWeight: "bold",
  },
  answersContainer: {
    flex: 1,
  },
  answer: {
    margin: 5,
    marginBottom: 10,
  },
  controlsContainer: {},
  controlButton: {},
});

export default TestQuestionScreen;
