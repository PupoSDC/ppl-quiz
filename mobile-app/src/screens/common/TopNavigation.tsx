import React from "react";
import { ImageProps, StyleSheet, View } from "react-native";
import {
  Avatar,
  Divider,
  Icon,
  Text,
  TopNavigation as BaseTopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";
import { StackHeaderProps } from "@react-navigation/stack";
import { RenderProp } from "@ui-kitten/components/devsupport";
import { default as icon } from "assets/icon.png";

export const TopNavigation: React.FunctionComponent<StackHeaderProps> = () => {
  return (
    <>
      <BaseTopNavigation
        title={() => (
          <View style={styles.titleContainer}>
            <Avatar style={styles.logo} source={icon} />
            <Text category={"h5"}>{"PPL quiz"}</Text>
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
