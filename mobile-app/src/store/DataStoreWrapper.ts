import { DataStore, syncExpression } from "aws-amplify";
import { Test } from "./models";

DataStore.configure({
  syncExpressions: [
    syncExpression(Test, () => {
      return false;
    }),
  ],
});
