import React, { FunctionComponent } from "react";
import { Text, StyleSheet, StatusBar } from "react-native";
import { Button, Card, Modal } from "@ui-kitten/components";
import { useSelector } from "react-redux";

type TestCompletedModal = {
  modalVisible: boolean;
  setModalVisible: (newValue: boolean) => void;
  onAccepted: () => void;
};

export const ResetTestModal: FunctionComponent<TestCompletedModal> = ({
  modalVisible,
  setModalVisible,
  onAccepted,
}) => {
  const callbackOnAccepted = () => {
    setModalVisible(false);
    onAccepted();
  };

  return (
    <Modal
      visible={modalVisible}
      backdropStyle={styles.backdrop}
      onBackdropPress={() => setModalVisible(false)}
    >
      <Card disabled={true} style={styles.card}>
        <Text>
          This will delete all your test history and statistics! This operation
          can't be undone. Are you sure this is what you want?
        </Text>
        <Button onPress={callbackOnAccepted} style={styles.button}>
          Delete all progress
        </Button>
        <Button onPress={() => setModalVisible(false)} style={styles.button}>
          Take me back to safety
        </Button>
      </Card>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 192,
  },
  card: {
    marginHorizontal: 5,
  },
  button: {
    marginTop: 10,
  },
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});
