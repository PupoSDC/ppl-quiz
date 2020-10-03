import React, { FunctionComponent } from "react";
import { Provider } from "react-redux";
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
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={<h1>Loading!!!</h1>}>
          <NativeRouter>
            <Route exact path={HOME} component={QuestionnaireConfiguration} />
            <Route exact path={QUESTIONNAIRE} component={Questionnaire} />
          </NativeRouter>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
};

registerRootComponent(App);

export default App;
