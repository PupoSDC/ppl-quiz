import { Question } from "types/Questionnaire";

const questions: Question[] = [
  {
    id: "ALW100",
    correct: "ALW100-2",
    question:
      "What is the primary purpose of an aircraft accident investigation?",
    answers: [
      {
        answer: "To Determine the guilty party and draw legal consequences",
        id: "ALW100-1",
      },
      {
        answer: "To identify the reasons and work out safety recommendations",
        id: "ALW100-2",
      },
      {
        answer:
          "To clarify questions of liability within the meaning of compensation for passengers",
        id: "ALW100-3",
      },
      {
        answer:
          "To work for the public prosecutor and help to follow-up flight accidents",
        id: "ALW100-4",
      },
    ],
  },
  {
    id: "ALW001",
    question: `Which of the following documents have to be on board for an international flight?
            a) Certificate of aircraft registration 
            b) Certificate of airworthiness
            c) Airworthiness review certificate 
            d) EASA Form-1
            e) Airplane logbook
            f) Appropriate papers for every crew member 
            g) Technical logbook`,
    correct: "ALW001-3",
    answers: [
      {
        answer: "b, c, d, e, f, g",
        id: "ALW001-1",
      },
      {
        answer: "a,b,e,g",
        id: "ALW001-2",
      },
      {
        answer: "a,b,c,e,f",
        id: "ALW001-3",
      },
      {
        answer: "d,f,g",
        id: "ALW001-4",
      },
    ],
  },
];

export default questions;
