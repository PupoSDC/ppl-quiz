import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { TopNavigation } from "screens/common/TopNavigation";
import { HomeScreen } from "screens/HomeScreen";
import { TestMakerScreen } from "screens/TestMakerScreen";
import { TestDrawer } from "./TestDrawer";
import { RootStackParamList } from "types/navigation";
import { TestHistoryScreen } from "screens/TestHistoryScreen";
import { TestStatisticsScreen } from "screens/TestStatisticsScreen";
import { useDispatch, useSelector } from "react-redux";
import { setQuestionBanks } from "constants/actions";
import questionBlocks from "assets/questions";
import { SafeAreaView } from "react-native-safe-area-context";

const Stack = createStackNavigator<RootStackParamList>();

export const RootStack: React.FunctionComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Initialize the question bank. In the future this should
    // come from an API
    dispatch(setQuestionBanks({ questionBlocks }));
  }, [dispatch]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Navigator
        headerMode="screen"
        screenOptions={{
          header: () => <TopNavigation />,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="TestMaker" component={TestMakerScreen} />
        <Stack.Screen name="TestHistory" component={TestHistoryScreen} />
        <Stack.Screen name="TestStatistics" component={TestStatisticsScreen} />
        <Stack.Screen
          name="Test"
          component={TestDrawer}
          options={{
            gestureEnabled: false,
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
};
