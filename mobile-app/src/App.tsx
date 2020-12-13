import React, { Suspense } from "react";
import * as eva from "@eva-design/eva";
import {
  ApplicationProvider,
  Divider,
  IconRegistry,
  Spinner,
} from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { ApolloProvider } from "@apollo/client";
import { StatusBar } from "react-native";
import { NativeRouter, Route } from "react-router-native";
import { PersistGate } from "redux-persist/integration/react";
import {
  ROUTE_HOME,
  ROUTE_QUESTIONNAIRE,
  ROUTE_TEST_MAKER,
} from "constants/routes";
import { Provider } from "react-redux";
import graphql from "services/graphql";
import TestMakerScreen from "screens/TestMakerScreen";
import HomeScreen from "screens/HomeScreen";
import TopNavigation from "components/TopNavigation";
import store, { persistor } from "./store";
import QuestionScreen from "screens/QuestionScreen";

export default function App() {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <StatusBar backgroundColor="blue" hidden={true} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <ApolloProvider client={graphql}>
          <Provider store={store}>
            <PersistGate persistor={persistor} loading={<Spinner />}>
              <TopNavigation />
              <Divider />
              <Suspense fallback={<Spinner />}>
                <NativeRouter>
                  <Route exact path={ROUTE_HOME} component={HomeScreen} />
                  <Route path={ROUTE_TEST_MAKER} component={TestMakerScreen} />
                  <Route
                    exact
                    path={ROUTE_QUESTIONNAIRE}
                    component={QuestionScreen}
                  />
                </NativeRouter>
              </Suspense>
            </PersistGate>
          </Provider>
        </ApolloProvider>
      </ApplicationProvider>
    </>
  );
}
