import { gql, useApolloClient, useLazyQuery } from "@apollo/client";
import {
  QuestionBank,
  QuestionBankEntry,
  QuestionBankMetaData,
} from "types/QuestionBank";
import { useSelector, useDispatch, useStore } from "react-redux";
import { setQuestionBank } from "constants/actions";
import suspend from "utils/suspend";
import { current } from "@reduxjs/toolkit";
import { useCallback } from "react";
import { Questionnaire } from "types/Questionnaire";
import perfectShuffle from "utils/perfectShuffle";

const GET_QUESTION_BANKS_META_DATA = gql`
  query getQuestionBankMetaData {
    questionBankMetaData {
      id
      name
      numberOfQuestions
    }
  }
`;

const GET_QUESTION_BANK_ENTRY = gql`
  query getQuestionBankEntry($id: ID!) {
    questionBankEntry(id: $id) {
      id
      name
      numberOfQuestions
      questions {
        id
        correct
        explanation
        image
        question
        answers {
          answer
          id
        }
      }
    }
  }
`;

type CreateNewTestParams = {
  numberOfQuestions: number;
  questionBankId: string;
};

type UpdateQuestionBankEntry = (id: string) => Promise<QuestionBankEntry>;
type CreateNewTest = (params: CreateNewTestParams) => Promise<Questionnaire>;

type QuestionBankActions = {
  updateQuestionBankEntry: UpdateQuestionBankEntry;
  createNewTest: CreateNewTest;
};

/**
 * Loads the question bank meta data from the store, or if not present
 * requests it to the server side API triggering suspense.
 *
 * Actions allow to update question bank data and create new tests.
 *
 */
const useQuestionBank = (): [
  Record<string, QuestionBankEntry>,
  QuestionBankActions
] => {
  const dispatch = useDispatch();
  const questionBank = useSelector((state) => state.questionBank.entries);
  const store = useStore();
  const client = useApolloClient();
  const [getQuestionBankMetaData, result] = useLazyQuery<{
    questionBankMetaData: QuestionBankMetaData;
  }>(GET_QUESTION_BANKS_META_DATA);

  const updateQuestionBankEntry: UpdateQuestionBankEntry = useCallback(
    async (id) => {
      const { data, error } = await client.query<
        { questionBankEntry: QuestionBankEntry },
        { id: string }
      >({
        query: GET_QUESTION_BANK_ENTRY,
        variables: { id },
      });
      if (error) {
        throw error;
      }
      if (data) {
        const lastUpdated = new Date(Date.now()).toString();
        const questionBank = {
          ...data.questionBankEntry,
          lastUpdated,
        };
        dispatch(
          setQuestionBank({
            [id]: questionBank,
          })
        );
        return questionBank;
      }
      throw new Error("Error updating question bank");
    },
    [store, client]
  );

  const createNewTest: CreateNewTest = useCallback(
    async ({ numberOfQuestions, questionBankId }) => {
      const data = store.getState().questionBank.entries[questionBankId];
      if (!data?.questions || !data.questions.length) {
        throw new Error(
          `Missing questions for Question bank "${questionBankId}"`
        );
      }
      const questions = perfectShuffle(Object.values(data?.questions ?? {}))
        .slice(0, numberOfQuestions)
        .map((q) => ({
          ...q,
          answers: perfectShuffle(q.answers),
        }));
      return { questions };
    },
    [store]
  );

  if (result.loading) {
    suspend(
      new Promise<void>((resolve) => !result.loading && resolve())
    ).read();
  }

  if (!questionBank || !Object.keys(questionBank).length) {
    if (result.data) {
      const lastUpdated = new Date(Date.now()).toString();
      const newQuestionBankMetaData = result.data.questionBankMetaData.reduce<
        Record<string, QuestionBankEntry>
      >(
        (sum, questionBank) => ({
          ...sum,
          [questionBank.id]: {
            ...questionBank,
            lastUpdated,
          },
        }),
        {}
      );
      dispatch(setQuestionBank(newQuestionBankMetaData));
    } else if (result.error) {
      throw new Error("Unable to get Question bank meta data");
    } else if (!result.loading && !result.error) {
      getQuestionBankMetaData();
    }
  }

  return [
    questionBank,
    {
      updateQuestionBankEntry,
      createNewTest,
    },
  ];
};

export default useQuestionBank;
