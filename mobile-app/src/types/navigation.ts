import { DrawerNavigationProp } from "@react-navigation/drawer";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
  Home: undefined;
  Test: undefined;
  TestMaker: undefined;
  TestHistory: undefined;
  TestStatistics: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> = {
  route: RouteProp<RootStackParamList, T>;
  navigation: StackNavigationProp<RootStackParamList, T>;
};

export type TestDrawerParamList = {
  Question: {
    questionIndex: number;
  };
  Results: undefined;
} & RootStackParamList;

export type TestStackScreenProps<T extends keyof TestDrawerParamList> = {
  route: RouteProp<TestDrawerParamList, T>;
  navigation: DrawerNavigationProp<TestDrawerParamList, T>;
};
