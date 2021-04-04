import React from "react";
import { Layout, LayoutProps } from "@ui-kitten/components";
import {
  Directions,
  FlingGestureHandler,
  State,
} from "react-native-gesture-handler";

export type LeftAndRightFlingGestureHandlerProps = {
  onFlingLeft?: () => void;
  onFlingRight?: () => void;
} & LayoutProps;

export const LeftAndRightFlingGestureHandler: React.FunctionComponent<LeftAndRightFlingGestureHandlerProps> = ({
  onFlingLeft,
  onFlingRight,
  ...props
}) => {
  return (
    <FlingGestureHandler
      direction={Directions.RIGHT}
      onHandlerStateChange={({ nativeEvent }) => {
        if (nativeEvent.state === State.END) {
          onFlingRight?.();
        }
      }}
    >
      <FlingGestureHandler
        direction={Directions.LEFT}
        onHandlerStateChange={({ nativeEvent }) => {
          if (nativeEvent.state === State.END) {
            onFlingLeft?.();
          }
        }}
      >
        <Layout {...props} />
      </FlingGestureHandler>
    </FlingGestureHandler>
  );
};
