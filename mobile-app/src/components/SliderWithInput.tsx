import React from "react";
import Slider from "@react-native-community/slider";
import { StyleSheet } from "react-native";
import { Input, Layout, useTheme } from "@ui-kitten/components";
import { StyleProp, ViewStyle } from "react-native";

export type SliderWithInputProps = {
  value?: number;
  onValueChange?: (value: number) => void;
  style?: StyleProp<ViewStyle>;
};

const SliderWithInput: React.FunctionComponent<SliderWithInputProps> = ({
  value = 0,
  onValueChange = () => {},
  style,
}) => {
  const theme = useTheme();

  return (
    <Layout style={[style, styles.container]}>
      <Slider
        minimumValue={1}
        step={1}
        maximumValue={80}
        style={styles.slider}
        value={value}
        onSlidingComplete={onValueChange}
        thumbTintColor={theme["color-primary-default"]}
        minimumTrackTintColor={theme["color-primary-400"]}
        maximumTrackTintColor={theme["color-basic-default"]}
      />
      <Input
        value={value.toString()}
        keyboardType="numeric"
        maxLength={2}
        onChangeText={(n) => onValueChange(Number(n))}
        style={styles.input}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    margin: 15,
  },
  slider: {
    flex: 3,
    marginRight: 10,
  },
  input: {
    maxWidth: 60,
  },
});

export default SliderWithInput;
