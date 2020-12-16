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
  TestSummary: {
    questions: Question[];
  };
};

const Drawer = createDrawerNavigator<TestStackParameterList>();

const TestStack: React.FunctionComponent<{}> = () => {
  const { questions } = useCurrentTest();
  const firstUnsweredQuestion = questions.findIndex(
    ({ selected }) => selected === undefined
  );
  return (
    <Drawer.Navigator
      initialRouteName={firstUnsweredQuestion > 0 ? "Question" : "TestSummary"}
      drawerContent={(props) => <QuestionNavigationDrawerScreen {...props} />}
    >
      <Drawer.Screen
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
