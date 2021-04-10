import "react-native-gesture-handler";
import { registerRootComponent } from "expo";
import React, { FunctionComponent, Suspense } from "react";
import * as eva from "@eva-design/eva";
import * as ScreenOrientation from "expo-screen-orientation";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { ActivityIndicator, StatusBar } from "react-native";
import { PersistGate } from "redux-persist/integration/react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store, persistor } from "store";
import { RootStack } from "navigation/RootStack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { enableScreens } from "react-native-screens";
import { disableLogs } from "utils/disableLogs";

enableScreens();
StatusBar.setBarStyle("dark-content", true);
ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);

if (!__DEV__) {
  disableLogs();
}

const App: FunctionComponent = () => {
  return (
    <SafeAreaProvider>
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          <IconRegistry icons={EvaIconsPack} />
          <Provider store={store}>
            <PersistGate persistor={persistor} loading={<ActivityIndicator />}>
              <Suspense fallback={<ActivityIndicator />}>
                <RootStack />
              </Suspense>
            </PersistGate>
          </Provider>
        </NavigationContainer>
      </ApplicationProvider>
    </SafeAreaProvider>
  );
};

registerRootComponent(App);
