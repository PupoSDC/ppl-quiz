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
import { TestDrawerParamList } from "types/navigation";
import { QuestionStateIcon } from "components/QuestionStateIcon";

export type TestNavigationDrawerProps = DrawerContentComponentProps<DrawerContentOptions>;

export const TestNavigationDrawer: React.FunctionComponent<TestNavigationDrawerProps> = ({
  navigation: { navigate },
  state: { routes },
}) => {
  const questions = useSelector((store) => store.currentTest.questions);
  const finished = useSelector((store) => store.currentTest.finished);
  const params = routes[0].params as
    | TestDrawerParamList["Question"]
    | undefined;
  const currentIndex = params?.questionIndex ?? 0;

  return (
    <Drawer selectedIndex={new IndexPath(currentIndex)}>
      {questions.map(({ id, correct, selected }, questionIndex) => {
        return (
          <DrawerItem
            key={id}
            accessoryLeft={(props) => (
              <QuestionStateIcon
                {...props}
                finished={finished}
                selected={selected}
                correct={correct}
              />
            )}
            title={`Question ${questionIndex + 1}`}
            onPress={() => navigate("Question", { questionIndex })}
          />
        );
      })}
    </Drawer>
  );
};
