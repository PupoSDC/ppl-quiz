import React from "react";
import { ImageProps, StyleSheet, View } from "react-native";
import {
  Avatar,
  Icon,
  MenuItem,
  OverflowMenu,
  Text,
  TopNavigation as BaseTopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";

const TopNavigation = () => {
  const [menuVisible, setMenuVisible] = React.useState(false);

  return (
    <BaseTopNavigation
      title={(props) => (
        <View style={styles.titleContainer}>
          <Avatar style={styles.logo} source={require("../assets/icon.png")} />
          <Text {...props}>PPL QUIZZ</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    marginHorizontal: 16,
  },
});

export default TopNavigation;
