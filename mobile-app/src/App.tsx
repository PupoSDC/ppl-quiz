import "react-native-gesture-handler";
import { registerRootComponent } from "expo";
import React, { FunctionComponent, Suspense } from "react";
import * as eva from "@eva-design/eva";
import {
  ApplicationProvider,
  IconRegistry,
  Spinner,
} from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { StatusBar } from "react-native";
import { PersistGate } from "redux-persist/integration/react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store, persistor } from "store";
import { RootStack } from "navigation/RootStack";
import { SafeAreaView } from "react-native-safe-area-context";
import { setQuestionBanks } from "constants/actions";
import questionBlocks from "assets/questions";

store.dispatch(setQuestionBanks({ questionBlocks }));

StatusBar.setBarStyle("dark-content", true);

const App: FunctionComponent = () => (
  <NavigationContainer>
    <IconRegistry icons={EvaIconsPack} />
    <SafeAreaView style={{ flex: 1 }}>
      <ApplicationProvider {...eva} theme={eva.light}>
        <Provider store={store}>
          <PersistGate persistor={persistor} loading={<Spinner />}>
            <Suspense fallback={<Spinner />}>
              <RootStack />
            </Suspense>
          </PersistGate>
        </Provider>
      </ApplicationProvider>
    </SafeAreaView>
  </NavigationContainer>
);

registerRootComponent(App);
