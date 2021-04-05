import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { TestNavigationDrawer } from "screens/common/TestNavigationDrawer";
import { TestQuestionScreen } from "screens/TestQuestionScreen";
import { TestDrawerParamList } from "types/navigation";
import { TestResultsScreen } from "screens/TestResultsScreen";
import { useSelector } from "react-redux";

const Drawer = createDrawerNavigator<TestDrawerParamList>();

export const TestDrawer: React.FunctionComponent = () => {
  const isFinished = useSelector((store) => store.currentTest.finished);
  const questions = useSelector((store) => store.currentTest.questions);
  const firstUnanswered = questions.findIndex((question) => !question.selected);
  return (
    <Drawer.Navigator
      initialRouteName={isFinished ? "Results" : "Question"}
      drawerContent={(props) => <TestNavigationDrawer {...props} />}
    >
      <Drawer.Screen
        options={{ swipeEnabled: true }}
        name="Question"
        component={TestQuestionScreen}
        initialParams={{
          questionIndex:
            firstUnanswered > -1 ? firstUnanswered : questions.length - 1,
        }}
      />
      <Drawer.Screen
        options={{ swipeEnabled: false }}
        name="Results"
        component={TestResultsScreen}
      />
    </Drawer.Navigator>
  );
};
