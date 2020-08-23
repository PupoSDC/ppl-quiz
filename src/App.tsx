import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import { registerRootComponent } from "expo";
import { useFonts } from "expo-font";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Questionnaire from "screens/Questionnaire";

const Stack = createStackNavigator();

const App: FunctionComponent<{}> = () => {
  const [loaded, error] = useFonts({
    Roboto: require("native-base/Fonts/Roboto.ttf"),
    Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    ...Ionicons.font,
  });

  if (!loaded) {
    return <h1>Loading!!!</h1>;
  }

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
};

registerRootComponent(App);

export default App;
