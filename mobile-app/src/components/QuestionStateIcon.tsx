import { Icon, useTheme } from "@ui-kitten/components";
import React, { FunctionComponent } from "react";
import { ImageProps } from "react-native";

export type QuestionStateIconProps = {
  correct?: unknown;
  selected?: unknown;
} & Partial<ImageProps>;

export const QuestionStateIcon: FunctionComponent<QuestionStateIconProps> = ({
  correct,
  selected,
  ...props
}) => {
  const theme = useTheme();
  const iconName =
    selected !== undefined
      ? correct === selected
        ? "checkmark-outline"
        : "close-outline"
      : "minus-outline";
  const iconFill =
    selected !== undefined
      ? correct === selected
        ? theme["color-success-default"]
        : theme["color-danger-default"]
      : theme["color-basic-default"];
  return <Icon {...props} fill={iconFill} name={iconName} />;
};
