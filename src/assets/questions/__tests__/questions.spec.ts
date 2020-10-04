import { Question } from "types/Questionnaire";
import questions from "../index";

describe("questions", () => {
  const questionsForTest: Array<[string, Question]> = questions.all.map((q) => [
    q.id,
    q,
  ]);
  test.each(questionsForTest)("checking question %s", (id, q) => {
    expect(q.answers).toHaveLength(4);
    expect(q.answers.map(({ id }) => id)).toContain(q.correct);
  });
});
