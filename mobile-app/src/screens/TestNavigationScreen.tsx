import React from "react";
import {
  Drawer,
  DrawerItem,
  Icon,
  IndexPath,
  useTheme,
} from "@ui-kitten/components";
import { DrawerContentComponentProps } from "@react-navigation/drawer";

import { TestStackParameterList } from "navigation/TestDrawer";
import {
  DrawerContentOptions,
  DrawerHeaderOptions,
} from "@react-navigation/drawer/lib/typescript/src/types";
import { Test } from "types/test";

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Profile"
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

export type TestNavigationScreen = DrawerContentComponentProps<DrawerContentOptions> &
  Test;

const TestNavigationScreen: React.FunctionComponent<TestNavigationScreenProps> = ({
  navigation,
  questions,
  currentQuestion,
  state,
}) => {
  const theme = useTheme();
  const currentIndex = questions.findIndex(({ id }) => id === currentQuestion);

  return (
    <Drawer selectedIndex={new IndexPath(currentIndex)}>
      {questions.map(({ id, correct, selected }, index) => {
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
            title={`Question ${index + 1}`}
            onPress={() => navigation.navigate("Question", { index })}
          />
        );
      })}
    </Drawer>
  );
};

export default TestNavigationScreen;
