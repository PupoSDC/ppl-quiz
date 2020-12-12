import React, { useState } from "react";
import { ListRenderItem, StyleSheet, View } from "react-native";
import { Button, List, Text } from "@ui-kitten/components";
import { useQuery, gql } from "@apollo/client";
import { ListItem } from "@ui-kitten/components";

interface Questionnaire {
  id: string;
  name: string;
  numberOfQuestions: number;
}

interface QuestionnaireData {
  questionnaires: Questionnaire[];
}

const GET_QUESTIONNAIRES = gql`
  query getQuestionnaires {
    questionnaires {
      id
      name
      numberOfQuestions
    }
  }
`;

const SubjectButton: ListRenderItem<Questionnaire> = ({
  item: { id, name, numberOfQuestions, ...props },
}) => {
  console.log(id, name, numberOfQuestions, props);
  return (
    <ListItem
      key={id}
      title={name}
      description={`total questions: ${numberOfQuestions}`}
      accessoryRight={() => <Button size="small">Start</Button>}
    />
  );
};

const HelloWorld = () => {
  const { loading, error, data } = useQuery<QuestionnaireData>(
    GET_QUESTIONNAIRES
  );

  if (loading) return <Text>Loading...</Text>;
  if (error || !data) return <Text>Error :(</Text>;

  return (
    <View style={styles.container}>
      <List data={data.questionnaires} renderItem={SubjectButton} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});

export default HelloWorld;
