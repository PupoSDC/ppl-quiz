import { createReducer } from "@reduxjs/toolkit";
import { addQuestionnareToStatistics } from "constants/Actions";
import { GlobalTestStatistics } from "types/Statistics";

export { GlobalTestStatistics };

export default createReducer<GlobalTestStatistics>(
  {
    questions: {},
  },
  (builder) =>
    builder.addCase(
      addQuestionnareToStatistics,
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
