import { Icon, useTheme } from "@ui-kitten/components";
import React, { FunctionComponent } from "react";
import { ImageProps } from "react-native";

export type QuestionStateIconProps = {
  finished?: boolean;
  correct?: unknown;
  selected?: unknown;
} & Partial<ImageProps>;

export const QuestionStateIcon: FunctionComponent<QuestionStateIconProps> = ({
  finished,
  correct,
  selected,
  ...props
}) => {
  const theme = useTheme();

  const iconName = (() => {
    if (!finished && selected) {
      return "checkmark-outline";
    }
    if (finished && correct === selected) {
      return "checkmark-outline";
    }
    if (finished && correct !== selected) {
      return "close-outline";
    }
    return "minus-outline";
  })();

  const iconFill = (() => {
    if (!finished && selected) {
      return theme["color-info-default"];
    }
    if (finished && correct === selected) {
      return theme["color-success-default"];
    }
    if (finished && correct !== selected) {
      return theme["color-danger-default"];
    }
    return theme["color-basic-default"];
  })();

  return <Icon {...props} fill={iconFill} name={iconName} />;
};
