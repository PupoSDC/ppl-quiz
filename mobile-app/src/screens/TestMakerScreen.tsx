import React, { FunctionComponent, useCallback, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { SliderWithInput } from "components/SliderWithInput";
import { RootStackScreenProps } from "types/navigation";
import { makeTest } from "utils/makeTest";
import { setCurrentTest } from "constants/actions";
import { QuestionBlock } from "types/questionBank";

export type TestMakerScreenProps = RootStackScreenProps<"Home">;

type TestBlockListItem = {
  id: string;
  totalNumberOfQuestions: number;
  selected: boolean;
  title: string;
  selectTestBlock: (id: string) => void;
};

const TestBlockListItem = React.memo<TestBlockListItem>(
  ({ id, totalNumberOfQuestions, selected, title, selectTestBlock }) => (
    <ListItem
      title={title}
      description={`total questions: ${totalNumberOfQuestions}`}
      accessoryRight={() => (
        <CheckBox checked={selected} onChange={() => selectTestBlock(id)} />
      )}
      onPress={() => selectTestBlock(id)}
    />
  )
);

export const TestMakerScreen: FunctionComponent<TestMakerScreenProps> = ({
  navigation: { replace },
}) => {
  const dispatch = useDispatch();
  const questionBank = useSelector((store) =>
    Object.values(store.questionBank)
  );
  const [numberOfQuestions, setNumberOfQuestions] = useState(20);
  const [selectedBlocks, setSelectedBlocks] = useState<Record<string, boolean>>(
    {}
  );

  const selectTestBlock = useCallback(
    (blockId: string) => {
      setSelectedBlocks((blocks) => ({
        ...blocks,
        [blockId]: blocks[blockId] ? false : true,
      }));
    },
    [setSelectedBlocks]
  );

  const startTest = () => {
    const questions = makeTest({
      questionBanks: questionBank.filter(({ id }) => selectedBlocks[id]),
      numberOfQuestions,
    });
    if (questions.length) {
      dispatch(setCurrentTest({ questions }));
      replace("Test");
    }
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

      <List
        style={styles.section}
        data={questionBank}
        renderItem={({ item }: { item: QuestionBlock }) => (
          <TestBlockListItem
            key={item.id}
            id={item.id}
            totalNumberOfQuestions={item.questions.length}
            selected={selectedBlocks[item.id]}
            title={item.name}
            selectTestBlock={selectTestBlock}
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
