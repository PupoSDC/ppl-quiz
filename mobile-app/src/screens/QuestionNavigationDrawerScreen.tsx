import React from "react";
import {
  Drawer,
  DrawerItem,
  Icon,
  IndexPath,
  useTheme,
} from "@ui-kitten/components";
import { DrawerContentComponentProps } from "@react-navigation/drawer";
import useCurrentTest from "hooks/useCurrentTest";

const QuestionNavigationDrawerScreen: React.FunctionComponent<
  DrawerContentComponentProps<{}>
> = ({ navigation, state }) => {
  const { questions } = useCurrentTest();
  const theme = useTheme();

  return (
    <Drawer selectedIndex={new IndexPath(state.index)}>
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

export default QuestionNavigationDrawerScreen;
