import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { TestNavigationDrawer } from "screens/TestNavigationDrawer";
import { TestQuestionScreen } from "screens/TestQuestionScreen";
import { TestDrawerParamList } from "types/navigation";

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
    </Drawer.Navigator>
  );
};
