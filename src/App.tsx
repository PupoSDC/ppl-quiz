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
import RootStack from "navigation/RootStack";

const App: FunctionComponent<{}> = () => {
  return (
    <NavigationContainer>
      <IconRegistry icons={EvaIconsPack} />
      <StatusBar backgroundColor="blue" hidden={true} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <Provider store={store}>
          <PersistGate persistor={persistor} loading={<Spinner />}>
            <Suspense fallback={<Spinner />}>
              <RootStack />
            </Suspense>
          </PersistGate>
        </Provider>
      </ApplicationProvider>
    </NavigationContainer>
  );
};

export default App;
