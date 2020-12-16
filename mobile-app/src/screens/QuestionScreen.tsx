import React from "react";
import { StyleSheet } from "react-native";
import { Button, Icon, Layout, Text } from "@ui-kitten/components";
import { TestStackParameterList } from "navigation/TestStack";
import { AnswerId, Question, QuestionId } from "types/Questionnaire";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import useCurrentTest from "hooks/useCurrentTest";
import { setTestAnswer } from "constants/actions";
import { TRANSITION_DELAY } from "constants/animation";
import {
  Directions,
  FlingGestureHandler,
  State,
} from "react-native-gesture-handler";

export type QuestionScreenProps = {
  route: RouteProp<TestStackParameterList, "Question">;
  navigation: DrawerNavigationProp<TestStackParameterList, "Question">;
};

const QuestionScreen: React.FunctionComponent<QuestionScreenProps> = ({
  route,
  navigation,
}) => {
  const dispatch = useDispatch();
  const { questions } = useCurrentTest();
  const index = Math.min(Math.max(route.params.index, 0), questions.length - 1);
  const { question, id: questionId, answers, selected, correct } = questions[
    index
  ];

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
                dispatch(
                  setTestAnswer({
                    questionId,
                    answerId,
                  })
                );
                if (correct === answerId) {
                  setTimeout(() => {
                    navigation.navigate("Question", { index: index + 1 });
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

export default QuestionScreen;
