import React, { FunctionComponent, useState } from "react";
import { StatusBar, StyleSheet } from "react-native";
import {
  Button,
  List,
  Layout,
  CheckBox,
  Select,
  SelectItem,
} from "@ui-kitten/components";
import { ListItem } from "@ui-kitten/components";
import { useDispatch, useSelector, useStore } from "react-redux";
import SliderWithInput from "components/SliderWithInput";
import { RootStackScreenProps } from "types/navigation";
import { makeTest } from "utils/makeTest";
import { setCurrentTest } from "constants/Actions";
import { QuestionBlock } from "types/questionBank";

export const TestMakerScreen: FunctionComponent<
  RootStackScreenProps<"Home">
> = ({ navigation: { navigate } }) => {
  const dispatch = useDispatch();
  const questionBank = useSelector((store) =>
    Object.values(store.questionBank)
  );
  const [numberOfQuestions, setNumberOfQuestions] = useState(20);
  const [selectedBlocks, setSelectedBlocks] = useState<Record<string, boolean>>(
    {}
  );

  const selectTestBlock = (blockId: string) => {
    setSelectedBlocks((blocks) => ({
      ...blocks,
      [blockId]: blocks[blockId] ? false : true,
    }));
  };

  const startTest = () => {
    const questions = makeTest({
      questionBanks: questionBank.filter(({ id }) => selectedBlocks[id]),
      numberOfQuestions,
    });
    dispatch(setCurrentTest({ questions }));
    navigate("Test");
  };

  return (
    <Layout style={styles.container}>
      <ListItem
        disabled
        style={styles.section}
        title={"Number of Questions: "}
        description={() => (
          <SliderWithInput
            style={styles.section}
            value={numberOfQuestions}
            onValueChange={setNumberOfQuestions}
          />
        )}
      />
      <ListItem
        disabled
        style={styles.section}
        title={"Questions to show: "}
        description={() => (
          <Select value="All">
            <SelectItem title="All" />
            <SelectItem title="Never seen before" />
            <SelectItem title="Never seen and wrong" />
            <SelectItem title="Wrong only" />
          </Select>
        )}
      />
      <List
        style={styles.section}
        data={questionBank}
        renderItem={({
          item: { id, name, questions },
        }: {
          item: QuestionBlock;
        }) => (
          <ListItem
            key={id}
            title={name}
            description={`total questions: ${questions.length}`}
            accessoryRight={() => (
              <CheckBox
                checked={selectedBlocks[id]}
                onChange={() => selectTestBlock(id)}
              />
            )}
            onPress={() => selectTestBlock(id)}
          />
        )}
      />
      <ListItem
        disabled
        style={styles.section}
        description={() => <Button onPress={startTest} children={"Start"} />}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    display: "flex",
    flex: 1,
    marginBottom: 0,
  },
  section: {
    marginVertical: 10,
    marginHorizontal: 5,
    margin: "auto",
  },
  control: {
    display: "flex",
  },
});
