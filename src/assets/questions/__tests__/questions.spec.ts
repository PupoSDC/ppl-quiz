import { Question } from "types/Questionnaire";
import questions from "../index";

describe("questions", () => {
  const questionsForTest: Array<[string, Question]> = questions.all.map((q) => [
    q.id,
    q,
  ]);

  test.each(questionsForTest)(
    "question %s has correct number of answers and ONE correct answer",
    (id, q) => {
      expect(q.answers).toHaveLength(4);
      expect(q.answers.map(({ id }) => id)).toContain(q.correct);
    }
  );

  test("there are no duplicate question or answer IDs", () => {
    const setQuestions = new Set(questions.all);
    const setAnswers = new Set(
      questions.all.map(({ answers }) => answers).flat()
    );
    expect(setQuestions.size).toBe(questions.all.length);
    expect(setAnswers.size).toBe(questions.all.length * 4);
  });
});
