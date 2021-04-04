import React, { FunctionComponent } from "react";
import { StyleSheet } from "react-native";
import { Button, Layout, List, ListItem } from "@ui-kitten/components";
import { RootStackScreenProps } from "types/navigation";
import { useDispatch, useSelector } from "react-redux";
import { ScoreWidget } from "components/ScoreWidget";
import { Test, TestQuestion } from "types/test";
import { getTestScore } from "utils/testStatistics";
import { setCurrentTest, setCurrentTestReview } from "constants/actions";

export type TestHistoryScreenProps = RootStackScreenProps<"TestHistory">;

export const TestHistoryScreen: FunctionComponent<TestHistoryScreenProps> = ({
  navigation: { navigate },
}) => {
  const dispatch = useDispatch();
  const testHistory = useSelector((store) => store.statistics.testHistory);

  const doAgain = (questions: TestQuestion[]) => {
    dispatch(setCurrentTest({ questions }));
    navigate("Test");
  };

  const reviewTest = (questions: TestQuestion[]) => {
    dispatch(setCurrentTestReview({ questions }));
    navigate("Test");
  };

  return (
    <Layout style={styles.container} level="1">
      <List
        data={testHistory}
        renderItem={({ item: { questions } }: { item: Test }) => {
          const score = getTestScore(questions);
          return (
            <ListItem
              disabled
              style={styles.listItem}
              accessoryLeft={(props) => (
                <Layout {...props} style={{ paddingRight: 5 }}>
                  <ScoreWidget score={score} small />
                </Layout>
              )}
              title={"potato"}
              description={"a lot of text"}
              accessoryRight={() => (
                <>
                  <Button
                    style={styles.button}
                    onPress={() => reviewTest(questions)}
                    children={"Review"}
                  />
                  <Button
                    style={styles.button}
                    onPress={() => doAgain(questions)}
                    children={"Do again"}
                  />
                </>
              )}
            />
          );
        }}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {},
  listItem: {
    minHeight: 80,
  },
  button: {
    marginHorizontal: 5,
  },
});
