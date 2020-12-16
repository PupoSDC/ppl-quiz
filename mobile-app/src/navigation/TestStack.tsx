import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import useCurrentTest from "hooks/useCurrentTest";
import DrawerNavigation from "components/DrawerNavigation";
import QuestionScreen from "screens/QuestionScreen";

const Drawer = createDrawerNavigator();

const TestStack: React.FunctionComponent<{}> = () => {
  const { questions } = useCurrentTest();
  const firstUnsweredQuestion = questions.findIndex(
    ({ selected }) => selected !== undefined
  );

  return (
    <Drawer.Navigator
      drawerContent={DrawerNavigation}
      initialRouteName={`Question ${firstUnsweredQuestion + 1}`}
    >
      {questions.map((q, i) => (
        <Drawer.Screen
          key={i}
          name={`Question ${i + 1}`}
          children={(props) => (
            <QuestionScreen
              {...props}
              question={q}
              index={i}
              next={i < questions.length ? `Question ${i + 2}` : undefined}
            />
          )}
        />
      ))}
    </Drawer.Navigator>
  );
};

export default TestStack;
