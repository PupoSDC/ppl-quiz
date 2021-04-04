import { createReducer } from "@reduxjs/toolkit";
import { setCurrentTestFinished } from "constants/actions";
import { QuestionsHeatMap, TestHistory } from "types/statistics";

export type StatisticsStore = {
  questions: QuestionsHeatMap;
  testHistory: TestHistory;
};

export const statisticsReducer = createReducer<StatisticsStore>(
  {
    questions: {},
    testHistory: [],
  },
  (builder) =>
    builder.addCase(
      setCurrentTestFinished,
      (state, { payload: { questions } }) => {
        questions
          .filter(({ selected }) => Boolean(selected))
          .forEach(({ id, correct, selected }) => {
            state.questions[id] = state.questions[id] ?? {
              answers: [],
              timesCorrect: 0,
              timesWrong: 0,
            };
            state.questions[id].answers.push(selected!);
            state.questions[id].timesCorrect += Number(selected === correct);
            state.questions[id].timesWrong += Number(selected !== correct);
          });
        state.testHistory.push({ questions });
      }
    )
);
