import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { TestNavigationDrawer } from "screens/common/TestNavigationDrawer";
import { TestQuestionScreen } from "screens/TestQuestionScreen";
import { TestDrawerParamList } from "types/navigation";
import { TestResultsScreen } from "screens/TestResultsScreen";

const Drawer = createDrawerNavigator<TestDrawerParamList>();

export const TestDrawer: React.FunctionComponent = () => {
  return (
    <Drawer.Navigator
      initialRouteName={"Question"}
      drawerContent={(props) => <TestNavigationDrawer {...props} />}
    >
      <Drawer.Screen
        options={{ swipeEnabled: true }}
        name="Question"
        component={TestQuestionScreen}
        initialParams={{
          questionIndex: 0,
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
