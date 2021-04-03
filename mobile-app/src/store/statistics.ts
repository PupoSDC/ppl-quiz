import { createReducer } from "@reduxjs/toolkit";
import { finishQuestionnaire } from "constants/Actions";
import { GlobalTestStatistics } from "types/statistics";

export { GlobalTestStatistics };

export default createReducer<GlobalTestStatistics>(
  {
    questions: {},
  },
  (builder) =>
    builder.addCase(
      finishQuestionnaire,
      (state, { payload: { questions } }) => {
        questions
          .filter(({ selected }) => Boolean(selected))
          .forEach(({ id, correct, selected }) => {
            state.questions[id] = state.questions[id] || {
              answers: [],
              timesCorrect: 0,
              timesWrong: 0,
            };
            state.questions[id].answers.push(selected!);
            state.questions[id].timesCorrect += Number(selected === correct);
            state.questions[id].timesWrong += Number(selected !== correct);
          });
      }
    )
);
