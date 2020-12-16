import React, { Suspense } from "react";
import * as eva from "@eva-design/eva";
import {
  ApplicationProvider,
  IconRegistry,
  Spinner,
} from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { ApolloProvider } from "@apollo/client";
import { StatusBar } from "react-native";
import { PersistGate } from "redux-persist/integration/react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store, persistor } from "reducers";
import graphql from "services/graphql";
import RootStack from "navigation/RootStack";

export default function App() {
  return (
    <NavigationContainer>
      <IconRegistry icons={EvaIconsPack} />
      <StatusBar backgroundColor="blue" hidden={true} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <ApolloProvider client={graphql}>
          <Provider store={store}>
            <PersistGate persistor={persistor} loading={<Spinner />}>
              <Suspense fallback={<Spinner />}>
                <RootStack />
              </Suspense>
            </PersistGate>
          </Provider>
        </ApolloProvider>
      </ApplicationProvider>
    </NavigationContainer>
  );
}
