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

import { PersistGate } from "redux-persist/integration/react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ROUTE_HOME, ROUTE_TEST, ROUTE_TEST_MAKER } from "constants/routes";
import { Provider } from "react-redux";
import graphql from "services/graphql";
import TestMakerScreen from "screens/TestMakerScreen";
import HomeScreen from "screens/HomeScreen";
import TopNavigation from "components/TopNavigation";
import store, { persistor } from "./store";
import QuestionScreen from "screens/CurrentTestScreen";

const Stack = createStackNavigator();

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
                <Stack.Navigator
                  screenOptions={{
                    header: (props) => <TopNavigation {...props} />,
                  }}
                >
                  <Stack.Screen name={ROUTE_HOME} component={HomeScreen} />
                  <Stack.Screen
                    name={ROUTE_TEST_MAKER}
                    component={TestMakerScreen}
                  />
                  <Stack.Screen name={ROUTE_TEST} component={QuestionScreen} />
                </Stack.Navigator>
              </Suspense>
            </PersistGate>
          </Provider>
        </ApolloProvider>
      </ApplicationProvider>
    </NavigationContainer>
  );
}
