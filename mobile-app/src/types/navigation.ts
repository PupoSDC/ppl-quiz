import { DrawerNavigationProp } from "@react-navigation/drawer";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Test, TestQuestion } from "./test";

export type RootStackParamList = {
  Home: undefined;
  Test: Test;
  TestMaker: undefined;
  TestOverview: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> = {
  route: RouteProp<RootStackParamList, T>;
  navigation: StackNavigationProp<RootStackParamList, T>;
};

export type TestStackParamList = {
  Question: TestQuestion;
};

export type TestStackScreenProps<T extends keyof TestStackParamList> = {
  route: RouteProp<TestStackParamList, T>;
  navigation: DrawerNavigationProp<TestStackParamList, T>;
};
