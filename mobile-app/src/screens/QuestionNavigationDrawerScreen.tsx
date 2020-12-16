import React from "react";
import { Drawer, DrawerItem, IndexPath } from "@ui-kitten/components";
import { DrawerContentComponentProps } from "@react-navigation/drawer";
import useCurrentTest from "hooks/useCurrentTest";

const QuestionNavigationDrawerScreen: React.FunctionComponent<
  DrawerContentComponentProps<{}>
> = ({ navigation, state }) => {
  const { questions } = useCurrentTest();

  console.log(state.history);
  return (
    <Drawer selectedIndex={new IndexPath(state.index)}>
      {questions.map(({ id }, index) => (
        <DrawerItem
          key={id}
          title={`Question ${index + 1}`}
          onPress={() => navigation.navigate("Question", { index })}
        />
      ))}
    </Drawer>
  );
};

export default QuestionNavigationDrawerScreen;
