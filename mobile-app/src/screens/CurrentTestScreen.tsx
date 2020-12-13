import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import useCurrentTest from "hooks/useCurrentTest";
import QuestionScreen from "./QuestionScreen";
import DrawerNavigation from "components/DrawerNavigation";

const Drawer = createDrawerNavigator();

const CurrentTestScreen = () => {
  const { questions } = useCurrentTest();
  return (
    <Drawer.Navigator drawerContent={DrawerNavigation}>
      {questions.map((q, i) => (
        <Drawer.Screen
          key={i}
          name={`Question ${i + 1}`}
          children={(props) => (
            <QuestionScreen
              {...props}
              question={q}
              index={i}
              next={i < questions.length && `Question ${i + 2}`}
            />
          )}
        />
      ))}
    </Drawer.Navigator>
  );
};

export default CurrentTestScreen;
