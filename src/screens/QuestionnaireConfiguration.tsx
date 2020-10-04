import React, { FunctionComponent } from "react";
import { useDispatch } from "react-redux";
import { Button, Text, View } from "native-base";
import questions from "assets/questions";
import { useHistory } from "react-router-native";
import { QUESTIONNAIRE } from "constants/Routes";
import { createQuestionnaire } from "constants/Actions";
import { Question } from "types/Questionnaire";
import { shuffleAnswers, shuffleQuestions } from "utils/questionnaireShufle";

const questionBanks = Object.entries(questions);

const getQuestionnaire = (questions: Question[]) =>
  shuffleQuestions(questions)
    .slice(0, 24)
    .map(({ answers, ...question }) => ({
      answers: shuffleAnswers(answers),
      ...question,
    }));

const QuestionnaireContainer: FunctionComponent<{}> = () => {
  const dispatch = useDispatch();
  const { push } = useHistory();

  const goToTest = () => {
    push(QUESTIONNAIRE);
  };

  const onTestSelected = (moduleQuestions: Question[]) => {
    const questions = getQuestionnaire(moduleQuestions);
    dispatch(createQuestionnaire({ questions }));
    goToTest();
  };

  return (
    <View>
      {questionBanks.map(([name, questions]) => (
        <Button onPress={() => onTestSelected(questions)} key={name}>
          <Text>{name}</Text>
        </Button>
      ))}
      <Button onPress={() => goToTest()} key={name}>
        <Text>Continue test</Text>
      </Button>
    </View>
  );
};

export default QuestionnaireContainer;
