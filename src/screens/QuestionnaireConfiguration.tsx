import React, { FunctionComponent } from "react";
import { useDispatch } from "react-redux";
import { Button, Text, View } from "native-base";
import questions from "assets/questions";
import { useHistory } from "react-router-native";
import { QUESTIONNAIRE } from "constants/Routes";
import { createQuestionnaire } from "constants/Actions";
import { Question } from "types/Questionnaire";
import shuffle from "utils/shuffle";

const questionBanks = Object.entries(questions);

const getQuestionnaire = (questions: Question[]) =>
  shuffle(questions)
    .slice(0, 24)
    .map(({ answers, ...question }) => ({
      answers: shuffle(answers),
      ...question,
    }));

const QuestionnaireContainer: FunctionComponent<{}> = () => {
  const dispatch = useDispatch();
  const { push } = useHistory();

  const onTestSelected = (moduleQuestions: Question[]) => {
    const questions = getQuestionnaire(moduleQuestions);
    dispatch(createQuestionnaire({ questions }));
    push(QUESTIONNAIRE);
  };

  return (
    <View>
      {questionBanks.map(([name, questions]) => (
        <Button onPress={() => onTestSelected(questions)}>
          <Text>{name}</Text>
        </Button>
      ))}
    </View>
  );
};

export default QuestionnaireContainer;
