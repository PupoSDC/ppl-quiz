import React, { FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Text, ProgressBar } from "react-native-paper";
import { View } from "react-native";
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
import { GOOD } from "constants/Colors";

const getQuestionnaire = (
  questions: Question[],
  statistics: QuestionsHeatMap
) =>
  shuffleQuestions(questions, statistics, ShuffleMode.ALL)
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
      {questionBanks.map(({ name, id, questions }, index) => (
        <View key={id}>
          <Button mode="outlined" onPress={() => onTestSelected(questions)}>
            <Text>{name}</Text>
          </Button>
          <ProgressBar
            progress={
              progressStatistics[index].correctlyAnsweredQuestions /
              progressStatistics[index].totalQuestions
            }
            color={GOOD}
          />
        </View>
      ))}
      <Button mode="contained" onPress={() => goToTest()}>
        <Text>Continue test</Text>
      </Button>
    </View>
  );
};

export default QuestionnaireContainer;
