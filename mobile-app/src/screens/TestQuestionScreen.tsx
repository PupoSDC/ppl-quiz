import React from "react";
import { StyleSheet } from "react-native";
import { Button, Layout, Text } from "@ui-kitten/components";
import { AnswerId, Question } from "types/questionBank";
import {
  Directions,
  FlingGestureHandler,
  State,
} from "react-native-gesture-handler";
import { TRANSITION_DELAY } from "constants/Animations";
import { TestStackScreenProps } from "types/navigation";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentTestAnswer,
  setCurrentTestFinished,
} from "constants/Actions";
import { TestCompletedModal } from "./common/TestCompletedModal";
import { EvaStatus } from "@ui-kitten/components/devsupport";

export type QuestionScreenProps = TestStackScreenProps<"Question">;

export const TestQuestionScreen: React.FunctionComponent<QuestionScreenProps> = ({
  route,
  navigation: { navigate },
}) => {
  const dispatch = useDispatch();
  const questions = useSelector((store) => store.currentTest.questions);
  const finished = useSelector((store) => store.currentTest.finished);
  const question = questions[route.params.questionIndex];
  const allQuestionsAnswered = !questions.find(({ selected }) => !selected);

  if (!question) {
    return <></>;
  }

  const {
    id: questionId,
    answers,
    selected,
    correct,
    index,
    question: questionText,
  } = question;

  const goToNextQuestion = () => {
    const questionIndex = Math.min(index + 1, questions.length - 1);
    navigate("Question", { questionIndex });
  };

  const goToPreviousQuestion = () => {
    const questionIndex = Math.max(index - 1, 0);
    navigate("Question", { questionIndex });
  };

  const finishTest = () => {
    dispatch(setCurrentTestFinished());
    navigate("Results");
  };

  const getStatus = (answerId: AnswerId): EvaStatus => {
    if (!finished && selected === answerId) {
      return "info";
    }
    if (finished && correct === answerId) {
      return "success";
    }
    if (finished && selected === answerId) {
      return "danger";
    }

    return "basic";
  };

  return (
    <FlingGestureHandler
      direction={Directions.RIGHT}
      onHandlerStateChange={({ nativeEvent }) => {
        if (nativeEvent.state === State.END) {
          goToPreviousQuestion();
        }
      }}
    >
      <FlingGestureHandler
        direction={Directions.LEFT}
        onHandlerStateChange={({ nativeEvent }) => {
          if (nativeEvent.state === State.END) {
            goToNextQuestion();
          }
        }}
      >
        <Layout style={styles.container}>
          <TestCompletedModal onTestFinished={finishTest} />
          <Layout style={styles.questionContainer}>
            <Text category="h6" children={`${index + 1}) ${questionText}`} />
          </Layout>
          <Layout style={styles.answersContainer}>
            {answers.map(({ answer, id: answerId }) => (
              <Button
                key={answerId}
                style={styles.answer}
                appearance="outline"
                status={getStatus(answerId)}
                onPress={() => {
                  if (!finished) {
                    dispatch(setCurrentTestAnswer({ questionId, answerId }));
                  }
                  setTimeout(goToNextQuestion, TRANSITION_DELAY);
                }}
                children={answer}
              />
            ))}
          </Layout>
          <Layout style={styles.BottomContainer}>
            {allQuestionsAnswered && (
              <Button
                onPress={finishTest}
                children={finished ? "Go to Summary" : "Finish Test"}
              />
            )}
          </Layout>
        </Layout>
      </FlingGestureHandler>
    </FlingGestureHandler>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  questionContainer: {
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 10,
  },
  answersContainer: {
    flex: 20,
    marginHorizontal: 10,
  },
  answer: {
    margin: 5,
    marginBottom: 10,
  },
  BottomContainer: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 36,
    marginHorizontal: 20,
  },
  controlsContainer: {},
  controlButton: {},
});
