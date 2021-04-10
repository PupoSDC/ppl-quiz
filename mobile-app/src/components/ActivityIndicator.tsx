import React, { FunctionComponent } from "react";
import { Spinner } from "@ui-kitten/components";
import { View, StyleSheet } from "react-native";

export const ActivityIndicator: FunctionComponent = () => (
  <View style={styles.container}>
    <Spinner />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
