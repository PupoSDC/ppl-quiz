import React from "react";
import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
import { ApolloProvider } from "@apollo/client";
import graphql from "services/graphql";
import TestMakerScreen from "screens/TestMakerScreen";

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <ApolloProvider client={graphql}>
        <TestMakerScreen />
      </ApolloProvider>
    </ApplicationProvider>
  );
}
