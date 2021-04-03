import React, { useEffect, useState } from "react";
import { Text, StyleSheet } from "react-native";
import { Button, List, Layout, useTheme } from "@ui-kitten/components";
import { ListItem } from "@ui-kitten/components";
import { useDispatch } from "react-redux";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "navigation/RootStack";
import SliderWithInput from "components/SliderWithInput";
import questionBank from "assets/questions";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const TestMakerScreen: React.FunctionComponent<
  StackScreenProps<RootStackParamList>
> = ({ navigation }) => {
  const theme = useTheme();
  const [keyboardSize, setKeyboardSize] = useState(0);
  const { navigate } = navigation;
  const dispatch = useDispatch();
  const data = Object.values(questionBank);
  const [numberOfQuestions, setNumberOfQuestions] = useState(20);

  const onTestSelected = async (questionBankId: string) => {
    //await updateQuestionBankEntry(questionBankId);
    //const test = await createNewTest({ questionBankId, numberOfQuestions });
    // dispatch(startNewTest(test));
    navigate("Test");
  };

  return (
    <Layout style={[styles.container, { marginBottom: keyboardSize }]}>
      <ListItem
        disabled
        title={"Number of Questions: "}
        description={() => (
          <SliderWithInput
            style={styles.section}
            value={numberOfQuestions}
            onValueChange={setNumberOfQuestions}
          />
        )}
      />

      <List
        style={styles.section}
        data={data}
        renderItem={({ item: { id, name, questions } }) => (
          <ListItem
            disabled
            key={id}
            title={name}
            description={`total questions: ${questions.length}`}
            accessoryRight={() => (
              <Button
                size="small"
                onPress={() => onTestSelected(id)}
                children={"Start"}
              />
            )}
          />
        )}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    marginBottom: 0,
  },
  section: {
    marginVertical: 30,
    marginHorizontal: 5,
    margin: "auto",
  },
  control: {
    display: "flex",
  },
});

export default TestMakerScreen;
