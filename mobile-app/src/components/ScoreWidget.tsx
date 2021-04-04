import React from "react";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { useTheme, Text } from "@ui-kitten/components";

export type ScoreWidgetProps = {
  score?: number;
};

export const ScoreWidget = ({ score = 0 }) => {
  const theme = useTheme();
  const boundedScore = Math.min(Math.max(0, score), 100);
  const passed = boundedScore > 75;
  const color = passed
    ? theme["color-success-default"]
    : theme["color-danger-default"];

  return (
    <AnimatedCircularProgress
      size={80}
      width={5}
      fill={boundedScore}
      duration={1000}
      tintColor={color}
      backgroundColor={theme["background-basic-color-4"]}
    >
      {(fill) => (
        <Text category={"h6"} style={{ color }}>
          {Math.round(fill)}
        </Text>
      )}
    </AnimatedCircularProgress>
  );
};
