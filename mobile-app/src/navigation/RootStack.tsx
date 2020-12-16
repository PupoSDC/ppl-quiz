import React from "React";
import { createStackNavigator } from "@react-navigation/stack";
import TopNavigation from "components/TopNavigation";
import HomeScreen from "screens/HomeScreen";
import TestMakerScreen from "screens/TestMakerScreen";
import TestStack from "navigation/TestStack";

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
    <Stack.Screen name="Test" component={TestStack} />
    <Stack.Screen name="TestMaker" component={TestMakerScreen} />
  </Stack.Navigator>
);

export default RootStack;
