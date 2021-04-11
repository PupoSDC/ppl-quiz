import React, { FunctionComponent } from "react";
import { Layout, List, ListItem } from "@ui-kitten/components";
import { QuestionStateIcon } from "components/QuestionStateIcon";
import { resetCurrentTest } from "constants/actions";
import { StatusBar, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { TestStackScreenProps } from "types/navigation";
import { TestQuestion } from "types/test";
import { ScoreWidget } from "components/ScoreWidget";
import { getTestScore } from "utils/testStatistics";
import { Button } from "components/Button";

export type TestResultsScreenProps = TestStackScreenProps<"Results">;

export const TestResultsScreen: FunctionComponent<TestResultsScreenProps> = ({
  navigation: { navigate },
}) => {
  const dispatch = useDispatch();
  const questions = useSelector((store) => store.currentTest.questions);
  const finished = useSelector((store) => store.currentTest.finished);
  const score = getTestScore(questions);

  const onFinishTest = () => {
    navigate("Home");
    dispatch(resetCurrentTest());
  };

  return (
    <Layout style={styles.container}>
      <List
        data={questions}
        ListHeaderComponent={() => (
          <Layout style={styles.scoreContainer}>
            <ScoreWidget score={score} />
          </Layout>
        )}
        renderItem={({
          item: { question, answers, correct, selected, index },
        }: {
          item: TestQuestion;
        }) => (
          <ListItem
            accessoryLeft={(props) => (
              <QuestionStateIcon
                finished={finished}
                selected={selected}
                correct={correct}
                {...props}
              />
            )}
            onPress={() => navigate("Question", { questionIndex: index })}
            title={`${index + 1}) ${question}`}
            description={answers.find(({ id }) => id === correct)?.answer}
          />
        )}
      />
      <ListItem
        disabled
        style={styles.section}
        description={() => (
          <Button onPress={onFinishTest} children={"Finish"} />
        )}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    display: "flex",
    flex: 1,
    marginBottom: 0,
  },
  scoreContainer: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    paddingVertical: 20,
  },
  section: {
    marginVertical: 10,
    marginHorizontal: 5,
    margin: "auto",
  },
});
