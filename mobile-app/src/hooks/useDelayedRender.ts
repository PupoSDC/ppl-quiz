import { useState } from "react";
import { InteractionManager } from "react-native";

export const useDelayedRender = () => {
  const [isReady, setIsReady] = useState(false);

  InteractionManager.runAfterInteractions(() => {
    setIsReady(true);
  });

  return { isReady };
};
