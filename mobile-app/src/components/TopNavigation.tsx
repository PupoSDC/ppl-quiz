import React from "react";
import { ImageProps, StatusBar, StyleSheet, View } from "react-native";
import {
  Avatar,
  Divider,
  Text,
  TopNavigation as BaseTopNavigation,
} from "@ui-kitten/components";
import { StackHeaderProps } from "@react-navigation/stack";

const TopNavigation: React.FunctionComponent<StackHeaderProps> = ({
  scene,
}) => {
  const [menuVisible, setMenuVisible] = React.useState(false);

  return (
    <>
      <BaseTopNavigation
        title={() => (
          <View style={styles.titleContainer}>
            <Avatar
              style={styles.logo}
              source={require("../assets/icon.png")}
            />
            <Text>{scene.route.name}</Text>
          </View>
        )}
      />
      <Divider />
    </>
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
