import { Question } from "types/Questionnaire";

const questions: Question[] = [
  {
    id: "ALW0001",
    question:
      "Which of the following documents have to be on board for an international flight? \n" +
      "a) Certificate of aircraft registration \n" +
      "b) Certificate of airworthiness \n" +
      "c) Airworthiness review certificate \n" +
      "d) EASA Form- 1 \n" +
      "e) Airplane logbook \n" +
      "f) Appropriate papers for every crew member \n" +
      "g) Technical logbook",
    answers: [
      {
        id: "ALWALW0001001",
        answer: "b, c, d, e, f, g",
      },
      {
        id: "ALWALW0001002",
        answer: "a, b, e, g",
      },
      {
        id: "ALWALW0001003",
        answer: "a, b, c, e, f",
      },
      {
        id: "ALWALW0001004",
        answer: "d, f, g",
      },
    ],
    correct: "ALWALW0001003",
  },
  {
    id: "ALW0002",
    question: "Which area could be crossed with certain restrictions?",
    answers: [
      {
        id: "ALWALW0002001",
        answer: "Prohibited area",
      },
      {
        id: "ALWALW0002002",
        answer: "No-fly zone",
      },
      {
        id: "ALWALW0002003",
        answer: "Dangerous area",
      },
      {
        id: "ALWALW0002004",
        answer: "Restricted area",
      },
    ],
    correct: "ALWALW0002004",
  },
  {
    id: "ALW0003",
    question:
      "Where can the type of restriction for a restricted airspace be found?",
    answers: [
      {
        id: "ALWALW0003001",
        answer: "AIP",
      },
      {
        id: "ALWALW0003002",
        answer: "ICAO chart 1:",
      },
      {
        id: "ALWALW0003003",
        answer: "NOTAM",
      },
      {
        id: "ALWALW0003004",
        answer: "AIC",
      },
    ],
    correct: "ALWALW0003001",
  },
  {
    id: "ALW0004",
    question:
      " What is the status of the rules and procedures created by the EASA? (e.g. Part-SFCL, Part-MED)",
    answers: [
      {
        id: "ALWALW0004001",
        answer: "They are not legally binding, they only serve as a guide",
      },
      {
        id: "ALWALW0004002",
        answer:
          "Only after a ratification by individual EU member states they are legally binding",
      },
      {
        id: "ALWALW0004003",
        answer: "They have the same status as ICAO Annexes",
      },
      {
        id: "ALWALW0004004",
        answer:
          "They are part of the EU regulation and legally binding to all EU member states",
      },
    ],
    correct: "ALWALW0004004",
  },
  {
    id: "ALW0005",
    question: ' Which validity does the "Certificate of Airworthiness" have?',
    answers: [
      {
        id: "ALWALW0005001",
        answer: "6 months",
      },
      {
        id: "ALWALW0005002",
        answer: "12 months",
      },
      {
        id: "ALWALW0005003",
        answer: "12 years",
      },
      {
        id: "ALWALW0005004",
        answer: "Unlimited",
      },
    ],
    correct: "ALWALW0005004", // really ?????
  },
  {
    id: "ALW0006",
    question: ' What is the meaning of the abbreviation "ARC"?',
    answers: [
      {
        id: "ALWALW0006001",
        answer: "Airworthiness Review Certificate",
      },
      {
        id: "ALWALW0006002",
        answer: "Airworthiness Recurring Control",
      },
      {
        id: "ALWALW0006003",
        answer: "Airspace Rulemaking Committee",
      },
      {
        id: "ALWALW0006004",
        answer: "Airspace Restriction Criteria",
      },
    ],
    correct: "ALWALW0006001",
  },
  {
    id: "ALW0007",
    question: ' The "Certificate of Airworthiness" is issued by the state...',
    answers: [
      {
        id: "ALWALW0007001",
        answer: "in which the aircraft is constructed.",
      },
      {
        id: "ALWALW0007002",
        answer: "of the residence of the owner.",
      },
      {
        id: "ALWALW0007003",
        answer: "in which the aircraft is registered.",
      },
      {
        id: "ALWALW0007004",
        answer: "in which the airworthiness review is done.",
      },
    ],
    correct: "ALWALW0007003",
  },
  {
    id: "ALW0008",
    question:
      " A pilot license issued in accordance with ICAO Annex 1 is valid in...",
    answers: [
      {
        id: "ALWALW0008001",
        answer: "all ICAO countries.",
      },
      {
        id: "ALWALW0008002",
        answer: "the country where the license was acquired.",
      },
      {
        id: "ALWALW0008003",
        answer:
          "those countries that have accepted this license on application.",
      },
      {
        id: "ALWALW0008004",
        answer: "the country where the license was issued.",
      },
    ],
    correct: "ALWALW0008001",
  },
  {
    id: "ALW0009",
    question: " What is the subject of ICAO Annex 1?",
    answers: [
      {
        id: "ALWALW0009001",
        answer: "Air traffic services",
      },
      {
        id: "ALWALW0009002",
        answer: "Operation of aircraft",
      },
      {
        id: "ALWALW0009003",
        answer: "Rules of the air",
      },
      {
        id: "ALWALW0009004",
        answer: "Flight crew licensing",
      },
    ],
    correct: "ALWALW0009004",
  },
  {
    id: "ALW0010",
    question:
      " What is the period of validity of a private pilot license (PPL)?",
    answers: [
      {
        id: "ALWALW0010001",
        answer: "60 months",
      },
      {
        id: "ALWALW0010002",
        answer: "24 months",
      },
      {
        id: "ALWALW0010003",
        answer: "Unlimited",
      },
      {
        id: "ALWALW0010004",
        answer: "48 months",
      },
    ],
    correct: "ALWALW0010003", // reallllllllly
  },
  {
    id: "ALW0011",
    question: " What is the minimum age to obtain a private pilot license?",
    answers: [
      {
        id: "ALWALW0011001",
        answer: "17 years",
      },
      {
        id: "ALWALW0011002",
        answer: "16 years",
      },
      {
        id: "ALWALW0011003",
        answer: "21 years",
      },
      {
        id: "ALWALW0011001",
        answer: "18 years",
      },
    ],
    correct: "ALWALW0011001",
  },
  {
    id: "ALW0012",
    question:
      " What are the minimum requirements among others to acquire a rating for VFR night flights?",
    answers: [
      {
        id: "ALWALW0012001",
        answer:
          "At least 10 additional flight hours at night, three of them with a flight instructor with at least 1 hour cross-country flight plus 5 solo take-offs and full-stop landings",
      },
      {
        id: "ALWALW0012002",
        answer:
          "At least 5 additional flight hours at night, four of them with a flight instructor with at least 1 hour cross-country flight plus 5 solo take-offs and full-stop landings",
      },
      {
        id: "ALWALW0012003",
        answer:
          "At least 5 additional flight hours at night, three of them with a flight instructor with at least 1 hour cross-country flight plus 5 solo take-offs and full-stop landings",
      },
      {
        id: "ALWALW0012004",
        answer:
          "At least 5 additional flight hours at night, three of them with a flight instructor with at least 1 hour cross-country flight plus 10 solo take-offs and full-stop landings",
      },
    ],
    correct: "ALWALW0012003",
  },
  {
    id: "ALW0013",
    question:
      " The validity of a medical examination certificate class 2 for a 62 years old pilot is...",
    answers: [
      {
        id: "ALWALW0013001",
        answer: "48 Months.",
      },
      {
        id: "ALWALW0013002",
        answer: "24 Months.",
      },
      {
        id: "ALWALW0013003",
        answer: "12 Months.",
      },
      {
        id: "ALWALW0013004",
        answer: "60 Months.",
      },
    ],
    correct: "ALWALW0013003",
  },
  {
    id: "ALW0014",
    question:
      " In which way is a SEP (land) rating renewed if you do not meet the required flight time?",
    answers: [
      {
        id: "ALWALW0014001",
        answer:
          "The ATO can renew the rating after a training flight with a flight instructor",
      },
      {
        id: "ALWALW0014002",
        answer:
          "The required flight experience has to be accumulated under supervision of a flight instructor",
      },
      {
        id: "ALWALW0014003",
        answer: "A proficiency check with an examiner",
      },
      {
        id: "ALWALW0014004",
        answer:
          "According to the flight experience there have to be several training flights under supervision of an ATO",
      },
    ],
    correct: "ALWALW0014003",
  },
  {
    id: "ALW0015",
    question: " The possession of a european PPL(A) entitles the holder to...",
    answers: [
      {
        id: "ALWALW0015001",
        answer:
          "act as pilot in commercial and non-commercial flights with single engine aircraft.",
      },
      {
        id: "ALWALW0015002",
        answer:
          "act as pilot on a commercial flight when there are at most 4 people on board.",
      },
      {
        id: "ALWALW0015003",
        answer:
          "act as PIC on non-commercial flights without compensation as well as to receive compensation as a flight instructor.",
      },
      {
        id: "ALWALW0015004",
        answer:
          "act as PIC, and only for flights in aircraft with a MTOW of maximum 2000 kg a compensation may be obtained.",
      },
    ],
    correct: "ALWALW0015003",
  },
  {
    id: "ALW0016",
    question:
      " What is the minimum age to start a private pilot training at a flight school?",
    answers: [
      {
        id: "ALWALW0016001",
        answer: "16 years",
      },
      {
        id: "ALWALW0016002",
        answer: "18 years",
      },
      {
        id: "ALWALW0016003",
        answer: "21 years",
      },
      {
        id: "ALWALW0016004",
        answer: "17 years",
      },
    ],
    correct: "ALWALW0016001",
  },
  {
    id: "ALW0017",
    question: ' What is the meaning of the abbreviation "SERA"?',
    answers: [
      {
        id: "ALWALW0017001",
        answer: "Specialized Radar Approach",
      },
      {
        id: "ALWALW0017002",
        answer: "Standardized European Rules of the Air",
      },
      {
        id: "ALWALW0017003",
        answer: "Selective Radar Altimeter",
      },
      {
        id: "ALWALW0017004",
        answer: "Standard European Routes of the Air",
      },
    ],
    correct: "ALWALW0017002",
  },
  {
    id: "ALW0018",
    question: ' What is the meaning of the abbreviation "TRA"?',
    answers: [
      {
        id: "ALWALW0018001",
        answer: "Transponder Area",
      },
      {
        id: "ALWALW0018002",
        answer: "Temporary Reserved Airspace",
      },
      {
        id: "ALWALW0018003",
        answer: "Temporary Radar Routing Area",
      },
      {
        id: "ALWALW0018004",
        answer: "Terminal Area",
      },
    ],
    correct: "ALWALW0018002",
  },
  {
    id: "ALW0019",
    question: " What has to be considered when entering an RMZ?",
    answers: [
      {
        id: "ALWALW0019001",
        answer: "To obtain a clearance from the local aviation authority",
      },
      {
        id: "ALWALW0019002",
        answer: "To obtain a clearance to enter this area",
      },
      {
        id: "ALWALW0019003",
        answer: "The transponder has to be switched on Mode C and squawk 7000",
      },
      {
        id: "ALWALW0019004",
        answer:
          "To permanently monitor the radio and if possible to establish radio contact",
      },
    ],
    correct: "ALWALW0019004", // please confirm
  },
  {
    id: "ALW0020",
    question: " What condition has to be met during a Special VFR flight?",
    answers: [
      {
        id: "ALWALW0020001",
        answer: "At least 500 m ground visibilty",
      },
      {
        id: "ALWALW0020002",
        answer: "Speed not above 115 kt IAS",
      },
      {
        id: "ALWALW0020003",
        answer: "A minimum distance to clouds of 2000 m",
      },
      {
        id: "ALWALW0020004",
        answer: "Visual reference to the terrain",
      },
    ],
    correct: "ALWALW0020004",
  },
  {
    id: "ALW0021",
    question: " What has to be done before entering a TMZ?",
    answers: [
      {
        id: "ALWALW0021001",
        answer: "Switch on the transponder and activate mode A and C or mode S",
      },
      {
        id: "ALWALW0021002",
        answer: "Request a clearance before entering",
      },
      {
        id: "ALWALW0021003",
        answer: "File a flight plan before the flight",
      },
      {
        id: "ALWALW0021004",
        answer:
          'Switch on the transponder, activate mode A, and squawk "IDENT"',
      },
    ],
    correct: "ALWALW0021001",
  },
  {
    id: "ALW0022",
    question: ' What is the meaning of an area marked as "TMZ"?',
    answers: [
      {
        id: "ALWALW0022001",
        answer: "Touring Motorglider Zone",
      },
      {
        id: "ALWALW0022002",
        answer: "Traffic Management Zone",
      },
      {
        id: "ALWALW0022003",
        answer: "Transportation Management Zone",
      },
      {
        id: "ALWALW0022004",
        answer: "Transponder Mandatory Zone",
      },
    ],
    correct: "ALWALW0022004",
  },
  {
    id: "ALW0023",
    question:
      ' According to ICAO Annex 2, the term "aerodrome traffic" is defined as:',
    answers: [
      {
        id: "ALWALW0023001",
        answer:
          "All traffic on the manoeuvring area of an aerodrome and all aircraft flying in the vicinity of an aerodrome except aircraft in a visual circuit.",
      },
      {
        id: "ALWALW0023002",
        answer:
          "All traffic on the manoeuvring area of an aerodrome and all aircraft flying in the vicinity of an aerodrome.",
      },
      {
        id: "ALWALW0023003",
        answer:
          "All traffic on the movement area of an aerodrome and all aircraft flying in the vicinity of an aerodrome.",
      },
      {
        id: "ALWALW0023004",
        answer:
          "All traffic on the apron and on the manoeuvring area of an aerodrome and all aircraft flying in the vicinity of an aerodrome.",
      },
    ],
    correct: "ALWALW0023003", // To  be confirmed
  },
  {
    id: "ALW0024",
    question: ' What is the meaning of the abbreviation "IFR"?',
    answers: [
      {
        id: "ALWALW0024001",
        answer: "Instrument Meteorological Conditions",
      },
      {
        id: "ALWALW0024002",
        answer: "Bad Weather Flight Rules",
      },
      {
        id: "ALWALW0024003",
        answer: "Instrument Flight Rules",
      },
      {
        id: "ALWALW0024004",
        answer: "Commercial Flight Rules",
      },
    ],
    correct: "ALWALW0024003",
  },
  {
    id: "ALW0025",
    question: ' A flight is called a "visual flight", if the...',
    answers: [
      {
        id: "ALWALW0025001",
        answer: "flight is conducted under visual flight rules.",
      },
      {
        id: "ALWALW0025002",
        answer: "visibility in flight is more than 8 km.",
      },
      {
        id: "ALWALW0025003",
        answer: "visibility in flight is more than 5 km.",
      },
      {
        id: "ALWALW0025004",
        answer: "flight is conducted in visual meteorological conditions.",
      },
    ],
    correct: "ALWALW0025001",
  },
  {
    id: "ALW0026",
    question: ' What is the meaning of the abbreviation "VMC"?',
    answers: [
      {
        id: "ALWALW0026001",
        answer: "Instrument flight conditions",
      },
      {
        id: "ALWALW0026002",
        answer: "Visual flight rules",
      },
      {
        id: "ALWALW0026003",
        answer: "Visual meteorological conditions",
      },
      {
        id: "ALWALW0026004",
        answer: "Variable meteorological conditions",
      },
    ],
    correct: "ALWALW0026003",
  },
  {
    id: "ALW0027",
    question:
      " Two engine-driven aircraft are flying on crossing courses at the same altitude. Which one has to divert?",
    answers: [
      {
        id: "ALWALW0027001",
        answer: "The heavier one has to climb",
      },
      {
        id: "ALWALW0027002",
        answer: "Both have to divert to the right",
      },
      {
        id: "ALWALW0027003",
        answer: "Both have to divert to the left",
      },
      {
        id: "ALWALW0027004",
        answer: "The lighter one has to climb",
      },
    ],
    correct: "ALWALW0027002",
  },
  {
    id: "ALW0028",
    question:
      " Two aeroplanes are flying on crossing tracks. Which one has to divert?",
    answers: [
      {
        id: "ALWALW0028001",
        answer:
          "The aircraft which flies from right to left has the right of priority",
      },
      {
        id: "ALWALW0028002",
        answer: "Both have to divert to the left",
      },
      {
        id: "ALWALW0028003",
        answer: "Both have to divert to the right",
      },
      {
        id: "ALWALW0028004",
        answer:
          "The aircraft which flies from left to right has the right of priority",
      },
    ],
    correct: "ALWALW0028001", // confirm
  },
  {
    id: "ALW0029",
    question:
      ' In airspace "D" a Boeing 737 and a Cessna 152 are flying on crossing courses. Which aeroplane has to divert?',
    answers: [
      {
        id: "ALWALW0029001",
        answer:
          "The Boeing 737, because an airliner has greater power reserves",
      },
      {
        id: "ALWALW0029002",
        answer:
          "The air traffic control (ATC) has to decide which one has to divert",
      },
      {
        id: "ALWALW0029003",
        answer:
          "The aeroplane flying from right to left has priority, the other one has to divert",
      },
      {
        id: "ALWALW0029004",
        answer:
          "The Cessna 152, because IFR and commercial flights have priority",
      },
    ],
    correct: "ALWALW0029003", // to be confirmed
  },
  {
    id: "ALW0030",
    question:
      " Which of the following options is NOT a sufficient reason to fly below the required minimum height?",
    answers: [
      {
        id: "ALWALW0030001",
        answer: "The drop of towed objects at an aerodrome",
      },
      {
        id: "ALWALW0030002",
        answer: "An approach without landing at an aerodrome",
      },
      {
        id: "ALWALW0030003",
        answer: "Bad weather conditions in the vicinity of an aerodrome",
      },
      {
        id: "ALWALW0030004",
        answer: "Take-off or landing at an aerodrome",
      },
    ],
    correct: "ALWALW0030003", // whyyyyyyyy
  },
  {
    id: "ALW0031",
    question:
      " A single-engine piston and a turboprop aeroplane are approaching each other opposite at the same altitude. Which aeroplane has to change its track to avoid a collision?",
    answers: [
      {
        id: "ALWALW0031001",
        answer:
          "The single-engine piston aircraft has to give way to the turboprop aircraft",
      },
      {
        id: "ALWALW0031002",
        answer:
          "The turboprop aircraft has to give way to the single-engine piston aircraft",
      },
      {
        id: "ALWALW0031003",
        answer: "Both aircraft have to alter their tracks to the left",
      },
      {
        id: "ALWALW0031004",
        answer: "Both aircraft have to alter their tracks to the right",
      },
    ],
    correct: "ALWALW0031004",
  },
  {
    id: "ALW0032",
    question:
      " Which distances to clouds have to be maintained during a VFR flight in airpaces C, D and E?",
    answers: [
      {
        id: "ALWALW0032001",
        answer: "1000 m horizontally, 300 m vertically",
      },
      {
        id: "ALWALW0032002",
        answer: "1500 m horizontally, 1000 ft vertically",
      },
      {
        id: "ALWALW0032003",
        answer: "1000 m horizontally, 1500 ft vertically",
      },
      {
        id: "ALWALW0032004",
        answer: "1500 m horizontally, 1000 m vertically",
      },
    ],
    correct: "ALWALW0032002",
  },
  {
    id: "ALW0033",
    question:
      " The minimum flight visibility at 5000 ft MSL in airspace B for VFR flights is...",
    answers: [
      {
        id: "ALWALW0033001",
        answer: "8000 m.",
      },
      {
        id: "ALWALW0033002",
        answer: "5000 m.",
      },
      {
        id: "ALWALW0033003",
        answer: "1500 m.",
      },
      {
        id: "ALWALW0033004",
        answer: "3000 m.",
      },
    ],
    correct: "ALWALW0033002",
  },
  {
    id: "ALW0034",
    question:
      ' What is the minimum flight visibility in airspace "C" for an aircraft operating under VFR at 5000 ft MSL?',
    answers: [
      {
        id: "ALWALW0034001",
        answer: "1500 m",
      },
      {
        id: "ALWALW0034002",
        answer: "5000 m",
      },
      {
        id: "ALWALW0034003",
        answer: "3000 m",
      },
      {
        id: "ALWALW0034004",
        answer: "8000 m",
      },
    ],
    correct: "ALWALW0034002",
  },
  {
    id: "ALW0035",
    question:
      ' What is the minimum flight visibility in airspace "E" for an aircraft operating under VFR at FL75?',
    answers: [
      {
        id: "ALWALW0035001",
        answer: "3000 m",
      },
      {
        id: "ALWALW0035002",
        answer: "8000 m",
      },
      {
        id: "ALWALW0035003",
        answer: "1500 m",
      },
      {
        id: "ALWALW0035004",
        answer: "5000 m",
      },
    ],
    correct: "ALWALW0035004",
  },
  {
    id: "ALW0036",
    question:
      ' What is the minimum flight visibility in airspace "C" for an aircraft operating under VFR at FL110?',
    answers: [
      {
        id: "ALWALW0036001",
        answer: "3000 m",
      },
      {
        id: "ALWALW0036002",
        answer: "8000 m",
      },
      {
        id: "ALWALW0036003",
        answer: "1500 m",
      },
      {
        id: "ALWALW0036004",
        answer: "5000 m",
      },
    ],
    correct: "ALWALW0036002",
  },
  {
    id: "ALW0037",
    question:
      ' What is the minimum flight visibility in airspace "C" for an aircraft operating under VFR at FL125?',
    answers: [
      {
        id: "ALWALW0037001",
        answer: "5000 m",
      },
      {
        id: "ALWALW0037002",
        answer: "3000 m",
      },
      {
        id: "ALWALW0037003",
        answer: "8000 m",
      },
      {
        id: "ALWALW0037004",
        answer: "1500 m",
      },
    ],
    correct: "ALWALW0037003",
  },
  {
    id: "ALW0038",
    question:
      ' What are the minimum distances to clouds for a VFR flight in airspace "B"?',
    answers: [
      {
        id: "ALWALW0038001",
        answer: "Horizontally 1.500 m, vertically 1.000 m",
      },
      {
        id: "ALWALW0038002",
        answer: "Horizontally 1.000 m, vertically 300 m",
      },
      {
        id: "ALWALW0038003",
        answer: "Horizontally 1.000 m, vertically 1.500 ft",
      },
      {
        id: "ALWALW0038004",
        answer: "Horizontally 1.500 m, vertically 300 m",
      },
    ],
    correct: "ALWALW0038004",
  },
  {
    id: "ALW0039",
    question:
      ' What is the minimum flight visibility in airspace "C" below FL 100 for an aircraft operating under VFR?',
    answers: [
      {
        id: "ALWALW0039001",
        answer: "8 km",
      },
      {
        id: "ALWALW0039002",
        answer: "5 km",
      },
      {
        id: "ALWALW0039003",
        answer: "1.5 km",
      },
      {
        id: "ALWALW0039004",
        answer: "10 km",
      },
    ],
    correct: "ALWALW0039002",
  },
  {
    id: "ALW0040",
    question:
      ' What is the minimum flight visibility in airspace "C" at and above FL 100 for an aircraft operating under VFR?',
    answers: [
      {
        id: "ALWALW0040001",
        answer: "5 km",
      },
      {
        id: "ALWALW0040002",
        answer: "1.5 km",
      },
      {
        id: "ALWALW0040003",
        answer: "8 km",
      },
      {
        id: "ALWALW0040004",
        answer: "10 km",
      },
    ],
    correct: "ALWALW0040003",
  },
  {
    id: "ALW0041",
    question: ' The term "ceiling" is defined as the...',
    answers: [
      {
        id: "ALWALW0041001",
        answer:
          "height of the base of the lowest layer of clouds covering more than half of the sky below 10000 ft.",
      },
      {
        id: "ALWALW0041002",
        answer:
          "height of the base of the highest layer of clouds covering more than half of the sky below 20000 ft.",
      },
      {
        id: "ALWALW0041003",
        answer:
          "height of the base of the lowest layer of clouds covering more than half of the sky below 20000 ft.",
      },
      {
        id: "ALWALW0041004",
        answer:
          "altitude of the base of the lowest layer of clouds covering more than half of the sky below 20000 ft.",
      },
    ],
    correct: "ALWALW0041001", // to be confirmed...
  },
  {
    id: "ALW0042",
    question:
      ' State the minimum weather conditions to enter a control zone (airspace "D") under special VFR conditions for a fixed-wing aircraft?',
    answers: [
      {
        id: "ALWALW0042001",
        answer:
          "Ground visibility at least 800 m Flight visibility at least 800 m Ceiling not below 600 ft Visual contact to the ground must be maintained The aircraft must remain always clear of clouds.",
      },
      {
        id: "ALWALW0042002",
        answer:
          "Ground visibility at least 1,5 km Flight visibility at least 1,5 km Ceiling not below 1000 ft Visual contact to the ground must be maintained The aircraft must remain always clear of clouds.",
      },
      {
        id: "ALWALW0042003",
        answer:
          "Ground visibility at least 1,5 km Flight visibility at least 1,5 km Ceiling not below 600 ft Visual contact to the ground must be maintained The aircraft must remain always clear of clouds.",
      },
      {
        id: "ALWALW0042004",
        answer:
          "Ground visibility at least 5 km Flight visibility at least 5 km Ceiling not below 1500 ft Visual contact to the ground must be maintained The aircraft must remain always clear of clouds.",
      },
    ],
    correct: "ALWALW0042003",
  },
  {
    id: "ALW0043",
    question:
      " Being intercepted by a military aircraft at daytime, what is the meaning of the following signal: Alternating movement of the ailerons, normally left of the intercepted aircraft, followed by a smooth turn to the left?",
    answers: [
      {
        id: "ALWALW0043001",
        answer:
          "You are entering a restricted area, leave the airspace immediately",
      },
      {
        id: "ALWALW0043002",
        answer:
          "Prepare for a safety landing, you have entered a prohibited area",
      },
      {
        id: "ALWALW0043003",
        answer:
          "You are clear of any restricted or reserved airspaces, you can continue on your heading",
      },
      {
        id: "ALWALW0043004",
        answer: "Follow me",
      },
    ],
    correct: "ALWALW0043004",
  },
  {
    id: "ALW0044",
    question:
      " Being intercepted by a military aircraft at daytime, what is the meaning of the following signal: A sudden heading change of 90 degrees or more and a pull-up of the aircraft without crossing the track of the intercepted aircraft?",
    answers: [
      {
        id: "ALWALW0044001",
        answer:
          "Prepare for a safety landing, you have entered a prohibited area",
      },
      {
        id: "ALWALW0044002",
        answer: "Follow me, i will bring you to the next suitable airfield",
      },
      {
        id: "ALWALW0044003",
        answer:
          "You are entering a restricted area, leave the airspace immediately",
      },
      {
        id: "ALWALW0044004",
        answer: "You may continue your flight",
      },
    ],
    correct: "ALWALW0044004",
  },
  {
    id: "ALW0045",
    question: " The altimeter is switched from local QNH to 1013.25 hPa...",
    answers: [
      {
        id: "ALWALW0045001",
        answer: "when climbing above the transition altitude.",
      },
      {
        id: "ALWALW0045002",
        answer: "at 4000 ft.",
      },
      {
        id: "ALWALW0045003",
        answer: "when descending below FL 100.",
      },
      {
        id: "ALWALW0045004",
        answer: "at the decision height.",
      },
    ],
    correct: "ALWALW0045001",
  },
  {
    id: "ALW0046",
    question: " During a flight at FL 80, the altimeter setting has to be...",
    answers: [
      {
        id: "ALWALW0046001",
        answer: "local QNH.",
      },
      {
        id: "ALWALW0046002",
        answer: "local QFE.",
      },
      {
        id: "ALWALW0046003",
        answer: "1030.25 hPa.",
      },
      {
        id: "ALWALW0046004",
        answer: "1013.25 hPa.",
      },
    ],
    correct: "ALWALW0046004",
  },
  {
    id: "ALW0047",
    question: " What is the purpose of the semi-circular rule?",
    answers: [
      {
        id: "ALWALW0047001",
        answer: "To allow safe climbing or descending in a holding pattern",
      },
      {
        id: "ALWALW0047002",
        answer: "To avoid collisions by suspending turning manoeuvres",
      },
      {
        id: "ALWALW0047003",
        answer:
          "To avoid collisions by reducing the probability of opposing traffic at the same altitude",
      },
      {
        id: "ALWALW0047004",
        answer:
          "To fly without a filed flight plan in prescribed zones published in the AIP",
      },
    ],
    correct: "ALWALW0047003",
  },
  {
    id: "ALW0048",
    question:
      " Which of the following options are possible SSR-Transponder modes?",
    answers: [
      {
        id: "ALWALW0048001",
        answer: "A, C, S",
      },
      {
        id: "ALWALW0048002",
        answer: "B, C, V",
      },
      {
        id: "ALWALW0048003",
        answer: "A, C, R",
      },
      {
        id: "ALWALW0048004",
        answer: "B, R, S",
      },
    ],
    correct: "ALWALW0048001",
  },
  {
    id: "ALW0049",
    question:
      " A transponder with the ability to send the current pressure level is a...",
    answers: [
      {
        id: "ALWALW0049001",
        answer: "mode C or S transponder.",
      },
      {
        id: "ALWALW0049002",
        answer: 'transponder approved for airspace "B".',
      },
      {
        id: "ALWALW0049003",
        answer: "pressure-decoder.",
      },
      {
        id: "ALWALW0049004",
        answer: "mode A transponder.",
      },
    ],
    correct: "ALWALW0049001",
  },
  {
    id: "ALW0050",
    question:
      " Which transponder code indicates a loss of radio communication?",
    answers: [
      {
        id: "ALWALW0050001",
        answer: "7600",
      },
      {
        id: "ALWALW0050002",
        answer: "2000",
      },
      {
        id: "ALWALW0050003",
        answer: "7700",
      },
      {
        id: "ALWALW0050004",
        answer: "7000",
      },
    ],
    correct: "ALWALW0050001",
  },
  {
    id: "ALW0051",
    question:
      " Which transponder code should be set during a radio failure without any request?",
    answers: [
      {
        id: "ALWALW0051001",
        answer: "7000",
      },
      {
        id: "ALWALW0051002",
        answer: "7500",
      },
      {
        id: "ALWALW0051003",
        answer: "7600",
      },
      {
        id: "ALWALW0051004",
        answer: "7700",
      },
    ],
    correct: "ALWALW0051003", // TO be confirmed. No emergency
  },
  {
    id: "ALW0052",
    question:
      " Which transponder code has to be set unrequested during an emergency?",
    answers: [
      {
        id: "ALWALW0052001",
        answer: "7700",
      },
      {
        id: "ALWALW0052002",
        answer: "7000",
      },
      {
        id: "ALWALW0052003",
        answer: "7600",
      },
      {
        id: "ALWALW0052004",
        answer: "7500",
      },
    ],
    correct: "ALWALW0052001",
  },
  {
    id: "ALW0053",
    question:
      " Which air traffic service is responsible for the safe conduct of flights?",
    answers: [
      {
        id: "ALWALW0053001",
        answer: "ATC (air traffic control)",
      },
      {
        id: "ALWALW0053002",
        answer: "FIS (flight information service)",
      },
      {
        id: "ALWALW0053003",
        answer: "ALR (alerting service)",
      },
      {
        id: "ALWALW0053004",
        answer: "AIS (aeronautical information service)",
      },
    ],
    correct: "ALWALW0053001",
  },
  {
    id: "ALW0054",
    question: " Air traffic control service is conducted by which services?",
    answers: [
      {
        id: "ALWALW0054001",
        answer:
          "FIS (flight information service) AIS (aeronautical information service) AFS (aeronautical fixed telecommunication service)",
      },
      {
        id: "ALWALW0054002",
        answer:
          "ALR (alerting service) SAR (search and rescue service) TWR (aerodrome control service)",
      },
      {
        id: "ALWALW0054003",
        answer:
          "TWR (aerodrome control service) APP (approach control service) ACC (area control service)",
      },
      {
        id: "ALWALW0054004",
        answer:
          "APP (approach control service) ACC (area control service) FIS (flight information service)",
      },
    ],
    correct: "ALWALW0054003",
  },
  {
    id: "ALW0055",
    question:
      ' Which answer is correct with regard to separation in airspace "E"?',
    answers: [
      {
        id: "ALWALW0055001",
        answer: "VFR traffic is separated from VFR and IFR traffic",
      },
      {
        id: "ALWALW0055002",
        answer: "IFR traffic is separated only from VFR traffic",
      },
      {
        id: "ALWALW0055003",
        answer: "VFR traffic is not separated from any other traffic",
      },
      {
        id: "ALWALW0055004",
        answer: "VFR traffic is separated only from IFR traffic",
      },
    ],
    correct: "ALWALW0055003", // to be confirmed
  },

  /// I AM HERE
  {
    id: "ALW0056",
    question:
      " Which air traffic services can be expected within an FIR (flight information region)?",
    answers: [
      {
        id: "ALWALW0056001",
        answer:
          "AIS (aeronautical information service) SAR (search and rescue)",
      },
      {
        id: "ALWALW0056002",
        answer: "ATC (air traffic control) FIS (flight information service)",
      },
      {
        id: "ALWALW0056003",
        answer: "FIS (flight information service) ALR (alerting service)",
      },
      {
        id: "ALWALW0056004",
        answer:
          "ATC (air traffic control) AIS (aeronautical information service)",
      },
    ],
    correct: "ALWALW0056003", // but why?
  },
  {
    id: "ALW0057",
    question: " A pilot can contact FIS (flight information service)...",
    answers: [
      {
        id: "ALWALW0057001",
        answer: "by a personal visit.",
      },
      {
        id: "ALWALW0057002",
        answer: "via radio communication.",
      },
      {
        id: "ALWALW0057003",
        answer: "via telephone.",
      },
      {
        id: "ALWALW0057004",
        answer: "via internet.",
      },
    ],
    correct: "ALWALW0057002", // to be confirmed
  },
  {
    id: "ALW0058",
    question:
      " What is the correct phrase with respect to wake turbulence to indicate that a light aircraft is following an aircraft of a higher wake turbulence category?",
    answers: [
      {
        id: "ALWALW0058001",
        answer: "Danger jet blast",
      },
      {
        id: "ALWALW0058002",
        answer: "Attention propwash",
      },
      {
        id: "ALWALW0058003",
        answer: "Caution wake turbulence",
      },
      {
        id: "ALWALW0058004",
        answer: "Be careful wake winds",
      },
    ],
    correct: "ALWALW0058003", // to be confirmed
  },
  {
    id: "ALW0059",
    question:
      " Which of the following options states a correct position report?",
    answers: [
      {
        id: "ALWALW0059001",
        answer: 'DEABC over "N" at 35',
      },
      {
        id: "ALWALW0059002",
        answer: 'DEABC, "N", 2500 ft',
      },
      {
        id: "ALWALW0059003",
        answer: 'DEABC over "N" in FL 2500 ft',
      },
      {
        id: "ALWALW0059004",
        answer: 'DEABC reaching "N"',
      },
    ],
    correct: "ALWALW0059003",
  },
  {
    id: "ALW0060",
    question: ' What is the meaning of the abbreviation "AIREP"?',
    answers: [
      {
        id: "ALWALW0060001",
        answer: "Automatic identification report",
      },
      {
        id: "ALWALW0060002",
        answer: "Aircraft report",
      },
      {
        id: "ALWALW0060003",
        answer: "Aeronautical instrument requirement report",
      },
      {
        id: "ALWALW0060004",
        answer: "Aeronautical information report",
      },
    ],
    correct: "ALWALW0060002", // To be confirmed
  },
  {
    id: "ALW0061",
    question:
      " What information is provided in the general part (GEN) of the AIP?",
    answers: [
      {
        id: "ALWALW0061001",
        answer:
          "Warnings for aviation, ATS airspaces and routes, restricted and dangerous airspaces",
      },
      {
        id: "ALWALW0061002",
        answer:
          "Table of content, classification of airfields with corresponding maps, approach charts, taxi charts, restricted and dangerous airspaces",
      },
      {
        id: "ALWALW0061003",
        answer:
          "Map icons, list of radio nav aids, time for sunrise and sunset, airport fees, air traffic control fees",
      },
      {
        id: "ALWALW0061004",
        answer:
          "Access restrictions for airfields, passenger controls, requirements for pilots, license samples and validity periods",
      },
    ],
    correct: "ALWALW0061003", // to be confirmed
  },
  {
    id: "ALW0062",
    question:
      " Which are the different parts of the Aeronautical Information Publication (AIP)? (1, P.)",
    answers: [
      {
        id: "ALWALW0062001",
        answer: "GEN MET RAC",
      },
      {
        id: "ALWALW0062002",
        answer: "GEN AGA COM",
      },
      {
        id: "ALWALW0062003",
        answer: "GEN ENR AD",
      },
      {
        id: "ALWALW0062004",
        answer: "GEN COM MET",
      },
    ],
    correct: "ALWALW0062003",
  },
  {
    id: "ALW0063",
    question: ' What information is provided in the part "AD" of the AIP?',
    answers: [
      {
        id: "ALWALW0063001",
        answer:
          "Warnings for aviation, ATS airspaces and routes, restricted and dangerous airspaces.",
      },
      {
        id: "ALWALW0063002",
        answer:
          "Map icons, list of radio nav aids, time for sunrise and sunset, airport fees, air traffic control fees",
      },
      {
        id: "ALWALW0063003",
        answer:
          "Access restrictions for airfields, passenger controls, requirements for pilots, license samples and validity periods",
      },
      {
        id: "ALWALW0063004",
        answer:
          "Table of content, classification of airfields with corresponding maps, approach charts, taxi charts",
      },
    ],
    correct: "ALWALW0063004", // to be confirmed
  },
  {
    id: "ALW0064",
    question:
      " The shown NOTAM is valid until... A1024/13 A) LOWW B) 1305211200 C) 1305211400 E) STOCKERAU VOR STO 113.00 UNSERVICEABLE.",
    answers: [
      {
        id: "ALWALW0064001",
        answer: "13/05/2013 12:00 UTC.",
      },
      {
        id: "ALWALW0064002",
        answer: "21/05/2014 13:00 UTC.",
      },
      {
        id: "ALWALW0064003",
        answer: "13/10/2013 00:00 UTC.",
      },
      {
        id: "ALWALW0064004",
        answer: "21/05/2013 14:00 UTC.",
      },
    ],
    correct: "ALWALW0064004",
  },
  {
    id: "ALW0065",
    question:
      " A Pre-Flight Information Bulletin (PIB) is a presentation of current...",
    answers: [
      {
        id: "ALWALW0065001",
        answer:
          "ICAO information of operational significance prepared after the flight.",
      },
      {
        id: "ALWALW0065002",
        answer:
          "NOTAM information of operational significance prepared prior to flight.",
      },
      {
        id: "ALWALW0065003",
        answer:
          "AIP information of operational significance prepared prior to flight.",
      },
      {
        id: "ALWALW0065004",
        answer:
          "AIC information of operational significance prepared after the flight.",
      },
    ],
    correct: "ALWALW0065002", // explain
  },
  {
    id: "ALW0066",
    question: ' The term "aerodrome elevation" is defined as...',
    answers: [
      {
        id: "ALWALW0066001",
        answer: "the average value of the height of the manoeuvring area.",
      },
      {
        id: "ALWALW0066002",
        answer: "the highest point of the apron.",
      },
      {
        id: "ALWALW0066003",
        answer: "the lowest point of the landing area.",
      },
      {
        id: "ALWALW0066004",
        answer: "the highest point of the landing area.",
      },
    ],
    correct: "ALWALW0066004",
  },
  {
    id: "ALW0067",
    question: ' The term "runway" is defined as a...',
    answers: [
      {
        id: "ALWALW0067001",
        answer:
          "round area on an aerodrome prepared for the landing and take-off of aircraft.",
      },
      {
        id: "ALWALW0067002",
        answer:
          "rectangular area on a land aerodrome prepared for the landing and take-off of aircraft.",
      },
      {
        id: "ALWALW0067003",
        answer:
          "rectangular area on a land or water aerodrome prepared for the landing and take-off of aircraft.",
      },
      {
        id: "ALWALW0067004",
        answer:
          "rectangular area on a land aerodrome prepared for the landing and take-off of helicopters.",
      },
    ],
    correct: "ALWALW0067002",
  },
  {
    id: "ALW0068",
    question:
      ' Which statement is correct with regard to the term "taxi holding point"?',
    answers: [
      {
        id: "ALWALW0068001",
        answer:
          "A taxi holding point is designed to indicate the beginning of the safety area and may be crossed when a taxi clearance is given",
      },
      {
        id: "ALWALW0068002",
        answer:
          "A taxi holding point is an area where the aircraft must stop unless further permission to proceed is given",
      },
      {
        id: "ALWALW0068003",
        answer:
          "A taxi holding point is the point at which the aircraft must stop unless further permission to proceed is given",
      },
      {
        id: "ALWALW0068004",
        answer:
          "A taxi holding point is only to be observed for IFR traffic if instrument weather conditions are prevailing",
      },
    ],
    correct: "ALWALW0068003",
  },
  {
    id: "ALW0069",
    question: ' What does the reported runway condition "WET" mean?',
    answers: [
      {
        id: "ALWALW0069001",
        answer: "A large part of the surface is flooded",
      },
      {
        id: "ALWALW0069002",
        answer:
          "The surface of the runway is soaked, but there are no significant patches of standing water",
      },
      {
        id: "ALWALW0069003",
        answer: "Some water patches are visible",
      },
      {
        id: "ALWALW0069004",
        answer: "The runway is clear of water, ice, and snow",
      },
    ],
    correct: "ALWALW0069002",
  },
  {
    id: "ALW0070",
    question: ' What does the reported runway condition "DAMP" mean?',
    answers: [
      {
        id: "ALWALW0070001",
        answer: "A large part of the surface is flooded",
      },
      {
        id: "ALWALW0070002",
        answer: "Wet surface, but no significant puddles are visible",
      },
      {
        id: "ALWALW0070003",
        answer: "Change of colour on the surface due to moisture",
      },
      {
        id: "ALWALW0070004",
        answer: "The runway is clear of water, ice, and snow",
      },
    ],
    correct: "ALWALW0070001",
  },
  {
    id: "ALW0071",
    question:
      ' What does "WATER PATCHES" mean regarding the reported runway condition? (1, P.)',
    answers: [
      {
        id: "ALWALW0071001",
        answer: "Patches of standing water are visible",
      },
      {
        id: "ALWALW0071002",
        answer: "The runway is clear of water, ice, and snow",
      },
      {
        id: "ALWALW0071003",
        answer: "Wet surface, but no significant patches are visible",
      },
      {
        id: "ALWALW0071004",
        answer: "A large part of the surface is flooded",
      },
    ],
    correct: "ALWALW0071001",
  },
  {
    id: "ALW0072",
    question:
      " How can a wind direction indicator be marked for better visibility?",
    answers: [
      {
        id: "ALWALW0072001",
        answer:
          "The wind direction indicator could be surrounded by a white circle.",
      },
      {
        id: "ALWALW0072002",
        answer:
          "The wind direction indicator could be made from green materials.",
      },
      {
        id: "ALWALW0072003",
        answer:
          "The wind direction indicator may be mounted on top of the control tower.",
      },
      {
        id: "ALWALW0072004",
        answer:
          "The wind direction indicator could be located on a big black surface.",
      },
    ],
    correct: "",
  },
  {
    id: "ALW0073",
    question:
      " What is the meaning of a flashing red light signal at a controlled aerodrome directed to an aircraft in flight?",
    answers: [
      {
        id: "ALWALW0073001",
        answer: "Give way to other aircraft and continue circling",
      },
      {
        id: "ALWALW0073002",
        answer: "Cleared to land",
      },
      {
        id: "ALWALW0073003",
        answer:
          "Return for landing, followed by steady green at the appropriate time",
      },
      {
        id: "ALWALW0073004",
        answer: "Airport unsafe, do not land",
      },
    ],
    correct: "ALWALW0073004",
  },
  {
    id: "ALW0074",
    question:
      " What is the meaning of a flashing green light signal at a controlled aerodrome directed to an aircraft in flight?",
    answers: [
      {
        id: "ALWALW0074001",
        answer: "Give way to other aircraft and continue circling",
      },
      {
        id: "ALWALW0074002",
        answer:
          "Return for landing, followed by steady green at the appropriate time",
      },
      {
        id: "ALWALW0074003",
        answer: "Cleared to land",
      },
      {
        id: "ALWALW0074004",
        answer: "Airport unsafe, do not land",
      },
    ],
    correct: "ALWALW0074002",
  },
  {
    id: "ALW0075",
    question:
      " What is the meaning of a steady green light signal at a controlled aerodrome directed to an aircraft in flight?",
    answers: [
      {
        id: "ALWALW0075001",
        answer: "Airport unsafe, do not land",
      },
      {
        id: "ALWALW0075002",
        answer: "Give way to other aircraft and continue circling",
      },
      {
        id: "ALWALW0075003",
        answer: "Cleared to land",
      },
      {
        id: "ALWALW0075004",
        answer:
          "Return for landing, followed by steady green at the appropriate time",
      },
    ],
    correct: "ALWALW0075003",
  },
  {
    id: "ALW0076",
    question:
      " What is the meaning of a flashing white light signal at a controlled aerodrome directed to an aircraft on ground?",
    answers: [
      {
        id: "ALWALW0076001",
        answer: "Return to starting point",
      },
      {
        id: "ALWALW0076002",
        answer: "Clear the taxiway / runway",
      },
      {
        id: "ALWALW0076003",
        answer: "Cleared to taxi",
      },
      {
        id: "ALWALW0076004",
        answer: "Cleared for take-off",
      },
    ],
    correct: "ALWALW0076001",
  },
  {
    id: "ALW0077",
    question:
      " What is the meaning of a flashing red light signal at a controlled aerodrome directed to an aircraft on ground?",
    answers: [
      {
        id: "ALWALW0077001",
        answer: "Cleared for take-off",
      },
      {
        id: "ALWALW0077002",
        answer: "Return to starting point",
      },
      {
        id: "ALWALW0077003",
        answer: "Immediately taxi clear of runway in use",
      },
      {
        id: "ALWALW0077004",
        answer: "Cleared to taxi",
      },
    ],
    correct: "ALWALW0077003",
  },
  {
    id: "ALW0078",
    question:
      " What is the meaning of a flashing green light signal at a controlled aerodrome directed to an aircraft on ground?",
    answers: [
      {
        id: "ALWALW0078001",
        answer: "Land at this airport and proceed to the apron",
      },
      {
        id: "ALWALW0078002",
        answer: "Cleared for take-off",
      },
      {
        id: "ALWALW0078003",
        answer: "Return to starting point",
      },
      {
        id: "ALWALW0078004",
        answer: "Cleared to taxi",
      },
    ],
    correct: "ALWALW0078004",
  },
  {
    id: "ALW0079",
    question: " Of what shape is a landing direction indicator?",
    answers: [
      {
        id: "ALWALW0079001",
        answer: "L",
      },
      {
        id: "ALWALW0079002",
        answer: "A straight arrow",
      },
      {
        id: "ALWALW0079003",
        answer: "T",
      },
      {
        id: "ALWALW0079004",
        answer: "An angled arrow",
      },
    ],
    correct: "ALWALW0079003",
  },
  {
    id: "ALW0080",
    question: " What is the purpose of the signal square at an aerodrome?",
    answers: [
      {
        id: "ALWALW0080001",
        answer:
          "Aircraft taxi to this square to get light signals for taxi and take-off clearance",
      },
      {
        id: "ALWALW0080002",
        answer:
          "It is an illuminated area on which search and rescue and fire fighting vehicles are placed",
      },
      {
        id: "ALWALW0080003",
        answer:
          "It is a specially marked area to pick up or drop towing objects",
      },
      {
        id: "ALWALW0080004",
        answer:
          "It contains special symbols to indicate the conditions at the aerodrome visually to over-flying aircraft",
      },
    ],
    correct: "ALWALW0080004",
  },
  {
    id: "ALW0081",
    question:
      " In which way should a pilot confirm received light signals in flight?",
    answers: [
      {
        id: "ALWALW0081001",
        answer: "Rock the wings (in the daytime)",
      },
      {
        id: "ALWALW0081002",
        answer: "Apply some changes of RPM",
      },
      {
        id: "ALWALW0081003",
        answer: "Apply some fast pitch changes",
      },
      {
        id: "ALWALW0081004",
        answer: "Apply some changes of the rudder",
      },
    ],
    correct: "ALWALW0081001", // confirm
  },
  {
    id: "ALW0082",
    question:
      " What is the meaning of a steady red light signal at a controlled aerodrome directed to an aircraft on ground?",
    answers: [
      {
        id: "ALWALW0082001",
        answer: "Clear the taxiway / runway",
      },
      {
        id: "ALWALW0082002",
        answer: "Land at this airport and proceed to apron",
      },
      {
        id: "ALWALW0082003",
        answer: "Return to starting point",
      },
      {
        id: "ALWALW0082004",
        answer: "Stop",
      },
    ],
    correct: "ALWALW0082004",
  },
  {
    id: "ALW0083",
    question: " How are two parallel runways designated?",
    answers: [
      {
        id: "ALWALW0083001",
        answer:
          "The left runway remains unchanged, the right runway designator is increased by 1",
      },
      {
        id: "ALWALW0083002",
        answer: 'The left runway gets the suffix "-1", the right runway "-2"',
      },
      {
        id: "ALWALW0083003",
        answer:
          'The left runway gets the suffix "L", the right runway remains unchanged',
      },
      {
        id: "ALWALW0083004",
        answer: 'The left runway gets the suffix "L", the right runway "R"',
      },
    ],
    correct: "ALWALW0083004",
  },
  {
    id: "ALW0084",
    question:
      " According to ICAO Anex 14, which is the colour marking of a runway?",
    answers: [
      {
        id: "ALWALW0084001",
        answer: "White",
      },
      {
        id: "ALWALW0084002",
        answer: "Blue",
      },
      {
        id: "ALWALW0084003",
        answer: "Yellow",
      },
      {
        id: "ALWALW0084004",
        answer: "Green",
      },
    ],
    correct: "ALWALW0084001",
  },
  {
    id: "ALW0085",
    question:
      " What is indicated by a pattern of longitudinal stripes of uniform dimensions disposed symmetrically about the centerline of a runway?",
    answers: [
      {
        id: "ALWALW0085001",
        answer: "Do not touch down behind them",
      },
      {
        id: "ALWALW0085002",
        answer: "At this point the glide path of an ILS hits the runway",
      },
      {
        id: "ALWALW0085003",
        answer: "Do not touch down before them",
      },
      {
        id: "ALWALW0085004",
        answer: "A ground roll could be started from this position",
      },
    ],
    correct: "ALWALW0085003",
  },
  {
    id: "ALW0086",
    question: " Which runway designators are correct for 2 parallel runways?",
    answers: [
      {
        id: "ALWALW0086001",
        answer: '"26" and "26R"',
      },
      {
        id: "ALWALW0086002",
        answer: '"24" and "25"',
      },
      {
        id: "ALWALW0086003",
        answer: '"06L" and "06R"',
      },
      {
        id: "ALWALW0086004",
        answer: '"18" and "18-2"',
      },
    ],
    correct: "ALWALW0086003",
  },
  {
    id: "ALW0087",
    question: ' What is a "PAPI" (Precision Approach Path Indicator)?',
    answers: [
      {
        id: "ALWALW0087001",
        answer:
          "A visual aid that provides guidance information to help a pilot acquire and maintain the correct glidepath to an aerodrome or an airport",
      },
      {
        id: "ALWALW0087002",
        answer:
          "A visual aid that provides guidance information to help a pilot acquire and maintain the correct departure track when departing from an aerodrome or an airport",
      },
      {
        id: "ALWALW0087003",
        answer:
          "A visual aid that provides guidance information to help a tower controller acquire and maintain the correct approach to an aerodrome or an airport",
      },
      {
        id: "ALWALW0087004",
        answer:
          "An instrumental aid that provides guidance information to help a pilot acquire and maintain the correct approach to an aerodrome or an airport",
      },
    ],
    correct: "ALWALW0087001",
  },
  {
    id: "ALW0088",
    question: " An aerodrome beacon (ABN) is a...",
    answers: [
      {
        id: "ALWALW0088001",
        answer:
          "rotating beacon installed at an airport or aerodrome to indicate its location to aircraft pilots from the ground.",
      },
      {
        id: "ALWALW0088002",
        answer:
          "rotating beacon installed at an airport or aerodrome to indicate its location to aircraft pilots from the air.",
      },
      {
        id: "ALWALW0088003",
        answer:
          "fixed beacon installed at an airport or aerodrome to indicate its location to aircraft pilots from the air.",
      },
      {
        id: "ALWALW0088004",
        answer:
          "rotating beacon installed at the beginning of the final approach to indicate its location to aircraft pilots from the air.",
      },
    ],
    correct: "",
  },
  {
    id: "ALW0089",
    question: " Which is the colour of runway edge lights?",
    answers: [
      {
        id: "ALWALW0089001",
        answer: "White",
      },
      {
        id: "ALWALW0089002",
        answer: "Blue",
      },
      {
        id: "ALWALW0089003",
        answer: "Red",
      },
      {
        id: "ALWALW0089004",
        answer: "Green",
      },
    ],
    correct: "ALWALW0089001",
  },
  {
    id: "ALW0090",
    question: " Which is the colour of runway end lights?",
    answers: [
      {
        id: "ALWALW0090001",
        answer: "Red",
      },
      {
        id: "ALWALW0090002",
        answer: "Blue",
      },
      {
        id: "ALWALW0090003",
        answer: "White",
      },
      {
        id: "ALWALW0090004",
        answer: "Green",
      },
    ],
    correct: "ALWALW0090001",
  },
  {
    id: "ALW0091",
    question:
      " What is shown on the printed sign? See figure (ALW-019) Siehe Anlage 1",
    answers: [
      {
        id: "ALWALW0091001",
        answer: "Taxiway A",
      },
      {
        id: "ALWALW0091002",
        answer: "Parking position A",
      },
      {
        id: "ALWALW0091003",
        answer: "Part A of the runway",
      },
      {
        id: "ALWALW0091004",
        answer: "Point A on a taxiway",
      },
    ],
    correct: "ALWALW0091001",
  },
  {
    id: "ALW0092",
    question:
      " What is shown on the printed sign? See figure (ALW-020) Siehe Anlage 2",
    answers: [
      {
        id: "ALWALW0092001",
        answer: "2500 m in the stated direction till reaching the parking area",
      },
      {
        id: "ALWALW0092002",
        answer:
          "The complete length of the runway in the stated direction is 2500 m",
      },
      {
        id: "ALWALW0092003",
        answer:
          "2500 m in the stated direction till reaching the departure point of the runway",
      },
      {
        id: "ALWALW0092004",
        answer:
          "From this intersection the available runway length is 2500 m in the stated direction",
      },
    ],
    correct: "",
  },
  {
    id: "ALW0093",
    question:
      " Which meaning has a yellow cross on red ground signal as shown in the signal area of an aerodrome? See figure (ALW-010) Siehe Anlage 3",
    answers: [
      {
        id: "ALWALW0093001",
        answer:
          "After take-off and before landing all turns have to be made to the right.",
      },
      {
        id: "ALWALW0093002",
        answer: "Ground movement restricted to hard surfaces.",
      },
      {
        id: "ALWALW0093003",
        answer: "Caution, manoeuvring area is poor.",
      },
      {
        id: "ALWALW0093004",
        answer: "Prohibition on landing for a longer period.",
      },
    ],
    correct: "ALWALW0093004",
  },
  {
    id: "ALW0094",
    question:
      " What is the meaning of this sign at an aerodrome? See figure (ALW-011) Siehe Anlage 4",
    answers: [
      {
        id: "ALWALW0094001",
        answer: "Caution, manoeuvring area is poor",
      },
      {
        id: "ALWALW0094002",
        answer: "Glider flying is in progress",
      },
      {
        id: "ALWALW0094003",
        answer: "Landing prohibited for a longer period",
      },
      {
        id: "ALWALW0094004",
        answer:
          "After take-off and before landing all turns have to be made to the right",
      },
    ],
    correct: "",
  },
  {
    id: "ALW0095",
    question:
      " What is the meaning of the illustrated ground signal as shown in the signal area of an aerodrome? See figure (ALW-012) Siehe Anlage 5",
    answers: [
      {
        id: "ALWALW0095001",
        answer: "Prohibition on landing for a longer period",
      },
      {
        id: "ALWALW0095002",
        answer: "Ground movement restricted to hard surfaces",
      },
      {
        id: "ALWALW0095003",
        answer:
          "After take-off and before landing all turns have to be made to the right",
      },
      {
        id: "ALWALW0095004",
        answer: "Caution, manoeuvring area is poor",
      },
    ],
    correct: "",
  },
  {
    id: "ALW0096",
    question: ' What is the meaning of "DETRESFA"?',
    answers: [
      {
        id: "ALWALW0096001",
        answer: "Distress phase",
      },
      {
        id: "ALWALW0096002",
        answer: "Alerting phase",
      },
      {
        id: "ALWALW0096003",
        answer: "Uncertainty phase",
      },
      {
        id: "ALWALW0096004",
        answer: "Rescue phase",
      },
    ],
    correct: "ALWALW0096001",
  },
  {
    id: "ALW0097",
    question: " Who provides search and rescue service?",
    answers: [
      {
        id: "ALWALW0097001",
        answer: "Only civil organisations",
      },
      {
        id: "ALWALW0097002",
        answer: "Only military organisations",
      },
      {
        id: "ALWALW0097003",
        answer: "Both military and civil organisations",
      },
      {
        id: "ALWALW0097004",
        answer: "International approved organisations",
      },
    ],
    correct: "ALWALW0097003",
  },
  {
    id: "ALW0098",
    question:
      " How can a pilot confirm a search and rescue signal on ground in flight?",
    answers: [
      {
        id: "ALWALW0098001",
        answer: "Push the rudder in both directions multiple times",
      },
      {
        id: "ALWALW0098002",
        answer: "Fly in a parabolic flight path multiple times",
      },
      {
        id: "ALWALW0098003",
        answer: "Deploy and retract the landing flaps multiple times",
      },
      {
        id: "ALWALW0098004",
        answer: "Rock the wings",
      },
    ],
    correct: "ALWALW0098004",
  },
  {
    id: "ALW0099",
    question:
      " With respect to aircraft accident and incident investigation, what are the three categories regarding aircraft occurrences?",
    answers: [
      {
        id: "ALWALW0099001",
        answer: "Event, Serious event, Accident",
      },
      {
        id: "ALWALW0099002",
        answer: "Happening, Event, Serious event",
      },
      {
        id: "ALWALW0099003",
        answer: "Incident, Serious incident, Accident",
      },
      {
        id: "ALWALW0099004",
        answer: "Event, Crash, Disaster",
      },
    ],
    correct: "ALWALW0099003",
  },
  {
    id: "ALW0100",
    question:
      " What is the primary purpose of an aircraft accident investigation?",
    answers: [
      {
        id: "ALWALW0100001",
        answer: "To Determine the guilty party and draw legal consequences",
      },
      {
        id: "ALWALW0100002",
        answer: "To identify the reasons and work out safety recommendations",
      },
      {
        id: "ALWALW0100003",
        answer:
          "To clarify questions of liability within the meaning of compensation for passengers",
      },
      {
        id: "ALWALW0100004",
        answer:
          "To work for the public prosecutor and help to follow-up flight accidents",
      },
    ],
    correct: "ALWALW0100002",
  },
];

export default questions;
