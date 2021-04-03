import { Question } from "types/Questionnaire";
import questions from "../index";

describe("questions", () => {
  const questionsForTest: Array<[string, Question]> = questions
    .reduce<Question[]>((sum, { questions }) => [...sum, ...questions], [])
    .map((q) => [q.id, q]);

  test.each(questionsForTest)(
    "question %s has correct number of answers and ONE correct answer",
    (id, q) => {
      expect(q.answers).toHaveLength(4);
      expect(q.answers.map(({ id }) => id)).toContain(q.correct);
    }
  );

  test("there are no duplicate question or answer IDs", () => {
    const setQuestions = new Set(questionsForTest);
    const setAnswers = new Set(
      questionsForTest.map(([id, { answers }]) => answers).flat()
    );
    expect(setQuestions.size).toBe(questionsForTest.length);
    expect(setAnswers.size).toBe(questionsForTest.length * 4);
  });
});
