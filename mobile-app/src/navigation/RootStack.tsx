import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { TopNavigation } from "screens/common/TopNavigation";
import { HomeScreen } from "screens/HomeScreen";
import { TestMakerScreen } from "screens/TestMakerScreen";
import { TestDrawer } from "./TestDrawer";
import { RootStackParamList } from "types/navigation";
import { TestHistoryScreen } from "screens/TestHistoryScreen";

const Stack = createStackNavigator<RootStackParamList>();

export const RootStack: React.FunctionComponent = () => (
  <Stack.Navigator
    screenOptions={{
      header: (props) => <TopNavigation {...props} />,
    }}
  >
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="TestMaker" component={TestMakerScreen} />
    <Stack.Screen name="TestHistory" component={TestHistoryScreen} />
    <Stack.Screen
      name="Test"
      component={TestDrawer}
      options={{ gestureEnabled: false }}
    />
  </Stack.Navigator>
);
