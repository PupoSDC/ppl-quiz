import { Question } from "types/questionBank";

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
    correct: "NAV1001004",
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
  {
    id: "NAV1004",
    question: `The magnetic variation has a value...`,
    answers: [
      {
        id: "NAV1004001",
        answer: "of 0 at the prime meridian",
      },
      {
        id: "NAV1004002",
        answer: "that is west, when the position is west of the agonic line",
      },
      {
        id: "NAV1004003",
        answer: "between 0° and 180°",
      },
      {
        id: "NAV1004004",
        answer: "that never exceeds 90°",
      },
    ],
    correct: "NAV1004003",
  },
  {
    id: "NAV1005",
    question: `At which latitudes is the magnetic compass most effective`,
    answers: [
      {
        id: "NAV1005001",
        answer: "at equatorial latitudes",
      },
      {
        id: "NAV1005002",
        answer: "at mid latitudes",
      },
      {
        id: "NAV1005003",
        answer: "at high latitudes",
      },
      {
        id: "NAV1005004",
        answer: "It's equally effective at all latitudes",
      },
    ],
    correct: "NAV1005001",
  },
  {
    id: "NAV1006",
    question: `When magnetic north is east of true north, the resulting variation is called...`,
    answers: [
      {
        id: "NAV1006001",
        answer: "east or minus",
      },
      {
        id: "NAV1006002",
        answer: "east or plus",
      },
      {
        id: "NAV1006003",
        answer: "west or minus",
      },
      {
        id: "NAV1006004",
        answer: "west or plus",
      },
    ],
    correct: "NAV1006002",
  },
  {
    id: "NAV1007",
    question: `When magnetic north is east of compass north, the resulting deviation is called...`,
    answers: [
      {
        id: "NAV1007001",
        answer: "east or minus",
      },
      {
        id: "NAV1007002",
        answer: "east or plus",
      },
      {
        id: "NAV1007003",
        answer: "west or minus",
      },
      {
        id: "NAV1007004",
        answer: "west or plus",
      },
    ],
    correct: "NAV1007003",
  },
  {
    id: "NAV1008",
    question: `A freely suspended compass needle points perfectly upwards..`,
    answers: [
      {
        id: "NAV1008001",
        answer: "at the magnetic poles",
      },
      {
        id: "NAV1008002",
        answer: "at the magnetic equator",
      },
      {
        id: "NAV1008003",
        answer: "at the north pole",
      },
      {
        id: "NAV1008004",
        answer: "at the geographic equator",
      },
    ],
    correct: "NAV1008001",
  },
  {
    id: "NAV1009",
    question: `Compass navigation is affected by`,
    answers: [
      {
        id: "NAV1009001",
        answer: "horizontal intensity, flight altitude, aircraft heading",
      },
      {
        id: "NAV1009002",
        answer:
          "aircraft electronic equipment, flight altitude, aircraft heading",
      },
      {
        id: "NAV1009003",
        answer:
          "horizontal intensity, aircraft electronic equipment, aircraft heading",
      },
      {
        id: "NAV1009004",
        answer:
          "aircraft electronic equipment, horizontal intensity, flight altitude",
      },
    ],
    correct: "NAV1009003",
  },
  {
    id: "NAV1010",
    question: `The angle at which an aircraft drifts away from the course line is called...`,
    answers: [
      {
        id: "NAV1010001",
        answer: "expected drift angle",
      },
      {
        id: "NAV1010002",
        answer: "drift angle",
      },
      {
        id: "NAV1010003",
        answer: "wind correction angle",
      },
      {
        id: "NAV1010004",
        answer: "track angle error",
      },
    ],
    correct: "NAV1010004",
  },
  {
    id: "NAV1011",
    question: `The angle from the direction of the aircraft's longitudinal axis to the flown path over ground is called...`,
    answers: [
      {
        id: "NAV1011001",
        answer: "expected drift angle",
      },
      {
        id: "NAV1011002",
        answer: "drift angle",
      },
      {
        id: "NAV1011003",
        answer: "wind correction angle",
      },
      {
        id: "NAV1011004",
        answer: "track angle error",
      },
    ],
    correct: "NAV1011002",
  },
];

export default questions;
