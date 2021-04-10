import React from "react";
import { StyleSheet, View } from "react-native";
import {
  Avatar,
  Divider,
  Text,
  TopNavigation as BaseTopNavigation,
  TopNavigationProps as BaseTopNavigationProps,
} from "@ui-kitten/components";
import { default as icon } from "assets/icon.png";

export type TopNavigationProps = Omit<BaseTopNavigationProps, "title">;

export const TopNavigation: React.FunctionComponent<TopNavigationProps> = (
  props
) => {
  return (
    <>
      <BaseTopNavigation
        title={() => (
          <View style={styles.titleContainer}>
            <Avatar style={styles.logo} source={icon} />
            <Text category={"h5"}>{"PPL quiz"}</Text>
          </View>
        )}
        {...props}
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
