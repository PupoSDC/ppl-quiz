import { Question } from "types/questionBank";

const questions: Question[] = [
  {
    id: "ALW1001",
    question:
      "Which condition is requested so that an aerodrome may be considered controlled?",
    answers: [
      {
        id: "ALW1001001",
        answer:
          "The aerodrome shall be located within a Control Zone (CTR) and provided with a Control Tower.",
      },
      {
        id: "ALW1001002",
        answer: "The aerodrome shall be provided with a Control Tower.  ",
      },
      {
        id: "ALW1001003",
        answer: "The aerodrome shall be located within a Control Zone.",
      },
      {
        id: "ALW1001004",
        answer: "The aerodrome shall be located within a controlled airspace.",
      },
    ],
    correct: "ALW1001002",
  },
  {
    id: "ALW1002",
    question:
      "An transponder equipped aircraft which has been intercepted by a military aircraft must switch the transponder code generally to",
    answers: [
      {
        id: "ALW1002001",
        answer: "7600",
      },
      {
        id: "ALW1002002",
        answer: "7500",
      },
      {
        id: "ALW1002003",
        answer: "7000",
      },
      {
        id: "ALW1002004",
        answer: "7700",
      },
    ],
    correct: "ALW1002004",
  },
  {
    id: "ALW1003",
    question: "The aerodrome beacon at a civil aerodrome emits which colour?",
    answers: [
      {
        id: "ALW1003001",
        answer: "white",
      },
      {
        id: "ALW1003002",
        answer: "yellow",
      },
      {
        id: "ALW1003003",
        answer: "green",
      },
      {
        id: "ALW1003004",
        answer: "green-white",
      },
    ],
    correct: "ALW1003001",
    explanation:
      "The aerodrome beacon shall show colored flashes alternating with white flashes, or white flashes only.",
  },
  {
    id: "ALW1004",
    question:
      "The aerodrome identification beacon at a land aerodrome emits which colour?",
    answers: [
      {
        id: "ALW1004001",
        answer: "white",
      },
      {
        id: "ALW1004002",
        answer: "yellow",
      },
      {
        id: "ALW1004003",
        answer: "green",
      },
      {
        id: "ALW1004004",
        answer: "green-white",
      },
    ],
    correct: "ALW1004003",
    explanation:
      "An identifcation beacon is provided for aerodromes which are intended to be used at night and that can't otherwise be easily identified. The beacon shall be of flashing green light for land aerodromes, and flashing yellow light for water aerodromes.",
  },
  {
    id: "ALW1005",
    question:
      "During a night flight, an observer located in the cockpit, seeing an aircraft coming from front left on approximate opposite parallel track, will first see the:",
    answers: [
      {
        id: "ALW1005001",
        answer: "red steady light",
      },
      {
        id: "ALW1005002",
        answer: "green steady light",
      },
      {
        id: "ALW1005003",
        answer: "white steady light",
      },
      {
        id: "ALW1005004",
        answer: "green and white flashing light",
      },
    ],
    correct: "ALW1005001",
    explanation:
      "The plane is **not** flying from left to right, it's flying opposit to you in a parallel track, therefor you will se the left side of the airplane first, which has a steady red light.",
  },
  {
    id: "ALW1006",
    question:
      "When acknowledging a transponder mode / code setting instructions, pilots shall:",
    answers: [
      {
        id: "ALW1006001",
        answer: "use the word ROGER",
      },
      {
        id: "ALW1006002",
        answer: "read back the mode and code to be set",
      },
      {
        id: "ALW1006003",
        answer: "use the word WILCO",
      },
      {
        id: "ALW1006004",
        answer: "read back the code to be set and SQUAK IDENT",
      },
    ],
    correct: "ALW1006002",
    explanation:
      "The plane is **not** flying from left to right, it's flying opposit to you in a parallel track, therefor you will se the left side of the airplane first, which has a steady red light.",
  },
  {
    id: "ALW1007",
    question: "Taxiway center line lights are",
    answers: [
      {
        id: "ALW1007001",
        answer: "white",
      },
      {
        id: "ALW1007002",
        answer: "yellow",
      },
      {
        id: "ALW1007003",
        answer: "blue",
      },
      {
        id: "ALW1007004",
        answer: "green or alternating green/yellow",
      },
    ],
    correct: "ALW1007002",
    explanation:
      "The track is yellow, but the lights are green or alternating green/yellow",
  },
  {
    id: "ALW1008",
    question:
      "The lower limit of a control area must not be located below which altitude above ground?",
    answers: [
      {
        id: "ALW1008001",
        answer: "700 ft",
      },
      {
        id: "ALW1008002",
        answer: "500 ft",
      },
      {
        id: "ALW1008003",
        answer: "1000 ft",
      },
      {
        id: "ALW1008004",
        answer: "200ft",
      },
    ],
    correct: "ALW1008001",
  },
  {
    id: "ALW1009",
    question: "Which kind of separation is used by ATC?",
    answers: [
      {
        id: "ALW1009001",
        answer: "time and course separation",
      },
      {
        id: "ALW1009002",
        answer: "vertical, longitudinal and angle separation",
      },
      {
        id: "ALW1009003",
        answer: "lateral and vertical separation",
      },
      {
        id: "ALW1009004",
        answer: "combined separation",
      },
    ],
    correct: "ALW1009003",
  },
];

export default questions;
