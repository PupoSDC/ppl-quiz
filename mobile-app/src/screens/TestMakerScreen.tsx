import React from "react";
import { StyleSheet } from "react-native";
import { Button, List, Layout } from "@ui-kitten/components";
import { ListItem } from "@ui-kitten/components";
import useQuestionBank from "hooks/useQuestionBank";
import { useDispatch } from "react-redux";
import { startNewTest } from "constants/actions";
import { StackScreenProps } from "@react-navigation/stack";
import { ROUTE_TEST } from "constants/routes";

const TestMakerScreen: React.FunctionComponent<StackScreenProps<{}>> = ({
  navigation,
}) => {
  const [
    questionBank,
    { updateQuestionBankEntry, createNewTest },
  ] = useQuestionBank();
  const { navigate } = navigation;
  const dispatch = useDispatch();
  const data = Object.values(questionBank);

  const onTestSelected = async (questionBankId: string) => {
    await updateQuestionBankEntry(questionBankId);
    const test = await createNewTest({ questionBankId, numberOfQuestions: 20 });
    dispatch(startNewTest(test));
    navigate(ROUTE_TEST);
  };

  return (
    <Layout style={styles.container}>
      <List
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
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});

export default TestMakerScreen;
