import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { StatusBar, StyleSheet, Text } from "react-native";
import {
  Button,
  List,
  Layout,
  CheckBox,
  Select,
  SelectItem,
  IndexPath,
  Spinner,
} from "@ui-kitten/components";
import { ListItem } from "@ui-kitten/components";
import { useDispatch, useSelector } from "react-redux";
import { SliderWithInput } from "components/SliderWithInput";
import { RootStackScreenProps } from "types/navigation";
import { filterQuestionBanks, makeTest, QuestionFilter } from "utils/makeTest";
import { setCurrentTest } from "constants/actions";
import { QuestionBlock } from "types/questionBank";
import { useDelayedRender } from "hooks/useDelayedRender";
import { ActivityIndicator } from "components/ActivityIndicator";

export type TestMakerScreenProps = RootStackScreenProps<"Home">;

type TestBlockListItem = {
  id: string;
  totalNumberOfQuestions: number;
  selected: boolean;
  title: string;
  selectTestBlock: (id: string) => void;
};

type SelectedBanksMap = Record<string, boolean>;

const TestBlockListItem = React.memo<TestBlockListItem>(
  ({ id, totalNumberOfQuestions, selected, title, selectTestBlock }) => {
    const disabled = totalNumberOfQuestions === 0;
    return (
      <ListItem
        title={title}
        description={`total questions: ${totalNumberOfQuestions}`}
        accessoryRight={() => (
          <CheckBox
            checked={selected}
            disabled={disabled}
            onChange={() => selectTestBlock(id)}
          />
        )}
        onPress={() => selectTestBlock(id)}
        disabled={disabled}
      />
    );
  }
);

const selectOptions: Array<[QuestionFilter, string]> = [
  ["ALL", "All"],
  ["WRONG_ONLY", "Wrong only"],
  ["NEVER_SEEN_AND_WRONG", "Never seen and wrong"],
];

export const TestMakerScreen: FunctionComponent<TestMakerScreenProps> = ({
  navigation: { replace },
}) => {
  const { isReady } = useDelayedRender();
  const dispatch = useDispatch();
  const questionsHeatMap = useSelector((store) => store.statistics.questions);
  const questionBanks = useSelector(({ questionBank }) =>
    Object.values(questionBank)
  );
  const [numberOfQuestions, setNumberOfQuestions] = useState(20);
  const [questionFilterIndex, setQuestionFilterIndex] = useState(
    new IndexPath(0)
  );
  const [selectedBlocks, setSelectedBlocks] = useState<SelectedBanksMap>({});
  const [questionFilter] = selectOptions[questionFilterIndex.row];
  const selectedTestBanks = questionBanks.filter(
    ({ id }) => selectedBlocks[id]
  );

  const disableStartButton =
    selectedTestBanks.length === 0 || numberOfQuestions === 0;

  const filteredQuestionBanks = useMemo(
    () =>
      filterQuestionBanks({
        questionBanks,
        questionsHeatMap,
        questionFilter,
      }),
    [questionBanks, questionsHeatMap, questionFilter]
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
      questionBanks: selectedTestBanks,
      questionsHeatMap,
      numberOfQuestions,
      questionFilter: selectOptions[questionFilterIndex.row][0],
    });
    if (questions.length) {
      dispatch(setCurrentTest({ questions }));
      replace("Test");
    }
  };

  if (!isReady) {
    return <ActivityIndicator />;
  }

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
        title={"Mode "}
        description={() => (
          <Select
            selectedIndex={questionFilterIndex}
            multiSelect={false}
            value={selectOptions[questionFilterIndex.row][1]}
            onSelect={(index) => {
              if (!Array.isArray(index)) setQuestionFilterIndex(index);
            }}
          >
            {selectOptions.map(([key, title]) => (
              <SelectItem title={title} key={key} />
            ))}
          </Select>
        )}
      />

      <List
        style={styles.section}
        data={filteredQuestionBanks}
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
        description={() => (
          <Button
            disabled={disableStartButton}
            onPress={startTest}
            children={"Start"}
          />
        )}
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
