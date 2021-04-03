import React, { useState } from "react";
import { StatusBar, StyleSheet } from "react-native";
import {
  Button,
  List,
  Layout,
  useTheme,
  CheckBox,
  Select,
  SelectItem,
} from "@ui-kitten/components";
import { ListItem } from "@ui-kitten/components";
import { useDispatch } from "react-redux";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "navigation/RootStack";
import SliderWithInput from "components/SliderWithInput";
import questionBank from "assets/questions";
import { TestMode } from "types/test";
import perfectShuffle from "utils/questionnaireShufle/perfectShuffle";

const TEMP_TEST = perfectShuffle(questionBank[0].questions)
  .slice(0, 20)
  .map((q, index) => ({ ...q, index, selected: undefined }));

const TestMakerScreen: React.FunctionComponent<
  StackScreenProps<RootStackParamList>
> = ({ navigation }) => {
  const { navigate } = navigation;
  const data = Object.values(questionBank);
  const [numberOfQuestions, setNumberOfQuestions] = useState(20);

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
        data={data}
        renderItem={({ item: { id, name, questions } }) => (
          <ListItem
            key={id}
            title={name}
            description={`total questions: ${questions.length}`}
            accessoryRight={() => (
              <CheckBox checked={false} onChange={(nextChecked) => {}} />
            )}
          />
        )}
      />
      <ListItem
        disabled
        style={styles.section}
        description={() => (
          <Button
            onPress={() =>
              navigate("Test", {
                questions: TEMP_TEST,
                currentQuestion: TEMP_TEST[0].id,
              })
            }
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

export default TestMakerScreen;
