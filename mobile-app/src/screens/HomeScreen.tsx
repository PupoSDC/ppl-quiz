import React from "react";
import { StyleSheet } from "react-native";
import { Button, Layout } from "@ui-kitten/components";
import { ROUTE_TEST_MAKER } from "constants/routes";
import { StackScreenProps } from "@react-navigation/stack";

export const HomeScreen: React.FunctionComponent<StackScreenProps<{}>> = ({
  navigation,
}) => {
  const { navigate } = navigation;
  return (
    <Layout style={styles.container} level="1">
      <Button onPress={() => navigate(ROUTE_TEST_MAKER)}>Start New Test</Button>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
