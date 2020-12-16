import React from "react";
import { StyleSheet } from "react-native";
import { Button, Layout, Text } from "@ui-kitten/components";
import { TestStackParameterList } from "navigation/TestStack";
import { AnswerId, Question, QuestionId } from "types/Questionnaire";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import useCurrentTest from "hooks/useCurrentTest";
import { setTestAnswer } from "constants/actions";
import { TRANSITION_DELAY } from "constants/animation";

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
  const { index } = route.params;
  const { question, id: questionId, answers, selected, correct } = questions[
    index
  ];

  return (
    <Layout style={styles.container}>
      <Text style={styles.question}>{`${index + 1}) ${question}`}</Text>
      {answers.map(({ answer, id: answerId }) => (
        <Button
          key={answerId}
          style={styles.answer}
          appearance="outline"
          status={
            selected === answerId
              ? selected === correct
                ? "succes"
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
  );
};

const styles = StyleSheet.create({
  container: {},
  question: {
    margin: 5,
    marginBottom: 20,
    fontWeight: "bold",
  },
  answer: {
    margin: 5,
    marginBottom: 10,
  },
});

export default QuestionScreen;
