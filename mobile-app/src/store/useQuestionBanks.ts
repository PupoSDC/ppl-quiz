import { DataStore } from "aws-amplify";
import { useEffect, useState } from "react";
import { QuestionBlock } from "./models";

export const useQuestionBank = () => {
  //const [loading, setLoading] = useState();
  //const [questionBlocks, setQuestionBlocks] = useState();

  const subscription = DataStore.observe(QuestionBlock).subscribe((msg) => {
    console.log(msg.model, msg.opType, msg.element);
  });
};
