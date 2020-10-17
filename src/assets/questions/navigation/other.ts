import { Question } from "types/Questionnaire";

const questions: Question[] = [
  {
    id: "NAV1001",
    question: `Which is the reference line (datum line) of a "RB" (Relative Bearing at the ADF)?`,
    answers: [
      {
        id: "NAV1001001",
        answer: "Magnetic North",
      },
      {
        id: "NAV1001002",
        answer: "Aircraft Pitch Axis",
      },
      {
        id: "NAV1001003",
        answer: "True North",
      },
      {
        id: "NAV1001004",
        answer: "Aircraft Heading",
      },
    ],
    correct: "NAV1001002",
  },
  {
    id: "NAV1002",
    question: `The DME shows 121 NM. That means...`,
    answers: [
      {
        id: "NAV1002001",
        answer: "the TAS is 121 NM/h",
      },
      {
        id: "NAV1002002",
        answer: "the distance of 121 NM is calculated from GS and flight time",
      },
      {
        id: "NAV1002003",
        answer: "this value is only correct when heading towards the station",
      },
      {
        id: "NAV1002004",
        answer: "the distance to the station is 121 NM",
      },
    ],
    correct: "NAV1002002",
    image: require("./images/NAVO1.png"),
  },
  {
    id: "NAV1003",
    question: `Signal reception is required from a minimum number of satellites that have adequate elevation and suitable geometry in order for a Satellite-Assisted Navigation System (GPS) to carry out independent three dimensional operation without the Receiver Autonomous Integrity Monitoring (RAIM) function. The number of satellites is:`,
    answers: [
      {
        id: "NAV1003001",
        answer: "3",
      },
      {
        id: "NAV1003002",
        answer: "4",
      },
      {
        id: "NAV1003003",
        answer: "5",
      },
      {
        id: "NAV1003004",
        answer: "6",
      },
    ],
    correct: "NAV1003002",
  },
];

export default questions;
