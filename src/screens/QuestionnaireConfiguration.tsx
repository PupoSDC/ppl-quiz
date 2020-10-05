import React, { FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Text, View } from "native-base";
import { useHistory } from "react-router-native";
import { QUESTIONNAIRE } from "constants/Routes";
import { createQuestionnaire } from "constants/Actions";
import { Question } from "types/Questionnaire";
import { QuestionsHeatMap } from "types/Statistics";
import questionBanks from "assets/questions";
import {
  shuffleAnswers,
  shuffleQuestions,
  ShuffleMode,
} from "utils/questionnaireShufle";
import useProgressStatistics from "hooks/useProgressStatistics";

const getQuestionnaire = (
  questions: Question[],
  statistics: QuestionsHeatMap
) =>
  shuffleQuestions(questions, statistics, ShuffleMode.BIASED_ALL)
    .slice(0, 12)
    .map(({ answers, ...question }) => ({
      answers: shuffleAnswers(answers),
      ...question,
    }));

const QuestionnaireContainer: FunctionComponent<{}> = () => {
  const dispatch = useDispatch();
  const { push } = useHistory();
  const questionsHeatMap = useSelector((state) => state.statistics.questions);
  const progressStatistics = useProgressStatistics();

  const goToTest = () => {
    push(QUESTIONNAIRE);
  };

  const onTestSelected = (moduleQuestions: Question[]) => {
    const questions = getQuestionnaire(moduleQuestions, questionsHeatMap);
    dispatch(createQuestionnaire({ questions }));
    goToTest();
  };

  return (
    <View>
      {questionBanks.map(({ name, id, questions }) => (
        <Button onPress={() => onTestSelected(questions)} key={id}>
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
