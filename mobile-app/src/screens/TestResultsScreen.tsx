import {
  Button,
  Card,
  Layout,
  List,
  ListItem,
  Text,
} from "@ui-kitten/components";
import { QuestionStateIcon } from "components/QuestionStateIcon";
import React, { FunctionComponent } from "react";
import { StatusBar, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { TestStackScreenProps } from "types/navigation";
import { TestQuestion } from "types/test";

export type TestResultsScreenProps = TestStackScreenProps<"Results">;

export const TestResultsScreen: FunctionComponent<TestResultsScreenProps> = ({
  navigation: { navigate },
}) => {
  const questions = useSelector((store) => store.currentTest.questions);

  const onFinishTest = () => {
    navigate("Home");
  };

  return (
    <Layout style={styles.container}>
      <List
        data={questions}
        renderItem={({
          item: { question, answers, correct, selected, index },
        }: {
          item: TestQuestion;
        }) => (
          <ListItem
            accessoryLeft={(props) => (
              <QuestionStateIcon
                selected={selected}
                correct={correct}
                {...props}
              />
            )}
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
  section: {
    marginVertical: 10,
    marginHorizontal: 5,
    margin: "auto",
  },
});
