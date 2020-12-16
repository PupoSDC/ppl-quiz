import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Question } from "types/Questionnaire";
import useCurrentTest from "hooks/useCurrentTest";
import QuestionScreen from "screens/QuestionScreen";
import QuestionNavigationDrawerScreen from "screens/QuestionNavigationDrawerScreen";

export type TestStackParameterList = {
  Question: {
    index: number;
  };
};

const Drawer = createDrawerNavigator<TestStackParameterList>();

const TestStack: React.FunctionComponent<{}> = () => {
  const { questions } = useCurrentTest();
  const firstUnsweredQuestion = Math.max(
    questions.findIndex(({ selected }) => selected === undefined),
    0
  );
  return (
    <Drawer.Navigator
      initialRouteName={"Question"}
      drawerContent={(props) => <QuestionNavigationDrawerScreen {...props} />}
    >
      <Drawer.Screen
        options={{
          swipeEnabled: true,
        }}
        name="Question"
        component={QuestionScreen}
        initialParams={{
          index: firstUnsweredQuestion,
        }}
      />
    </Drawer.Navigator>
  );
};

export default TestStack;
