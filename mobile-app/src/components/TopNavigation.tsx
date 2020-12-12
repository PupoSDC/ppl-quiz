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
      accessoryRight={() => (
        <OverflowMenu
          anchor={() => (
            <TopNavigationAction
              icon={(props) => <Icon {...props} name="more-vertical" />}
              onPress={() => setMenuVisible(!menuVisible)}
            />
          )}
          visible={menuVisible}
          onBackdropPress={() => setMenuVisible(!menuVisible)}
        >
          <MenuItem
            accessoryLeft={(props) => <Icon {...props} name="more-vertical" />}
            title="About"
          />
          <MenuItem
            accessoryLeft={(props) => <Icon {...props} name="log-out" />}
            title="Logout"
          />
        </OverflowMenu>
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
