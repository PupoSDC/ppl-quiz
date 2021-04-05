import React, { FunctionComponent } from "react";
import { Drawer, DrawerItem, IndexPath } from "@ui-kitten/components";
import { DrawerContentComponentProps } from "@react-navigation/drawer";
import { DrawerContentOptions } from "@react-navigation/drawer/lib/typescript/src/types";
import { useSelector } from "react-redux";
import { TestDrawerParamList } from "types/navigation";
import { QuestionStateIcon } from "components/QuestionStateIcon";

export type TestNavigationDrawerProps = DrawerContentComponentProps<DrawerContentOptions>;

type QuestionDrawerItemProps = {
  correct: string;
  selected?: string;
  finished: boolean;
  index: number;
  navigate: TestNavigationDrawerProps["navigation"]["navigate"];
};

const QuestionDrawerItem = React.memo<QuestionDrawerItemProps>(
  ({ correct, selected, finished, index, navigate }) => (
    <DrawerItem
      accessoryLeft={(props) => (
        <QuestionStateIcon
          {...props}
          finished={finished}
          selected={selected}
          correct={correct}
        />
      )}
      title={`Question ${index + 1}`}
      onPress={() => navigate("Question", { questionIndex: index })}
    />
  )
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
          {...question}
          key={question.id}
          navigate={navigate}
          finished={finished}
        />
      ))}
    </Drawer>
  );
};
