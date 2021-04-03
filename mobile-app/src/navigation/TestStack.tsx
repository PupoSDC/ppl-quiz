import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

export type TestStackParameterList = {
  Question: {
    index: number;
  };
};

const Drawer = createDrawerNavigator<TestStackParameterList>();

const TestStack: React.FunctionComponent<{}> = () => {
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
