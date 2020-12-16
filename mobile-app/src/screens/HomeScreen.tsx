import React from "react";
import { StyleSheet } from "react-native";
import { Button, Layout } from "@ui-kitten/components";
import { StackScreenProps } from "@react-navigation/stack";
import { useSelector } from "react-redux";
import { RootStackParamList } from "./types";

const HomeScreen: React.FunctionComponent<
  StackScreenProps<RootStackParamList>
> = ({ navigation }) => {
  const { navigate } = navigation;
  const currentTest =
    useSelector((state) => state.currentTest.questions).length > 0;
  return (
    <Layout style={styles.container} level="1">
      <Button
        onPress={() => navigate("TestMaker")}
        style={styles.button}
        children={"Start New Test"}
      />
      {currentTest && (
        <Button
          onPress={() => navigate("Test")}
          style={styles.button}
          children={"Continue test"}
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

export default HomeScreen;
