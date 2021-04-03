import React, { FunctionComponent } from "react";
import { StyleSheet } from "react-native";
import { Button, Layout } from "@ui-kitten/components";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackScreenProps } from "types/navigation";
import { useSelector } from "react-redux";

export const HomeScreen: FunctionComponent<RootStackScreenProps<"Home">> = ({
  navigation: { navigate },
}) => {
  const testInProgress = useSelector(
    (store) => store.currentTest.questions.length > 0
  );
  return (
    <Layout style={styles.container} level="1">
      <Button
        onPress={() => navigate("TestMaker")}
        style={styles.button}
        children={"Start New Test"}
      />
      {testInProgress && (
        <Button
          onPress={() => navigate("Test")}
          style={styles.button}
          children={"Continue Test"}
        />
      )}
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
    marginTop: 20,
  },
});
