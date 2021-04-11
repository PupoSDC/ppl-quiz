import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import { Layout, Text } from "@ui-kitten/components";
import { AnswerId } from "types/questionBank";
import { TestStackScreenProps } from "types/navigation";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentTestAnswer,
  setCurrentTestFinished,
} from "constants/actions";
import { TestCompletedModal } from "./common/TestCompletedModal";
import { EvaStatus } from "@ui-kitten/components/devsupport";
import { LeftAndRightFlingGestureHandler } from "components/LeftAndRightFlingGestureHandler";
import { ImageSource } from "react-native-image-viewing/dist/@types";
import { ImageView } from "components/ImageView";
import { ActivityIndicator } from "components/ActivityIndicator";
import { Button } from "components/Button";

export type QuestionScreenProps = TestStackScreenProps<"Question">;

export const TestQuestionScreen: React.FunctionComponent<QuestionScreenProps> = ({
  route,
  navigation: { navigate },
}) => {
  const dispatch = useDispatch();
  const [pressedId, setPressedId] = useState("");
  const [imageIsOpen, setImageIsOpen] = useState(false);
  const questions = useSelector((store) => store.currentTest.questions);
  const finished = useSelector((store) => store.currentTest.finished);
  const question = questions[route.params.questionIndex];
  const allQuestionsAnswered = !questions.find(({ selected }) => !selected);

  if (!question) {
    return <ActivityIndicator />;
  }

  const {
    id: questionId,
    answers,
    selected,
    correct,
    index,
    image,
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
    if (!finished) {
      dispatch(setCurrentTestFinished({ questions }));
    }
    navigate("Results");
  };

  const getStatus = (answerId: AnswerId, pressed: boolean): EvaStatus => {
    if (!finished && (selected === answerId || pressed)) {
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
    <LeftAndRightFlingGestureHandler
      onFlingLeft={goToNextQuestion}
      onFlingRight={goToPreviousQuestion}
      style={styles.container}
    >
      <TestCompletedModal onTestFinished={finishTest} />
      <Layout style={styles.questionContainer}>
        <Text category="h6" children={`${index + 1}) ${questionText}`} />
      </Layout>
      <Layout style={styles.imageContainer}>
        {image && (
          <TouchableOpacity onPress={() => setImageIsOpen(true)}>
            <Image
              style={{ width: 350, height: 200 }}
              source={image}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </Layout>
      <Layout style={styles.answersContainer}>
        {answers.map(({ answer, id: answerId }) => (
          <Button
            key={answerId}
            style={styles.answer}
            appearance="outline"
            status={getStatus(answerId, pressedId === answerId)}
            onPress={() => {
              dispatch(setCurrentTestAnswer({ questionId, answerId }));
              goToNextQuestion();
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
      {image && (
        <ImageView
          images={[image as ImageSource]}
          imageIndex={0}
          visible={imageIsOpen}
          onRequestClose={() => setImageIsOpen(false)}
        />
      )}
    </LeftAndRightFlingGestureHandler>
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
  imageContainer: {
    alignItems: "center",
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
