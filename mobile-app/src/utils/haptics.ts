import * as Haptics from "expo-haptics";

export const mediumFeedback = () => {
  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
};

export const heavyFeedback = () => {
  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
};
