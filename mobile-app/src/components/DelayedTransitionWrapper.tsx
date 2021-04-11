import React, { FunctionComponent } from "react";
import { useDelayedRender } from "hooks/useDelayedRender";
import { ActivityIndicator } from "./ActivityIndicator";

export const DelayedTransitionWrapper: FunctionComponent = ({ children }) => {
  const { isReady } = useDelayedRender();
  return isReady ? <>{children}</> : <ActivityIndicator />;
};

export const withDelayedTransitionWrapper = <T extends unknown>(
  Component: React.FunctionComponent<T>
): React.FunctionComponent<T> => (props) => (
  <DelayedTransitionWrapper>
    <Component {...props} />
  </DelayedTransitionWrapper>
);
