import React from "react";
import {
  Drawer,
  DrawerItem,
  Icon,
  IndexPath,
  useTheme,
} from "@ui-kitten/components";
import { DrawerContentComponentProps } from "@react-navigation/drawer";
import { DrawerContentOptions } from "@react-navigation/drawer/lib/typescript/src/types";

import { useSelector } from "react-redux";

export type TestNavigationDrawerProps = DrawerContentComponentProps<DrawerContentOptions>;

export const TestNavigationDrawer: React.FunctionComponent<TestNavigationDrawerProps> = ({
  navigation: { navigate },
  ...state
}) => {
  const theme = useTheme();
  const questions = useSelector((store) => store.currentTest.questions);
  const currentIndex = 0;

  return (
    <Drawer selectedIndex={new IndexPath(currentIndex)}>
      {questions.map(({ id, correct, selected }, questionIndex) => {
        const iconName =
          selected !== undefined
            ? correct === selected
              ? "checkmark-outline"
              : "close-outline"
            : "minus-outline";
        const iconFill =
          selected !== undefined
            ? correct === selected
              ? theme["color-success-default"]
              : theme["color-danger-default"]
            : theme["color-basic-default"];

        return (
          <DrawerItem
            key={id}
            accessoryLeft={(props) => (
              <Icon {...props} fill={iconFill} name={iconName} />
            )}
            title={`Question ${questionIndex + 1}`}
            onPress={() => navigate("Question", { questionIndex })}
          />
        );
      })}
    </Drawer>
  );
};
