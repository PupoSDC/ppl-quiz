import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { TestNavigationDrawer } from "screens/common/TestNavigationDrawer";
import { TestQuestionScreen } from "screens/TestQuestionScreen";
import { TestDrawerParamList, TestStackScreenProps } from "types/navigation";
import { TestResultsScreen } from "screens/TestResultsScreen";
import { useSelector } from "react-redux";
import { TopNavigation } from "screens/common/TopNavigation";
import { TestNavigationMenu } from "screens/common/TestNavigationMenu";

const Drawer = createDrawerNavigator<TestDrawerParamList>();

export type TestDrawerProps = TestStackScreenProps<"Test">;

export const TestDrawer: React.FunctionComponent<TestDrawerProps> = ({
  navigation,
}) => {
  const isFinished = useSelector((store) => store.currentTest.finished);
  const questions = useSelector((store) => store.currentTest.questions);
  const firstUnanswered = questions.findIndex((question) => !question.selected);

  return (
    <Drawer.Navigator
      initialRouteName={isFinished ? "Results" : "Question"}
      drawerContent={(props) => <TestNavigationDrawer {...props} />}
      screenOptions={{
        headerShown: true,
        header: () => (
          <TopNavigation
            accessoryRight={() => (
              <TestNavigationMenu navigation={navigation} />
            )}
          />
        ),
      }}
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
