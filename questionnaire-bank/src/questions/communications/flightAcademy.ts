import type { Question } from "../../types/Questionnaire";

const questions: Question[] = [
  {
    id: "COM0001",
    question:
      " In which situations should a pilot use blind transmissions? (1,00 P.)",
    answers: [
      {
        id: "COM0001001",
        answer:
          "When no radio communication can be established with the appropriate aeronautical station, but when evidence exists that transmissions are received at that ground unit",
      },
      {
        id: "COM0001002",
        answer:
          "When a pilot has flown into cloud or fog unintentionally and therefore would like to request navigational assistance from a ground unit",
      },
      {
        id: "COM0001003",
        answer:
          "When a transmission containing important navigational or technical information is to be sent to several stations at the same time",
      },
      {
        id: "COM0001004",
        answer:
          "When the traffic situation at an airport allows the transmission of information which does not need to be acknowledged by the ground station",
      },
    ],
    correct: "COM0001001",
  },
  {
    id: "COM0002",
    question:
      " Leaving a control frequency (except when reaching the final parking position)... (1, P.)",
    answers: [
      {
        id: "COM0002001",
        answer: "is not mandatory to be reported.",
      },
      {
        id: "COM0002002",
        answer: "must be approved twice.",
      },
      {
        id: "COM0002003",
        answer: "must be approved.",
      },
      {
        id: "COM0002004",
        answer: "must be reported.",
      },
    ],
    correct: "COM0002003",
  },
  {
    id: "COM0003",
    question: ' Which abbreviation is used for the term "abeam"? (1,00 P.)',
    answers: [
      {
        id: "COM0003001",
        answer: "ABM",
      },
      {
        id: "COM0003002",
        answer: "ABB",
      },
      {
        id: "COM0003003",
        answer: "ABA",
      },
      {
        id: "COM0003004",
        answer: "ABE",
      },
    ],
    correct: "COM0003001",
  },
  {
    id: "COM0004",
    question:
      ' Which abbreviation is used for the term "visual flight rules"? (1,00 P.)',
    answers: [
      {
        id: "COM0004001",
        answer: "VFS",
      },
      {
        id: "COM0004002",
        answer: "VFR",
      },
      {
        id: "COM0004003",
        answer: "VRU",
      },
      {
        id: "COM0004004",
        answer: "VMC",
      },
    ],
    correct: "COM0004002",
  },
  {
    id: "COM0005",
    question: ' Which abbreviation is used for the term "obstacle"? (1,00 P.)',
    answers: [
      {
        id: "COM0005001",
        answer: "OBTC",
      },
      {
        id: "COM0005002",
        answer: "OBST",
      },
      {
        id: "COM0005003",
        answer: "OST",
      },
      {
        id: "COM0005004",
        answer: "OBS",
      },
    ],
    correct: "COM0005002",
  },
  {
    id: "COM0006",
    question: ' What does the abbreviation "FIS" stand for? (1,00 P.)',
    answers: [
      {
        id: "COM0006001",
        answer: "Flashing information service",
      },
      {
        id: "COM0006002",
        answer: "Flight information system",
      },
      {
        id: "COM0006003",
        answer: "Flashing information system",
      },
      {
        id: "COM0006004",
        answer: "Flight information service",
      },
    ],
    correct: "COM0006004",
  },
  {
    id: "COM0007",
    question: ' What does the abbreviaton "FIR" stand for? (1,00 P.)',
    answers: [
      {
        id: "COM0007001",
        answer: "Flight integrity receiver",
      },
      {
        id: "COM0007002",
        answer: "Flow information radar",
      },
      {
        id: "COM0007003",
        answer: "Flight information region",
      },
      {
        id: "COM0007004",
        answer: "Flow integrity required",
      },
    ],
    correct: "COM0007003",
  },
  {
    id: "COM0008",
    question: ' What does the abbreviation "H24" stand for? (1,00 P.)',
    answers: [
      {
        id: "COM0008001",
        answer: "Sunrise to sunset",
      },
      {
        id: "COM0008002",
        answer: "24 h service",
      },
      {
        id: "COM0008003",
        answer: "No specific opening times",
      },
      {
        id: "COM0008004",
        answer: "Sunset to sunrise",
      },
    ],
    correct: "COM0008002",
  },
  {
    id: "COM0009",
    question: ' What does the abbreviation "HX" stand for? (1,00 P.)',
    answers: [
      {
        id: "COM0009001",
        answer: "No specific opening hours",
      },
      {
        id: "COM0009002",
        answer: "Sunrise to sunset",
      },
      {
        id: "COM0009003",
        answer: "Sunset to sunrise",
      },
      {
        id: "COM0009004",
        answer: "24 h service",
      },
    ],
    correct: "COM0009001",
  },
  {
    id: "COM0010",
    question:
      " The altimeter has to be set to what value in order to show zero on ground? (1,00 P.)",
    answers: [
      {
        id: "COM0010001",
        answer: "QNH",
      },
      {
        id: "COM0010002",
        answer: "QNE",
      },
      {
        id: "COM0010003",
        answer: "QTE",
      },
      {
        id: "COM0010004",
        answer: "QFE",
      },
    ],
    correct: "COM0010004",
  },
  {
    id: "COM0011",
    question:
      " Which altitude is displayed on the altimeter when set to a specific QNH? (1,00 P.)",
    answers: [
      {
        id: "COM0011001",
        answer: "Altitude in relation to the 1013.25 hPa datum",
      },
      {
        id: "COM0011002",
        answer: "Altitude in relation to mean sea level",
      },
      {
        id: "COM0011003",
        answer:
          "Altitude in relation to the air pressure at the reference airfield",
      },
      {
        id: "COM0011004",
        answer: "Altitude in relation to the highest elevation within 10 km",
      },
    ],
    correct: "COM0011002",
    explanation: "WTF....",
  },
  {
    id: "COM0012",
    question:
      " Which altitude is displayed on the altimeter when set to a specific QFE? (1,00 P.)",
    answers: [
      {
        id: "COM0012001",
        answer: "Altitude in relation to the 1013.25 hPa datum",
      },
      {
        id: "COM0012002",
        answer:
          "Altitude in relation to the air pressure at the reference airfield",
      },
      {
        id: "COM0012003",
        answer: "Altitude in relation to the highest elevation within 10 km",
      },
      {
        id: "COM0012004",
        answer: "Altitude in relation to mean sea level",
      },
    ],
    correct: "COM0012002",
  },
  {
    id: "COM0013",
    question: ' What does the abbreviation "QDR" stand for? (1,00 P.)',
    answers: [
      {
        id: "COM0013001",
        answer: "True bearing from the station",
      },
      {
        id: "COM0013002",
        answer: "Magnetic bearing from the station",
      },
      {
        id: "COM0013003",
        answer: "Magnetic bearing to the station",
      },
      {
        id: "COM0013004",
        answer: "True bearing to the station",
      },
    ],
    correct: "COM0013002",
  },
  {
    id: "COM0014",
    question: ' What does the abbreviation "QUJ" stand for? (1,00 P.)',
    answers: [
      {
        id: "COM0014001",
        answer: "True bearing from the station",
      },
      {
        id: "COM0014002",
        answer: "True bearing to the station",
      },
      {
        id: "COM0014003",
        answer: "Magnetic bearing to the station",
      },
      {
        id: "COM0014004",
        answer: "Magnetic bearing from the station",
      },
    ],
    correct: "COM0014002",
  },
  {
    id: "COM0015",
    question: ' What does the abbreviation "QTE" stand for? (1,00 P.)',
    answers: [
      {
        id: "COM0015001",
        answer: "Magnetic bearing to the station",
      },
      {
        id: "COM0015002",
        answer: "Magnetic bearing from the station",
      },
      {
        id: "COM0015003",
        answer: "True bearing from the station",
      },
      {
        id: "COM0015004",
        answer: "True bearing to the station",
      },
    ],
    correct: "COM0015003",
  },
  {
    id: "COM0016",
    question:
      " Which Q-code is used for the magnetic bearing from the station? (1,00 P.)",
    answers: [
      {
        id: "COM0016001",
        answer: "QUJ",
      },
      {
        id: "COM0016002",
        answer: "QTE",
      },
      {
        id: "COM0016003",
        answer: "QDM",
      },
      {
        id: "COM0016004",
        answer: "QDR",
      },
    ],
    correct: "COM0016004",
  },
  {
    id: "COM0017",
    question:
      " Which Q-code is used for the true bearing from the station? (1,00 P.)",
    answers: [
      {
        id: "COM0017001",
        answer: "QDR",
      },
      {
        id: "COM0017002",
        answer: "QUJ",
      },
      {
        id: "COM0017003",
        answer: "QDM",
      },
      {
        id: "COM0017004",
        answer: "QTE",
      },
    ],
    correct: "COM0017004",
  },
  {
    id: "COM0018",
    question:
      " Which Q-code is used for the true bearing to the station? (1,00 P.)",
    answers: [
      {
        id: "COM0018001",
        answer: "QDR",
      },
      {
        id: "COM0018002",
        answer: "QDM",
      },
      {
        id: "COM0018003",
        answer: "QTE",
      },
      {
        id: "COM0018004",
        answer: "QUJ",
      },
    ],
    correct: "COM0018004",
  },
  {
    id: "COM0019",
    question:
      " Which of the listed radiotelephony messages has a higher priority than a flight safety message? (1,00 P.)",
    answers: [
      {
        id: "COM0019001",
        answer: "Communication related to direction finding",
      },
      {
        id: "COM0019002",
        answer: "Flight regularity message",
      },
      {
        id: "COM0019003",
        answer: "Meteorological message",
      },
      {
        id: "COM0019004",
        answer: "Aircraft position report message",
      },
    ],
    correct: "COM0019001",
  },
  {
    id: "COM0020",
    question:
      " What is the correct term for a message used for air traffic control? (1,00 P.)",
    answers: [
      {
        id: "COM0020001",
        answer: "Flight regularity message",
      },
      {
        id: "COM0020002",
        answer: "Meteorological message",
      },
      {
        id: "COM0020003",
        answer: "Message related to direction finding",
      },
      {
        id: "COM0020004",
        answer: "Flight safety message",
      },
    ],
    correct: "COM0020004",
  },
  {
    id: "COM0021",
    question: " Distress messages are messages... (1,00 P.)",
    answers: [
      {
        id: "COM0021001",
        answer:
          "concerning the safety of an aircraft, a watercraft or some other vehicle or person in sight.",
      },
      {
        id: "COM0021002",
        answer:
          "sent by a pilot or an aircraft operating agency which have an imminent meaning for aircraft in flight.",
      },
      {
        id: "COM0021003",
        answer:
          "concerning aircraft and their passengers which face a grave and imminent threat and require immediate assistance.",
      },
      {
        id: "COM0021004",
        answer:
          "concerning the operation or maintenance of facilities which are important for the safety and regularity of flight operations.",
      },
    ],
    correct: "COM0021003",
  },
  {
    id: "COM0022",
    question: " Urgency messages are messages... (1,00 P.)",
    answers: [
      {
        id: "COM0022001",
        answer:
          "concerning aircraft and their passengers which face a grave and imminent threat and require immediate assistance.",
      },
      {
        id: "COM0022002",
        answer:
          "concerning the safety of an aircraft, a watercraft or some other vehicle or person in sight.",
      },
      {
        id: "COM0022003",
        answer:
          "concerning the operation or maintenance of facilities essential for the safety or regularity of aircraft operation.",
      },
      {
        id: "COM0022004",
        answer:
          "sent by a pilot or an aircraft operating agency which have an imminent meaning for aircraft in flight.",
      },
    ],
    correct: "COM0022002",
  },
  {
    id: "COM0023",
    question: " Regularity messages are messages... (1,00 P.)",
    answers: [
      {
        id: "COM0023001",
        answer:
          "concerning the safety of an aircraft, a watercraft or some other vehicle or person in sight.",
      },
      {
        id: "COM0023002",
        answer:
          "concerning aircraft and their passengers which face a grave and imminent threat and require immediate assistance.",
      },
      {
        id: "COM0023003",
        answer:
          "sent by an aircraft operating agency or an aircraft of immediate concern to an aircraft in flight.",
      },
      {
        id: "COM0023004",
        answer:
          "concerning the operation or maintenance of facilities essential for the safety or regularity of aircraft operation.",
      },
    ],
    correct: "COM0023004",
  },
  {
    id: "COM0024",
    question:
      " Which of the following messages has the highest priority? (1,00 P.)",
    answers: [
      {
        id: "COM0024001",
        answer: "Turn left",
      },
      {
        id: "COM0024002",
        answer: "Request QDM",
      },
      {
        id: "COM0024003",
        answer: "QNH 1013",
      },
      {
        id: "COM0024004",
        answer: "Wind 300 degrees, 5 knots",
      },
    ],
    correct: "COM0024002",
  },
  {
    id: "COM0025",
    question:
      " What is the correct way to transmit the call sign HB-YKM? (1,00 P.)",
    answers: [
      {
        id: "COM0025001",
        answer: "Home Bravo Yuliett Kilo Mike",
      },
      {
        id: "COM0025002",
        answer: "Hotel Bravo Yankee Kilo Mike",
      },
      {
        id: "COM0025003",
        answer: "Hotel Bravo Yuliett Kilo Mikro",
      },
      {
        id: "COM0025004",
        answer: "Home Bravo Yankee Kilo Mikro",
      },
    ],
    correct: "COM0025002",
  },
  {
    id: "COM0026",
    question:
      " What is the correct way to transmit the call sign OE-JVK? (1,00 P.)",
    answers: [
      {
        id: "COM0026001",
        answer: "Omega Echo Jankee Victor Kilo",
      },
      {
        id: "COM0026002",
        answer: "Oscar Echo Jankee Victor Kilogramm",
      },
      {
        id: "COM0026003",
        answer: "Oscar Echo Juliett Victor Kilo",
      },
      {
        id: "COM0026004",
        answer: "Omega Echo Juliett Victor Kilogramm",
      },
    ],
    correct: "COM0026003",
  },
  {
    id: "COM0027",
    question: " An altitude of 4500 ft is transmitted as... (1,00 P.)",
    answers: [
      {
        id: "COM0027001",
        answer: "four tousand five hundred.",
      },
      {
        id: "COM0027002",
        answer: "four five tousand.",
      },
      {
        id: "COM0027003",
        answer: "four tousand five zero zero.",
      },
      {
        id: "COM0027004",
        answer: "four five zero zero.",
      },
    ],
    correct: "COM0027001",
  },
  {
    id: "COM0028",
    question:
      " A heading of 285 degrees is correctly transmitted as... (1,00 P.)",
    answers: [
      {
        id: "COM0028001",
        answer: "two eight five.",
      },
      {
        id: "COM0028002",
        answer: "two eight five hundred.",
      },
      {
        id: "COM0028003",
        answer: "two hundred eight five.",
      },
      {
        id: "COM0028004",
        answer: "two hundred eighty-five.",
      },
    ],
    correct: "COM0028001",
  },
  {
    id: "COM0029",
    question:
      " A frequency of 119.500 MHz is correctly transmitted as... (1,00 P.)",
    answers: [
      {
        id: "COM0029001",
        answer: "one one niner tousand decimal five zero.",
      },
      {
        id: "COM0029002",
        answer: "one one niner decimal five.",
      },
      {
        id: "COM0029003",
        answer: "one one niner decimal five zero.",
      },
      {
        id: "COM0029004",
        answer: "one one niner decimal five zero zero.",
      },
    ],
    correct: "COM0029002",
  },
  {
    id: "COM0030",
    question:
      ' The directional information "12 o\'clock" is correctly transmitted as... (1,00 P.)',
    answers: [
      {
        id: "COM0030001",
        answer: "One two.",
      },
      {
        id: "COM0030002",
        answer: "One two o'clock.",
      },
      {
        id: "COM0030003",
        answer: "One two hundred.",
      },
      {
        id: "COM0030004",
        answer: "Twelve o'clock.",
      },
    ],
    correct: "COM0030004",
  },
  {
    id: "COM0031",
    question: " Times are transmitted as... (1,00 P.)",
    answers: [
      {
        id: "COM0031001",
        answer: "UTC.",
      },
      {
        id: "COM0031002",
        answer: "standard time.",
      },
      {
        id: "COM0031003",
        answer: "local time.",
      },
      {
        id: "COM0031004",
        answer: "time zone time.",
      },
    ],
    correct: "COM0031001",
  },
  {
    id: "COM0032",
    question:
      " If there is any doubt about ambiguity, a time of 1620 is to be transmitted as... (1,00 P.)",
    answers: [
      {
        id: "COM0032001",
        answer: "sixteen twenty.",
      },
      {
        id: "COM0032002",
        answer: "two zero.",
      },
      {
        id: "COM0032003",
        answer: "one tousand six hundred two zero.",
      },
      {
        id: "COM0032004",
        answer: "one six two zero.",
      },
    ],
    correct: "COM0032004",
  },
  {
    id: "COM0033",
    question: ' What is the meaning of the phrase "Roger"? (1,00 P.)',
    answers: [
      {
        id: "COM0033001",
        answer: "Permission for proposed action is granted",
      },
      {
        id: "COM0033002",
        answer: "I understand your message and will comply with it",
      },
      {
        id: "COM0033003",
        answer: "I have received all of your last transmission",
      },
      {
        id: "COM0033004",
        answer:
          "An error has been made in this transmission. The correct version is...",
      },
    ],
    correct: "COM0033003",
  },
  {
    id: "COM0034",
    question: ' What is the meaning of the phrase "Correction"? (1,00 P.)',
    answers: [
      {
        id: "COM0034001",
        answer: "Permission for proposed action is granted",
      },
      {
        id: "COM0034002",
        answer:
          "An error has been made in this transmission. The correct version is...",
      },
      {
        id: "COM0034003",
        answer: "I have received all of your last transmission",
      },
      {
        id: "COM0034004",
        answer: "I understand your message and will comply with it",
      },
    ],
    correct: "COM0034002",
  },
  {
    id: "COM0035",
    question: ' What is the meaning of the phrase "Approved"? (1,00 P.)',
    answers: [
      {
        id: "COM0035001",
        answer: "I have received all of your last transmission",
      },
      {
        id: "COM0035002",
        answer: "I understand your message and will comply with it",
      },
      {
        id: "COM0035003",
        answer: "Permission for proposed action is granted",
      },
      {
        id: "COM0035004",
        answer:
          "An error has been made in this transmission. The correct version is...",
      },
    ],
    correct: "COM0035003",
  },
  {
    id: "COM0036",
    question:
      " Which phrase does a pilot use when he / she wants to check the readability of his / her transmission? (1,00 P.)",
    answers: [
      {
        id: "COM0036001",
        answer: "What is the communication like?",
      },
      {
        id: "COM0036002",
        answer: "How do you read?",
      },
      {
        id: "COM0036003",
        answer: "Request readability",
      },
      {
        id: "COM0036004",
        answer: "You read me five",
      },
    ],
    correct: "COM0036002",
  },
  {
    id: "COM0037",
    question:
      " Which phrase is used by a pilot when he wants to fly through controlled airspace? (1,00 P.)",
    answers: [
      {
        id: "COM0037001",
        answer: "Apply",
      },
      {
        id: "COM0037002",
        answer: "Want",
      },
      {
        id: "COM0037003",
        answer: "Would like",
      },
      {
        id: "COM0037004",
        answer: "Request",
      },
    ],
    correct: "COM0037004",
  },
  {
    id: "COM0038",
    question:
      ' What phrase is used by a pilot if a transmission is to be answered with "yes"? (1,00 P.)',
    answers: [
      {
        id: "COM0038001",
        answer: "Roger",
      },
      {
        id: "COM0038002",
        answer: "Yes",
      },
      {
        id: "COM0038003",
        answer: "Affirm",
      },
      {
        id: "COM0038004",
        answer: "Affirmative",
      },
    ],
    correct: "COM0038003",
  },
  {
    id: "COM0039",
    question:
      ' What phrase is used by a pilot if a transmission is to be answered with "no"? (1,00 P.)',
    answers: [
      {
        id: "COM0039001",
        answer: "Negative",
      },
      {
        id: "COM0039002",
        answer: "Not",
      },
      {
        id: "COM0039003",
        answer: "Finish",
      },
      {
        id: "COM0039004",
        answer: "No",
      },
    ],
    correct: "COM0039001",
  },
  {
    id: "COM0040",
    question:
      " Which phrase is to be used when a pilot wants the tower to know that he is ready for take-off? (1,00 P.)",
    answers: [
      {
        id: "COM0040001",
        answer: "Ready for start-up",
      },
      {
        id: "COM0040002",
        answer: "Ready for departure",
      },
      {
        id: "COM0040003",
        answer: "Request take-off",
      },
      {
        id: "COM0040004",
        answer: "Ready",
      },
    ],
    correct: "COM0040002",
  },
  {
    id: "COM0041",
    question:
      " What phrase is used by a pilot to inform the tower about a go-around? (1,00 P.)",
    answers: [
      {
        id: "COM0041001",
        answer: "No landing",
      },
      {
        id: "COM0041002",
        answer: "Pulling up",
      },
      {
        id: "COM0041003",
        answer: "Going around",
      },
      {
        id: "COM0041004",
        answer: "Approach canceled",
      },
    ],
    correct: "COM0041003",
  },
  {
    id: "COM0042",
    question: " What is the call sign of the aerodrome control? (1,00 P.)",
    answers: [
      {
        id: "COM0042001",
        answer: "Tower",
      },
      {
        id: "COM0042002",
        answer: "Airfield",
      },
      {
        id: "COM0042003",
        answer: "Ground",
      },
      {
        id: "COM0042004",
        answer: "Control",
      },
    ],
    correct: "COM0042001",
  },
  {
    id: "COM0043",
    question:
      " What is the call sign of the surface movement control? (1,00 P.)",
    answers: [
      {
        id: "COM0043001",
        answer: "Tower",
      },
      {
        id: "COM0043002",
        answer: "Earth",
      },
      {
        id: "COM0043003",
        answer: "Ground",
      },
      {
        id: "COM0043004",
        answer: "Control",
      },
    ],
    correct: "COM0043003",
  },
  {
    id: "COM0044",
    question:
      " What is the call sign of the flight information service? (1,00 P.)",
    answers: [
      {
        id: "COM0044001",
        answer: "Info",
      },
      {
        id: "COM0044002",
        answer: "Advice",
      },
      {
        id: "COM0044003",
        answer: "Flight information",
      },
      {
        id: "COM0044004",
        answer: "Information",
      },
    ],
    correct: "COM0044004",
  },
  {
    id: "COM0045",
    question:
      " What is the correct abbreviation of the call sign D-EAZF? (1,00 P.)",
    answers: [
      {
        id: "COM0045001",
        answer: "DEA",
      },
      {
        id: "COM0045002",
        answer: "AZF",
      },
      {
        id: "COM0045003",
        answer: "DZF",
      },
      {
        id: "COM0045004",
        answer: "DEF",
      },
    ],
    correct: "COM0045003",
  },
  {
    id: "COM0046",
    question:
      " In what case is the pilot allowed to abbreviate the call sign of his aircraft? (1,00 P.)",
    answers: [
      {
        id: "COM0046001",
        answer: "After the ground station has used the abbreviation",
      },
      {
        id: "COM0046002",
        answer: "Within controlled airspace",
      },
      {
        id: "COM0046003",
        answer: "If there is little traffic in the traffic circuit",
      },
      {
        id: "COM0046004",
        answer: "After passing the first reporting point",
      },
    ],
    correct: "COM0046001",
  },
  {
    id: "COM0047",
    question:
      " What is the correct way of using the aircraft call sign at first contact? (1,00 P.)",
    answers: [
      {
        id: "COM0047001",
        answer: "Using the first two characters only",
      },
      {
        id: "COM0047002",
        answer: "Using the last two characters only",
      },
      {
        id: "COM0047003",
        answer: "Using the first three characters only",
      },
      {
        id: "COM0047004",
        answer: "Using all characters",
      },
    ],
    correct: "COM0047004",
  },
  {
    id: "COM0048",
    question:
      " What is the correct way of establishing radio communication between D-EAZF and Dusseldorf Tower? (1,00 P.)",
    answers: [
      {
        id: "COM0048001",
        answer: "Dusseldorf Tower over",
      },
      {
        id: "COM0048002",
        answer: "DEAZF is calling Dusseldorf Tower",
      },
      {
        id: "COM0048003",
        answer: "Dusseldorf Tower D-EAZF",
      },
      {
        id: "COM0048004",
        answer: "Tower from D-EAZF",
      },
    ],
    correct: "COM0048003",
  },
  {
    id: "COM0049",
    question:
      ' What is the correct way of acknowledging the instruction "Call Hamburg Tower on 121.275"? (1,00 P.)',
    answers: [
      {
        id: "COM0049001",
        answer: "Call 121.275",
      },
      {
        id: "COM0049002",
        answer: "Call tower",
      },
      {
        id: "COM0049003",
        answer: "121.275",
      },
      {
        id: "COM0049004",
        answer: "Call tower on 121.275",
      },
    ],
    correct: "COM0049003",
  },
  {
    id: "COM0050",
    question: " What does a readability of 1 indicate? (1,00 P.)",
    answers: [
      {
        id: "COM0050001",
        answer: "The transmission is perfectly readable",
      },
      {
        id: "COM0050002",
        answer: "The transmission is unreadable",
      },
      {
        id: "COM0050003",
        answer: "The transmission is readable but with difficulty",
      },
      {
        id: "COM0050004",
        answer: "The transmission is readable now and then",
      },
    ],
    correct: "COM0050002",
  },
  {
    id: "COM0051",
    question: " What does a readability of 2 indicate? (1,00 P.)",
    answers: [
      {
        id: "COM0051001",
        answer: "The transmission is readable now and then",
      },
      {
        id: "COM0051002",
        answer: "The transmission is readable but with difficulty",
      },
      {
        id: "COM0051003",
        answer: "The transmission is perfectly readable",
      },
      {
        id: "COM0051004",
        answer: "The transmission is unreadable",
      },
    ],
    correct: "COM0051001",
  },
  {
    id: "COM0052",
    question: " What does a readability of 3 indicate? (1,00 P.)",
    answers: [
      {
        id: "COM0052001",
        answer: "The transmission is readable now and then",
      },
      {
        id: "COM0052002",
        answer: "The transmission is perfectly readable",
      },
      {
        id: "COM0052003",
        answer: "The transmission is readable but with difficulty",
      },
      {
        id: "COM0052004",
        answer: "The transmission is unreadable",
      },
    ],
    correct: "COM0052003",
  },
  {
    id: "COM0053",
    question: " What does a readability of 5 indicate? (1,00 P.)",
    answers: [
      {
        id: "COM0053001",
        answer: "The transmission is readable now and then",
      },
      {
        id: "COM0053002",
        answer: "The transmission is readable but with difficulty",
      },
      {
        id: "COM0053003",
        answer: "The transmission is unreadable",
      },
      {
        id: "COM0053004",
        answer: "The transmission is perfectly readable",
      },
    ],
    correct: "COM0053004",
  },
  {
    id: "COM0054",
    question:
      " Which information from a ground station does not require readback? (1,00 P.)",
    answers: [
      {
        id: "COM0054001",
        answer: "Runway in use",
      },
      {
        id: "COM0054002",
        answer: "Wind",
      },
      {
        id: "COM0054003",
        answer: "SSR-Code",
      },
      {
        id: "COM0054004",
        answer: "Altitude",
      },
    ],
    correct: "COM0054002",
  },
  {
    id: "COM0055",
    question:
      " Which information from a ground station does not require readback? (1,00 P.)",
    answers: [
      {
        id: "COM0055001",
        answer: "Altimeter setting",
      },
      {
        id: "COM0055002",
        answer: "Traffic information",
      },
      {
        id: "COM0055003",
        answer: "Taxi instructions",
      },
      {
        id: "COM0055004",
        answer: "Heading",
      },
    ],
    correct: "COM0055002",
  },
  {
    id: "COM0056",
    question:
      ' What is the correct way of acknowledging the instruction "DZF after lift-off climb straight ahead until 2500 feet before turning right heading 220 degrees, wind 090 degrees, 5 knots, runway 12, cleared for take-off"? (1,00 P.)',
    answers: [
      {
        id: "COM0056001",
        answer:
          "DZF after lift-off climb straight ahead 2500 feet, wilco, heading 220 degrees, 090 degrees, 5 knots, cleared for take-off",
      },
      {
        id: "COM0056002",
        answer:
          "DZF after lift-off climb straight ahead 2500 feet, then turn right heading 220, runway 12, cleared for take-off",
      },
      {
        id: "COM0056003",
        answer:
          "DZF after lift-off climb straight ahead 2500 feet, then turn right heading 220, 090 degrees, 5 knots",
      },
      {
        id: "COM0056004",
        answer:
          "DZF after lift-off climb straight ahead 2500 feet, then turn right heading 220, 090 degrees, 5 knots, cleared for take-off",
      },
    ],
    correct: "COM0056002",
  },
  {
    id: "COM0057",
    question:
      ' What is the correct way of acknowledging the instruction "Next report PAH"? (1,00 P.)',
    answers: [
      {
        id: "COM0057001",
        answer: "Positive",
      },
      {
        id: "COM0057002",
        answer: "Roger",
      },
      {
        id: "COM0057003",
        answer: "Report PAH",
      },
      {
        id: "COM0057004",
        answer: "Wilco",
      },
    ],
    correct: "COM0057004",
  },
  {
    id: "COM0058",
    question:
      ' What is the correct way of acknowledging the instruction "Squawk 4321, Call Bremen Radar on 131.325"? (1,00 P.)',
    answers: [
      {
        id: "COM0058001",
        answer: "Roger",
      },
      {
        id: "COM0058002",
        answer: "Squawk 4321, wilco",
      },
      {
        id: "COM0058003",
        answer: "Squawk 4321, 131.325",
      },
      {
        id: "COM0058004",
        answer: "Wilco",
      },
    ],
    correct: "COM0058003",
  },
  {
    id: "COM0059",
    question:
      ' What is the correct way of acknowledging "You are now entering airspace Delta"? (1,00 P.)',
    answers: [
      {
        id: "COM0059001",
        answer: "Entering",
      },
      {
        id: "COM0059002",
        answer: "Roger",
      },
      {
        id: "COM0059003",
        answer: "Wilco",
      },
      {
        id: "COM0059004",
        answer: "Airspace Delta",
      },
    ],
    correct: "COM0059002",
  },
  {
    id: "COM0060",
    question:
      ' What does a cloud coverage of "FEW" mean in a METAR weather report? (1,00 P.)',
    answers: [
      {
        id: "COM0060001",
        answer: "8 eighths",
      },
      {
        id: "COM0060002",
        answer: "1 to 2 eighths",
      },
      {
        id: "COM0060003",
        answer: "5 to 7 eighths",
      },
      {
        id: "COM0060004",
        answer: "3 to 4 eighths",
      },
    ],
    correct: "COM0060002",
  },
  {
    id: "COM0061",
    question:
      ' What does a cloud coverage of "SCT" mean in a METAR weather report? (1,00 P.)',
    answers: [
      {
        id: "COM0061001",
        answer: "1 to 2 eighths",
      },
      {
        id: "COM0061002",
        answer: "8 eighths",
      },
      {
        id: "COM0061003",
        answer: "3 to 4 eighths",
      },
      {
        id: "COM0061004",
        answer: "5 to 7 eighths",
      },
    ],
    correct: "COM0061003",
  },
  {
    id: "COM0062",
    question:
      ' What does a cloud coverage of "BKN" mean in a METAR weather report? (1,00 P.)',
    answers: [
      {
        id: "COM0062001",
        answer: "3 to 4 eighths",
      },
      {
        id: "COM0062002",
        answer: "8 eighths",
      },
      {
        id: "COM0062003",
        answer: "5 to 7 eighths",
      },
      {
        id: "COM0062004",
        answer: "1 to 2 eighths",
      },
    ],
    correct: "COM0062003",
  },
  {
    id: "COM0063",
    question:
      " Given a visibility of 12 km, what is the correct way to transmit this visibility? (1,00 P.)",
    answers: [
      {
        id: "COM0063001",
        answer: "One-two kilometers.",
      },
      {
        id: "COM0063002",
        answer: "Twelve kilometers.",
      },
      {
        id: "COM0063003",
        answer: "One-zero kilometers or more.",
      },
      {
        id: "COM0063004",
        answer: "One-zero kilometers.",
      },
    ],
    correct: "COM0063003",
  },
  {
    id: "COM0064",
    question: " In what case is visibility transmitted in meters? (1,00 P.)",
    answers: [
      {
        id: "COM0064001",
        answer: "Up to 5 km",
      },
      {
        id: "COM0064002",
        answer: "Greater than 10 km",
      },
      {
        id: "COM0064003",
        answer: "Greater than 5 km",
      },
      {
        id: "COM0064004",
        answer: "Up to 10 km",
      },
    ],
    correct: "COM0064001",
  },
  {
    id: "COM0065",
    question:
      " In what cases is visibility transmitted in kilometers? (1,00 P.)",
    answers: [
      {
        id: "COM0065001",
        answer: "Up to 10 km",
      },
      {
        id: "COM0065002",
        answer: "Greater than 5 km",
      },
      {
        id: "COM0065003",
        answer: "Up to 5 km",
      },
      {
        id: "COM0065004",
        answer: "Greater than 10 km",
      },
    ],
    correct: "COM0065002",
  },
  {
    id: "COM0066",
    question:
      " What information is broadcasted on a VOLMET frequency? (1,00 P.)",
    answers: [
      {
        id: "COM0066001",
        answer: "Navigational information",
      },
      {
        id: "COM0066002",
        answer: "NOTAMS",
      },
      {
        id: "COM0066003",
        answer: "Current information",
      },
      {
        id: "COM0066004",
        answer: "Meteorological information",
      },
    ],
    correct: "COM0066004",
  },
  {
    id: "COM0067",
    question:
      " Which navigation facility may be used for broadcasting the ATIS? (1,00 P.)",
    answers: [
      {
        id: "COM0067001",
        answer: "GPS",
      },
      {
        id: "COM0067002",
        answer: "DME",
      },
      {
        id: "COM0067003",
        answer: "NDB",
      },
      {
        id: "COM0067004",
        answer: "VOR",
      },
    ],
    correct: "COM0067004",
  },
  {
    id: "COM0068",
    question:
      " How can you obtain meteorological information concerning airports during a cross- country flight? (1,00 P.)",
    answers: [
      {
        id: "COM0068001",
        answer: "VOLMET",
      },
      {
        id: "COM0068002",
        answer: "GAMET",
      },
      {
        id: "COM0068003",
        answer: "METAR",
      },
      {
        id: "COM0068004",
        answer: "AIRMET",
      },
    ],
    correct: "COM0068001",
  },
  {
    id: "COM0069",
    question: " Which transponder code indicates a radio failure? (1,00 P.)",
    answers: [
      {
        id: "COM0069001",
        answer: "7700",
      },
      {
        id: "COM0069002",
        answer: "7600",
      },
      {
        id: "COM0069003",
        answer: "7500",
      },
      {
        id: "COM0069004",
        answer: "7000",
      },
    ],
    correct: "COM0069002",
  },
  {
    id: "COM0070",
    question:
      " What is the correct phrase to begin a blind transmission? (1,00 P.)",
    answers: [
      {
        id: "COM0070001",
        answer: "Blind",
      },
      {
        id: "COM0070002",
        answer: "Transmitting blind",
      },
      {
        id: "COM0070003",
        answer: "No reception",
      },
      {
        id: "COM0070004",
        answer: "Listen",
      },
    ],
    correct: "COM0070002",
  },
  {
    id: "COM0071",
    question:
      " On what frequency shall a blind transmission be made? (1,00 P.)",
    answers: [
      {
        id: "COM0071001",
        answer: "On the appropriate FIS frequency",
      },
      {
        id: "COM0071002",
        answer: "On a radar frequency of the lower airspace",
      },
      {
        id: "COM0071003",
        answer: "On the current frequency",
      },
      {
        id: "COM0071004",
        answer: "On a tower frequency",
      },
    ],
    correct: "COM0071003",
  },
  {
    id: "COM0072",
    question: " How often shall a blind transmission be made? (1,00 P.)",
    answers: [
      {
        id: "COM0072001",
        answer: "Two times",
      },
      {
        id: "COM0072002",
        answer: "Three times",
      },
      {
        id: "COM0072003",
        answer: "Four times",
      },
      {
        id: "COM0072004",
        answer: "One time",
      },
    ],
    correct: "COM0072004",
  },
  {
    id: "COM0073",
    question:
      " In what situation is it appropriate to set the transponder code 7600? (1,00 P.)",
    answers: [
      {
        id: "COM0073001",
        answer: "Hijacking",
      },
      {
        id: "COM0073002",
        answer: "Emergency",
      },
      {
        id: "COM0073003",
        answer: "Flight into clouds",
      },
      {
        id: "COM0073004",
        answer: "Loss of radio",
      },
    ],
    correct: "COM0073004",
  },
  {
    id: "COM0074",
    question:
      " What is the correct course of action when experiencing a radio failure in class D airspace? (1,00 P.)",
    answers: [
      {
        id: "COM0074001",
        answer:
          "The flight has to be continued above 5000 feet complying with VFR flight rules or the airspace has to be left by the shortest route",
      },
      {
        id: "COM0074002",
        answer:
          "The flight has to be continued according to the last clearance complying with VFR rules or the airspace has to be left by the shortest route",
      },
      {
        id: "COM0074003",
        answer:
          "The flight has to be continued above 5000 feet complying with VFR flight rules or the airspace has to be left using a standard routing",
      },
      {
        id: "COM0074004",
        answer:
          "The flight has to be continued according to the last clearance complying with VFR flight rules or the airspace has to be left using a standard routing",
      },
    ],
    correct: "COM0074002",
  },
  {
    id: "COM0075",
    question:
      " Under what conditions may class D airspace be entered with a radio failure? (1,00 P.)",
    answers: [
      {
        id: "COM0075001",
        answer: "Approval has been granted before",
      },
      {
        id: "COM0075002",
        answer: "There are other aircraft in the aerodrome circuit",
      },
      {
        id: "COM0075003",
        answer: "It ist the aerodrome of departure",
      },
      {
        id: "COM0075004",
        answer: "It is the destination aerodrome",
      },
    ],
    correct: "COM0075001",
  },
  {
    id: "COM0076",
    question:
      " Which phrase is to be repeated three times before transmitting an urgency message? (1,00 P.)",
    answers: [
      {
        id: "COM0076001",
        answer: "Help",
      },
      {
        id: "COM0076002",
        answer: "Urgent",
      },
      {
        id: "COM0076003",
        answer: "Pan Pan",
      },
      {
        id: "COM0076004",
        answer: "Mayday",
      },
    ],
    correct: "COM0076003",
  },
  {
    id: "COM0077",
    question: " Urgency messages are defined as... (1,00 P.)",
    answers: [
      {
        id: "COM0077001",
        answer:
          "messages concerning urgent spare parts which are needed for a continuation of flight and which need to be ordered in advance.",
      },
      {
        id: "COM0077002",
        answer:
          "messages concerning the safety of an aircraft, a watercraft or some other vehicle or person in sight.",
      },
      {
        id: "COM0077003",
        answer:
          "information concerning the apron personell and which imply an imminent danger to landing aircraft.",
      },
      {
        id: "COM0077004",
        answer:
          "messages concerning aircraft and their passengers which face a grave and imminent threat and require immediate assistance.",
      },
    ],
    correct: "COM0077002",
  },
  {
    id: "COM0078",
    question: " Distress messages contain... (1,00 P.)",
    answers: [
      {
        id: "COM0078001",
        answer:
          "information concerning urgent spare parts which are required for a continuation of flight and which have to be ordered in advance.",
      },
      {
        id: "COM0078002",
        answer:
          "information concerning the apron personell and which imply an imminent danger to landing aircraft.",
      },
      {
        id: "COM0078003",
        answer:
          "information concerning the safety of an aircraft, a watercraft or some other vehicle or person in sight.",
      },
      {
        id: "COM0078004",
        answer:
          "information concerning aircraft and their passengers which face a grave and imminent threat and require immediate assistance.",
      },
    ],
    correct: "COM0078004",
  },
  {
    id: "COM0079",
    question:
      " What is the correct frequency for an initial distress message? (1,00 P.)",
    answers: [
      {
        id: "COM0079001",
        answer: "Emergency frequency",
      },
      {
        id: "COM0079002",
        answer: "Current frequency",
      },
      {
        id: "COM0079003",
        answer: "FIS frequency",
      },
      {
        id: "COM0079004",
        answer: "Radar frequency",
      },
    ],
    correct: "COM0079002",
  },
  {
    id: "COM0080",
    question:
      " What kind of information should be included in an urgency message? (1,00 P.)",
    answers: [
      {
        id: "COM0080001",
        answer:
          "Nature of problem or observation, important information for support, departure aerodrome, information about position, heading and altitude",
      },
      {
        id: "COM0080002",
        answer:
          "Intended routing, important information for support, intentions of the pilot, information about position, departure aerodrome, heading and altitude",
      },
      {
        id: "COM0080003",
        answer:
          "Nature of problem or observation, important information for support, intentions of the pilot, information about position, heading and altitude",
      },
      {
        id: "COM0080004",
        answer:
          "Intended routing, important information for support, intentions of the pilot, departure aerodrome, destination aerodrome, heading and altitude",
      },
    ],
    correct: "COM0080003",
  },
  {
    id: "COM0081",
    question: " The correct transponder code for emergencies is... (1,00 P.)",
    answers: [
      {
        id: "COM0081001",
        answer: "7700.",
      },
      {
        id: "COM0081002",
        answer: "7000.",
      },
      {
        id: "COM0081003",
        answer: "7600.",
      },
      {
        id: "COM0081004",
        answer: "7500.",
      },
    ],
    correct: "COM0081001",
  },
  {
    id: "COM0082",
    question:
      " Which of the following frequencies is designated for VHF voice communication? (1, P.)",
    answers: [
      {
        id: "COM0082001",
        answer: "118.75 kHz",
      },
      {
        id: "COM0082002",
        answer: "327.25 MHz",
      },
      {
        id: "COM0082003",
        answer: "327.25 kHz",
      },
      {
        id: "COM0082004",
        answer: "118.75 MHz",
      },
    ],
    correct: "COM0082004",
  },
  {
    id: "COM0083",
    question:
      " Which of the following frequencies is designated for VHF voice communication? (1,00 P.)",
    answers: [
      {
        id: "COM0083001",
        answer: "120.50 MHz",
      },
      {
        id: "COM0083002",
        answer: "115.15 MHz",
      },
      {
        id: "COM0083003",
        answer: "108.80 MHz",
      },
      {
        id: "COM0083004",
        answer: "117.30 kHz",
      },
    ],
    correct: "COM0083001",
  },
  {
    id: "COM0084",
    question:
      " What is the correct designation of the frequency band from 118.000 to 136.975 MHz used for voice communication? (1,00 P.)",
    answers: [
      {
        id: "COM0084001",
        answer: "LF",
      },
      {
        id: "COM0084002",
        answer: "VHF",
      },
      {
        id: "COM0084003",
        answer: "MF",
      },
      {
        id: "COM0084004",
        answer: "HF",
      },
    ],
    correct: "COM0084002",
  },
  {
    id: "COM0085",
    question:
      " Which of the following factors affects the reception of VHF transmissions? (1,00 P.)",
    answers: [
      {
        id: "COM0085001",
        answer: "Altitude",
      },
      {
        id: "COM0085002",
        answer: "Shoreline effect",
      },
      {
        id: "COM0085003",
        answer: "Twilight error",
      },
      {
        id: "COM0085004",
        answer: "Height of ionosphere",
      },
    ],
    correct: "COM0085001",
  },
  {
    id: "COM0086",
    question:
      " What is the approximate speed of electromagnetic wave propagation? (1,00 P.)",
    answers: [
      {
        id: "COM0086001",
        answer: "123000 m/s",
      },
      {
        id: "COM0086002",
        answer: "300000 km/s",
      },
      {
        id: "COM0086003",
        answer: "123000 km/s",
      },
      {
        id: "COM0086004",
        answer: "300000 m/s",
      },
    ],
    correct: "COM0086002",
  },
  {
    id: "COM0087",
    question: " An ATIS is valid for... (1,00 P.)",
    answers: [
      {
        id: "COM0087001",
        answer: "10 minutes.",
      },
      {
        id: "COM0087002",
        answer: "45 minutes.",
      },
      {
        id: "COM0087003",
        answer: "60 minutes.",
      },
      {
        id: "COM0087004",
        answer: "30 minutes.",
      },
    ],
    correct: "COM0087004",
  },
];

export default questions;
