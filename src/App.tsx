import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import { registerRootComponent } from "expo";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import useCachedResources from "hooks/useCachedResources";
import useColorScheme from "hooks/useColorScheme";
import Questionnaire from "screens/Questionnaire";

const Stack = createStackNavigator();

const App: FunctionComponent<{}> = () => {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return <h1>Loading!!!</h1>;
  } else {
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Questionnaire"
              component={Questionnaire}
              options={{ title: "Questionnaire" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    );
  }
};

registerRootComponent(App);

export default App;
