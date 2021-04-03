import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TopNavigation from "components/TopNavigation";
import HomeScreen from "screens/HomeScreen";

export type RootStackParamList = {
  Home: undefined;
  Test: undefined;
  TestMaker: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const RootStack: React.FunctionComponent<{}> = () => (
  <Stack.Navigator
    screenOptions={{
      header: (props) => <TopNavigation {...props} />,
    }}
  >
    <Stack.Screen name="Home" component={HomeScreen} />
  </Stack.Navigator>
);

export default RootStack;
