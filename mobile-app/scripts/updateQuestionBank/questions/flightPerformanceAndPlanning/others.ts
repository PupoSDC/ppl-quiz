import { Question } from "../../types";

const questions: Question[] = [
  {
    id: "FPP1001",
    question:
      "How is the take-off distance influenced on a grass runway in comparison to a paved surface?",
    answers: [
      {
        id: "FPP1001001",
        answer:
          "The required distance for take-off will be decreased. The braking performance on grass will not be as good as it would be on a paved surface.",
      },
      {
        id: "FPP1001002",
        answer:
          "The required distance for take-off will be increased. The braking performance on grass will be better than on a paved surface.",
      },
      {
        id: "FPP1001003",
        answer:
          "The required distance for take-off will be decreased. The braking performance on grass will be better than on a paved surfacef.",
      },
      {
        id: "FPP1001004",
        answer:
          "The required distance for take-off will be increased. The braking performance on grass will not be as good as it would be on a paved surface.",
      },
    ],
    correct: "FPP1001004",
  },
  {
    id: "FPP1002",
    question: "How does precipitation affect airplane performance?",
    answers: [
      {
        id: "FPP1002001",
        answer:
          "Water can enter the engine cowl, thus decreasing the engine performance",
      },
      {
        id: "FPP1002002",
        answer: "Rain does not affect aircraft performance",
      },
      {
        id: "FPP1002003",
        answer:
          "Water on the wing may disturb the airflow, thus decreasing aircraft performance",
      },
      {
        id: "FPP1002004",
        answer:
          "Heavy rain can increase the mass of the aircraft, thus decreasing aircraft performance",
      },
    ],
    correct: "FPP1002003",
  },
];

export default questions;
