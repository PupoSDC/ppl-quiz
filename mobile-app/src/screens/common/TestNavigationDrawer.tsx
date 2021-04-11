import React, { FunctionComponent } from "react";
import {
  Drawer,
  DrawerItem,
  IndexPath,
  MenuItemProps,
} from "@ui-kitten/components";
import { DrawerContentComponentProps } from "@react-navigation/drawer";
import { DrawerContentOptions } from "@react-navigation/drawer/lib/typescript/src/types";
import { useSelector } from "react-redux";
import { TestDrawerParamList } from "types/navigation";
import { QuestionStateIcon } from "components/QuestionStateIcon";

export type TestNavigationDrawerProps = DrawerContentComponentProps<DrawerContentOptions>;

type QuestionDrawerItemProps = {
  correct: string;
  questionSelected?: string;
  finished: boolean;
  index: number;
  navigate: TestNavigationDrawerProps["navigation"]["navigate"];
} & MenuItemProps;

const QuestionDrawerItem: FunctionComponent<QuestionDrawerItemProps> = ({
  correct,
  questionSelected,
  finished,
  index,
  navigate,
  ...menuItemProps
}) => (
  <DrawerItem
    {...menuItemProps}
    accessoryLeft={(props) => (
      <QuestionStateIcon
        {...props}
        finished={finished}
        selected={questionSelected}
        correct={correct}
      />
    )}
    title={`Question ${index + 1}`}
    onPress={() => navigate("Question", { questionIndex: index })}
  />
);

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
      {questions.map((question) => (
        <QuestionDrawerItem
          correct={question.correct}
          questionSelected={question.selected}
          index={question.index}
          key={question.id}
          navigate={navigate}
          finished={finished}
        />
      ))}
    </Drawer>
  );
};
