import { Question } from "types/Questionnaire";

const questions: Question[] = [
  {
    id: "AGK0001",
    question:
      "The thickness of the wing is defined as the distance between the lower and the upper side of the wing at the...",
    answers: [
      {
        id: "AGK0001001",
        answer: "most inner part of the wing.",
      },
      {
        id: "AGK0001002",
        answer: "thinnest part of the wing.",
      },
      {
        id: "AGK0001003",
        answer: "thickest part of the wing.",
      },
      {
        id: "AGK0001004",
        answer: "most outer part of the wing.",
      },
    ],
    correct: "AGK0001003",
  },
  {
    id: "AGK0002",
    question:
      "How is referred to a tubular steel construction with a non self-supporting skin? (1, P.)",
    answers: [
      {
        id: "AGK0002001",
        answer: "Semi-monocoque construction.",
      },
      {
        id: "AGK0002002",
        answer: "Grid construction",
      },
      {
        id: "AGK0002003",
        answer: "Honeycomb structure",
      },
      {
        id: "AGK0002004",
        answer: "Monocoque construction",
      },
    ],
    correct: "AGK0002002",
  },
  {
    id: "AGK0003",
    question:
      "Primary fuselage structures of wood or metal planes are usually made up by what components?",
    answers: [
      {
        id: "AGK0003001",
        answer: "Girders, rips and stringers",
      },
      {
        id: "AGK0003002",
        answer: "Frames and stringer",
      },
      {
        id: "AGK0003003",
        answer: "Rips, frames and covers",
      },
      {
        id: "AGK0003004",
        answer: "Covers, stringers and forming parts",
      },
    ],
    correct: "AGK0003002",
  },
  {
    id: "AGK0004",
    question: " Which wing configuration is shown in the attachment?",
    answers: [
      {
        id: "AGK0004001",
        answer: "Strut-braced high wing",
      },
      {
        id: "AGK0004002",
        answer: "High wing",
      },
      {
        id: "AGK0004003",
        answer: "Mid wing",
      },
      {
        id: "AGK0004004",
        answer: "Low wing",
      },
    ],
    correct: "AGK0004001",
    image: require("./images/AGK0004.png"),
  },
  {
    id: "AGK0005",
    question:
      "A construction made of frames and stringer with a supporting skin is called...",
    answers: [
      {
        id: "AGK0005001",
        answer: "Honeycomb structure.",
      },
      {
        id: "AGK0005002",
        answer: "Grid construction.",
      },
      {
        id: "AGK0005003",
        answer: "Wood- or mixed construction.",
      },
      {
        id: "AGK0005004",
        answer: "Semi-monocoque construction.",
      },
    ],
    correct: "AGK0005004",
  },
  {
    id: "AGK0006",
    question: " Which tail assembly is shown in the attachment?",
    answers: [
      {
        id: "AGK0006001",
        answer: "V-tail",
      },
      {
        id: "AGK0006002",
        answer: "T-tail",
      },
      {
        id: "AGK0006003",
        answer: "Fuselage-mounted tail",
      },
      {
        id: "AGK0006004",
        answer: "Cruciform tail",
      },
    ],
    image: require("./images/AGK0006.png"),
    correct: "AGK0006002",
  },
  {
    id: "AGK0007",
    question: " What are the major components of an aircraft's tail?",
    answers: [
      {
        id: "AGK0007001",
        answer: "Ailerons and elevator",
      },
      {
        id: "AGK0007002",
        answer: "Horizontal tail and vertical tail",
      },
      {
        id: "AGK0007003",
        answer: "Rudder and ailerons",
      },
      {
        id: "AGK0007004",
        answer: "Steering wheel and pedals",
      },
    ],
    correct: "AGK0007002",
  },
  {
    id: "AGK0008",
    question: " The sandwich structure consists of two...",
    answers: [
      {
        id: "AGK0008001",
        answer: "thin layers and a light core material.",
      },
      {
        id: "AGK0008002",
        answer: "thin layers and a heavy core material.",
      },
      {
        id: "AGK0008003",
        answer: "thick layers and a heavy core material.",
      },
      {
        id: "AGK0008004",
        answer: "thick layers and a light core material.",
      },
    ],
    correct: "AGK0008001",
  },
  {
    id: "AGK0009",
    question: " Which constructional elements give the wing its profile shape?",
    answers: [
      {
        id: "AGK0009001",
        answer: "Rips",
      },
      {
        id: "AGK0009002",
        answer: "Planking",
      },
      {
        id: "AGK0009003",
        answer: "Spar",
      },
      {
        id: "AGK0009004",
        answer: "Tip",
      },
    ],
    correct: "AGK0009001",
  },
  {
    id: "AGK0010",
    question: ' The load factor "n" describes the relationship between...',
    answers: [
      {
        id: "AGK0010001",
        answer: "thrust and drag.",
      },
      {
        id: "AGK0010002",
        answer: "drag and lift.",
      },
      {
        id: "AGK0010003",
        answer: "lift and weight.",
      },
      {
        id: "AGK0010004",
        answer: "weight and thrust.",
      },
    ],
    correct: "AGK0010003",
  },
  {
    id: "AGK0011",
    question: " Which are the advantages of sandwich structures?",
    answers: [
      {
        id: "AGK0011001",
        answer: "High temperature durability and low weight",
      },
      {
        id: "AGK0011002",
        answer: "Low weight, high stiffness, high stability, and high strength",
      },
      {
        id: "AGK0011003",
        answer: "Good formability and high temperature durability",
      },
      {
        id: "AGK0011004",
        answer: "High strength and good formability",
      },
    ],
    correct: "AGK0011002",
  },
  {
    id: "AGK0012",
    question: " Which of the stated materials shows the highest strength?",
    answers: [
      {
        id: "AGK0012001",
        answer: "Carbon fiber re-inforced plastic",
      },
      {
        id: "AGK0012002",
        answer: "Aluminium",
      },
      {
        id: "AGK0012003",
        answer: "Wood",
      },
      {
        id: "AGK0012004",
        answer: "Magnesium",
      },
    ],
    correct: "AGK0012001",
  },
  {
    id: "AGK0013",
    question:
      "What needs to be considered if permissible limitations were exceeded?",
    answers: [
      {
        id: "AGK0013001",
        answer:
          "The helicopter must be inspected by the pilot in command and if no defect is found, no\nappropriate entry in the aircraft technical log is necessary",
      },
      {
        id: "AGK0013002",
        answer:
          "The helicopter must be inspected by at least two pilots licensed on the type, one of whom must\nbe the pilot in command",
      },
      {
        id: "AGK0013003",
        answer:
          "The helicopter must be inspected by a qualified engineer before the next flight",
      },
      {
        id: "AGK0013004",
        answer:
          "The helicopter must be subjected to a duplicate inspected by two engineers",
      },
    ],
    correct: "AGK0013003",
  },
  {
    id: "AGK0014",
    question: " Reasons for dents in the helicopter structure are...",
    answers: [
      {
        id: "AGK0014001",
        answer: "material defects or old colour.",
      },
      {
        id: "AGK0014002",
        answer: "intense erosion or high wear.",
      },
      {
        id: "AGK0014003",
        answer: "hard landing or excessive stress.",
      },
      {
        id: "AGK0014004",
        answer: "excessive engine rpm and cylinder defects.",
      },
    ],
    correct: "AGK0014003",
  },
  {
    id: "AGK0015",
    question: " What kind of hydraulic oil is used in aeroplane systems today?",
    answers: [
      {
        id: "AGK0015001",
        answer: "Mineral oil",
      },
      {
        id: "AGK0015002",
        answer: "Vegetable oil",
      },
      {
        id: "AGK0015003",
        answer: "Bio-oil",
      },
      {
        id: "AGK0015004",
        answer: "Synthetic oil",
      },
    ],
    correct: "AGK0015004",
  },
  {
    id: "AGK0016",
    question: " Number 1 on the gear designates the...",
    answers: [
      {
        id: "AGK0016001",
        answer: "fork.",
      },
      {
        id: "AGK0016002",
        answer: "strut.",
      },
      {
        id: "AGK0016003",
        answer: "torque link.",
      },
      {
        id: "AGK0016004",
        answer: "inner shock absorber.",
      },
    ],
    correct: "AGK0016001",
    image: require("./images/AGK0018.png"),
  },
  {
    id: "AGK0017",
    question: " The fuselage structure may be damaged by...",
    answers: [
      {
        id: "AGK0017001",
        answer: "exceeding the manoeuvering speed in heavy gusts.",
      },
      {
        id: "AGK0017002",
        answer: "neutralizing stick forces according to actual flight state.",
      },
      {
        id: "AGK0017003",
        answer: "stall after exceeding the maximum angle of attack.",
      },
      {
        id: "AGK0017004",
        answer: "airspeed decreasing below a certain value.",
      },
    ],
    correct: "AGK0017001",
  },
  {
    id: "AGK0018",
    question: " Number 2 on the gear designates the...",
    answers: [
      {
        id: "AGK0018001",
        answer: "fork.",
      },
      {
        id: "AGK0018002",
        answer: "torque link.",
      },
      {
        id: "AGK0018003",
        answer: "fixed outer cylinder.",
      },
      {
        id: "AGK0018004",
        answer: "movable inner cylinder.",
      },
    ],
    correct: "AGK0018004",
    image: require("./images/AGK0018.png"),
  },
  {
    id: "AGK0019",
    question:
      "How is the nose or tail wheel usually controlled on small aircraft and motor gliders?",
    answers: [
      {
        id: "AGK0019001",
        answer: "By the steering wheel",
      },
      {
        id: "AGK0019002",
        answer: "By the control column",
      },
      {
        id: "AGK0019003",
        answer: "By weight movement",
      },
      {
        id: "AGK0019004",
        answer: "By the pedals",
      },
    ],
    correct: "AGK0019004",
  },
  {
    id: "AGK0020",
    question:
      "Where is the brake system installed to slow the aircraft on ground?",
    answers: [
      {
        id: "AGK0020001",
        answer: "On the tail wheel",
      },
      {
        id: "AGK0020002",
        answer: "On the nose and main gear",
      },
      {
        id: "AGK0020003",
        answer: "Only on the nose gear",
      },
      {
        id: "AGK0020004",
        answer: "Only on the main gear",
      },
    ],
    correct: "AGK0020004",
  },
  {
    id: "AGK0021",
    question: " What kind of control surface is connected with the nose wheel?",
    answers: [
      {
        id: "AGK0021001",
        answer: "Elevator",
      },
      {
        id: "AGK0021002",
        answer: "Trim rudder",
      },
      {
        id: "AGK0021003",
        answer: "Aileron",
      },
      {
        id: "AGK0021004",
        answer: "Rudder",
      },
    ],
    correct: "AGK0021004",
  },
  {
    id: "AGK0022",
    question: " What is checked by the marking in the attachment?",
    answers: [
      {
        id: "AGK0022001",
        answer: "The tread wear of the tire",
      },
      {
        id: "AGK0022002",
        answer: "The operating pressure of the carcass",
      },
      {
        id: "AGK0022003",
        answer: "The correct postion of the tire relative to the rim",
      },
      {
        id: "AGK0022004",
        answer: "The correct position of the outer isolation layers",
      },
    ],
    correct: "AGK0022003",
    image: require("./images/AGK0022.png"),
  },
  {
    id: "AGK0023",
    question:
      "About how many axes does an aircraft move and how are these axes called?",
    answers: [
      {
        id: "AGK0023001",
        answer: "4; optical axis, imaginary axis, sagged axis, axis of evil",
      },
      {
        id: "AGK0023002",
        answer:
          "4; vertical axis, lateral axis, longitudinal axis, axis of speed",
      },
      {
        id: "AGK0023003",
        answer: "3; x-axis, y-axis, z-axis",
      },
      {
        id: "AGK0023004",
        answer: "3; vertical axis, lateral axis, longitudinal axis",
      },
    ],
    correct: "AGK0023004",
  },
  {
    id: "AGK0024",
    question:
      "A movement around the longitudinal axis is primarily initiated by the...",
    answers: [
      {
        id: "AGK0024001",
        answer: "rudder.",
      },
      {
        id: "AGK0024002",
        answer: "ailerons.",
      },
      {
        id: "AGK0024003",
        answer: "elevator.",
      },
      {
        id: "AGK0024004",
        answer: "trim tab.",
      },
    ],
    correct: "AGK0024002",
  },
  {
    id: "AGK0025",
    question:
      "How are the flight controls on a small single-engine piston aircraft normally controlled and actuated?",
    answers: [
      {
        id: "AGK0025001",
        answer: "Power-assisted through hydraulic pumps or electric motors",
      },
      {
        id: "AGK0025002",
        answer: "Hydraulically through hydraulic pumps and actuators",
      },
      {
        id: "AGK0025003",
        answer: "Manually through rods and control cables",
      },
      {
        id: "AGK0025004",
        answer: "Electrically through fly-by-wire",
      },
    ],
    correct: "AGK0025003",
  },
  {
    id: "AGK0026",
    question:
      "What are the primary and the secondary effects of a rudder input to the left?",
    answers: [
      {
        id: "AGK0026001",
        answer: "Primary: yaw to the left\nSecondary: roll to the right",
      },
      {
        id: "AGK0026002",
        answer: "Primary: yaw to the left\nSecondary: roll to the left",
      },
      {
        id: "AGK0026003",
        answer: "Primary: yaw to the right\nSecondary: roll to the left",
      },
      {
        id: "AGK0026004",
        answer: "Primary: yaw to the right\nSecondary: roll to the right",
      },
    ],
    correct: "AGK0026002",
  },
  {
    id: "AGK0027",
    question:
      "What is the effect of pulling the control yoke or stick backwards?",
    answers: [
      {
        id: "AGK0027001",
        answer:
          "The aircraft's tail will produce an increased downward force, causing the aircraft's nose to drop",
      },
      {
        id: "AGK0027002",
        answer:
          "The aircraft's tail will produce an decreased upward force, causing the aircraft's nose to drop",
      },
      {
        id: "AGK0027003",
        answer:
          "The aircraft's tail will produce an increased downward force, causing the aircraft's nose to rise",
      },
      {
        id: "AGK0027004",
        answer:
          "The aircraft's tail will produce an increased upward force, causing the aircraft's nose to rise",
      },
    ],
    correct: "AGK0027003",
  },
  {
    id: "AGK0028",
    question:
      "What happens to a helicopter during cruise when the stick is moved forward without other corrections?",
    answers: [
      {
        id: "AGK0028001",
        answer: "The speed increases and the sink rate increases",
      },
      {
        id: "AGK0028002",
        answer: "The speed decreases and the sink rate increases",
      },
      {
        id: "AGK0028003",
        answer: "The speed increases and the sink rate decreases",
      },
      {
        id: "AGK0028004",
        answer: "The speed decreases and the sink rate decreases",
      },
    ],
    correct: "AGK0028001",
  },
  {
    id: "AGK0029",
    question:
      "Which of the following options states all primary flight controls of an aircraft?",
    answers: [
      {
        id: "AGK0029001",
        answer:
          "All movable parts on the aircraft which aid in controlling the aircraft",
      },
      {
        id: "AGK0029002",
        answer: "Flaps, slats, speedbrakes",
      },
      {
        id: "AGK0029003",
        answer: "Elevator, rudder, aileron",
      },
      {
        id: "AGK0029004",
        answer:
          "Elevator, rudder, aileron, trim tabs, high-lift wing devices, power controls",
      },
    ],
    correct: "AGK0029003",
  },
  {
    id: "AGK0030",
    question: " What is the purpose of the secondary flight controls?",
    answers: [
      {
        id: "AGK0030001",
        answer: "To constitute a backup system for the primary flight controls",
      },
      {
        id: "AGK0030002",
        answer:
          "To improve the performance characteristics of an aircraft and relieve the pilot of excessive\ncontrol forces",
      },
      {
        id: "AGK0030003",
        answer:
          "To improve the turn characteristics of an aircraft in the low speed regime during approach and\nlanding",
      },
      {
        id: "AGK0030004",
        answer:
          "To enable the pilot to control the aircraft's movements about its three axes",
      },
    ],
    correct: "AGK0030002",
  },
  {
    id: "AGK0031",
    question: " What is the purpose of a ground adjustable trim tab?",
    answers: [
      {
        id: "AGK0031001",
        answer:
          "It is set on the ground to correct an out-of-trim condition arising from the mass and balance\nsituation of an aircraft",
      },
      {
        id: "AGK0031002",
        answer:
          "It is preset on the ground and further adjusted in flight to reduce the need to constantly re-trim\nthe aircraft",
      },
      {
        id: "AGK0031003",
        answer:
          "It is used to optimize the handling characteristics of an aircraft during ground operations",
      },
      {
        id: "AGK0031004",
        answer:
          "It is a non-movable metal tab on a flight control which is adjusted on the ground to optimize the\ninflight characteristics of an aircraft",
      },
    ],
    correct: "AGK0031004",
  },
  {
    id: "AGK0032",
    question:
      "The trim wheel or lever in the cockpit is moved aft by the pilot. What effect does this action have on the trim tab and on the elevator?",
    answers: [
      {
        id: "AGK0032001",
        answer: "The trim tab moves up, the elevator moves up",
      },
      {
        id: "AGK0032002",
        answer: "The trim tab moves up, the elevator moves down",
      },
      {
        id: "AGK0032003",
        answer: "The trim tab moves down, the elevator moves up",
      },
      {
        id: "AGK0032004",
        answer: "The trim tab moves down, the elevator moves down",
      },
    ],
    correct: "AGK0032003",
  },
  {
    id: "AGK0033",
    question:
      "When trimming an aircraft nose up, in which direction does the trim tab move? (1, P.)",
    answers: [
      {
        id: "AGK0033001",
        answer: "Depends on CG position",
      },
      {
        id: "AGK0033002",
        answer: "It moves up",
      },
      {
        id: "AGK0033003",
        answer: "In direction of rudder deflection",
      },
      {
        id: "AGK0033004",
        answer: "It moves down",
      },
    ],
    correct: "AGK0033004",
  },
  {
    id: "AGK0034",
    question:
      "How does a balance tab move in relation to the flight control surface that it is coupled with?",
    answers: [
      {
        id: "AGK0034001",
        answer: "In the opposite direction",
      },
      {
        id: "AGK0034002",
        answer: "At an angle of 90°",
      },
      {
        id: "AGK0034003",
        answer: "At an angle of 45°",
      },
      {
        id: "AGK0034004",
        answer: "In the same direction",
      },
    ],
    correct: "AGK0034001",
  },
  {
    id: "AGK0035",
    question: " The trim is used to...",
    answers: [
      {
        id: "AGK0035001",
        answer: "increase adverse yaw.",
      },
      {
        id: "AGK0035002",
        answer: "move the centre of gravity.",
      },
      {
        id: "AGK0035003",
        answer: "adapt the control force.",
      },
      {
        id: "AGK0035004",
        answer: "lock control elements.",
      },
    ],
    correct: "AGK0035003",
  },
  {
    id: "AGK0036",
    question:
      "Which of the following are an aircraft's secondary flight controls?",
    answers: [
      {
        id: "AGK0036001",
        answer: "Elevator, rudder, aileron",
      },
      {
        id: "AGK0036002",
        answer:
          "All movable parts on the aircraft which aid in controlling the aircraft",
      },
      {
        id: "AGK0036003",
        answer:
          "Elevator, rudder, aileron, trim tabs, high-lift wing devices, power controls",
      },
      {
        id: "AGK0036004",
        answer:
          "Wing flaps, leading edge devices, spoilers or speedbrakes, trim systems",
      },
    ],
    correct: "AGK0036004",
  },
  {
    id: "AGK0037",
    question: " What has to be considered during refueling?",
    answers: [
      {
        id: "AGK0037001",
        answer:
          "Check the fuel content of the tank with a torch and remove fire protection",
      },
      {
        id: "AGK0037002",
        answer: "No open fires, obey smoking ban and apply ground cables",
      },
      {
        id: "AGK0037003",
        answer:
          "Refuel through a soaked rag and keep a fire extinguisher available",
      },
      {
        id: "AGK0037004",
        answer:
          "Apply ground wires, turn on the main switch and magneto ignition",
      },
    ],
    correct: "AGK0037002",
  },
  {
    id: "AGK0038",
    question: " The primer is...",
    answers: [
      {
        id: "AGK0038001",
        answer:
          "an auxiliary pump in the fuel system to facilitate engine starting.",
      },
      {
        id: "AGK0038002",
        answer:
          "a mechanical switch in the cockpit to engage the turbocharger.",
      },
      {
        id: "AGK0038003",
        answer:
          "a valve in the fuel control system for automatic mixture regulation.",
      },
      {
        id: "AGK0038004",
        answer:
          "a nozzle in the Venturi tube of a carburettor for atomising the fuel.",
      },
    ],
    correct: "AGK0038001",
  },
  {
    id: "AGK0039",
    question: " What is the purpose of the tank ventilation?",
    answers: [
      {
        id: "AGK0039001",
        answer: "To prevent underpressure caused by fuel consumption",
      },
      {
        id: "AGK0039002",
        answer: "To prevent water disposal during parking",
      },
      {
        id: "AGK0039003",
        answer:
          "To distribute the fuel from one tank segment to the other during flight",
      },
      {
        id: "AGK0039004",
        answer: "To prevent fuel spillage during refueling on the filler plug",
      },
    ],
    correct: "AGK0039001",
  },
  {
    id: "AGK0040",
    question: `
      An aeroplane's current supply is carried out by the:

      1) Battery
      2) Generator
      3) Relay
      4) Circuit Breaker
    `,
    answers: [
      {
        id: "AGK0004001",
        answer: "1 and 4",
      },
      {
        id: "AGK0004002",
        answer: "3 and 4",
      },
      {
        id: "AGK0004003",
        answer: "2 and 3",
      },
      {
        id: "AGK0004004",
        answer: "1 and 2",
      },
    ],
    correct: "AGK0004004",
  },
  {
    id: "AGK0041",
    question: " What is the unit for voltage?",
    answers: [
      {
        id: "AGK0041001",
        answer: "Ampere",
      },
      {
        id: "AGK0041002",
        answer: "Watt",
      },
      {
        id: "AGK0041003",
        answer: "Ohm",
      },
      {
        id: "AGK0041004",
        answer: "Volt",
      },
    ],
    correct: "AGK0041004",
  },
  {
    id: "AGK0042",
    question: " What is the unit for electrical power?",
    answers: [
      {
        id: "AGK0042001",
        answer: "Ampere",
      },
      {
        id: "AGK0042002",
        answer: "Ohm",
      },
      {
        id: "AGK0042003",
        answer: "Watt",
      },
      {
        id: "AGK0042004",
        answer: "Volt",
      },
    ],
    correct: "AGK0042003",
  },
  {
    id: "AGK0043",
    question: " What is the reason for static dischargers on aircraft?",
    answers: [
      {
        id: "AGK0043001",
        answer: "To ensure grounding during refueling",
      },
      {
        id: "AGK0043002",
        answer: "To discharge static charging during flight",
      },
      {
        id: "AGK0043003",
        answer:
          "To eliminate electrical interferences during intensive radio traffic",
      },
      {
        id: "AGK0043004",
        answer:
          "To improve the quality of radio transmission in high altitudes",
      },
    ],
    correct: "AGK0043002",
  },
  {
    id: "AGK0044",
    question:
      "What must be considered if the alternator fails in an Aeroplane?",
    answers: [
      {
        id: "AGK0044001",
        answer: "All instruments and warning systems will fail",
      },
      {
        id: "AGK0044002",
        answer: "No change as long as the battery provides enough power",
      },
      {
        id: "AGK0044003",
        answer: "The engine runs roughly and is prone to knocking",
      },
      {
        id: "AGK0044004",
        answer: "Only high power consumers will failing",
      },
    ],
    correct: "AGK0044002",
  },
  {
    id: "AGK0045",
    question:
      "When using direct current, electrically driven flight instruments are marked with...",
    answers: [
      {
        id: "AGK0045001",
        answer: "EL",
      },
      {
        id: "AGK0045002",
        answer: "DC",
      },
      {
        id: "AGK0045003",
        answer: "AL",
      },
      {
        id: "AGK0045004",
        answer: "CO",
      },
    ],
    correct: "AGK0045002",
  },
  {
    id: "AGK0046",
    question:
      "What devices can be affected by a failure of the electrical system in an Aeroplane?",
    answers: [
      {
        id: "AGK0046001",
        answer: "Fuel quantity indication, radio equipment and altimeter",
      },
      {
        id: "AGK0046002",
        answer: "Radio equipment, navigation equipment and magnetic compass",
      },
      {
        id: "AGK0046003",
        answer: "Airspeed indicator, altimeter and artificial horizon",
      },
      {
        id: "AGK0046004",
        answer: "Radio equipment, navigation equipment and gyros",
      },
    ],
    correct: "AGK0046004",
  },
  {
    id: "AGK0047",
    question:
      "Which cylinder arragement is commonly used on small aircrafts and motor gliders?",
    answers: [
      {
        id: "AGK0047001",
        answer: "Horizontally opposed engine",
      },
      {
        id: "AGK0047002",
        answer: "Radial engine",
      },
      {
        id: "AGK0047003",
        answer: "In-line engine",
      },
      {
        id: "AGK0047004",
        answer: "V-type engine",
      },
    ],
    correct: "AGK0047001",
  },
  {
    id: "AGK0048",
    question:
      "Which part of the cycle of a four-stroke Otto engine can be seen in the attachment?",
    answers: [
      {
        id: "AGK0048001",
        answer: "Second stroke - compression",
      },
      {
        id: "AGK0048002",
        answer: "Fourth stroke - exhaust",
      },
      {
        id: "AGK0048003",
        answer: "First stroke - induction",
      },
      {
        id: "AGK0048004",
        answer: "Third stroke - power",
      },
    ],
    correct: "AGK0048003",
    image: require("./images/AGK0048.png"),
  },
  {
    id: "AGK0049",
    question:
      "Which part of the cycle of a four-stroke Otto engine can be seen in the attachment?",
    answers: [
      {
        id: "AGK0049001",
        answer: "Second stroke - compression",
      },
      {
        id: "AGK0049002",
        answer: "Third stroke - power",
      },
      {
        id: "AGK0049003",
        answer: "Fourth stroke - exhaust",
      },
      {
        id: "AGK0049004",
        answer: "First stroke - induction",
      },
    ],
    correct: "AGK0049001",
    image: require("./images/AGK0049.png"),
  },
  {
    id: "AGK0050",
    question:
      "What is likely to be the cause if the engine runs unusually rough while checking the magnetos?",
    answers: [
      {
        id: "AGK0050001",
        answer: "Starter is faulty",
      },
      {
        id: "AGK0050002",
        answer: "Sparking plug is defective",
      },
      {
        id: "AGK0050003",
        answer: "Short circuit on the ground cable",
      },
      {
        id: "AGK0050004",
        answer: "Ignition switch is faulty",
      },
    ],
    correct: "AGK0050002",
  },
  {
    id: "AGK0051",
    question:
      "The highest absorbtion of humidity in fuel can be observed in which situation? (1, P.)",
    answers: [
      {
        id: "AGK0051001",
        answer: "During parking on wet gras areas",
      },
      {
        id: "AGK0051002",
        answer: "During parking on cold aprons",
      },
      {
        id: "AGK0051003",
        answer: "Almost empty tanks",
      },
      {
        id: "AGK0051004",
        answer: "Almost full tanks",
      },
    ],
    correct: "AGK0051003",
  },
  {
    id: "AGK0052",
    question: " Where does the condensation water converge in the tank?",
    answers: [
      {
        id: "AGK0052001",
        answer: "It floats on the fuel",
      },
      {
        id: "AGK0052002",
        answer: "Near the cap of the tank",
      },
      {
        id: "AGK0052003",
        answer: "At the lowest position",
      },
      {
        id: "AGK0052004",
        answer: "It is mixed with the fuel",
      },
    ],
    correct: "AGK0052003",
  },
  {
    id: "AGK0053",
    question: " What does the octane rating or fuel grade describe?",
    answers: [
      {
        id: "AGK0053001",
        answer: "Anti-knock rating",
      },
      {
        id: "AGK0053002",
        answer: "Flame front speed",
      },
      {
        id: "AGK0053003",
        answer: "Ignition timing",
      },
      {
        id: "AGK0053004",
        answer: "Combustion temperature",
      },
    ],
    correct: "AGK0053001",
  },
  {
    id: "AGK0054",
    question: " Which colour does Avgas 100 LL have?",
    answers: [
      {
        id: "AGK0054001",
        answer: "Red",
      },
      {
        id: "AGK0054002",
        answer: "Green",
      },
      {
        id: "AGK0054003",
        answer: "Yellow",
      },
      {
        id: "AGK0054004",
        answer: "Blue",
      },
    ],
    correct: "AGK0054004",
  },
  {
    id: "AGK0055",
    question:
      "What is the direct influence by switching on the carburettor heating on fixed propeller engines during engine run-up?",
    answers: [
      {
        id: "AGK0055001",
        answer: "RPM decreases",
      },
      {
        id: "AGK0055002",
        answer: "Angle of attack decreases",
      },
      {
        id: "AGK0055003",
        answer: "Angle of attack increases",
      },
      {
        id: "AGK0055004",
        answer: "RPM increaes",
      },
    ],
    correct: "AGK0055001",
  },
  {
    id: "AGK0056",
    question: " What is the major task of a carburettor?",
    answers: [
      {
        id: "AGK0056001",
        answer: "To pump fuel from the tanks into the cylinder",
      },
      {
        id: "AGK0056002",
        answer: "To control the aircraft's speed through the throttle valve",
      },
      {
        id: "AGK0056003",
        answer: "To provide additional fuel to cool the engine",
      },
      {
        id: "AGK0056004",
        answer: "To produce an ignitable air/fuel mixture",
      },
    ],
    correct: "AGK0056004",
  },
  {
    id: "AGK0057",
    question:
      "In which phase of flight must the carburettor heating be switched off although carburettor icing might be expected?",
    answers: [
      {
        id: "AGK0057001",
        answer: "During climb",
      },
      {
        id: "AGK0057002",
        answer: "During cruise",
      },
      {
        id: "AGK0057003",
        answer: "During taxi",
      },
      {
        id: "AGK0057004",
        answer: "During take-off",
      },
    ],
    correct: "AGK0057004",
  },
  {
    id: "AGK0058",
    question: " In which outside air temperature is icing most likely?",
    answers: [
      {
        id: "AGK0058001",
        answer: "Between -5° C and +20° C",
      },
      {
        id: "AGK0058002",
        answer: "Between -10° C and +10° C",
      },
      {
        id: "AGK0058003",
        answer: "Between -20° C and +5° C",
      },
      {
        id: "AGK0058004",
        answer: "Between -15° C and 0° C",
      },
    ],
    correct: "AGK0058001",
  },
  {
    id: "AGK0059",
    question:
      "What is the task of cooling fins on air-cooled engine cylinders?",
    answers: [
      {
        id: "AGK0059001",
        answer:
          "Quick heat transfer to the surrounding air flow by expanding the surface",
      },
      {
        id: "AGK0059002",
        answer:
          "Cooling of the cylinder surrounding airflow and forwarding to hotter engine parts",
      },
      {
        id: "AGK0059003",
        answer: "Leading the airflow to parts designated to be cooled",
      },
      {
        id: "AGK0059004",
        answer:
          "Increasing the airflow thus improving cooling of cylinder parts",
      },
    ],
    correct: "AGK0059001",
  },
  {
    id: "AGK0060",
    question: " Cylinder head temperature indication relates to...",
    answers: [
      {
        id: "AGK0060001",
        answer: "all Cylinders.",
      },
      {
        id: "AGK0060002",
        answer: "a random cylinder.",
      },
      {
        id: "AGK0060003",
        answer: "the critical cylinder.",
      },
      {
        id: "AGK0060004",
        answer: "the average of all cylinders.",
      },
    ],
    correct: "AGK0060003",
  },
  {
    id: "AGK0061",
    question: " What happens during oil filter clocking?",
    answers: [
      {
        id: "AGK0061001",
        answer:
          "A bypass valve opens thus enabling the circulation to continue, debris will be filtered by an\nalternate filter",
      },
      {
        id: "AGK0061002",
        answer:
          "The oil circulation will end after 15 minutes so that a proper engine run will not be guaranteed",
      },
      {
        id: "AGK0061003",
        answer:
          "A bypass valve opens thus enabling the circulation to continue, debris will not be filtered",
      },
      {
        id: "AGK0061004",
        answer:
          "The oil circulation will end after 30 minutes so that a proper engine run will not be guaranteed",
      },
    ],
    correct: "AGK0061003",
  },
  {
    id: "AGK0062",
    question: " How should an Otto engine be shut down?",
    answers: [
      {
        id: "AGK0062001",
        answer: "By completely leaning the mixture",
      },
      {
        id: "AGK0062002",
        answer: "By moving the propeller to the feathered position",
      },
      {
        id: "AGK0062003",
        answer: "By closing the throttle lever completely",
      },
      {
        id: "AGK0062004",
        answer: "By shutting down the generator",
      },
    ],
    correct: "AGK0062001",
  },
  {
    id: "AGK0063",
    question: " Piston engines of helicopters have...",
    answers: [
      {
        id: "AGK0063001",
        answer: "one magneto ignition system.",
      },
      {
        id: "AGK0063002",
        answer: "one electrical ignition system.",
      },
      {
        id: "AGK0063003",
        answer: "two coupled ignition systems.",
      },
      {
        id: "AGK0063004",
        answer: "two independent ignition systems.",
      },
    ],
    correct: "AGK0063004",
  },
  {
    id: "AGK0064",
    question: " How do you call fuel mixtures with a high amount of fuel?",
    answers: [
      {
        id: "AGK0064001",
        answer: "Lean",
      },
      {
        id: "AGK0064002",
        answer: "Full",
      },
      {
        id: "AGK0064003",
        answer: "Empty",
      },
      {
        id: "AGK0064004",
        answer: "Rich",
      },
    ],
    correct: "AGK0064004",
  },
  {
    id: "AGK0065",
    question: `The angle indicated by arrow number 1 shows the propeller's...
      - D: Direction of air flow 
      - C: Chord line 
      - R: Direction of rotation`,
    answers: [
      {
        id: "AGK0065001",
        answer: "angle of incidence.",
      },
      {
        id: "AGK0065002",
        answer: "angle of attack.",
      },
      {
        id: "AGK0065003",
        answer: "geometric wing twist.",
      },
      {
        id: "AGK0065004",
        answer: "aerodynamic wing twist.",
      },
    ],
    correct: "AGK0065001",
    image: require("./images/AGK0065.png"),
  },
  {
    id: "AGK00652",
    question: `The angle indicated by arrow number 3 shows the propeller's...
      - D: Direction of air flow 
      - C: Chord line 
      - R: Direction of rotation`,
    answers: [
      {
        id: "AGK0065001",
        answer: "angle of incidence.",
      },
      {
        id: "AGK0065002",
        answer: "angle of attack.",
      },
      {
        id: "AGK0065003",
        answer: "geometric wing twist.",
      },
      {
        id: "AGK0065004",
        answer: "aerodynamic wing twist.",
      },
    ],
    correct: "AGK0065002",
    image: require("./images/AGK0065.png"),
  },
  {
    id: "AGK0066",
    question:
      "How should a power increase be executed on a constant-speed propeller, provided that no other procedure is described in the flight manual?",
    answers: [
      {
        id: "AGK0066001",
        answer: "1) Decrease manifold pressure\n2) Increase RPM",
      },
      {
        id: "AGK0066002",
        answer: "1) Decrease RPM\n2) Increase manifold pressure",
      },
      {
        id: "AGK0066003",
        answer: "1) Increase manifold pressure\n2) Increase RPM",
      },
      {
        id: "AGK0066004",
        answer: "1) Increase RPM\n2) Increase manifold pressure",
      },
    ],
    correct: "AGK0066004",
  },
  {
    id: "AGK0067",
    question:
      "How should a power decrease be executed on a constant-speed propeller, provided that no other procedure is described in the flight manual?",
    answers: [
      {
        id: "AGK0067001",
        answer: "1) Decrease RPM\n2) Decrease manifold pressure",
      },
      {
        id: "AGK0067002",
        answer: "1) Decrease manifold pressure\n2) Increase RPM",
      },
      {
        id: "AGK0067003",
        answer: "1) Decrease RPM\n2) Increase manifold pressure",
      },
      {
        id: "AGK0067004",
        answer: "1) Decrease manifold pressure\n2) Decrease RPM",
      },
    ],
    correct: "AGK0067004",
  },
  {
    id: "AGK0068",
    question:
      "With increasing altitude and unchanged mixture setting, the air/fuel mixture...",
    answers: [
      {
        id: "AGK0068001",
        answer: "becomes more lean.",
      },
      {
        id: "AGK0068002",
        answer: "stays constant.",
      },
      {
        id: "AGK0068003",
        answer: "becomes liquid.",
      },
      {
        id: "AGK0068004",
        answer: "becomes richer.",
      },
    ],
    correct: "AGK0068004",
  },
  {
    id: "AGK0069",
    question: " With increasing altitude, the power of a carburettor engine...",
    answers: [
      {
        id: "AGK0069001",
        answer: "remains constant.",
      },
      {
        id: "AGK0069002",
        answer: "first decreases, from 5000 ft on increases.",
      },
      {
        id: "AGK0069003",
        answer: "increases.",
      },
      {
        id: "AGK0069004",
        answer: "decreases.",
      },
    ],
    correct: "AGK0069004",
  },
  {
    id: "AGK0070",
    question:
      "During ignition check the ignition is switched to OFF for a short moment and subsequently back to BOTH. What happens to the RPM if the ignition system is properly grounded?",
    answers: [
      {
        id: "AGK0070001",
        answer:
          "The RPM increases once switched to OFF and resumes a value below the previous one when\nswitched back to BOTH",
      },
      {
        id: "AGK0070002",
        answer:
          "The RPM decreases once switched to OFF and resumes the previous value when switched\nback to BOTH",
      },
      {
        id: "AGK0070003",
        answer:
          "The RPM increases once switched to OFF and resumes the previous value when switched back\nto BOTH",
      },
      {
        id: "AGK0070004",
        answer:
          "The RPM decreases once switched to OFF and resumes a value below the previous one when\nswitched back to BOTH",
      },
    ],
    correct: "AGK0070002",
  },
  {
    id: "AGK0071",
    question: " Which gauges involve a measurement of temperature?",
    answers: [
      {
        id: "AGK0071001",
        answer:
          "Engine lubricant, exhaust gas, outside air, cabin air, directional gyro",
      },
      {
        id: "AGK0071002",
        answer:
          "Engine lubricant, cylinder head, exhaust gas, suction, outside air, cabin air",
      },
      {
        id: "AGK0071003",
        answer:
          "Engine lubricant, engine cooling fluid, cylinder head, exhaust gas, outside air, cabin air",
      },
      {
        id: "AGK0071004",
        answer:
          "Engine oil, cylinder head, exhaust gas, altimeter, airspeed indicator, vertical speed indicator",
      },
    ],
    correct: "AGK0071003",
  },
  {
    id: "AGK0072",
    question:
      "Fuel quantity in small aircraft is most commonly measured through a level sensor. The European Certification Specifications CS 23 require that...",
    answers: [
      {
        id: "AGK0072001",
        answer:
          "at least one fuel quantity indicator must be available to indicate the total amount of fuel abord an\naircraft. This Indicator must be calibrated adequately to indicate the correct amount of fuel\nduring all phases of flight.",
      },
      {
        id: "AGK0072002",
        answer:
          "if the fuel indicator fails, the pilot must land at the next available airport.",
      },
      {
        id: "AGK0072003",
        answer:
          "if no fuel quantity indicator is available to the pilot in flight, the pilot must check the fuel quantity\nbefore commencing the flight and recalculate the remaining fuel on board in regular intervals\nduring the flight.",
      },
      {
        id: "AGK0072004",
        answer:
          'a fuel quantity indicator must be available for each tank and the indicator must be calibrated to\nread "zero" during level flight when the quantity of fuel remaining in the tank is equal to the\nunusable fuel supply.',
      },
    ],
    correct: "AGK0072004",
  },
  {
    id: "AGK0073",
    question:
      "Which of the instruments listed below obtain their readings through pressure measurement?",
    answers: [
      {
        id: "AGK0073001",
        answer:
          "Oil pressure gauge, fuel pressure gauge, manifold pressure gauge, altimeter, vertical speed\nindicator, airspeed indicator, suction gauge",
      },
      {
        id: "AGK0073002",
        answer:
          "Oil pressure gauge, fuel pressure gauge, fuel quantity gauge, manifold pressure gauge,\ndifferential pressure gauge, altimeter",
      },
      {
        id: "AGK0073003",
        answer:
          "Airspeed indicator, vertical speed indicator, altimeter, directional gyro, turn and bank\ncoordinator, oil pressure gauge, fuel pressure gauge",
      },
      {
        id: "AGK0073004",
        answer:
          "Airspeed indicator, vertical speed indicator, altimeter, magnetic compass, oil pressure gauge,\nfuel pressure gauge",
      },
    ],
    correct: "AGK0073001",
  },
  {
    id: "AGK0074",
    question: " The Pitot / static system is required to...",
    answers: [
      {
        id: "AGK0074001",
        answer: "prevent potential static buildup on the aircraft.",
      },
      {
        id: "AGK0074002",
        answer:
          "correct the reading of the airspeed indicator to zero when the aircraft is static on the ground.",
      },
      {
        id: "AGK0074003",
        answer: "measure total and static air pressure.",
      },
      {
        id: "AGK0074004",
        answer: "prevent icing of the Pitot tube.",
      },
    ],
    correct: "AGK0074003",
  },
  {
    id: "AGK0075",
    question: " Which pressure is sensed by the Pitot tube?",
    answers: [
      {
        id: "AGK0075001",
        answer: "Cabin air pressure",
      },
      {
        id: "AGK0075002",
        answer: "Total air pressure",
      },
      {
        id: "AGK0075003",
        answer: "Dynamic air pressure",
      },
      {
        id: "AGK0075004",
        answer: "Static air pressure",
      },
    ],
    correct: "AGK0075002",
  },
  {
    id: "AGK0076",
    question: " QFE is the...",
    answers: [
      {
        id: "AGK0076001",
        answer:
          "barometric pressure at a reference datum, typically the runway threshold of an airfield.",
      },
      {
        id: "AGK0076002",
        answer:
          "barometric pressure adjusted to sea level, using the international standard atmosphere (ISA).",
      },
      {
        id: "AGK0076003",
        answer: "magnetic bearing to a station.",
      },
      {
        id: "AGK0076004",
        answer: "altitude above the reference pressure level 1013.25 hPa.",
      },
    ],
    correct: "AGK0076001",
  },
  {
    id: "AGK0077",
    question: " QNE is the...",
    answers: [
      {
        id: "AGK0077001",
        answer:
          "barometric pressure at a reference datum, typically the runway threshold of an airfield.",
      },
      {
        id: "AGK0077002",
        answer: "magnetic bearing to a station.",
      },
      {
        id: "AGK0077003",
        answer:
          "barometric pressure adjusted to sea level, using the international standard atmosphere (ISA).",
      },
      {
        id: "AGK0077004",
        answer: "altitude above the reference pressure level 1013.25 hPa.",
      },
    ],
    correct: "AGK0077004",
  },
  {
    id: "AGK0078",
    question: " Which is the purpose of the altimeter subscale?",
    answers: [
      {
        id: "AGK0078001",
        answer:
          "To set the reference level for the altitude decoder of the transponder",
      },
      {
        id: "AGK0078002",
        answer: "To adjust the altimeter reading for non-standard temperature",
      },
      {
        id: "AGK0078003",
        answer:
          "To reference the altimeter reading to a predetermined level such as mean sea level, aerodrome\nlevel or pressure level 1013.25 hPa",
      },
      {
        id: "AGK0078004",
        answer: "To correct the altimeter reading for system errors",
      },
    ],
    correct: "AGK0078003",
  },
  {
    id: "AGK0079",
    question:
      "In which way may an altimeter subscale which is set to an incorrect QNH lead to an incorrect altimeter reading?",
    answers: [
      {
        id: "AGK0079001",
        answer:
          "If the subscale is set to a lower than actual pressure, the indication is too high.\nThis may lead to much closer proximity to the ground than intended",
      },
      {
        id: "AGK0079002",
        answer:
          "If the subscale is set to a higher than actual pressure, the indication is too high.\nThis may lead to much closer proximity to the ground than intended",
      },
      {
        id: "AGK0079003",
        answer:
          "If the subscale is set to a lower than actual pressure, the indication is too low.\nThis may lead to much closer proximity to the ground than intended",
      },
      {
        id: "AGK0079004",
        answer:
          "If the subscale is set to a higher than actual pressure, the indication is too low.\nThis may lead to much greater heights above the ground than intended",
      },
    ],
    correct: "AGK0079002",
  },
  {
    id: "AGK0080",
    question: " Lower-than-standard temperature may lead to...",
    answers: [
      {
        id: "AGK0080001",
        answer:
          "a blockage of the Pitot tube by ice, freezing the altimeter indication to its present value.",
      },
      {
        id: "AGK0080002",
        answer: "an altitude indication which is too low.",
      },
      {
        id: "AGK0080003",
        answer: "an altitude indication which is too high.",
      },
      {
        id: "AGK0080004",
        answer:
          "a correct altitude indication as long as the altimeter subscale is set to correct for non-standard\ntemperature.",
      },
    ],
    correct: "AGK0080003",
  },
  {
    id: "AGK0081",
    question: " A flight level is a...",
    answers: [
      {
        id: "AGK0081001",
        answer: "pressure altitude.",
      },
      {
        id: "AGK0081002",
        answer: "density altitude.",
      },
      {
        id: "AGK0081003",
        answer: "altitude above ground.",
      },
      {
        id: "AGK0081004",
        answer: "true altitude.",
      },
    ],
    correct: "AGK0081001",
  },
  {
    id: "AGK0082",
    question: " A true altitude is...",
    answers: [
      {
        id: "AGK0082001",
        answer:
          "a height above ground level corrected for non-standard pressure.",
      },
      {
        id: "AGK0082002",
        answer:
          "a height above ground level corrected for non-standard temperature.",
      },
      {
        id: "AGK0082003",
        answer: "a pressure altitude corrected for non-standard temperature.",
      },
      {
        id: "AGK0082004",
        answer:
          "an altitude above mean sea level corrected for non-standard temperature.",
      },
    ],
    correct: "AGK0082004",
  },
  {
    id: "AGK0083",
    question:
      "During a flight in colder-than-ISA air the indicated altitude is...",
    answers: [
      {
        id: "AGK0083001",
        answer: "higher than the true altitude.",
      },
      {
        id: "AGK0083002",
        answer: "lower than the true altitude.",
      },
      {
        id: "AGK0083003",
        answer: "eqal to the true altitude.",
      },
      {
        id: "AGK0083004",
        answer: "equal to the standard altitude.",
      },
    ],
    correct: "AGK0083001",
  },
  {
    id: "AGK0084",
    question:
      "During a flight in an air mass with a temperature equal to ISA and the QNH set correctly, the indicated altitude is...",
    answers: [
      {
        id: "AGK0084001",
        answer: "lower than the true altitude.",
      },
      {
        id: "AGK0084002",
        answer: "equal to the true altitude.",
      },
      {
        id: "AGK0084003",
        answer: "equal to the standard atmosphere.",
      },
      {
        id: "AGK0084004",
        answer: "higher than the true altitude.",
      },
    ],
    correct: "AGK0084002",
  },
  {
    id: "AGK0085",
    question: " Which instrument can be affected by the hysteresis error?",
    answers: [
      {
        id: "AGK0085001",
        answer: "Vertical speed indicator",
      },
      {
        id: "AGK0085002",
        answer: "Altimeter",
      },
      {
        id: "AGK0085003",
        answer: "Direct reading compass",
      },
      {
        id: "AGK0085004",
        answer: "Tachometer",
      },
    ],
    correct: "AGK0085002",
  },
  {
    id: "AGK0086",
    question: " The measurement of altitude is based on the change of the...",
    answers: [
      {
        id: "AGK0086001",
        answer: "dynamic pressure.",
      },
      {
        id: "AGK0086002",
        answer: "differential pressure.",
      },
      {
        id: "AGK0086003",
        answer: "static pressure.",
      },
      {
        id: "AGK0086004",
        answer: "total pressure.",
      },
    ],
    correct: "AGK0086003",
  },
  {
    id: "AGK0087",
    question:
      "Which of the following options states the working principle of a vertical speed indicator?",
    answers: [
      {
        id: "AGK0087001",
        answer:
          "Measuring the present static air pressure and comparing it to the static air pressure inside a\nreservoir",
      },
      {
        id: "AGK0087002",
        answer:
          "Total air pressure is measured and compared to static pressure",
      },
      {
        id: "AGK0087003",
        answer:
          "Measuring the vertical acceleration through the displacement of a gimbal-mounted mass",
      },
      {
        id: "AGK0087004",
        answer: "Static air pressure is measured and compared against a vacuum",
      },
    ],
    correct: "AGK0087001",
  },
  {
    id: "AGK0088",
    question:
      "The vertical speed indicator measures the difference of pressure between...",
    answers: [
      {
        id: "AGK0088001",
        answer:
          "the present total pressure and the total pressure of a previous moment.",
      },
      {
        id: "AGK0088002",
        answer:
          "the present dynamic pressure and the dynamic pressure of a previous moment.",
      },
      {
        id: "AGK0088003",
        answer:
          "the present dynamic pressure and the static pressure of a previous moment.",
      },
      {
        id: "AGK0088004",
        answer:
          "the present static pressure and the static pressure of a previous moment.",
      },
    ],
    correct: "AGK0088004",
  },
  {
    id: "AGK0089",
    question: " Calibrated airspeed (CAS) equals...",
    answers: [
      {
        id: "AGK0089001",
        answer: "equivalent airspeed (EAS) corrected for altitude.",
      },
      {
        id: "AGK0089002",
        answer:
          "indicated airspeed (IAS) corrected for instrument and position error.",
      },
      {
        id: "AGK0089003",
        answer:
          "ground speed (GS) corrected for instrument and position error.",
      },
      {
        id: "AGK0089004",
        answer: "true airspeed (TAS) corrected for wind.",
      },
    ],
    correct: "AGK0089002",
  },
  {
    id: "AGK0090",
    question:
      "At higher altitudes, true airspeed (TAS) tends to be higher than calibrated airspeed (CAS). A rough estimate of the TAS can be obtained by...",
    answers: [
      {
        id: "AGK0090001",
        answer: "subtracting 2 % of the CAS for every 1000 ft altitude.",
      },
      {
        id: "AGK0090002",
        answer: "adding 10 % of the CAS for every 1000 ft altitude.",
      },
      {
        id: "AGK0090003",
        answer: "subtracting 10 % of the CAS for every 1000 m altitude.",
      },
      {
        id: "AGK0090004",
        answer: "adding 2 % of the CAS for every 1000 ft altitude.",
      },
    ],
    correct: "AGK0090004",
  },
  {
    id: "AGK0091",
    question:
      "An aircraft cruises on a heading of 180° with a true airspeed of 100 kt. The wind comes from 180° with 30 kt. Neglecting instrument and position errors, which will be the approximate reading of the airspeed indicator?",
    answers: [
      {
        id: "AGK0091001",
        answer: "100 kt",
      },
      {
        id: "AGK0091002",
        answer: "130 kt",
      },
      {
        id: "AGK0091003",
        answer: "30 kt",
      },
      {
        id: "AGK0091004",
        answer: "70 kt",
      },
    ],
    correct: "AGK0091001",
  },
  {
    id: "AGK0092",
    question:
      "Which of the following factors could cause an erroneous airspeed indication?",
    answers: [
      {
        id: "AGK0092001",
        answer: "A circuit breaker was pulled",
      },
      {
        id: "AGK0092002",
        answer: "The earth wire is still attached",
      },
      {
        id: "AGK0092003",
        answer: "The boost pressure line is defective",
      },
      {
        id: "AGK0092004",
        answer: "The aircraft is covered with adhesive foils",
      },
    ],
    correct: "AGK0092004",
  },
  {
    id: "AGK0093",
    question:
      "Which of the following states the working principle of an airspeed indicator?",
    answers: [
      {
        id: "AGK0093001",
        answer:
          "Total air pressure is measured and compared against static air pressure.",
      },
      {
        id: "AGK0093002",
        answer:
          "Total air pressure is measured by the static ports and converted into a speed indication by the\nairspeed indicator",
      },
      {
        id: "AGK0093003",
        answer:
          "Dynamic air pressure is measured by the Pitot tube and converted into a speed indication by\nthe airspeed indicator",
      },
      {
        id: "AGK0093004",
        answer:
          "Static air pressure is measured and compared against a vacuum.",
      },
    ],
    correct: "AGK0093001",
  },
  {
    id: "AGK0094",
    question:
      "What values are usually marked with a red line on instrument displays?",
    answers: [
      {
        id: "AGK0094001",
        answer: "Operational limits",
      },
      {
        id: "AGK0094002",
        answer: "Caution areas",
      },
      {
        id: "AGK0094003",
        answer: "Recommended areas",
      },
      {
        id: "AGK0094004",
        answer: "Operational areas",
      },
    ],
    correct: "AGK0094001",
  },
  {
    id: "AGK0095",
    question:
      "What is necessary for the determination of speed (IAS) by the airspeed indicator?",
    answers: [
      {
        id: "AGK0095001",
        answer:
          "The difference between the total pressure and the dynamic pressure",
      },
      {
        id: "AGK0095002",
        answer:
          "The difference between the standard pressure and the total pressure",
      },
      {
        id: "AGK0095003",
        answer:
          "The difference betweeen the total pressure and the static presssure",
      },
      {
        id: "AGK0095004",
        answer:
          "The difference between the dynamic pressure and the static pressure",
      },
    ],
    correct: "AGK0095003",
  },
  {
    id: "AGK0096",
    question: "What is the meaning of the white arc on the airspeed indicator?",
    answers: [
      {
        id: "AGK0096001",
        answer: "Speed range in bumpy air",
      },
      {
        id: "AGK0096002",
        answer: "Speed range in smooth air",
      },
      {
        id: "AGK0096003",
        answer: "Speed range for extended flaps",
      },
      {
        id: "AGK0096004",
        answer: "Speed range not to exceed",
      },
    ],
    correct: "AGK0096003",
  },
  {
    id: "AGK0097",
    question: "What is the meaning of the red range on the airspeed indicator?",
    answers: [
      {
        id: "AGK0097001",
        answer: "Speed which must not be exceeded within bumpy air",
      },
      {
        id: "AGK0097002",
        answer: "Speed which must not be exceeded with flaps extended",
      },
      {
        id: "AGK0097003",
        answer: "Speed which must not be exceeded regardless of circumstances",
      },
      {
        id: "AGK0097004",
        answer:
          "Speed which must not be exceeded in turns with more than 45° bank",
      },
    ],
    correct: "AGK0097003",
  },
  {
    id: "AGK0098",
    question:
      "The compass error caused by the aircraft's magnetic field is called...",
    answers: [
      {
        id: "AGK0098001",
        answer: "variation.",
      },
      {
        id: "AGK0098002",
        answer: "declination.",
      },
      {
        id: "AGK0098003",
        answer: "inclination.",
      },
      {
        id: "AGK0098004",
        answer: "deviation.",
      },
    ],
    correct: "AGK0098004",
  },
  {
    id: "AGK0099",
    question:
      "The indication of a magnetic compass deviates from magnetic north direction due to what errors?",
    answers: [
      {
        id: "AGK0099001",
        answer: "Deviation, turning and acceleration errors",
      },
      {
        id: "AGK0099002",
        answer: "Gravity and magnetism",
      },
      {
        id: "AGK0099003",
        answer: "Inclination and declination of the earth's magnetic field",
      },
      {
        id: "AGK0099004",
        answer: "Variation, turning and acceleration errors",
      },
    ],
    correct: "AGK0099001",
  },
  {
    id: "AGK0100",
    question:
      "Which of the mentioned cockpit instruments is connected to the pitot tube?",
    answers: [
      {
        id: "AGK0100001",
        answer: "Vertical speed indicator",
      },
      {
        id: "AGK0100002",
        answer: "Direct-reading compass",
      },
      {
        id: "AGK0100003",
        answer: "Altimeter",
      },
      {
        id: "AGK0100004",
        answer: "Airspeed indicator",
      },
    ],
    correct: "AGK0100004",
  },
  {
    id: "AGK0101",
    question: " Which cockpit instruments are connected to the static port?",
    answers: [
      {
        id: "AGK0101001",
        answer: "Altimeter, vertical speed indicator, airspeed indicator",
      },
      {
        id: "AGK0101002",
        answer: "Airspeed indicator, direct-reading compass, slip indicator",
      },
      {
        id: "AGK0101003",
        answer: "Altimeter, slip indicator, navigational computer",
      },
      {
        id: "AGK0101004",
        answer: "Airspeed indicator, altimeter, direct-reading compass",
      },
    ],
    correct: "AGK0101001",
  },
  {
    id: "AGK0102",
    question:
      "An aircraft in the northern hemisphere intends to turn on the shortest way from a heading of 270° to a heading of 360°. At approximately which indication of the magnetic compass should the turn be terminated?",
    answers: [
      {
        id: "AGK0102001",
        answer: "330°",
      },
      {
        id: "AGK0102002",
        answer: "360°",
      },
      {
        id: "AGK0102003",
        answer: "270°",
      },
      {
        id: "AGK0102004",
        answer: "30°",
      },
    ],
    correct: "AGK0102001",
  },
  {
    id: "AGK0103",
    question:
      "An aircraft in the northern hemisphere intends to turn on the shortest way from a heading of 360° to a heading of 270°. At approximately which indication of the magnetic compass should the turn be terminated?",
    answers: [
      {
        id: "AGK0103001",
        answer: "300°",
      },
      {
        id: "AGK0103002",
        answer: "360°",
      },
      {
        id: "AGK0103003",
        answer: "240°",
      },
      {
        id: "AGK0103004",
        answer: "270°",
      },
    ],
    correct: "AGK0103004",
  },
  {
    id: "AGK0104",
    question: ' The term "static pressure" is defined as pressure...',
    answers: [
      {
        id: "AGK0104001",
        answer: "inside the airplane cabin.",
      },
      {
        id: "AGK0104002",
        answer: "of undisturbed airflow.",
      },
      {
        id: "AGK0104003",
        answer: "resulting from orderly flow of air particles.",
      },
      {
        id: "AGK0104004",
        answer: "sensed by the pitot tube.",
      },
    ],
    correct: "AGK0104002",
  },
  {
    id: "AGK0105",
    question:
      "An aircraft in the northern hemisphere intends to turn on the shortest way from a heading of 030° to a heading of 180°. At approximately which indicated magnetic heading should the turn be terminated?",
    answers: [
      {
        id: "AGK0105001",
        answer: "360°",
      },
      {
        id: "AGK0105002",
        answer: "150°",
      },
      {
        id: "AGK0105003",
        answer: "210°",
      },
      {
        id: "AGK0105004",
        answer: "180°",
      },
    ],
    correct: "AGK0105003",
  },
  {
    id: "AGK0106",
    question: " What does the dynamic pressure depend directly on?",
    answers: [
      {
        id: "AGK0106001",
        answer: "Air pressure and air temperature",
      },
      {
        id: "AGK0106002",
        answer: "Air density and airflow speed squared",
      },
      {
        id: "AGK0106003",
        answer: "Air density and lift coefficient",
      },
      {
        id: "AGK0106004",
        answer: "Lift- and drag coefficient",
      },
    ],
    correct: "AGK0106002",
  },
  {
    id: "AGK0107",
    question:
      "What is a cause for the dip error on the direct-reading compass?",
    answers: [
      {
        id: "AGK0107001",
        answer: "Deviation in the cockpit",
      },
      {
        id: "AGK0107002",
        answer: "Acceleration of the airplane",
      },
      {
        id: "AGK0107003",
        answer: "Inclination of earth's magnetic field lines",
      },
      {
        id: "AGK0107004",
        answer: "Temperature variations",
      },
    ],
    correct: "AGK0107003",
  },
  {
    id: "AGK0108",
    question: " What behaviour is shown by a rotating gyro in space?",
    answers: [
      {
        id: "AGK0108001",
        answer: "It moves in accordance with the body surrounding it",
      },
      {
        id: "AGK0108002",
        answer: "It tends to maintain its position in space",
      },
      {
        id: "AGK0108003",
        answer: "It swings from east to west like a pendulum",
      },
      {
        id: "AGK0108004",
        answer: "It moves in circles with a stadily decreasing radius",
      },
    ],
    correct: "AGK0108002",
  },
  {
    id: "AGK0109",
    question:
      "A gyro which is rotating in space responds to forces being applied to it by an evasive movement...",
    answers: [
      {
        id: "AGK0109001",
        answer: "at an angle of 45° to the force being applied.",
      },
      {
        id: "AGK0109002",
        answer: "in a northern direction.",
      },
      {
        id: "AGK0109003",
        answer: "at an angle of 90° to the force being applied.",
      },
      {
        id: "AGK0109004",
        answer: "at an angle of 180° to the force being applied.",
      },
    ],
    correct: "AGK0109003",
  },
  {
    id: "AGK0110",
    question: "The bank angle of a 2-minutes circle depends on the...",
    answers: [
      {
        id: "AGK0110001",
        answer: "Ground speed",
      },
      {
        id: "AGK0110002",
        answer: "TAS",
      },
      {
        id: "AGK0110002",
        answer: "CAS",
      },
      {
        id: "AGK0110002",
        answer: "TAS",
      },
    ],
    correct: "AGK0110002",
  },
  {
    id: "AGK0111",
    question:
      "A turn and bank (or turn and slip) coordinator provides information regarding...",
    answers: [
      {
        id: "AGK0111001",
        answer: "the coordination of the turn and slip angle.",
      },
      {
        id: "AGK0111002",
        answer:
          "the rate of turn and coordination, i.e. slip or skid, of the turn.",
      },
      {
        id: "AGK0111003",
        answer: "the pitch and bank angle of the aircraft.",
      },
      {
        id: "AGK0111004",
        answer: "the rate of turn and bank angle of the aircraft.",
      },
    ],
    correct: "AGK0111002",
  },
  {
    id: "AGK0112",
    question:
      "The airspeed indicator is unservicable. The airplane may only be operated...",
    answers: [
      {
        id: "AGK0112001",
        answer: "when the airspeed indicator is fully functional again.",
      },
      {
        id: "AGK0112002",
        answer: "when a GPS with speed indication is used during flight.",
      },
      {
        id: "AGK0112003",
        answer: "if no maintenance organisation is around.",
      },
      {
        id: "AGK0112004",
        answer: "if only airfield patterns are flown.",
      },
    ],
    correct: "AGK0112001",
  },
  {
    id: "AGK0113",
    question:
      'Which light colour advises the pilot to the condition "corrective action may be required in the future"?',
    answers: [
      {
        id: "AGK0113001",
        answer: "Amber (orange)",
      },
      {
        id: "AGK0113002",
        answer: "Red",
      },
      {
        id: "AGK0113003",
        answer: "Blue",
      },
      {
        id: "AGK0113004",
        answer: "Green",
      },
    ],
    correct: "AGK0113001",
  },
  {
    id: "AGK0114",
    question:
      "The Caution Area is marked on an airspeed indicator by what color?",
    answers: [
      {
        id: "AGK0114001",
        answer: "Green",
      },
      {
        id: "AGK0114002",
        answer: "Red",
      },
      {
        id: "AGK0114003",
        answer: "Yellow",
      },
      {
        id: "AGK0114004",
        answer: "White",
      },
    ],
    correct: "AGK0114003",
  },
  {
    id: "AGK0115",
    question:
      "An attitude director indicator (ADI) combines the information provided by...",
    answers: [
      {
        id: "AGK0115001",
        answer: "the attitude indicator and the flight director.",
      },
      {
        id: "AGK0115002",
        answer: "the directional gyro and the rate gyro.",
      },
      {
        id: "AGK0115003",
        answer: "the attitude indicator and the relative bearing indicator.",
      },
      {
        id: "AGK0115004",
        answer: "the attitude indicator and the radio magnetic indicator.",
      },
    ],
    correct: "AGK0115001",
  },
  {
    id: "AGK0116",
    question: " What does the abbreviation HSI stand for?",
    answers: [
      {
        id: "AGK0116001",
        answer: "Horizontal Situation Indicator",
      },
      {
        id: "AGK0116002",
        answer: "Hybernating System Indication",
      },
      {
        id: "AGK0116003",
        answer: "Horizontal Slip Indicator",
      },
      {
        id: "AGK0116004",
        answer: "Horrifying Steep Inclination",
      },
    ],
    correct: "AGK0116001",
  },
  {
    id: "AGK0117",
    question:
      "A horizontal situation indicator (HSI) combines the information provided by...",
    answers: [
      {
        id: "AGK0117001",
        answer: "the directional gyro and the flight director.",
      },
      {
        id: "AGK0117002",
        answer: "the rate gyro and the slip indicator.",
      },
      {
        id: "AGK0117003",
        answer: "the directional gyro and the VHF navigation receiver.",
      },
      {
        id: "AGK0117004",
        answer: "the attitude indicator and the flight director.",
      },
    ],
    correct: "AGK0117003",
  },
  {
    id: "AGK0118",
    question:
      "What difference in altitude is shown by an altimeter, if the reference pressure scale setting is changed from 1000 hPa to 1010 hPa?",
    answers: [
      {
        id: "AGK0118001",
        answer: "80 m less than before",
      },
      {
        id: "AGK0118002",
        answer: "Values depending on QNH",
      },
      {
        id: "AGK0118003",
        answer: "Zero",
      },
      {
        id: "AGK0118004",
        answer: "80 m more than before",
      },
    ],
    correct: "AGK0118004",
  },
  {
    id: "AGK0119",
    question:
      "When is it necessary to adjust the pressure in the reference scale of an alitimeter?",
    answers: [
      {
        id: "AGK0119001",
        answer: "Before every flight and during cross country flights",
      },
      {
        id: "AGK0119002",
        answer: "Every day before the first flight",
      },
      {
        id: "AGK0119003",
        answer: "Once a month before flight operation",
      },
      {
        id: "AGK0119004",
        answer: "After maintance has been finished",
      },
    ],
    correct: "AGK0119001",
  },
  {
    id: "AGK0120",
    question:
      "The altimeter's reference scale is set to airfield pressure (QFE). What indication is shown during the flight?",
    answers: [
      {
        id: "AGK0120001",
        answer: "Pressure altitude",
      },
      {
        id: "AGK0120002",
        answer: "Height above airfield",
      },
      {
        id: "AGK0120003",
        answer: "Airfield elevation",
      },
      {
        id: "AGK0120004",
        answer: "Altitude above MSL",
      },
    ],
    correct: "AGK0120002",
  },
  {
    id: "AGK0121",
    question:
      "A vertical speed indicator connected to a too big equalizing tank results in...",
    answers: [
      {
        id: "AGK0121001",
        answer: "no indication",
      },
      {
        id: "AGK0121002",
        answer: "mechanical overload",
      },
      {
        id: "AGK0121003",
        answer: "indication too low",
      },
      {
        id: "AGK0121004",
        answer: "indication too high",
      },
    ],
    correct: "AGK0121004",
  },
  {
    id: "AGK0122",
    question: " A vertical speed indicator measures the difference between...",
    answers: [
      {
        id: "AGK0122001",
        answer: "instantaneous total pressure and previous total pressure.",
      },
      {
        id: "AGK0122002",
        answer: "total pressure and static pressure.",
      },
      {
        id: "AGK0122003",
        answer: "instantaneous static pressure and previous static pressure.",
      },
      {
        id: "AGK0122004",
        answer: "dynamic pressure and total pressure.",
      },
    ],
    correct: "AGK0122003",
  },
  {
    id: "AGK0123",
    question: ' The term "inclination" is defined as...',
    answers: [
      {
        id: "AGK0123001",
        answer: "deviation induced by electrical fields.",
      },
      {
        id: "AGK0123002",
        answer: "angle between airplane's longitudinal axis and true north.",
      },
      {
        id: "AGK0123003",
        answer:
          "angle between earth's magnetic field lines and horizontal plane.",
      },
      {
        id: "AGK0123004",
        answer: "angle between magnetic and true north.",
      },
    ],
    correct: "AGK0123003",
  },
  {
    id: "AGK0124",
    question: " What does the slip indicator show?",
    answers: [
      {
        id: "AGK0124001",
        answer: "Apparent vertical",
      },
      {
        id: "AGK0124002",
        answer: "Rate of turn",
      },
      {
        id: "AGK0124003",
        answer: "Vertical to horizon",
      },
      {
        id: "AGK0124004",
        answer: "Airplane's bank",
      },
    ],
    correct: "AGK0124001",
  },
  {
    id: "AGK0125",
    question:
      "The slip indicator's ball (apparent vertical) has moved to the right during a right turn. By what actions may the ball led back to middle position?",
    answers: [
      {
        id: "AGK0125001",
        answer: "Reduce bank, increase rate of turn",
      },
      {
        id: "AGK0125002",
        answer: "Increase bank, increase rate of turn",
      },
      {
        id: "AGK0125003",
        answer: "Reduce speed, increase bank",
      },
      {
        id: "AGK0125004",
        answer: "Reduce rate of turn, reduce bank",
      },
    ],
    correct: "AGK0125001",
  },
  {
    id: "AGK0126",
    question: " What is the purpose of winglets?",
    answers: [
      {
        id: "AGK0126001",
        answer: "Increase gliging performance at high speed.",
      },
      {
        id: "AGK0126002",
        answer: "Increase of lift and turning manoeuvering capabilities.",
      },
      {
        id: "AGK0126003",
        answer: "To increase efficiency of aspect ratio.",
      },
      {
        id: "AGK0126004",
        answer: "Reduction of induced drag.",
      },
    ],
    correct: "AGK0126004",
  },
  {
    id: "AGK0127",
    question:
      "What engines are commonly used with Touring Motor Gliders (TMG)?",
    answers: [
      {
        id: "AGK0127001",
        answer: "4 Cylinder; 4 stroke",
      },
      {
        id: "AGK0127002",
        answer: "4 Cylinder 2 stroke",
      },
      {
        id: "AGK0127003",
        answer: "2 Cylinder Diesel",
      },
      {
        id: "AGK0127004",
        answer: "2 plate Wankel",
      },
    ],
    correct: "AGK0127001",
  },
  {
    id: "AGK0128",
    question: " What is the purpose of engine oil in piston engine?",
    answers: [
      {
        id: "AGK0128001",
        answer:
          "Cooling, lubrication of the engine and disposal of fine abrasion.",
      },
      {
        id: "AGK0128002",
        answer: "Cooling of the engine and lubrication of propeller shaft.",
      },
      {
        id: "AGK0128003",
        answer: "For nose reduction and bearing of the propeller shaft.",
      },
      {
        id: "AGK0128004",
        answer: "Cooling, lubrication and increasing engine performance.",
      },
    ],
    correct: "AGK0128001",
  },
];

export default questions;
