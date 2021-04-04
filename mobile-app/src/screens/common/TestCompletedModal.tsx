import React, { FunctionComponent, useEffect, useState } from "react";
import { Text, StyleSheet } from "react-native";
import { Button, Card, Modal } from "@ui-kitten/components";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentTestFinished } from "constants/Actions";

export const TestCompletedModal: FunctionComponent = () => {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [hasShownModal, setHasShownModal] = useState(false);
  const questions = useSelector((store) => store.currentTest.questions);

  useEffect(() => {
    const allQuestionsAnsweres = !questions.find(({ selected }) => !selected);
    if (allQuestionsAnsweres && !hasShownModal) {
      setHasShownModal(true);
      setModalVisible(true);
    }
  }, [questions, hasShownModal]);

  const finishTest = () => {
    dispatch(setCurrentTestFinished());
    setModalVisible(false);
  };

  return (
    <Modal
      visible={modalVisible}
      backdropStyle={styles.backdrop}
      onBackdropPress={() => setModalVisible(false)}
    >
      <Card disabled={true}>
        <Text>You have now answered all questions!</Text>
        <Button onPress={finishTest} style={styles.button}>
          Finish Test
        </Button>
        <Button onPress={() => setModalVisible(false)} style={styles.button}>
          Resume Test
        </Button>
      </Card>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 192,
  },
  button: {
    marginTop: 10,
  },
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});
