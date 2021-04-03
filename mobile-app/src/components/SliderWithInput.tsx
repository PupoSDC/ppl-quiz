import React, { useEffect, useState } from "react";
import Slider from "@react-native-community/slider";
import { StyleSheet } from "react-native";
import { Input, Layout, useTheme } from "@ui-kitten/components";
import { StyleProp, ViewStyle } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

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
  const [inputValue, setInputValue] = useState(value.toString());

  return (
    <Layout style={[style, styles.container]}>
      <Slider
        minimumValue={1}
        step={1}
        maximumValue={80}
        style={styles.slider}
        value={value}
        onValueChange={(v) => setInputValue(v.toString())}
        onSlidingComplete={onValueChange}
        thumbTintColor={theme["color-primary-default"]}
        minimumTrackTintColor={theme["color-primary-400"]}
        maximumTrackTintColor={theme["color-basic-default"]}
      />
      <Input
        value={inputValue}
        keyboardType={"number-pad"}
        maxLength={2}
        onFocus={() => setInputValue("")}
        onChangeText={setInputValue}
        onBlur={() => {
          if (inputValue) {
            onValueChange(Number(inputValue));
          } else {
            setInputValue(value.toString());
          }
        }}
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
  },
  slider: {
    flex: 3,
    marginRight: 10,
  },
  input: {
    maxWidth: 60,
    minWidth: 60,
  },
});

export default SliderWithInput;
