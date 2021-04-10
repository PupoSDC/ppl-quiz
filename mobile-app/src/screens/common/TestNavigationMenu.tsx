import { StackNavigationProp } from "@react-navigation/stack";
import {
  Icon,
  MenuItem,
  OverflowMenu,
  TopNavigationAction,
} from "@ui-kitten/components";
import { RenderProp } from "@ui-kitten/components/devsupport";
import React, { FunctionComponent, useState } from "react";
import { ImageProps } from "react-native";

const MenuIcon: RenderProp<Partial<ImageProps>> = (props) => (
  <Icon {...props} name="more-vertical" />
);

const InfoIcon: RenderProp<Partial<ImageProps>> = (props) => (
  <Icon {...props} name="info" />
);

export type TestNavigationMenuProps = {
  navigation: StackNavigationProp<{}>;
};

export const TestNavigationMenu: FunctionComponent<TestNavigationMenuProps> = ({
  navigation,
}) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const toggleMenu = () => setMenuVisible((v) => !v);
  const { goBack } = navigation;
  return (
    <OverflowMenu
      anchor={() => (
        <TopNavigationAction icon={MenuIcon} onPress={toggleMenu} />
      )}
      visible={menuVisible}
      onBackdropPress={toggleMenu}
    >
      <MenuItem
        accessoryLeft={InfoIcon}
        onPress={() => {
          toggleMenu();
          goBack();
        }}
        title="Leave Test"
      />
    </OverflowMenu>
  );
};
