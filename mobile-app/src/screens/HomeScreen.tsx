import React from "react";
import { StyleSheet } from "react-native";
import { Button, Layout, Text } from "@ui-kitten/components";
import { useHistory } from "react-router-native";
import { ROUTE_TEST_MAKER } from "constants/routes";

export const HomeScreen = () => {
  const { push } = useHistory();

  return (
    <Layout style={styles.container} level="1">
      <Button onPress={() => push(ROUTE_TEST_MAKER)}>Start New Test</Button>
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
