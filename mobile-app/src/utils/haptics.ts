import * as Haptics from "expo-haptics";
import { Platform } from "react-native";

export const mediumFeedback = () => {
  if (Platform.OS === "android" || Platform.OS === "ios") {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
  }
};

export const heavyFeedback = () => {
  if (Platform.OS === "android" || Platform.OS === "ios") {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
  }
};
