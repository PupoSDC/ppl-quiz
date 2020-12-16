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
import { TestStackParameterList } from "navigation/TestStack";

const QuestionNavigationDrawerScreen: React.FunctionComponent<
  DrawerContentComponentProps<TestStackParameterList>
> = ({ navigation, state }) => {
  const { questions } = useCurrentTest();
  const theme = useTheme();
  const indexPath = state.routes[state.routes.length - 1].params?.index ?? 0;

  return (
    <Drawer selectedIndex={new IndexPath(indexPath)}>
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
