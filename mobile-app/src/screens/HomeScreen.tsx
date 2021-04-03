import React from "react";
import { StyleSheet } from "react-native";
import { Button, Layout } from "@ui-kitten/components";
import { StackScreenProps } from "@react-navigation/stack";

const HomeScreen: React.FunctionComponent<
  StackScreenProps<RootStackParamList>
> = ({ navigation }) => {
  const { navigate } = navigation;

  return (
    <Layout style={styles.container} level="1">
      <Button
        onPress={() => navigate("TestMaker")}
        style={styles.button}
        children={"Start New Test"}
      />
      <Button
        onPress={() => navigate("Test")}
        style={styles.button}
        children={"Continue Test"}
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
    marginTop: 20,
  },
});

export default HomeScreen;
