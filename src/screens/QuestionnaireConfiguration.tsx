import React, { FunctionComponent } from "react";
import { Button, Text, View } from "native-base";
import questions from "assets/questions";
import { useHistory } from "react-router-native";
import { QUESTIONNAIRE } from "constants/Routes";

const questionBanks = Object.entries(questions);

const QuestionnaireContainer: FunctionComponent<{}> = () => {
  const { push } = useHistory();

  return (
    <View>
      {questionBanks.map(([name]) => (
        <Button onPress={() => push(QUESTIONNAIRE)}>
          <Text>{name}</Text>
        </Button>
      ))}
    </View>
  );
};

export default QuestionnaireContainer;
