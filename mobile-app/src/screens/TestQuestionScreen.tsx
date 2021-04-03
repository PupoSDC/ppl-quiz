import React from "react";
import { StyleSheet } from "react-native";
import { Button, Layout, Text } from "@ui-kitten/components";
import { Question } from "types/questionBank";
import {
  Directions,
  FlingGestureHandler,
  State,
} from "react-native-gesture-handler";
import { TRANSITION_DELAY } from "constants/Animations";
import { TestStackScreenProps } from "types/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentTestAnswer } from "constants/Actions";

export type QuestionScreenProps = TestStackScreenProps<"Question">;

export const TestQuestionScreen: React.FunctionComponent<QuestionScreenProps> = ({
  route,
  navigation,
}) => {
  const dispatch = useDispatch();
  const {
    id: questionId,
    answers,
    selected,
    correct,
    index,
    question,
  } = useSelector(
    (store) => store.currentTest.questions[route.params.questionIndex]
  );

  return (
    <FlingGestureHandler
      direction={Directions.RIGHT | Directions.LEFT}
      onHandlerStateChange={({ nativeEvent }) => {
        if (nativeEvent.state === State.ACTIVE) {
          if (Directions.RIGHT) {
            navigation.navigate("Question", { questionIndex: index - 1 });
          }
          if (Directions.LEFT) {
            navigation.navigate("Question", { questionIndex: index + 1 });
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
                dispatch(setCurrentTestAnswer({ questionId, answerId }));
                setTimeout(() => {
                  navigation.navigate("Question", { questionIndex: index + 1 });
                }, TRANSITION_DELAY);
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
