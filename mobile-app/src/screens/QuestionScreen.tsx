import React from "react";
import { StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { Question as QuestionProps } from "types/Questionnaire";
import {
  Button,
  Drawer,
  DrawerItem,
  Layout,
  Text,
} from "@ui-kitten/components";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { setTestAnswer } from "constants/actions";

type QuestionComponentProps = DrawerScreenProps<{}> & {
  question: QuestionProps;
  next?: string;
  index: number;
};

const Question: React.FunctionComponent<QuestionComponentProps> = ({
  navigation,
  question,
  index,
  next,
}) => {
  const dispatch = useDispatch();
  return (
    <Layout style={styles.container}>
      <Text style={styles.question}>
        {`${(index ?? 0) + 1}) ${question.question}`}
      </Text>
      {question.answers.map(({ answer, id }) => (
        <Button
          key={id}
          style={styles.answer}
          appearance="outline"
          status="basic"
          onPress={() => {
            dispatch(
              setTestAnswer({
                questionId: question.id,
                answerId: id,
              })
            );
            next && navigation.navigate(next);
          }}
          children={answer}
        />
      ))}
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {},
  question: {
    margin: 5,
    marginBottom: 20,
    fontWeight: "bold",
  },
  answer: {
    margin: 5,
    marginBottom: 10,
  },
  controlContainer: {
    borderRadius: 4,
    margin: 5,
    padding: 6,
    justifyContent: "center",
    backgroundColor: "#3366FF",
  },
});

export default Question;
