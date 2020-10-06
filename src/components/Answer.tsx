import React, { FunctionComponent } from "react";
import {
  Animated,
  View,
  ViewStyle,
  StyleSheet,
  StyleProp,
  TextStyle,
} from "react-native";
import {
  Colors,
  Surface,
  TouchableRipple,
  withTheme,
} from "react-native-paper";
import color from "color";
import { GOOD, BAD, PRIMARY } from "constants/Colors";
import Markdown from "react-native-markdown-display";

type AnswerProps = {
  onPress?: () => void;
  selected?: boolean;
  correct?: boolean;
  wrong?: boolean;
  theme: ReactNativePaper.Theme;
};

const Answer: FunctionComponent<AnswerProps> = ({
  onPress,
  selected,
  correct,
  wrong,
  theme,
  children,
}) => {
  const {
    roundness: borderRadius,
    colors: { text },
  } = theme;

  const textColor =
    (correct && GOOD) || (wrong && BAD) || (selected && PRIMARY) || text;

  const borderColor = textColor;
  const rippleColor = color(textColor).alpha(0.32).rgb().string();
  const backgroundColor = color(textColor).alpha(0.11).rgb().string();

  return (
    <Surface style={[styles.button, { borderColor, borderRadius }]}>
      <TouchableRipple
        borderless
        delayPressIn={0}
        onPress={onPress}
        accessibilityComponentType="button"
        accessibilityRole="button"
        rippleColor={rippleColor}
        style={{ borderRadius, backgroundColor }}
      >
        <View style={styles.content}>
          <Markdown>{children}</Markdown>
        </View>
      </TouchableRipple>
    </Surface>
  );
};

const styles = StyleSheet.create({
  button: {
    borderStyle: "solid",
    borderWidth: 1,
    width: "100%",
    margin: 5,
    padding: 0,
  },
  content: {
    padding: 5,
    width: "100%",
    justifyContent: "center",
  },
});

export default withTheme(Answer);
