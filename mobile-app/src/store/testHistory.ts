import { createReducer } from "@reduxjs/toolkit";
import { finishQuestionnaire } from "constants/Actions";
import { TestHistory } from "types/TestHistory";

export { TestHistory };

export default createReducer<TestHistory>(
  {
    tests: [],
  },
  (builder) =>
    builder.addCase(
      finishQuestionnaire,
      ({ tests }, { payload: { questions } }) => ({
        tests: [
          ...tests,
          {
            questions: questions.map(({ id, selected, correct }) => ({
              questionId: id,
              selected,
              correct: selected === correct,
            })),
            grade:
              questions.filter(({ selected, correct }) => selected === correct)
                .length / questions.length,
          },
        ],
      })
    )
);
