import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TestNavigationScreen from "screens/TestNavigationScreen";
import TestQuestionScreen from "screens/TestQuestionScreen";
import { RootStackScreenProps, TestStackParamList } from "types/navigation";

const Drawer = createDrawerNavigator<TestStackParamList>();

const TestDrawer: React.FunctionComponent<RootStackScreenProps<"Test">> = ({
  route,
}) => {
  return (
    <Drawer.Navigator
      initialRouteName={"Question"}
      drawerContent={(props) => (
        <TestNavigationScreen {...props} {...route.params} />
      )}
    >
      <Drawer.Screen
        options={{ swipeEnabled: true }}
        name="Question"
        component={TestQuestionScreen}
        initialParams={route.params.questions[0]}
      />
    </Drawer.Navigator>
  );
};

export default TestDrawer;
