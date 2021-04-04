import React, { FunctionComponent } from "react";
import { StyleSheet } from "react-native";
import { Button, Layout } from "@ui-kitten/components";
import { RootStackScreenProps } from "types/navigation";
import { useSelector } from "react-redux";

export const HomeScreen: FunctionComponent<RootStackScreenProps<"Home">> = ({
  navigation: { navigate },
}) => {
  const testInProgress = useSelector(
    (store) => store.currentTest.questions.length > 0
  );
  const hasTestHistory = useSelector(
    (store) => store.statistics.testHistory.length > 0
  );

  return (
    <Layout style={styles.container} level="1">
      {testInProgress && (
        <Button
          onPress={() => navigate("Test")}
          status={"success"}
          style={styles.button}
          children={"Continue Test"}
        />
      )}
      <Button
        onPress={() => navigate("TestMaker")}
        style={styles.button}
        children={"Start New Test"}
      />
      {hasTestHistory && (
        <Button
          onPress={() => navigate("TestHistory")}
          appearance={"outline"}
          style={styles.button}
          children={"Test History"}
        />
      )}
      <Button
        onPress={() => navigate("TestStatistics")}
        appearance={"outline"}
        style={styles.button}
        children={"Statistics"}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginVertical: 10,
    marginHorizontal: 20,
    alignSelf: "stretch",
  },
});
