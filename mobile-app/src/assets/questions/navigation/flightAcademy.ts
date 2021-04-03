import { Question } from "types/Questionnaire";

const questions: Question[] = [
  {
    id: "NAV0001",
    question: "The rotational axis of the Earth runs through the...",
    answers: [
      {
        id: "NAV0001001",
        answer: "magnetic north pole and on the geographic South Pole.",
      },
      {
        id: "NAV0001002",
        answer: "geographic North Pole and on the magnetic south pole.",
      },
      {
        id: "NAV0001003",
        answer: "magnetic north pole and on the magnetic south pole.",
      },
      {
        id: "NAV0001004",
        answer: "geographic North Pole and on the geographic South Pole.",
      },
    ],
    correct: "NAV0001004",
  },
  {
    id: "NAV0002",
    question:
      "Which statement is correct with regard to the polar axis of the Earth?",
    answers: [
      {
        id: "NAV0002001",
        answer:
          "The polar axis of the Earth crosses the geographic South Pole and the geographic North Pole\nand is at an angle of 23.5° to the plane of the equator",
      },
      {
        id: "NAV0002002",
        answer:
          "The polar axis of the Earth crosses the geographic South Pole and the geographic North Pole\nand is perpendicular to the plane of the equator",
      },
      {
        id: "NAV0002003",
        answer:
          "The polar axis of the Earth crosses the magnetic south pole and the magnetic north pole and is\nperpendicular to the plane of the equator",
      },
      {
        id: "NAV0002004",
        answer:
          "The polar axis of the Earth crosses the magnetic south pole and the magnetic north pole and is\nat an angle of 66.5° to the plane of the equator",
      },
    ],
    correct: "NAV0002002",
  },
  {
    id: "NAV0003",
    question:
      "Which approximate, geometrical form describes the shape of the Earth best for navigation systems?",
    answers: [
      {
        id: "NAV0003001",
        answer: "Flat plate",
      },
      {
        id: "NAV0003002",
        answer: "Sphere of ecliptical shape",
      },
      {
        id: "NAV0003003",
        answer: "Ellipsoid",
      },
      {
        id: "NAV0003004",
        answer: "Perfect sphere",
      },
    ],
    correct: "NAV0003003",
  },
  {
    id: "NAV0004",
    question: "Which statement about a rhumb line is correct?",
    answers: [
      {
        id: "NAV0004001",
        answer:
          "The shortest track between two points along the Earth's surface follows a rhumb line.",
      },
      {
        id: "NAV0004002",
        answer:
          "A rhumb line is a great circle intersecting the the equator with 45° angle.",
      },
      {
        id: "NAV0004003",
        answer:
          "The center of a complete cycle of a rhumb line is always the Earth's center.",
      },
      {
        id: "NAV0004004",
        answer: "A rhumb line cuts each meridian at the same angle.",
      },
    ],
    correct: "NAV0004004",
  },
  {
    id: "NAV0005",
    question:
      "The shortest distance between two points on Earth is represented by a part of...",
    answers: [
      {
        id: "NAV0005001",
        answer: "a small circle.",
      },
      {
        id: "NAV0005002",
        answer: "a parallel of latitude.",
      },
      {
        id: "NAV0005003",
        answer: "a great circle.",
      },
      {
        id: "NAV0005004",
        answer: "a rhumb line.",
      },
    ],
    correct: "NAV0005003",
  },
  {
    id: "NAV0006",
    question:
      "The circumference of the Earth at the equator is approximately...",
    answers: [
      {
        id: "NAV0006001",
        answer: "10800 km.",
      },
      {
        id: "NAV0006002",
        answer: "12800 km.",
      },
      {
        id: "NAV0006003",
        answer: "40000 NM.",
      },
      {
        id: "NAV0006004",
        answer: "21600 NM.",
      },
    ],
    correct: "NAV0006004",
  },
  {
    id: "NAV0007",
    question:
      "What is the difference in latitude between A (12°53'30''N) and B (07°34'30''S)?",
    answers: [
      {
        id: "NAV0007001",
        answer: "20,28°",
      },
      {
        id: "NAV0007002",
        answer: "05°19'00''",
      },
      {
        id: "NAV0007003",
        answer: "05,19°",
      },
      {
        id: "NAV0007004",
        answer: "20°28'00''",
      },
    ],
    correct: "NAV0007004",
  },
  {
    id: "NAV0008",
    question: "Where are the two polar circles?",
    answers: [
      {
        id: "NAV0008001",
        answer: "23.5° north and south of the poles",
      },
      {
        id: "NAV0008002",
        answer: "At a latitude of 20.5°S and 20.5°N",
      },
      {
        id: "NAV0008003",
        answer: "23.5° north and south of the equator",
      },
      {
        id: "NAV0008004",
        answer: "20.5° south of the poles",
      },
    ],
    correct: "NAV0008001",
  },
  {
    id: "NAV0009",
    question:
      "What is the distance between the parallels of latitude 48°N and 49°N along a meridian line?",
    answers: [
      {
        id: "NAV0009001",
        answer: "1 NM",
      },
      {
        id: "NAV0009002",
        answer: "60 NM",
      },
      {
        id: "NAV0009003",
        answer: "10 NM",
      },
      {
        id: "NAV0009004",
        answer: "111 NM",
      },
    ],
    correct: "NAV0009002",
  },
  {
    id: "NAV0010",
    question:
      "What distance corresponds to one degree difference in latitude along any degree of longitude?",
    answers: [
      {
        id: "NAV0010001",
        answer: "30 NM",
      },
      {
        id: "NAV0010002",
        answer: "60 km",
      },
      {
        id: "NAV0010003",
        answer: "60 NM",
      },
      {
        id: "NAV0010004",
        answer: "1 NM",
      },
    ],
    correct: "NAV0010003",
  },
  {
    id: "NAV0011",
    question:
      "Point A on the Earth's surface lies exactly on the parallel of latitude of 47°50'27''N. Which point is exactly 240 NM north of A?",
    answers: [
      {
        id: "NAV0011001",
        answer: "53°50'27''N",
      },
      {
        id: "NAV0011002",
        answer: "51°50'27'N'",
      },
      {
        id: "NAV0011003",
        answer: "43°50'27''N",
      },
      {
        id: "NAV0011004",
        answer: "49°50'27''N",
      },
    ],
    correct: "NAV0011002",
  },
  {
    id: "NAV0012",
    question:
      "What is the distance between the two parallels of longitude 150°E and 151°E along the equator?",
    answers: [
      {
        id: "NAV0012001",
        answer: "1 NM",
      },
      {
        id: "NAV0012002",
        answer: "111 NM",
      },
      {
        id: "NAV0012003",
        answer: "60 km",
      },
      {
        id: "NAV0012004",
        answer: "60 NM",
      },
    ],
    correct: "NAV0012004",
  },
  {
    id: "NAV0013",
    question:
      "What is the great circle distance between two points A and B on the equator when the difference between the two associated meridians is exactly one degree of longitude?",
    answers: [
      {
        id: "NAV0013001",
        answer: "216 NM",
      },
      {
        id: "NAV0013002",
        answer: "60 NM",
      },
      {
        id: "NAV0013003",
        answer: "120 NM",
      },
      {
        id: "NAV0013004",
        answer: "400 NM",
      },
    ],
    correct: "NAV0013002",
  },
  {
    id: "NAV0014",
    question:
      "Assume two arbitrary points A and B on the same parallel of latitude, but not on the equator. Point A is located on 010°E and point B on 020°E. The rumb line distance between A and B is always...",
    answers: [
      {
        id: "NAV0014001",
        answer: "less than 600 NM.",
      },
      {
        id: "NAV0014002",
        answer: "more than 300 NM.",
      },
      {
        id: "NAV0014003",
        answer: "more than 600 NM.",
      },
      {
        id: "NAV0014004",
        answer: "less than 300 NM.",
      },
    ],
    correct: "NAV0014001",
  },
  {
    id: "NAV0015",
    question:
      "What is the difference in time when the sun moves 20° of longitude?",
    answers: [
      {
        id: "NAV0015001",
        answer: "1:20 h",
      },
      {
        id: "NAV0015002",
        answer: "0:40 h",
      },
      {
        id: "NAV0015003",
        answer: "0:20 h",
      },
      {
        id: "NAV0015004",
        answer: "1:00 h",
      },
    ],
    correct: "NAV0015001",
  },
  {
    id: "NAV0016",
    question:
      "What is the difference in time when the sun moves 10° of longitude?",
    answers: [
      {
        id: "NAV0016001",
        answer: "1:00 h",
      },
      {
        id: "NAV0016002",
        answer: "0:40 h",
      },
      {
        id: "NAV0016003",
        answer: "0:30 h",
      },
      {
        id: "NAV0016004",
        answer: "0:04 h",
      },
    ],
    correct: "NAV0016002",
  },
  {
    id: "NAV0017",
    question: "The sun moves 10° of longitude. What is the difference in time?",
    answers: [
      {
        id: "NAV0017001",
        answer: "1 h",
      },
      {
        id: "NAV0017002",
        answer: "0.4 h",
      },
      {
        id: "NAV0017003",
        answer: "0.33 h",
      },
      {
        id: "NAV0017004",
        answer: "0.66 h",
      },
    ],
    correct: "NAV0017004",
  },
  {
    id: "NAV0018",
    question:
      "With Central European Summer Time (CEST) given as UTC+2, what UTC time corresponds to 1600 CEST?",
    answers: [
      {
        id: "NAV0018001",
        answer: "1700 UTC.",
      },
      {
        id: "NAV0018002",
        answer: "1500 UTC.",
      },
      {
        id: "NAV0018003",
        answer: "1600 UTC.",
      },
      {
        id: "NAV0018004",
        answer: "1400 UTC.",
      },
    ],
    correct: "NAV0018004",
  },
  {
    id: "NAV0019",
    question: "UTC is...",
    answers: [
      {
        id: "NAV0019001",
        answer: "an obligatory time used in aviation.",
      },
      {
        id: "NAV0019002",
        answer: "a zonal time.",
      },
      {
        id: "NAV0019003",
        answer: "local mean time at a specific point on Earth.",
      },
      {
        id: "NAV0019004",
        answer: "a local time in Central Europe.",
      },
    ],
    correct: "NAV0019001",
  },
  {
    id: "NAV0020",
    question:
      "With Central European Time (CET) given as UTC+1, what UTC time corresponds to 1700 CET?",
    answers: [
      {
        id: "NAV0020001",
        answer: "1800 UTC.",
      },
      {
        id: "NAV0020002",
        answer: "1500 UTC.",
      },
      {
        id: "NAV0020003",
        answer: "1700 UTC.",
      },
      {
        id: "NAV0020004",
        answer: "1600 UTC.",
      },
    ],
    correct: "NAV0020004",
  },
  {
    id: "NAV0021",
    question:
      "Vienna (LOWW) is located at 016° 34'E, Salzburg (LOWS) at 013° 00'E. The latitude of both positions can be considered as equal. What is the difference of sunrise and sunset times, expressed in UTC, between Wien and Salzburg? (2,00 P.)",
    answers: [
      {
        id: "NAV0021001",
        answer:
          "In Vienna the sunrise and sunset are about 4 minutes later than in Salzburg",
      },
      {
        id: "NAV0021002",
        answer:
          "In Vienna the sunrise and sunset are about 14 minutes earlier than in Salzburg",
      },
      {
        id: "NAV0021003",
        answer:
          "In Vienna the sunrise is 14 minutes earlier and sunset is 14 minutes later than in Salzburg",
      },
      {
        id: "NAV0021004",
        answer:
          "In Vienna the sunrise is 4 minutes later and sunset is 4 minutes earlier than in Salzburg",
      },
    ],
    correct: "NAV0021002",
  },
  {
    id: "NAV0022",
    question: "The term 'civil twilight' is defined as...",
    answers: [
      {
        id: "NAV0022001",
        answer:
          "the period of time before sunrise or after sunset where the midpoint of the sun disk is 6 degrees\nor less below the apparent horizon.",
      },
      {
        id: "NAV0022002",
        answer:
          "the period of time before sunrise or after sunset where the midpoint of the sun disk is 12\ndegrees or less below the true horizon.",
      },
      {
        id: "NAV0022003",
        answer:
          "the period of time before sunrise or after sunset where the midpoint of the sun disk is 6 degrees\nor less below the true horizon.",
      },
      {
        id: "NAV0022004",
        answer:
          "the period of time before sunrise or after sunset where the midpoint of the sun disk is 12\ndegrees or less below the apparent horizon.",
      },
    ],
    correct: "NAV0022003",
  },
  {
    id: "NAV0023",
    question: `Given: 
      - WCA: -012°; 
      - TH: 125°; 
      - MC: 139°; 
      - DEV: 002°E 
      What are: TC, MH und CH?`,
    answers: [
      {
        id: "NAV0023001",
        answer: `
          - TC: 113°. 
          - MH: 127°. 
          - CH: 129°.`,
      },
      {
        id: "NAV0023002",
        answer: `
          - TC: 137°. 
          - MH: 127°. 
          - CH: 125°.
        `,
      },
      {
        id: "NAV0023003",
        answer: `
          - TC: 113°. 
          - MH: 139°. 
          - CH: 129°.
        `,
      },
      {
        id: "NAV0023004",
        answer: `
          - TC: 137°. 
          - MH: 139°. 
          - CH: 125°.
        `,
      },
    ],
    correct: "NAV0023002",
  },
  {
    id: "NAV0024",
    question: `Given: 
      - TC: 179°; 
      - WCA: -12°; 
      - VAR: 004° E; 
      - DEV: +002° 
      What are MH and MC?`,
    answers: [
      {
        id: "NAV0024001",
        answer: `
        - MH: 163°. 
        - MC: 161°.
        `,
      },
      {
        id: "NAV0024002",
        answer: `
        - MH: 163°. 
        - MC: 175°.
        `,
      },
      {
        id: "NAV0024003",
        answer: `
        - MH: 167°. 
        - MC: 161°.
        `,
      },
      {
        id: "NAV0024004",
        answer: `
        - MH: 167°. 
        - MC: 175°.
        `,
      },
    ],
    correct: "NAV0024002",
  },
  {
    id: "NAV0025",
    question:
      "The angle between the true course and the true heading is called...",
    answers: [
      {
        id: "NAV0025001",
        answer: "inclination.",
      },
      {
        id: "NAV0025002",
        answer: "WCA.",
      },
      {
        id: "NAV0025003",
        answer: "deviation.",
      },
      {
        id: "NAV0025004",
        answer: "variation.",
      },
    ],
    correct: "NAV0025002",
  },
  {
    id: "NAV0026",
    question:
      "The angle between the magnetic course and the true course is called...",
    answers: [
      {
        id: "NAV0026001",
        answer: "variation.",
      },
      {
        id: "NAV0026002",
        answer: "WCA.",
      },
      {
        id: "NAV0026003",
        answer: "inclination.",
      },
      {
        id: "NAV0026004",
        answer: "deviation.",
      },
    ],
    correct: "NAV0026001",
  },
  {
    id: "NAV0027",
    question: "The term ‚magnetic course' (MC) is defined as...",
    answers: [
      {
        id: "NAV0027001",
        answer:
          "the direction from an arbitrary point on Earth to the magnetic north pole.",
      },
      {
        id: "NAV0027002",
        answer:
          "the direction from an arbitrary point on Earth to the geographic North Pole.",
      },
      {
        id: "NAV0027003",
        answer: "the angle between magnetic north and the course line.",
      },
      {
        id: "NAV0027004",
        answer: "the angle between true north and the course line.",
      },
    ],
    correct: "NAV0027003",
  },
  {
    id: "NAV0028",
    question: "The term 'True Course' (TC) is defined as...",
    answers: [
      {
        id: "NAV0028001",
        answer:
          "the direction from an arbitrary point on Earth to the magnetic north pole.",
      },
      {
        id: "NAV0028002",
        answer: "the angle between true north and the course line.",
      },
      {
        id: "NAV0028003",
        answer: "tthe angle between magnetic north and the course line.",
      },
      {
        id: "NAV0028004",
        answer:
          "the direction from an arbitrary point on Earth to the geographic North Pole.",
      },
    ],
    correct: "NAV0028002",
  },
  {
    id: "NAV0029",
    question: `Given: 
      - TC: 183°; 
      - WCA: +011°; 
      - MH: 198°; 
      - CH: 200° 
      What are TH and VAR?`,
    answers: [
      {
        id: "NAV0029001",
        answer: "TH: 194°. VAR: 004° E",
      },
      {
        id: "NAV0029002",
        answer: "TH: 194°. VAR: 004° W",
      },
      {
        id: "NAV0029003",
        answer: "TH: 172°. VAR: 004° W",
      },
      {
        id: "NAV0029004",
        answer: "TH: 172°. VAR: 004° E",
      },
    ],
    correct: "NAV0029002",
  },
  {
    id: "NAV0030",
    question: `Given: 
      - TC: 183°; 
      - WCA: +011°; 
      - MH: 198°; 
      - CH: 200° 
      What are the TH and the DEV?`,
    answers: [
      {
        id: "NAV0030001",
        answer: "TH: 172°. DEV: +002°.",
      },
      {
        id: "NAV0030002",
        answer: "TH: 172°. DEV: -002°.",
      },
      {
        id: "NAV0030003",
        answer: "TH: 194°. DEV: +002°.",
      },
      {
        id: "NAV0030004",
        answer: "TH: 194°. DEV: -002°.",
      },
    ],
    correct: "NAV0030004",
  },
  {
    id: "NAV0031",
    question: `Given: 
      - TC: 183°; 
      - WCA: +011°; 
      - MH: 198°; 
      - CH: 200° 
      What are the VAR and the DEV?`,
    answers: [
      {
        id: "NAV0031001",
        answer: `
        - VAR: 004° E. 
        - DEV: -002°.`,
      },
      {
        id: "NAV0031002",
        answer: `
        - VAR: 004° E. 
        - DEV: +002°.`,
      },
      {
        id: "NAV0031003",
        answer: `
        - VAR: 004° W. 
        - DEV: -002°.`,
      },
      {
        id: "NAV0031004",
        answer: `
        - VAR: 004° W. 
        - DEV: +002°.`,
      },
    ],
    correct: "NAV0031003",
  },
  {
    id: "NAV0032",
    question: "Where does the inclination reach its lowest value?",
    answers: [
      {
        id: "NAV0032001",
        answer: "At the magnetic equator",
      },
      {
        id: "NAV0032002",
        answer: "At the magnetic poles",
      },
      {
        id: "NAV0032003",
        answer: "At the geographic poles",
      },
      {
        id: "NAV0032004",
        answer: "At the geographic equator",
      },
    ],
    correct: "NAV0032001",
  },
  {
    id: "NAV0033",
    question: "The angle between compass north and magnetic north is called...",
    answers: [
      {
        id: "NAV0033001",
        answer: "deviation.",
      },
      {
        id: "NAV0033002",
        answer: "variation.",
      },
      {
        id: "NAV0033003",
        answer: "inclination.",
      },
      {
        id: "NAV0033004",
        answer: "WCA.",
      },
    ],
    correct: "NAV0033001",
  },
  {
    id: "NAV0034",
    question: "Which direction corresponds to 'compass north' (CN)?",
    answers: [
      {
        id: "NAV0034001",
        answer: "The angle between the aircraft heading and magnetic north",
      },
      {
        id: "NAV0034002",
        answer:
          "The direction from an arbitrary point on Earth to the geographical North Pole",
      },
      {
        id: "NAV0034003",
        answer:
          "The most northerly part of the magnetic compass in the aircraft, where the reading takes place",
      },
      {
        id: "NAV0034004",
        answer:
          "The direction to which the direct reading compass aligns due to earth's and aircraft's magnetic\nfields",
      },
    ],
    correct: "NAV0034004",
  },
  {
    id: "NAV0035",
    question:
      "The term 'isogonal' or 'isogonic line' is defined as a line on an aeronautical chart, connecting all points with the same value of...",
    answers: [
      {
        id: "NAV0035001",
        answer: "variation.",
      },
      {
        id: "NAV0035002",
        answer: "deviation.",
      },
      {
        id: "NAV0035003",
        answer: "heading.",
      },
      {
        id: "NAV0035004",
        answer: "inclination.",
      },
    ],
    correct: "NAV0035001",
  },
  {
    id: "NAV0036",
    question:
      "The term 'agonic line' is defined as a line on Earth or an aeronautical chart, connecting all points with the...",
    answers: [
      {
        id: "NAV0036001",
        answer: "deviation of 0°.",
      },
      {
        id: "NAV0036002",
        answer: "heading of 0°.",
      },
      {
        id: "NAV0036003",
        answer: "variation of 0°.",
      },
      {
        id: "NAV0036004",
        answer: "inclination of 0°.",
      },
    ],
    correct: "NAV0036003",
  },
  {
    id: "NAV0037",
    question:
      "Which are the official basic units for horizontal distances used in aeronautical navigation and their abbreviations?",
    answers: [
      {
        id: "NAV0037001",
        answer: "Nautical miles (NM), kilometers (km)",
      },
      {
        id: "NAV0037002",
        answer: "Yards (yd), meters (m)",
      },
      {
        id: "NAV0037003",
        answer: "feet (ft), inches (in)",
      },
      {
        id: "NAV0037004",
        answer: "Land miles (SM), sea miles (NM)",
      },
    ],
    correct: "NAV0037001",
  },
  {
    id: "NAV0038",
    question: "1000 ft equal...",
    answers: [
      {
        id: "NAV0038001",
        answer: "30 km.",
      },
      {
        id: "NAV0038002",
        answer: "300 m.",
      },
      {
        id: "NAV0038003",
        answer: "30 m.",
      },
      {
        id: "NAV0038004",
        answer: "3000 m.",
      },
    ],
    correct: "NAV0038002",
  },
  {
    id: "NAV0039",
    question: "5500 m equal...",
    answers: [
      {
        id: "NAV0039001",
        answer: "10000 ft.",
      },
      {
        id: "NAV0039002",
        answer: "7500 ft.",
      },
      {
        id: "NAV0039003",
        answer: "30000 ft.",
      },
      {
        id: "NAV0039004",
        answer: "18000 ft.",
      },
    ],
    correct: "NAV0039004",
  },
  {
    id: "NAV0040",
    question:
      "Which of the items on the attached checklist are related to the direct reading compass?",
    answers: [
      {
        id: "NAV0040001",
        answer: '"Turning Instruments" and "Circuit Breaker"',
      },
      {
        id: "NAV0040002",
        answer: '"Turning Instruments" only',
      },
      {
        id: "NAV0040003",
        answer: '"Gyro" and "Circuit Breaker"',
      },
      {
        id: "NAV0040004",
        answer: '"Gyro" and "Turning Instruments"',
      },
    ],
    correct: "NAV0040004",
    image: require("./images/NAV04.png"),
  },
  {
    id: "NAV0041",
    question:
      "What could be a reason for changing the runway indicators at aerodromes (e.g. from runway 06 to runway 07)?",
    answers: [
      {
        id: "NAV0041001",
        answer: "The true direction of the runway alignment has changed",
      },
      {
        id: "NAV0041002",
        answer: "The direction of the approach path has changed",
      },
      {
        id: "NAV0041003",
        answer: "The magnetic deviation of the runway location has changed",
      },
      {
        id: "NAV0041004",
        answer: "The magnetic variation of the runway location has changed",
      },
    ],
    correct: "NAV0041004",
  },
  {
    id: "NAV0042",
    question:
      "Electronic devices on board of an aeroplane have influence on the...",
    answers: [
      {
        id: "NAV0042001",
        answer: "airspeed indicator.",
      },
      {
        id: "NAV0042002",
        answer: "direct reading compass.",
      },
      {
        id: "NAV0042003",
        answer: "turn coordinator.",
      },
      {
        id: "NAV0042004",
        answer: "artificial horizon.",
      },
    ],
    correct: "NAV0042002",
  },
  {
    id: "NAV0043",
    question: "Which are the properties of a Mercator chart?",
    answers: [
      {
        id: "NAV0043001",
        answer:
          "The scale is constant, great circles are depicted as straight lines, rhumb lines are depicted as\ncurved lines",
      },
      {
        id: "NAV0043002",
        answer:
          "The scales increases with latitude, great circles are depicted as curved lines, rhumb lines are\ndepicted as straight lines",
      },
      {
        id: "NAV0043003",
        answer:
          "The scales increases with latitude, great circles are depicted as straight lines, rhumb lines are\ndepicted as curved lines",
      },
      {
        id: "NAV0043004",
        answer:
          "The scale is constant, great circles are depicted as curved lines, rhumb lines are depicted as\nstraight lines",
      },
    ],
    correct: "NAV0043002",
  },
  {
    id: "NAV0044",
    question:
      "How are rhumb lines and great circles depicted on a direct Mercator chart?",
    answers: [
      {
        id: "NAV0044001",
        answer: "Rhumb lines: straight lines\nGreat circles: curved lines",
      },
      {
        id: "NAV0044002",
        answer: "Rhumb lines: curved lines\nGreat circles: straight lines",
      },
      {
        id: "NAV0044003",
        answer: "Rhumb lines: curved lines\nGreat circles: curved lines",
      },
      {
        id: "NAV0044004",
        answer: "Rhumb lines: straight lines\nGreat circles: straight lines",
      },
    ],
    correct: "NAV0044001",
  },
  {
    id: "NAV0045",
    question: "Which are the properties of a Lambert conformal chart?",
    answers: [
      {
        id: "NAV0045001",
        answer: "The chart is conformal and nearly true to scale",
      },
      {
        id: "NAV0045002",
        answer: "The chart is conformal and an equal-area projection",
      },
      {
        id: "NAV0045003",
        answer:
          "Rhumb lines are depicted as straight lines and the chart is conformal",
      },
      {
        id: "NAV0045004",
        answer:
          "Great circles are depicted as straight lines and the chart is an equal-area projection",
      },
    ],
    correct: "NAV0045001",
  },
  {
    id: "NAV0046",
    question:
      "Which lines have to be used by the pilot to determine the aircraft's position?",
    answers: [
      {
        id: "NAV0046001",
        answer: "True bearings (QTE)",
      },
      {
        id: "NAV0046002",
        answer: "Magnetic headings (MH)",
      },
      {
        id: "NAV0046003",
        answer: "Relative bearings (RB)",
      },
      {
        id: "NAV0046004",
        answer: "Magnetic bearings (QDR)",
      },
    ],
    correct: "NAV0046001",
  },
  {
    id: "NAV0047",
    question:
      "What is the radial from VOR Brünkendorf (BKD) (53°02?N, 011°33?E) to Pritzwalk (EDBU) (53°11'N, 12°11'E)?",
    answers: [
      {
        id: "NAV0047001",
        answer: "068°",
      },
      {
        id: "NAV0047002",
        answer: "204°",
      },
      {
        id: "NAV0047003",
        answer: "248°",
      },
      {
        id: "NAV0047004",
        answer: "024°",
      },
    ],
    correct: "NAV0047001",
    image: require("./images/NAV03.png"),
  },
  {
    id: "NAV0048",
    question:
      "The distance between two airports is 220 NM. On an aeronautical navigation chart the pilot measures 40.7 cm for this distance. The chart scale is...",
    answers: [
      {
        id: "NAV0048001",
        answer: "1 : 250000.",
      },
      {
        id: "NAV0048002",
        answer: "1 : 1000000.",
      },
      {
        id: "NAV0048003",
        answer: "1 : 2000000.",
      },
      {
        id: "NAV0048004",
        answer: "1 : 500000.",
      },
    ],
    correct: "NAV0048002",
  },
  {
    id: "NAV0049",
    question:
      "Given the following information, what is the aircraft position at the cross bearing? VOR Hamburg (HAM) (53°41?N, 010°12?E): Radial 119° VOR Brünkendorf (BKD) (53°02?N, 011°33?E): Radial 320°",
    answers: [
      {
        id: "NAV0049001",
        answer: "52°20'N, 10°10'E",
      },
      {
        id: "NAV0049002",
        answer: "52°10'N, 10°20'E",
      },
      {
        id: "NAV0049003",
        answer: "53°20'N, 11°10'E",
      },
      {
        id: "NAV0049004",
        answer: "54°40'N, 12°50'E",
      },
    ],
    correct: "NAV0049003",
    image: require("./images/NAV03.png"),
  },
  {
    id: "NAV0050",
    question:
      "What is the distance from VOR Brünkendorf (BKD) (53°02?N, 011°33?E) to Pritzwalk (EDBU) (53°11'N, 12°11'E)?",
    answers: [
      {
        id: "NAV0050001",
        answer: "42 km",
      },
      {
        id: "NAV0050002",
        answer: "42 NM",
      },
      {
        id: "NAV0050003",
        answer: "24 NM",
      },
      {
        id: "NAV0050004",
        answer: "24 km",
      },
    ],
    correct: "NAV0050003",
    image: require("./images/NAV03.png"),
  },
  {
    id: "NAV0051",
    question:
      "A distance of 7.5 cm on an aeronautical chart represents a distance of 60.745 NM in reality. What is the chart scale?",
    answers: [
      {
        id: "NAV0051001",
        answer: "1 : 1500000",
      },
      {
        id: "NAV0051002",
        answer: "1 : 1 000000",
      },
      {
        id: "NAV0051003",
        answer: "1 : 500000",
      },
      {
        id: "NAV0051004",
        answer: "1 : 150000",
      },
    ],
    correct: "NAV0051001",
  },
  {
    id: "NAV0052",
    question:
      "For a short flight from A to B the pilot extracts the following information from an aeronautical chart: True course: 245°. Magnetic variation: 7° W The magnetic course (MC) equals...",
    answers: [
      {
        id: "NAV0052001",
        answer: "245°.",
      },
      {
        id: "NAV0052002",
        answer: "007°.",
      },
      {
        id: "NAV0052003",
        answer: "252°.",
      },
      {
        id: "NAV0052004",
        answer: "238°.",
      },
    ],
    correct: "NAV0052003",
  },
  {
    id: "NAV0053",
    question:
      "An aircraft is flying with an indicated airspeed (IAS) of 150 kt at 8000 ft MSL. According to the rule of thumb, the true airspeed (TAS) equals...",
    answers: [
      {
        id: "NAV0053001",
        answer: "150 kt.",
      },
      {
        id: "NAV0053002",
        answer: "208 kt.",
      },
      {
        id: "NAV0053003",
        answer: "174 kt.",
      },
      {
        id: "NAV0053004",
        answer: "142 kt.",
      },
    ],
    correct: "NAV0053003",
  },
  {
    id: "NAV0054",
    question: `Given: 
        - True course from A to B: 250°. 
        - Ground distance: 210 NM. TAS: 130 kt. 
        - Headwind component: 15 kt. 
        - Estimated time of departure (ETD): 0915 UTC. 
      The estimated time of arrival (ETA) is...`,
    answers: [
      {
        id: "NAV0054001",
        answer: "1052 UTC.",
      },
      {
        id: "NAV0054002",
        answer: "1005 UTC.",
      },
      {
        id: "NAV0054003",
        answer: "1105 UTC.",
      },
      {
        id: "NAV0054004",
        answer: "1115 UTC.",
      },
    ],
    correct: "NAV0054003",
  },
  {
    id: "NAV0055",
    question: `Given: 
        - True course from A to B: 283°. 
        - Ground distance: 75 NM. TAS: 105 kt. 
        - Headwind component: 12 kt. 
        - Estimated time of departure (ETD): 1242 UTC. 
      The estimated time of arrival (ETA) is...`,
    answers: [
      {
        id: "NAV0055001",
        answer: "1320 UTC",
      },
      {
        id: "NAV0055002",
        answer: "1356 UTC",
      },
      {
        id: "NAV0055003",
        answer: "1430 UTC",
      },
      {
        id: "NAV0055004",
        answer: "1330 UTC",
      },
    ],
    correct: "NAV0055004",
  },
  {
    id: "NAV0056",
    question: `Given: 
        - True course from A to B: 352°. 
        - Ground distance: 100 NM. GS: 107 kt. 
        - Estimated time of departure (ETD): 0933 UTC. 
      The estimated time of arrival (ETA) is...`,
    answers: [
      {
        id: "NAV0056001",
        answer: "1146 UTC.",
      },
      {
        id: "NAV0056002",
        answer: "1129 UTC.",
      },
      {
        id: "NAV0056003",
        answer: "1045 UTC.",
      },
      {
        id: "NAV0056004",
        answer: "1029 UTC.",
      },
    ],
    correct: "NAV0056004",
  },
  {
    id: "NAV0057",
    question:
      "An aircraft travels 100 km in 56 minutes. The ground speed (GS) equals...",
    answers: [
      {
        id: "NAV0057001",
        answer: "58 km/h.",
      },
      {
        id: "NAV0057002",
        answer: "198 kt.",
      },
      {
        id: "NAV0057003",
        answer: "93 kt.",
      },
      {
        id: "NAV0057004",
        answer: "107 km/h.",
      },
    ],
    correct: "NAV0057004",
  },
  {
    id: "NAV0058",
    question:
      "An aircraft travels 110 NM within 01:25. The ground speed (GS) equals...",
    answers: [
      {
        id: "NAV0058001",
        answer: "120 km/h.",
      },
      {
        id: "NAV0058002",
        answer: "78 kt.",
      },
      {
        id: "NAV0058003",
        answer: "160 km/h.",
      },
      {
        id: "NAV0058004",
        answer: "86 kt.",
      },
    ],
    correct: "NAV0058002",
  },
  {
    id: "NAV0059",
    question:
      "What is the required flight time for a distance of 236 NM with a ground speed of 134 kt?",
    answers: [
      {
        id: "NAV0059001",
        answer: "0:46 h",
      },
      {
        id: "NAV0059002",
        answer: "0:34 h",
      },
      {
        id: "NAV0059003",
        answer: "1:34 h",
      },
      {
        id: "NAV0059004",
        answer: "1:46 h",
      },
    ],
    correct: "NAV0059004",
  },
  {
    id: "NAV0060",
    question:
      "An aircraft is flying with a true airspeed (TAS) of 120 kt and experiences 35 kt tailwind. How much time is needed for a distance of 185 NM?",
    answers: [
      {
        id: "NAV0060001",
        answer: "1 h 12 min",
      },
      {
        id: "NAV0060002",
        answer: "0 h 50 min",
      },
      {
        id: "NAV0060003",
        answer: "1 h 32 min",
      },
      {
        id: "NAV0060004",
        answer: "2 h 11 min",
      },
    ],
    correct: "NAV0060001",
  },
  {
    id: "NAV0061",
    question:
      "An aircraft is flying with a true airspeed (TAS) of 180 kt and a headwind component of 25kt for 2 hours and 25 minutes. The distance flown equals...",
    answers: [
      {
        id: "NAV0025001",
        answer: "693 NM.",
      },
      {
        id: "NAV0025002",
        answer: "202 NM.",
      },
      {
        id: "NAV0025003",
        answer: "375 NM.",
      },
      {
        id: "NAV0025004",
        answer: "435 NM.",
      },
    ],
    correct: "NAV0025003",
  },
  {
    id: "NAV0062",
    question: `Given: 
        - Calibrated airspeed (CAS): 155 kt. 
        - Flight level (FL) 80. 
        - Outside air temperature (OAT): +15° C. 
        - The true airspeed (TAS) equals...`,
    answers: [
      {
        id: "NAV0062001",
        answer: "170 kts.",
      },
      {
        id: "NAV0062002",
        answer: "155 kts.",
      },
      {
        id: "NAV0062003",
        answer: "1 80 kts.",
      },
      {
        id: "NAV0062004",
        answer: "134 kts.",
      },
    ],
    correct: "NAV0062003",
  },
  {
    id: "NAV0063",
    question:
      "What is the true course (TC) from Uelzen (EDVU) (52°59?N, 10°28?E) to Neustadt (EDAN) (53°22'N, 011°37'E)?",
    answers: [
      {
        id: "NAV0063001",
        answer: "235°",
      },
      {
        id: "NAV0063002",
        answer: "055°",
      },
      {
        id: "NAV0063003",
        answer: "061°",
      },
      {
        id: "NAV0063004",
        answer: "241°",
      },
    ],
    correct: "NAV0063003",
    image: require("./images/NAV03.png"),
  },
  {
    id: "NAV0064",
    question:
      "An aircraft is flying at aFL 75 with an outside air temperature (OAT) of -9°C. The QNH altitude is 6500 ft. The true altitude equals...",
    answers: [
      {
        id: "NAV0064001",
        answer: "7000 ft.",
      },
      {
        id: "NAV0064002",
        answer: "6750 ft.",
      },
      {
        id: "NAV0064003",
        answer: "6250 ft.",
      },
      {
        id: "NAV0064004",
        answer: "6500 ft.",
      },
    ],
    correct: "NAV0064003",
  },
  {
    id: "NAV0065",
    question:
      "What is the distance from Neustadt (EDAN) (53°22'N, 011°37'E) to Uelzen (EDVU) (52°59?N, 10°28?E)?",
    answers: [
      {
        id: "NAV0065001",
        answer: "78 km",
      },
      {
        id: "NAV0065002",
        answer: "46 km",
      },
      {
        id: "NAV0065003",
        answer: "46 NM",
      },
      {
        id: "NAV0065004",
        answer: "78 NM",
      },
    ],
    correct: "NAV0065003",
    image: require("./images/NAV03.png"),
  },
  {
    id: "NAV0066",
    question:
      "An aircraft is flying at a pressure altitude of 7000 feet with an outside air temperature (OAT) of +11°C. The QNH altitude is 6500 ft. The true altitude equals...",
    answers: [
      {
        id: "NAV0066001",
        answer: "6250 ft.",
      },
      {
        id: "NAV0066002",
        answer: "6750 ft.",
      },
      {
        id: "NAV0066003",
        answer: "7000 ft.",
      },
      {
        id: "NAV0066004",
        answer: "6500 ft.",
      },
    ],
    correct: "NAV0066002",
  },
  {
    id: "NAV0067",
    question:
      "An aircraft is flying at a pressure altitude of 7000 feet with an outside air temperature (OAT) of +21°C. The QNH altitude is 6500 ft. The true altitude equals...",
    answers: [
      {
        id: "NAV0067001",
        answer: "7000 ft.",
      },
      {
        id: "NAV0067002",
        answer: "6750 ft.",
      },
      {
        id: "NAV0067003",
        answer: "6500 ft.",
      },
      {
        id: "NAV0067004",
        answer: "6250 ft.",
      },
    ],
    correct: "NAV0067001",
  },
  {
    id: "NAV0068",
    question: `Given: 
        - True course: 255°. 
        - TAS: 100 kt. 
        - Wind: 200°/10 kt. 
      The true heading equals...`,
    answers: [
      {
        id: "NAV0068001",
        answer: "275°.",
      },
      {
        id: "NAV0068002",
        answer: "250°.",
      },
      {
        id: "NAV0068003",
        answer: "265°.",
      },
      {
        id: "NAV0068004",
        answer: "245°.",
      },
    ],
    correct: "NAV0068002",
  },
  {
    id: "NAV0069",
    question: `Given: 
        - True course: 165°. 
        - TAS: 90 kt. Wind: 130°/20 kt. 
        - Distance: 153 NM. 
        - The true heading equals...`,
    answers: [
      {
        id: "NAV0069001",
        answer: "165°.",
      },
      {
        id: "NAV0069002",
        answer: "158°.",
      },
      {
        id: "NAV0069003",
        answer: "126°.",
      },
      {
        id: "NAV0069004",
        answer: "152°.",
      },
    ],
    correct: "NAV0069002",
  },
  {
    id: "NAV0070",
    question: `Given: 
        - Ground speed (GS): 160 kt. 
        - True course (TC): 177°. 
        - Wind vector (W/WS): 140°/20 kt. 
        - The true heading (TH) equals...`,
    answers: [
      {
        id: "NAV0070001",
        answer: "180°.",
      },
      {
        id: "NAV0070002",
        answer: "169°.",
      },
      {
        id: "NAV0070003",
        answer: "184°.",
      },
      {
        id: "NAV0070004",
        answer: "173°.",
      },
    ],
    correct: "NAV0070004",
  },
  {
    id: "NAV0071",
    question:
      "An aircraft is following a true course (TC) of 220° at a constant TAS of 220 kt. The wind vector is 270°/50 kt. The ground speed (GS) equals...",
    answers: [
      {
        id: "NAV0071001",
        answer: "170 kt.",
      },
      {
        id: "NAV0071002",
        answer: "185 kt.",
      },
      {
        id: "NAV0071003",
        answer: "255 kt.",
      },
      {
        id: "NAV0071004",
        answer: "135 kt.",
      },
    ],
    correct: "NAV0071002",
  },
  {
    id: "NAV0072",
    question:
      "An aircraft is following a true course (TC) of 040° at a constant true airspeed (TAS) of 180kt. The wind vector is 350°/30 kt. The groundspeed (GS) equals...",
    answers: [
      {
        id: "NAV0180001",
        answer: "172 kt.",
      },
      {
        id: "NAV0180002",
        answer: "159 kt.",
      },
      {
        id: "NAV0180003",
        answer: "155 kt.",
      },
      {
        id: "NAV0180004",
        answer: "168 kt.",
      },
    ],
    correct: "NAV0180002",
  },
  {
    id: "NAV0073",
    question:
      "An aircraft is following a true course (TC) of 040° at a constant true airspeed (TAS) of 180 kt. The wind vector is 350°/30 kt. The wind correction angle (WCA) equals...",
    answers: [
      {
        id: "NAV0180001",
        answer: "+ 11°",
      },
      {
        id: "NAV0180002",
        answer: "+ 5°",
      },
      {
        id: "NAV0180003",
        answer: "- 9°",
      },
      {
        id: "NAV0180004",
        answer: "- 7°",
      },
    ],
    correct: "NAV0180004",
  },
  {
    id: "NAV0074",
    question: `Given: 
        - True course: 270°. 
        - TAS: 100 kt. 
        - Wind: 090°/25 kt. 
        - Distance: 100 NM. 
        - The ground speed (GS) equals...`,
    answers: [
      {
        id: "NAV0074001",
        answer: "131 kt.",
      },
      {
        id: "NAV0074002",
        answer: "117 kt.",
      },
      {
        id: "NAV0074003",
        answer: "120 kt.",
      },
      {
        id: "NAV0074004",
        answer: "125 kt.",
      },
    ],
    correct: "NAV0074004",
  },
  {
    id: "NAV0075",
    question: `Given: 
      - True course: 270°. 
      - TAS: 100 kt. 
      - Wind: 090°/25 kt. 
      - Distance: 100 NM. 
      - The flight time equals...`,
    answers: [
      {
        id: "NAV0075001",
        answer: "62 Min.",
      },
      {
        id: "NAV0075002",
        answer: "37 Min.",
      },
      {
        id: "NAV0075003",
        answer: "84 Min.",
      },
      {
        id: "NAV0075004",
        answer: "48 Min.",
      },
    ],
    correct: "NAV0075004",
  },
  {
    id: "NAV0076",
    question:
      "An aircraft is following a true course (TC) of 040° at a constant true airspeed (TAS) of 180 kt. The wind vector is 350°/30 kt. The wind correction angle (WCA) equals...",
    answers: [
      {
        id: "NAV0180001",
        answer: "3° right.",
      },
      {
        id: "NAV0180002",
        answer: "7° left.",
      },
      {
        id: "NAV0180003",
        answer: "7° right.",
      },
      {
        id: "NAV0180004",
        answer: "3° left.",
      },
    ],
    correct: "NAV0180002",
  },
  {
    id: "NAV0077",
    question: `Given: 
      - True course: 120°. 
      - TAS: 120 kt. 
      - Wind: 150°/12 kt. 
      - The WCA equals...`,
    answers: [
      {
        id: "NAV0077001",
        answer: "3° to the left.",
      },
      {
        id: "NAV0077002",
        answer: "6° to the left.",
      },
      {
        id: "NAV0077003",
        answer: "6° to the right.",
      },
      {
        id: "NAV0077004",
        answer: "3° to the right.",
      },
    ],
    correct: "NAV0077004",
  },
  {
    id: "NAV0078",
    question:
      "The distance from 'A' to 'B' measures 120 NM. At a distance of 55 NM from 'A' the pilot realizes a deviation of 7 NM to the right. What approximate course change must be made to reach 'B' directly?",
    answers: [
      {
        id: "NAV0078001",
        answer: "14° left",
      },
      {
        id: "NAV0078002",
        answer: "6° left",
      },
      {
        id: "NAV0078003",
        answer: "8° left",
      },
      {
        id: "NAV0078004",
        answer: "15° left",
      },
    ],
    correct: "NAV0078001",
  },
  {
    id: "NAV0079",
    question:
      "An aeroplane has a heading of 090°. The distance which has to be flown is 90 NM. After 45 NM the aeroplane is 4.5 NM north of the planned flight path. What is the corrected heading to reach the arrival aerodrome directly?",
    answers: [
      {
        id: "NAV0079001",
        answer: "6° to the right",
      },
      {
        id: "NAV0079002",
        answer: "18° to the right",
      },
      {
        id: "NAV0079003",
        answer: "12° to the right",
      },
      {
        id: "NAV0079004",
        answer: "9° to the right",
      },
    ],
    correct: "NAV0079003",
  },
  {
    id: "NAV0080",
    question: "What is the meaning of the 1:60 rule?",
    answers: [
      {
        id: "NAV0080001",
        answer: "6 NM lateral offset at 1° drift after 10 NM",
      },
      {
        id: "NAV0080002",
        answer: "60 NM lateral offset at 1° drift after 1 NM",
      },
      {
        id: "NAV0080003",
        answer: "10 NM lateral offset at 1° drift after 60 NM",
      },
      {
        id: "NAV0080004",
        answer: "1 NM lateral offset at 1° drift after 60 NM",
      },
    ],
    correct: "NAV0080004",
  },
  {
    id: "NAV0081",
    question:
      "An aircraft is flying from 'A' to 'B' (distance 220 NM) at an average ground speed (GS) of 120 kt. It departs 'A' at 1200 UTC. After 70 NM along the course from 'A', the aircraft is 5 min ahead of the planned schedule. Using the actual GS, what is the revised estimated time of arrival (ETA) at B?",
    answers: [
      {
        id: "NAV0081001",
        answer: "1330 UTC",
      },
      {
        id: "NAV0081002",
        answer: "1335 UTC",
      },
      {
        id: "NAV0081003",
        answer: "1340 UTC",
      },
      {
        id: "NAV0081004",
        answer: "1345 UTC",
      },
    ],
    correct: "NAV0081002",
  },
  {
    id: "NAV0082",
    question:
      "Assume calm wind and an aircraft descending from 9000 ft to 1500 ft. The rate of descent (ROD) equals 1200 ft/min. The elapsed time will be...",
    answers: [
      {
        id: "NAV0082001",
        answer: "8 min.",
      },
      {
        id: "NAV0082002",
        answer: "1 2 min.",
      },
      {
        id: "NAV0082003",
        answer: "15 min.",
      },
      {
        id: "NAV0082004",
        answer: "6 min.",
      },
    ],
    correct: "NAV0082004",
  },
  {
    id: "NAV0083",
    question:
      "Assume zero wind and an aircraft descending from 7500 ft to 1200 ft with an average true airspeed (TAS) during the descent of 105 kt. The rate of descent (ROD) equals 800 ft/min. The elapsed time will be...",
    answers: [
      {
        id: "NAV0083001",
        answer: "12 Min.",
      },
      {
        id: "NAV0083002",
        answer: "15 Min.",
      },
      {
        id: "NAV0083003",
        answer: "6 Min.",
      },
      {
        id: "NAV0083004",
        answer: "8 Min.",
      },
    ],
    correct: "NAV0083004",
  },
  {
    id: "NAV0084",
    question: "Which answer completes the flight plan (marked cells)?",
    answers: [
      {
        id: "NAV0084001",
        answer: `
        - TH: 173°. 
        - MH: 174°. 
        - MC: 178°.
        `,
      },
      {
        id: "NAV0084002",
        answer: `
        - TH: 185°. 
        - MH: 184°. 
        - MC: 178°.
        `,
      },
      {
        id: "NAV0084003",
        answer: `
        - TH: 173°. 
        - MH: 184°. 
        - MC: 178°.
        `,
      },
      {
        id: "NAV0084004",
        answer: `
        - TH: 185°. 
        - MH: 185°. 
        - MC: 180°.
        `,
      },
    ],
    correct: "NAV0084002",
    image: require("./images/NAV14.png"),
  },
  {
    id: "NAV0085",
    question:
      "What radio navigation aid can be received with the attached aerial?",
    answers: [
      {
        id: "NAV0085001",
        answer: "VOR",
      },
      {
        id: "NAV0085002",
        answer: "VDF",
      },
      {
        id: "NAV0085003",
        answer: "NDB",
      },
      {
        id: "NAV0085004",
        answer: "DME",
      },
    ],
    correct: "NAV0085003",
    image: require("./images/NAV17.png"),
  },
  {
    id: "NAV0086",
    question:
      "The approximate propagation speed of electromagnetic waves is...",
    answers: [
      {
        id: "NAV0086001",
        answer: "300000 m/s.",
      },
      {
        id: "NAV0086002",
        answer: "300000 NM/s.",
      },
      {
        id: "NAV0086003",
        answer: "300000 ft/s.",
      },
      {
        id: "NAV0086004",
        answer: "300000 km/s.",
      },
    ],
    correct: "NAV0086004",
  },
  {
    id: "NAV0087",
    question: "Radio waves within the LF and MF range (e.g. NDB) travel as...",
    answers: [
      {
        id: "NAV0087001",
        answer: "sky wave and as ground / surface wave.",
      },
      {
        id: "NAV0087002",
        answer: "ground / surface wave.",
      },
      {
        id: "NAV0087003",
        answer: "sky wave.",
      },
      {
        id: "NAV0087004",
        answer: "space wave (quasi-optical).",
      },
    ],
    correct: "NAV0087001",
  },
  {
    id: "NAV0088",
    question: "Radio waves within the VHF range (e.g. VOR) travel as...",
    answers: [
      {
        id: "NAV0088001",
        answer: "sky wave.",
      },
      {
        id: "NAV0088002",
        answer: "sky wave and ground / surface wave.",
      },
      {
        id: "NAV0088003",
        answer: "space wave (quasi-optical).",
      },
      {
        id: "NAV0088004",
        answer: "ground / surface wave.",
      },
    ],
    correct: "NAV0088003",
  },
  {
    id: "NAV0089",
    question: "Quasi-optical waves travel...",
    answers: [
      {
        id: "NAV0089001",
        answer:
          "through the air and are influenced (e.g. reflected) by the ionosphere.",
      },
      {
        id: "NAV0089002",
        answer: "along the surface of the earth.",
      },
      {
        id: "NAV0089003",
        answer: "along the surface of the earth, but are absorbed by the sea.",
      },
      {
        id: "NAV0089004",
        answer:
          "through the air directly from the transmitter to the receiver.",
      },
    ],
    correct: "NAV0089004",
  },
  {
    id: "NAV0090",
    question: "A VHF direction finder (VDF) can determine...",
    answers: [
      {
        id: "NAV0090001",
        answer: "true courses.",
      },
      {
        id: "NAV0090002",
        answer: "magnetic bearings.",
      },
      {
        id: "NAV0090003",
        answer: "slant ranges.",
      },
      {
        id: "NAV0090004",
        answer: "approach speeds.",
      },
    ],
    correct: "NAV0090002",
  },
  {
    id: "NAV0091",
    question:
      "Which equipment is needed on board of an aircraft to use a VHF direction finder (VDF)?",
    answers: [
      {
        id: "NAV0091001",
        answer: "A VHF radio",
      },
      {
        id: "NAV0091002",
        answer: "A relative bearing indicator (RBI)",
      },
      {
        id: "NAV0091003",
        answer: "At least two VHF aerials",
      },
      {
        id: "NAV0091004",
        answer: "A VDF receiver",
      },
    ],
    correct: "NAV0091001",
  },
  {
    id: "NAV0092",
    question: `Given: 
    - QDM: 138° 
    - VAR: 10° E 
    The QUJ equals...`,
    answers: [
      {
        id: "NAV0092001",
        answer: "148°.",
      },
      {
        id: "NAV0092002",
        answer: "168°.",
      },
      {
        id: "NAV0092003",
        answer: "328°.",
      },
      {
        id: "NAV0092004",
        answer: "318°.",
      },
    ],
    correct: "NAV0092001",
  },
  {
    id: "NAV0093",
    question: `Given: 
    - QTE: 229° 
    - VAR: 10° W 
    The QDM equals...`,
    answers: [
      {
        id: "NAV0093001",
        answer: "039°.",
      },
      {
        id: "NAV0093002",
        answer: "049°.",
      },
      {
        id: "NAV0093003",
        answer: "059°.",
      },
      {
        id: "NAV0093004",
        answer: "239°.",
      },
    ],
    correct: "NAV0093003",
  },
  {
    id: "NAV0094",
    question: `Given: 
    - QDR: 022° 
    - VAR: 10° E 
    The QTE equals...`,
    answers: [
      {
        id: "NAV0094001",
        answer: "212°.",
      },
      {
        id: "NAV0094002",
        answer: "052°.",
      },
      {
        id: "NAV0094003",
        answer: "032°.",
      },
      {
        id: "NAV0094004",
        answer: "202°.",
      },
    ],
    correct: "NAV0094003",
  },
  {
    id: "NAV0095",
    question: `Given: 
    - QDM: 248° 
    - VAR: 10° W 
    The QTE is...`,
    answers: [
      {
        id: "NAV0095001",
        answer: "058°.",
      },
      {
        id: "NAV0095002",
        answer: "238°.",
      },
      {
        id: "NAV0095003",
        answer: "078°.",
      },
      {
        id: "NAV0095004",
        answer: "258°.",
      },
    ],
    correct: "NAV0095001",
  },
  {
    id: "NAV0096",
    question: `Given: 
    - QDR: 067° 
    - VAR: 5° E 
    The QDM equals...`,
    answers: [
      {
        id: "NAV0096001",
        answer: "252°.",
      },
      {
        id: "NAV0096002",
        answer: "072°.",
      },
      {
        id: "NAV0096003",
        answer: "257°.",
      },
      {
        id: "NAV0096004",
        answer: "247°.",
      },
    ],
    correct: "NAV0096004",
  },
  {
    id: "NAV0097",
    question: `Given: 
      - QDR: 152° 
      - VAR: 5° W 
      - DEV: 5° E 
    The QUJ equals...`,
    answers: [
      {
        id: "NAV0097001",
        answer: "147°.",
      },
      {
        id: "NAV0097002",
        answer: "327°.",
      },
      {
        id: "NAV0097003",
        answer: "332°.",
      },
      {
        id: "NAV0097004",
        answer: "317°.",
      },
    ],
    correct: "NAV0097002",
  },
  {
    id: "NAV0098",
    question: `Given: 
    - QTE: 203° 
    - VAR: 10° E 
    - The QDR equals...`,
    answers: [
      {
        id: "NAV0098001",
        answer: "013°.",
      },
      {
        id: "NAV0098002",
        answer: "213°.",
      },
      {
        id: "NAV0098003",
        answer: "023°.",
      },
      {
        id: "NAV0098004",
        answer: "193°.",
      },
    ],
    correct: "NAV0098004",
  },
  {
    id: "NAV0099",
    question: `Given: 
    - QTE: 248° 
    - VAR: 10° W 
    The QDR equals...`,
    answers: [
      {
        id: "NAV0099001",
        answer: "238°.",
      },
      {
        id: "NAV0099002",
        answer: "258°.",
      },
      {
        id: "NAV0099003",
        answer: "078°.",
      },
      {
        id: "NAV0099004",
        answer: "068°.",
      },
    ],
    correct: "NAV0099002",
  },
  {
    id: "NAV0100",
    question: `Given: 
    - QDM: 134° 
    - VAR: 5° W 
    The QTE equals...`,
    answers: [
      {
        id: "NAV0100001",
        answer: "129°.",
      },
      {
        id: "NAV0100002",
        answer: "314°.",
      },
      {
        id: "NAV0100003",
        answer: "309°.",
      },
      {
        id: "NAV0100004",
        answer: "299°.",
      },
    ],
    correct: "NAV0100003",
  },
  {
    id: "NAV0101",
    question:
      "The pilot receives a QDR of 225° from the VDF ground station. Where is the aircraft located in relation to the ground station?",
    answers: [
      {
        id: "NAV0101001",
        answer: "Northeast",
      },
      {
        id: "NAV0101002",
        answer: "Southwest",
      },
      {
        id: "NAV0101003",
        answer: "Southeast",
      },
      {
        id: "NAV0101004",
        answer: "Northwest",
      },
    ],
    correct: "NAV0101002",
  },
  {
    id: "NAV0102",
    question: "The term QDR means...",
    answers: [
      {
        id: "NAV0102001",
        answer: "true bearing from the station to the aircraft.",
      },
      {
        id: "NAV0102002",
        answer: "true bearing from the aircraft to the station.",
      },
      {
        id: "NAV0102003",
        answer: "magnetic bearing from the aircraft to the station.",
      },
      {
        id: "NAV0102004",
        answer: "magnetic bearing from the station to the aircraft.",
      },
    ],
    correct: "NAV0102004",
  },
  {
    id: "NAV0103",
    question: "The term QTE means...",
    answers: [
      {
        id: "NAV0103001",
        answer: "magnetic bearing from the station to the aircraft.",
      },
      {
        id: "NAV0103002",
        answer: "true bearing from the station to the aircraft.",
      },
      {
        id: "NAV0103003",
        answer: "true bearing from the aircraft to the station.",
      },
      {
        id: "NAV0103004",
        answer: "magnetic bearing from the aircraft to the station.",
      },
    ],
    correct: "NAV0103002",
  },
  {
    id: "NAV0104",
    question:
      "A pilot receives a QDR of 135° from the VDF ground station. Where is the aircraft located in relation to the ground station?",
    answers: [
      {
        id: "NAV0104001",
        answer: "Northeast",
      },
      {
        id: "NAV0104002",
        answer: "Southeast",
      },
      {
        id: "NAV0104003",
        answer: "Southwest.",
      },
      {
        id: "NAV0104004",
        answer: "Northwest",
      },
    ],
    correct: "NAV0104002",
  },
  {
    id: "NAV0105",
    question:
      "A pilot receives a QDR of 315° from the VDF ground station. Where is the aircraft located in relation to the ground station?",
    answers: [
      {
        id: "NAV0105001",
        answer: "Northwest",
      },
      {
        id: "NAV0105002",
        answer: "Southeast",
      },
      {
        id: "NAV0105003",
        answer: "Southwest",
      },
      {
        id: "NAV0105004",
        answer: "Northeast",
      },
    ],
    correct: "NAV0105001",
  },
  {
    id: "NAV0106",
    question: "The VDF range depends on...",
    answers: [
      {
        id: "NAV0106001",
        answer: "the range of the ground / surface wave.",
      },
      {
        id: "NAV0106002",
        answer: "the aircraft's speed.",
      },
      {
        id: "NAV0106003",
        answer: "the condition of the ionosphere.",
      },
      {
        id: "NAV0106004",
        answer: "the aircraft's altitude.",
      },
    ],
    correct: "NAV0106004",
  },
  {
    id: "NAV0107",
    question:
      "Which equipment is needed on board of an aircraft to receive signals from a non-directional beacon (NDB)?",
    answers: [
      {
        id: "NAV0107001",
        answer: "Secondary surveillance radar (SSR)",
      },
      {
        id: "NAV0107002",
        answer: "Horizontal situation indicator (HSI)",
      },
      {
        id: "NAV0107003",
        answer: "Automatic direction finder (ADF)",
      },
      {
        id: "NAV0107004",
        answer: "Course deviation indicator (CDI)",
      },
    ],
    correct: "NAV0107003",
  },
  {
    id: "NAV0108",
    question:
      "Non-directional beacons (NDBs) transmit within which frequency band?",
    answers: [
      {
        id: "NAV0108001",
        answer: "Very high frequency (VHF)",
      },
      {
        id: "NAV0108002",
        answer: "Very low frequency (VLF) and low frequency (LF)",
      },
      {
        id: "NAV0108003",
        answer: "High frequency (HF)",
      },
      {
        id: "NAV0108004",
        answer: "Low frequency (LF) and medium frequency (MF)",
      },
    ],
    correct: "NAV0108004",
  },
  {
    id: "NAV0109",
    question:
      "A pilot wants to approach an NDB on QDM 090°. The aircraft flies for about 5 minutes with a magnetic heading (MH) of 095° and the RBI indication of 355°. After 6 minutes the RBI indicates 358°. Which statement is correct?",
    answers: [
      {
        id: "NAV0109001",
        answer:
          "The crosswind component increased; the pilot has to increase the MH",
      },
      {
        id: "NAV0109002",
        answer:
          "The crosswind component decreased; the pilot has to decrease the MH",
      },
      {
        id: "NAV0109003",
        answer:
          "The crosswind component increased; the pilot has to decrease the MH",
      },
      {
        id: "NAV0109004",
        answer:
          "The crosswind component decreased; the pilot has to increase the MH",
      },
    ],
    correct: "NAV0109001",
  },
  {
    id: "NAV0110",
    question:
      "The pilot wants to proceed directly to the beacon. The wind is calm. The pilot should follow a QDM of...",
    answers: [
      {
        id: "NAV0110001",
        answer: "080°.",
      },
      {
        id: "NAV0110002",
        answer: "230°.",
      },
      {
        id: "NAV0110003",
        answer: "260°.",
      },
      {
        id: "NAV0110004",
        answer: "200°.",
      },
    ],
    correct: "NAV0110003",
    image: require("./images/NAV6.png"),
  },
  {
    id: "NAV0111",
    question:
      "What is the difference between a locator beacon and a non-directional beacon (NDB)?",
    answers: [
      {
        id: "NAV0111001",
        answer: "Locator beacons transmit on request only",
      },
      {
        id: "NAV0111002",
        answer: "Locator beacons have a higher range than NDBs",
      },
      {
        id: "NAV0111003",
        answer: "Locator beacons have a lower range than NDBs",
      },
      {
        id: "NAV0111004",
        answer: "Locator beacons transmit more precisely",
      },
    ],
    correct: "NAV0111003",
  },
  {
    id: "NAV0112",
    question:
      "The range of NDBs transmitting in the medium frequency range is greatest...",
    answers: [
      {
        id: "NAV0112001",
        answer: "in the daytime.",
      },
      {
        id: "NAV0112002",
        answer: "before midday.",
      },
      {
        id: "NAV0112003",
        answer: "at night.",
      },
      {
        id: "NAV0112004",
        answer: "on midday.",
      },
    ],
    correct: "NAV0112003",
  },
  {
    id: "NAV0113",
    question: "The shoreline effect is greatest with radio wave propagation...",
    answers: [
      {
        id: "NAV0113001",
        answer: "at a right angle to the coast; aircraft above 6000 ft.",
      },
      {
        id: "NAV0113002",
        answer: "at a right angle to the coast; aircraft below 6000 ft.",
      },
      {
        id: "NAV0113003",
        answer: "at an acute angle to the coast; aircraft above 6000 ft.",
      },
      {
        id: "NAV0113004",
        answer: "at an acute angle to the coast; aircraft below 6000 ft.",
      },
    ],
    correct: "NAV0113004",
  },
  {
    id: "NAV0114",
    question: "Fading in LF/MF frequency range occurs mainly...",
    answers: [
      {
        id: "NAV0114001",
        answer: "during the night.",
      },
      {
        id: "NAV0114002",
        answer: "at midday.",
      },
      {
        id: "NAV0114003",
        answer: "in the late afternoon.",
      },
      {
        id: "NAV0114004",
        answer: "in the daytime.",
      },
    ],
    correct: "NAV0114001",
  },
  {
    id: "NAV0115",
    question:
      "The progress of an electromagnetic oscillation can be described by the...",
    answers: [
      {
        id: "NAV0115001",
        answer: "phase angle.",
      },
      {
        id: "NAV0115002",
        answer: "frequency angle.",
      },
      {
        id: "NAV0115003",
        answer: "amplitude angle.",
      },
      {
        id: "NAV0115004",
        answer: "wave angle.",
      },
    ],
    correct: "NAV0115001",
  },
  {
    id: "NAV0116",
    question: "When transmitter and receiver are moving towards each other...",
    answers: [
      {
        id: "NAV0116001",
        answer: "the perceived frequency increases.",
      },
      {
        id: "NAV0116002",
        answer: "the perceived frequency equals the transmitted frequency.",
      },
      {
        id: "NAV0116003",
        answer: "the perceived frequency decreases.",
      },
      {
        id: "NAV0116004",
        answer: "the frequency varies, but the wavelength remains constant.",
      },
    ],
    correct: "NAV0116001",
  },
  {
    id: "NAV0117",
    question:
      "When transmitter and receiver are moving away from each other...",
    answers: [
      {
        id: "NAV0117001",
        answer: "the perceived frequency equals the transmitted frequency.",
      },
      {
        id: "NAV0117002",
        answer: "the frequency varies, but the wavelength remains constant.",
      },
      {
        id: "NAV0117003",
        answer: "the perceived frequency increases.",
      },
      {
        id: "NAV0117004",
        answer: "the perceived frequency decreases.",
      },
    ],
    correct: "NAV0117004",
  },
  {
    id: "NAV0118",
    question: "VOR radials are defined based on the principle of...",
    answers: [
      {
        id: "NAV0118001",
        answer: "phase comparison of two signals.",
      },
      {
        id: "NAV0118002",
        answer: "frequency comparison of two signals.",
      },
      {
        id: "NAV0118003",
        answer: "pulse comparison of two signals.",
      },
      {
        id: "NAV0118004",
        answer: "amplitude comparison of two signals.",
      },
    ],
    correct: "NAV0118001",
  },
  {
    id: "NAV0119",
    question: "A VOR radial corresponds to the...",
    answers: [
      {
        id: "NAV0119001",
        answer: "QTE.",
      },
      {
        id: "NAV0119002",
        answer: "QDR.",
      },
      {
        id: "NAV0119003",
        answer: "QUJ.",
      },
      {
        id: "NAV0119004",
        answer: "QDM.",
      },
    ],
    correct: "NAV0119002",
  },
  {
    id: "NAV0120",
    question:
      "Full deflection of the course deviation indicator (CDI) means that the aircraft is located at least...",
    answers: [
      {
        id: "NAV0120001",
        answer: "2 NM beside the selected course.",
      },
      {
        id: "NAV0120002",
        answer: "10 NM beside the selected course.",
      },
      {
        id: "NAV0120003",
        answer: "10° beside the selected course.",
      },
      {
        id: "NAV0120004",
        answer: "2° beside the selected course.",
      },
    ],
    correct: "NAV0120003",
  },
  {
    id: "NAV0121",
    question:
      "Where is the aircraft located in relation to the VOR? See annex (NAV-022) Siehe Anlage 7",
    answers: [
      {
        id: "NAV0121001",
        answer: "Southeast",
      },
      {
        id: "NAV0121002",
        answer: "Northwest",
      },
      {
        id: "NAV0121003",
        answer: "Southwest",
      },
      {
        id: "NAV0121004",
        answer: "Northeast",
      },
    ],
    correct: "NAV0121004",
  },
  {
    id: "NAV0122",
    question: "The aircraft is on radial...",
    answers: [
      {
        id: "NAV0122001",
        answer: "066°.",
      },
      {
        id: "NAV0122002",
        answer: "060°.",
      },
      {
        id: "NAV0122003",
        answer: "234°.",
      },
      {
        id: "NAV0122004",
        answer: "246°.",
      },
    ],
    correct: "NAV0122003",
    image: require("./images/NAV08.png"),
  },
  {
    id: "NAV0123",
    question: "The range of a VOR is affected by...",
    answers: [
      {
        id: "NAV0123001",
        answer: "multipath propagation of the ground wave.",
      },
      {
        id: "NAV0123002",
        answer: "daylight interference.",
      },
      {
        id: "NAV0123003",
        answer: "reflected sky waves.",
      },
      {
        id: "NAV0123004",
        answer: "transmitter and receiver altitude.",
      },
    ],
    correct: "NAV0123004",
  },
  {
    id: "NAV0124",
    question:
      "The distance measuring equipment (DME) determines the distance based on the principle of...",
    answers: [
      {
        id: "NAV0124001",
        answer: "laser measurement.",
      },
      {
        id: "NAV0124002",
        answer: "phase comparison.",
      },
      {
        id: "NAV0124003",
        answer: "time measurement.",
      },
      {
        id: "NAV0124004",
        answer: "Doppler.",
      },
    ],
    correct: "NAV0124003",
  },
  {
    id: "NAV0125",
    question: "The DME reading is a...",
    answers: [
      {
        id: "NAV0125001",
        answer: "slant range.",
      },
      {
        id: "NAV0125002",
        answer: "air range.",
      },
      {
        id: "NAV0125003",
        answer: "ground distance.",
      },
      {
        id: "NAV0125004",
        answer: "radial distance.",
      },
    ],
    correct: "NAV0125001",
  },
  {
    id: "NAV0126",
    question:
      "The differenz between indicated DME slant range and horizontal distance from the DME station increases...",
    answers: [
      {
        id: "NAV0126001",
        answer: "when circling around the DME station.",
      },
      {
        id: "NAV0126002",
        answer: "when approaching the DME station.",
      },
      {
        id: "NAV0126003",
        answer: "when descending.",
      },
      {
        id: "NAV0126004",
        answer: "when departing the DME station.",
      },
    ],
    correct: "NAV0126002",
  },
  {
    id: "NAV0127",
    question:
      "Using primary ground radar, the direction of the aeroplane in relation to the antenna is determined by...",
    answers: [
      {
        id: "NAV0127001",
        answer: "time measurement.",
      },
      {
        id: "NAV0127002",
        answer: "the pulse pair interval.",
      },
      {
        id: "NAV0127003",
        answer: "the orientation of the antenna.",
      },
      {
        id: "NAV0127004",
        answer: "the frequency shift of the received pulse.",
      },
    ],
    correct: "NAV0127003",
  },
  {
    id: "NAV0128",
    question:
      "Which instantaneous information can be obtained from ground radar equipment?",
    answers: [
      {
        id: "NAV0128001",
        answer: "Distance and direction",
      },
      {
        id: "NAV0128002",
        answer: "Airspeed (TAS) and heading",
      },
      {
        id: "NAV0128003",
        answer: "Direction and airspeed (TAS)",
      },
      {
        id: "NAV0128004",
        answer: "Airspeed (TAS) and distance",
      },
    ],
    correct: "NAV0128001",
  },
  {
    id: "NAV0129",
    question:
      "The on-board equipment of the secondary surveillance radar (SSR) is called...",
    answers: [
      {
        id: "NAV0129001",
        answer: "transponder.",
      },
      {
        id: "NAV0129002",
        answer: "course indicator.",
      },
      {
        id: "NAV0129003",
        answer: "decoder.",
      },
      {
        id: "NAV0129004",
        answer: "interrogator.",
      },
    ],
    correct: "NAV0129001",
  },
  {
    id: "NAV0130",
    question: "What is the difference between primary and secondary radar?",
    answers: [
      {
        id: "NAV0130001",
        answer:
          "The primary radar is displayed on a computer screen,\nthe secondary radar on a radar strip",
      },
      {
        id: "NAV0130002",
        answer:
          "The pulses of a primary radar are variably pulse-modulated,\nthe pulses of a secondary radar are statically amplitude-modulated",
      },
      {
        id: "NAV0130003",
        answer:
          "The pulses of a primary radar are variably amplitude-modulated,\nthe pulses of a secondary radar are statically pulse-modulated",
      },
      {
        id: "NAV0130004",
        answer:
          "The pulses of a primary radar are reflected by the aircraft's surface,\nthe pulses of a secondary radar system are answered by a transponder",
      },
    ],
    correct: "NAV0130004",
  },
  {
    id: "NAV0131",
    question: "The transponder code in case of hi-jacking is...",
    answers: [
      {
        id: "NAV0131001",
        answer: "7000.",
      },
      {
        id: "NAV0131002",
        answer: "7600.",
      },
      {
        id: "NAV0131003",
        answer: "7700.",
      },
      {
        id: "NAV0131004",
        answer: "7500.",
      },
    ],
    correct: "NAV0131004",
  },
  {
    id: "NAV0132",
    question:
      "The transponder code in case of a radio communication failure is...",
    answers: [
      {
        id: "NAV0132001",
        answer: "7700.",
      },
      {
        id: "NAV0132002",
        answer: "7500.",
      },
      {
        id: "NAV0132003",
        answer: "7600.",
      },
      {
        id: "NAV0132004",
        answer: "7000.",
      },
    ],
    correct: "NAV0132003",
  },
  {
    id: "NAV0133",
    question: "Which altitude is transmitted by the transponder in mode C?",
    answers: [
      {
        id: "NAV0133001",
        answer: "Pressure altitude",
      },
      {
        id: "NAV0133002",
        answer: "Radio altitude",
      },
      {
        id: "NAV0133003",
        answer: "QNH altitude",
      },
      {
        id: "NAV0133004",
        answer: "QFE altitude",
      },
    ],
    correct: "NAV0133001",
  },
  {
    id: "NAV0134",
    question:
      "How many satellites are necessary for a precise and verified three-dimensional determination of the position?",
    answers: [
      {
        id: "NAV0134001",
        answer: "Five",
      },
      {
        id: "NAV0134002",
        answer: "Four",
      },
      {
        id: "NAV0134003",
        answer: "Two",
      },
      {
        id: "NAV0134004",
        answer: "Three",
      },
    ],
    correct: "NAV0134002",
  },
  {
    id: "NAV0135",
    question:
      "When using a GPS for tracking to the next waypoint, a deviation indication is shown by a vertical bar and dots to the left and to the right of the bar. What statement describes the correct interpretation of the display?",
    answers: [
      {
        id: "NAV0135001",
        answer:
          "The deviation of the bar from the center indicates the track error as angular distance in degrees;\nthe scale for full deflection depends on the operating mode of the GPS.",
      },
      {
        id: "NAV0135002",
        answer:
          "The deviation of the bar from the center indicates the track error as absolute distance in NM; the\nscale for full deflection is +-10 NM.",
      },
      {
        id: "NAV0135003",
        answer:
          "The deviation of the bar from the center indicates the track error as absolute distance in NM; the\nscale for full deflection depends on the operating mode of the GPS.",
      },
      {
        id: "NAV0135004",
        answer:
          "The deviation of the bar from the center indicates the track error as angular distance in degrees;\nthe scale for full deflection is +-10°.",
      },
    ],
    correct: "NAV0135003",
  },
  {
    id: "NAV0136",
    question: ' What is meant by the term "terrestrial navigation"?',
    answers: [
      {
        id: "NAV0136001",
        answer: "Orientation by GPS during visual flight",
      },
      {
        id: "NAV0136002",
        answer: "Orientation by instrument readings during visual flight",
      },
      {
        id: "NAV0136003",
        answer: "Orientation by ground features during visual flight",
      },
      {
        id: "NAV0136004",
        answer: "Orientation by ground celestial object during visual flight",
      },
    ],
    correct: "NAV0136003",
  },
  {
    id: "NAV0137",
    question:
      "What ground features should preferrably be used for orientation during visual flight?",
    answers: [
      {
        id: "NAV0137001",
        answer: "Farm tracks and creeks",
      },
      {
        id: "NAV0137002",
        answer: "Power lines",
      },
      {
        id: "NAV0137003",
        answer: "Rivers, railroads, highways",
      },
      {
        id: "NAV0137004",
        answer: "Border lines",
      },
    ],
    correct: "NAV0137003",
  },
];

export default questions;
