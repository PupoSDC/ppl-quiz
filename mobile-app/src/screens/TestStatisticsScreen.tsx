import React, { FunctionComponent } from "react";
import { StyleSheet } from "react-native";
import { Button, Layout, List, ListItem } from "@ui-kitten/components";
import { RootStackScreenProps } from "types/navigation";
import { useSelector } from "react-redux";
import { getQuestionBankStatistics } from "utils/testStatistics";
import { ScoreWidget } from "components/ScoreWidget";
import { QuestionBankStatistics } from "types/statistics";

export type TestStatisticsProps = RootStackScreenProps<"TestStatistics">;

export const TestStatisticsScreen: FunctionComponent<TestStatisticsProps> = ({
  navigation: { navigate },
}) => {
  const questions = useSelector((store) => store.statistics.questions);
  const questionBank = useSelector((store) =>
    Object.values(store.questionBank)
  );
  const statistics = getQuestionBankStatistics(questionBank, questions);
  return (
    <Layout level="1">
      <List
        data={statistics}
        style={styles.listItem}
        renderItem={({
          item: { name, totalQuestions, correctlyAnsweredQuestions },
        }: {
          item: QuestionBankStatistics;
        }) => {
          const score = (correctlyAnsweredQuestions / totalQuestions) * 100;
          return (
            <ListItem
              disabled
              accessoryLeft={(props) => (
                <Layout {...props} style={{ paddingRight: 5 }}>
                  <ScoreWidget score={score} small />
                </Layout>
              )}
              title={name}
              description={`${correctlyAnsweredQuestions}/${totalQuestions}`}
            />
          );
        }}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  listItem: {
    minHeight: 80,
  },
});
