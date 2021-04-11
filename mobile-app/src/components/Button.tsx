import {
  Button as UiKittenButton,
  ButtonProps as UiKittenButtonProps,
} from "@ui-kitten/components";
import React, { forwardRef, useCallback } from "react";
import { heavyFeedback, mediumFeedback } from "utils/haptics";

export type ButtonProps = UiKittenButtonProps & {
  feedback?: "heavy" | "medium" | "none";
};

export const Button = forwardRef<UiKittenButton, ButtonProps>(
  ({ onPressIn, feedback = "medium", ...props }, ref) => {
    const newOnPressIn = useCallback(
      (e) => {
        switch (feedback) {
          case "heavy":
            heavyFeedback();
          case "medium":
            mediumFeedback();
        }
        onPressIn?.(e);
      },
      [onPressIn]
    );

    return <UiKittenButton {...props} onPressIn={newOnPressIn} ref={ref} />;
  }
);
