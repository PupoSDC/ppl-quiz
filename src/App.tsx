import React, { FunctionComponent } from "react";
import { Provider } from "react-redux";
import { Provider as PaperProvider } from "react-native-paper";
import { registerRootComponent } from "expo";
import { useFonts } from "expo-font";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { NativeRouter, Route } from "react-router-native";
import { PersistGate } from "redux-persist/integration/react";
import Questionnaire from "screens/Questionnaire";
import QuestionnaireConfiguration from "screens/QuestionnaireConfiguration";
import { HOME, QUESTIONNAIRE } from "constants/Routes";
import store, { persistor } from "./store";

const App: FunctionComponent<{}> = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={<h1>Loading!!!</h1>}>
          <PaperProvider>
            <NativeRouter>
              <Route exact path={HOME} component={QuestionnaireConfiguration} />
              <Route exact path={QUESTIONNAIRE} component={Questionnaire} />
            </NativeRouter>
          </PaperProvider>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
};

registerRootComponent(App);

export default App;
