import React, { FunctionComponent } from "react";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { useTheme, Text } from "@ui-kitten/components";

export type ScoreWidgetProps = {
  score?: number;
  small?: boolean;
};

export const ScoreWidget: FunctionComponent<ScoreWidgetProps> = ({
  score = 0,
  small,
}) => {
  const theme = useTheme();
  const boundedScore = Math.min(Math.max(0, score), 100);
  const passed = boundedScore > 75;
  const color = passed
    ? theme["color-success-default"]
    : theme["color-danger-default"];

  return (
    <AnimatedCircularProgress
      size={small ? 40 : 80}
      width={5}
      fill={boundedScore}
      duration={1000}
      tintColor={color}
      backgroundColor={theme["background-basic-color-4"]}
    >
      {(fill) => (
        <Text category={small ? "p1" : "h6"} style={{ color }}>
          {Math.round(fill)}
        </Text>
      )}
    </AnimatedCircularProgress>
  );
};
