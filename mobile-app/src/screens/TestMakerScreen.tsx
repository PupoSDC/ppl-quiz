import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Button, List, Layout, useTheme } from "@ui-kitten/components";
import { ListItem } from "@ui-kitten/components";
import { useDispatch } from "react-redux";
import { startNewTest } from "constants/actions";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "navigation/RootStack";
import useQuestionBank from "hooks/useQuestionBank";
import SliderWithInput from "components/SliderWithInput";

const TestMakerScreen: React.FunctionComponent<
  StackScreenProps<RootStackParamList>
> = ({ navigation }) => {
  const theme = useTheme();
  const [
    questionBank,
    { updateQuestionBankEntry, createNewTest },
  ] = useQuestionBank();
  const { navigate } = navigation;
  const dispatch = useDispatch();
  const data = Object.values(questionBank);
  const [numberOfQuestions, setNumberOfQuestions] = useState(20);

  const onTestSelected = async (questionBankId: string) => {
    await updateQuestionBankEntry(questionBankId);
    const test = await createNewTest({ questionBankId, numberOfQuestions });
    dispatch(startNewTest(test));
    navigate("Test");
  };

  return (
    <Layout style={styles.container}>
      <List
        style={styles.section}
        data={data}
        renderItem={({ item: { id, name, numberOfQuestions } }) => (
          <ListItem
            key={id}
            title={name}
            description={`total questions: ${numberOfQuestions}`}
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
      <SliderWithInput
        style={styles.section}
        value={numberOfQuestions}
        onValueChange={setNumberOfQuestions}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
  },
  section: {
    marginVertical: 30,
    marginHorizontal: 5,
    margin: "auto",
  },
});

export default TestMakerScreen;
