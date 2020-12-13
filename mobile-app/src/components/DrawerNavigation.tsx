import React from "react";
import { Drawer, DrawerItem, IndexPath } from "@ui-kitten/components";
import { DrawerContentComponentProps } from "@react-navigation/drawer";

const DrawerNavigation: React.FunctionComponent<
  DrawerContentComponentProps<{}>
> = ({ navigation, state }) => {
  console.log(state);
  return (
    <Drawer
      selectedIndex={new IndexPath(state.index)}
      onSelect={(index) => navigation.navigate(state.routeNames[index.row])}
    >
      {state.routes.map(({ name }) => (
        <DrawerItem title={name} key={name} />
      ))}
    </Drawer>
  );
};

export default DrawerNavigation;
