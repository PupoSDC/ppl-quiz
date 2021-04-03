import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TopNavigation from "components/TopNavigation";
import HomeScreen from "screens/HomeScreen";
import TestMakerScreen from "screens/TestMakerScreen";
import TestStack from "./TestDrawer";
import { RootStackParamList } from "types/navigation";

const Stack = createStackNavigator<RootStackParamList>();

const RootStack: React.FunctionComponent = () => (
  <Stack.Navigator
    screenOptions={{
      header: (props) => <TopNavigation {...props} />,
    }}
  >
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="TestMaker" component={TestMakerScreen} />
    <Stack.Screen name="Test" component={TestStack} />
    {/** <Stack.Screen name="TestOverview" component={TestOverviewScreen} /> **/}
  </Stack.Navigator>
);

export default RootStack;
