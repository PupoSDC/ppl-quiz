import { Question } from "types/Questionnaire";

const questions: Question[] = [
  {
    id: "FPP0001",
    question:
      " A flight plan has been files for a flight departing at an uncontrolled aerodrome. When has the actual take-off time been transmitted to ATC? (1,00 P.)",
    answers: [
      {
        id: "FPP0001001",
        answer: "Upon request from ATC.",
      },
      {
        id: "FPP0001002",
        answer: "When landing is assured.",
      },
      {
        id: "FPP0001003",
        answer: "Immediately after take-off.",
      },
      {
        id: "FPP0001004",
        answer:
          "At deviation from expected off-block time by more than 15 min.",
      },
    ],
    correct: "FPP0001003",
  },
  {
    id: "FPP0002",
    question:
      " During a flight with a flight plan submitted, landing is conducted at an airfield other than the destination stated in the filed flight plan. Who has to be contacted by the pilot immediately? (1,00 P.)",
    answers: [
      {
        id: "FPP0002001",
        answer: "The flight manager on duty.",
      },
      {
        id: "FPP0002002",
        answer: "Aeronatical Information Service (AIS).",
      },
      {
        id: "FPP0002003",
        answer: "The police department.",
      },
      {
        id: "FPP0002004",
        answer: "Local office for aereal supervision.",
      },
    ],
    correct: "FPP0002002",
  },
  {
    id: "FPP0003",
    question: " Exceeding the maximum allowed aircraft mass is... (1,00 P.)",
    answers: [
      {
        id: "FPP0003001",
        answer: "only relevant if the excess is more than 10 %.",
      },
      {
        id: "FPP0003002",
        answer: "not permissible and essentially dangerous.",
      },
      {
        id: "FPP0003003",
        answer: "exceptionally permissible to avoid delays.",
      },
      {
        id: "FPP0003004",
        answer: "compensated by the pilot's control inputs.",
      },
    ],
    correct: "FPP0003002",
  },
  {
    id: "FPP0004",
    question: " The center of gravity has to be located... (1,00 P.)",
    answers: [
      {
        id: "FPP0004001",
        answer: "right of the lateral C. G. limit.",
      },
      {
        id: "FPP0004002",
        answer: "in front of the front C.G. limit.",
      },
      {
        id: "FPP0004003",
        answer: "behind the rear C.G. limit.",
      },
      {
        id: "FPP0004004",
        answer: "between the front and the rear C.G. limit.",
      },
    ],
    correct: "FPP0004004",
  },
  {
    id: "FPP0005",
    question: " The result of a rear C.G. position is... (1,00 P.)",
    answers: [
      {
        id: "FPP0005001",
        answer: "an increased stall speed.",
      },
      {
        id: "FPP0005002",
        answer: "an increased fuel consumption.",
      },
      {
        id: "FPP0005003",
        answer: "a decrease of range.",
      },
      {
        id: "FPP0005004",
        answer: "a decrease of stability",
      },
    ],
    correct: "FPP0005004",
  },
  {
    id: "FPP0006",
    question:
      " An aircraft must be loaded and operated in such a way that the center of gravity (CG) stays within the approved limits during all phases of flight. This is done to ensure... (1,00 P.)",
    answers: [
      {
        id: "FPP0006001",
        answer:
          "that the aircraft does not tip over on its tail while it is being loaded.",
      },
      {
        id: "FPP0006002",
        answer: "that the aircraft does not stall.",
      },
      {
        id: "FPP0006003",
        answer: "both stability and controllability of the aircraft.",
      },
      {
        id: "FPP0006004",
        answer:
          "that the aircraft does not exceed the maximum permissible airspeed during a descent.",
      },
    ],
    correct: "FPP0006003",
  },
  {
    id: "FPP0007",
    question: `The result of a front C.G. position is:
    1) Increase in stability.
    2). Increase in fuel consumption.
    3) Increase in stall speed.
    4) Increase in range.`,
    answers: [
      {
        id: "FPP0004001",
        answer: "2, 4",
      },
      {
        id: "FPP0004002",
        answer: "1, 2, 3",
      },
      {
        id: "FPP0004003",
        answer: "2, 3, 4",
      },
      {
        id: "FPP0004004",
        answer: "1, 2",
      },
    ],
    correct: "FPP0004002",
  },
  {
    id: "FPP0008",
    question: " The basic empty mass of an aircraft includes... (1,00 P.)",
    answers: [
      {
        id: "FPP0008001",
        answer:
          "the total mass of the aeroplane ready for a specific type of operation including crew, navigation\ninstruments and engine cowling.",
      },
      {
        id: "FPP0008002",
        answer:
          "the total mass of an aeroplane ready for a specific type of operation including the required fuel\nand crew, but excluding traffic load.",
      },
      {
        id: "FPP0008003",
        answer:
          "the total mass of the aeroplane ready for a specific type of operation excluding unusable fuel\nand traffic load. The mass includes items such as crew and crew baggage.",
      },
      {
        id: "FPP0008004",
        answer:
          "the mass of the aeroplane plus standard items such as unusable fuel and other unusable\nliquids, lubricating oil in engine and auxiliary units, fire extinguishers, pyrotechnics, emergency\noxygen equipment, supplementary electronic equipment.",
      },
    ],
    correct: "FPP0008004",
  },
  {
    id: "FPP0009",
    question:
      " The empty weight and the corresponding center of gravity (CG) of an aircraft are initially determined... (1,00 P.)",
    answers: [
      {
        id: "FPP0009001",
        answer: "by weighing.",
      },
      {
        id: "FPP0009002",
        answer:
          "for one aircraft of a type only, since all aircraft of the same type have the same mass and CG\nposition.",
      },
      {
        id: "FPP0009003",
        answer: "by calculation.",
      },
      {
        id: "FPP0009004",
        answer: "through data provided by the aircraft manufacturer.",
      },
    ],
    correct: "FPP0009001",
  },
  {
    id: "FPP0010",
    question: " The density of AVGAS 100LL at 15° C is... (1,00 P.)",
    answers: [
      {
        id: "FPP0010001",
        answer: "0.68 kg/l.",
      },
      {
        id: "FPP0010002",
        answer: "1.0 kg/l.",
      },
      {
        id: "FPP0010003",
        answer: "0.82 kg/l.",
      },
      {
        id: "FPP0010004",
        answer: "0.72 kg/l",
      },
    ],
    correct: "FPP0010004",
  },
  {
    id: "FPP0011",
    question:
      " The conversion factor from kilogram [kg] into pounds [lb] is... (1,00 P.)",
    answers: [
      {
        id: "FPP0011001",
        answer: "kg x 0.454 = lb.",
      },
      {
        id: "FPP0011002",
        answer: "kg / 2.205 = lb.",
      },
      {
        id: "FPP0011003",
        answer: "kg x 2.205 = lb.",
      },
      {
        id: "FPP0011004",
        answer: "kg x 2 = lb.",
      },
    ],
    correct: "FPP0011003",
  },
  {
    id: "FPP0012",
    question:
      " Baggage and cargo must be properly stowed and fastened, otherwise a shift of the cargo may cause... (1,00 P.)",
    answers: [
      {
        id: "FPP0012001",
        answer:
          "uncontrollable attitudes, structural damage, risk of injuries.",
      },
      {
        id: "FPP0012002",
        answer:
          "continuous attitudes which can be corrected by the pilot using the flight controls.",
      },
      {
        id: "FPP0012003",
        answer:
          "calculable instability if the C.G. is shifting by less than 10 %.",
      },
      {
        id: "FPP0012004",
        answer:
          "structural damage, angle of attack stability, velocity stability.",
      },
    ],
    correct: "FPP0012001",
  },
  {
    id: "FPP0013",
    question: " Loads must be adequately secured in order to... (1,00 P.)",
    answers: [
      {
        id: "FPP0013001",
        answer: "allow steep turns.",
      },
      {
        id: "FPP0013002",
        answer: "carry extra fuel.",
      },
      {
        id: "FPP0013003",
        answer: "prevent excessive 'g'-loading during the landing flare.",
      },
      {
        id: "FPP0013004",
        answer: "avoid any centre of gravity (C.G.) movements.",
      },
    ],
    correct: "FPP0013004",
  },
  {
    id: "FPP0014",
    question:
      " The total weight of an aeroplane is acting vertically through the... (1,00 P.)",
    answers: [
      {
        id: "FPP0014001",
        answer: "center of pressure.",
      },
      {
        id: "FPP0014002",
        answer: "stagnation point.",
      },
      {
        id: "FPP0014003",
        answer: "neutral point.",
      },
      {
        id: "FPP0014004",
        answer: "center of gravity.",
      },
    ],
    correct: "FPP0014004",
  },
  {
    id: "FPP0015",
    question: ' The term "center of gravity" is defined as... (1,00 P.)',
    answers: [
      {
        id: "FPP0015001",
        answer: "the heaviest point on an aeroplane.",
      },
      {
        id: "FPP0015002",
        answer: "another designation for the neutral point.",
      },
      {
        id: "FPP0015003",
        answer:
          "half the distance between the neutral point and the datum line.",
      },
      {
        id: "FPP0015004",
        answer:
          "the point at which the total mass of the aeroplane is considered to act.",
      },
    ],
    correct: "FPP0015004",
  },
  {
    id: "FPP0016",
    question: " The center of gravity (CG) defines... (1,00 P.)",
    answers: [
      {
        id: "FPP0016001",
        answer:
          "the point through which the force of gravity is said to act on a mass.",
      },
      {
        id: "FPP0016002",
        answer: "the product of mass and balance arm.",
      },
      {
        id: "FPP0016003",
        answer: "the distance from the datum to the position of a mass.",
      },
      {
        id: "FPP0016004",
        answer:
          "the point on the longitudinal axis or its extension from which the centers of gravity of all masses\nare referenced",
      },
    ],
    correct: "FPP0016001",
  },
  {
    id: "FPP0017",
    question: " During an unaccelerated flight... (1,00 P.)",
    answers: [
      {
        id: "FPP0017001",
        answer: "thrust equals drag and lift equals gravity.",
      },
      {
        id: "FPP0017002",
        answer: "thrust equals the sum of drag and gravity.",
      },
      {
        id: "FPP0017003",
        answer: "thrust equals lift and drag equals gravity.",
      },
      {
        id: "FPP0017004",
        answer: "drag equals lift and thrust equals gravity.",
      },
    ],
    correct: "FPP0017001",
  },
  {
    id: "FPP0018",
    question:
      ' The term "datum" with regard to a mass and balance calculation defines... (1,00 P.)',
    answers: [
      {
        id: "FPP0018001",
        answer:
          "the distance from the reference plane to the center of gravity of an aircraft.",
      },
      {
        id: "FPP0018002",
        answer:
          "the point on the lateral axis of an aeroplane or its extension from which the centers of gravity of\nall masses are referenced.",
      },
      {
        id: "FPP0018003",
        answer:
          "the point on the vertical axis of an aeroplane or its extension from which the centers of gravity of\nall masses are referenced.",
      },
      {
        id: "FPP0018004",
        answer:
          "the point on the longitudinal axis of an aeroplane or its extension from which the centers of\ngravity of all masses are referenced.",
      },
    ],
    correct: "FPP0018004",
  },
  {
    id: "FPP0019",
    question:
      ' The term "moment" with regard to a mass and balance calculation is referred to as... (1,00 P.)',
    answers: [
      {
        id: "FPP0019001",
        answer: "sum of a mass and a balance arm.",
      },
      {
        id: "FPP0019002",
        answer: "quotient of a mass and a balance arm.",
      },
      {
        id: "FPP0019003",
        answer: "product of a mass and a balance arm.",
      },
      {
        id: "FPP0019004",
        answer: "difference of a mass and a balance arm.",
      },
    ],
    correct: "FPP0019003",
  },
  {
    id: "FPP0020",
    question:
      ' The term "balance arm" in the context of a mass and balance calculation defines the... (1,00 P.)',
    answers: [
      {
        id: "FPP0020001",
        answer: "distance from the datum to the center of gravity of a mass.",
      },
      {
        id: "FPP0020002",
        answer: "distance of a mass from the center of gravity.",
      },
      {
        id: "FPP0020003",
        answer:
          "point on the longitudinal axis of an aeroplane or its extension from which the centers of gravity\nof all masses are referenced.",
      },
      {
        id: "FPP0020004",
        answer:
          "point through which the force of gravity is said to act on a mass.",
      },
    ],
    correct: "FPP0020001",
  },
  {
    id: "FPP0021",
    question:
      " The distance between the center of gravity and the datum is called... (1,00 P.)",
    answers: [
      {
        id: "FPP0021001",
        answer: "balance arm.",
      },
      {
        id: "FPP0021002",
        answer: "span width.",
      },
      {
        id: "FPP0021003",
        answer: "lever.",
      },
      {
        id: "FPP0021004",
        answer: "torque",
      },
    ],
    correct: "FPP0021001",
  },
  {
    id: "FPP0022",
    question:
      " The balance arm is the horizontal distance between... (1,00 P.)",
    answers: [
      {
        id: "FPP0022001",
        answer: "the front C.G. limit and the datum line.",
      },
      {
        id: "FPP0022002",
        answer: "the front C.G. limit and the rear C.G. limit.",
      },
      {
        id: "FPP0022003",
        answer: "the C.G. of a mass and the datum line.",
      },
      {
        id: "FPP0022004",
        answer: "the C.G. of a mass and the rear C.G. limit.",
      },
    ],
    correct: "FPP0022003",
  },
  {
    id: "FPP0023",
    question:
      " The required data for a mass and balance calculation including masses and balance arms can be found in the... (1,00 P.)",
    answers: [
      {
        id: "FPP0023001",
        answer:
          "performance section of the pilot's operating handbook of this particular aircraft.",
      },
      {
        id: "FPP0023002",
        answer: "documentation of the annual inspection.",
      },
      {
        id: "FPP0023003",
        answer:
          "mass and balance section of the pilot's operating handbook of this particular aircraft.",
      },
      {
        id: "FPP0023004",
        answer: "certificate of airworthiness.",
      },
    ],
    correct: "FPP0023003",
  },
  {
    id: "FPP0024",
    question:
      " When preparing to carry out the weighing procedure on an aircraft, which of the following is required? (1,00 P.)",
    answers: [
      {
        id: "FPP0024001",
        answer: "Remove the batteries",
      },
      {
        id: "FPP0024002",
        answer: "Remove service equipment",
      },
      {
        id: "FPP0024003",
        answer: "Drain all useable fuel",
      },
      {
        id: "FPP0024004",
        answer: "Drain all engine tank oil",
      },
    ],
    correct: "FPP0024003",
  },
  {
    id: "FPP0025",
    question:
      " Which section of the flight manual describes the basic empty mass of an aircraft? (1,00 P.)",
    answers: [
      {
        id: "FPP0025001",
        answer: "Weight and balance",
      },
      {
        id: "FPP0025002",
        answer: "Performance",
      },
      {
        id: "FPP0025003",
        answer: "Normal procedures",
      },
      {
        id: "FPP0025004",
        answer: "Limitations",
      },
    ],
    correct: "FPP0025001",
  },
  {
    id: "FPP0026",
    question:
      " The position of the center of gravity equals... See figure (PFP-052e) (1,00 P.) Siehe Anlage 1",
    answers: [
      {
        id: "FPP0026001",
        answer: "147.5 in.",
      },
      {
        id: "FPP0026002",
        answer: "137.5 in.",
      },
      {
        id: "FPP0026003",
        answer: "145.7 in.",
      },
      {
        id: "FPP0026004",
        answer: "142 in",
      },
    ],
    correct: "FPP0026004",
  },
  {
    id: "FPP0027",
    question: " What mass equals 102 litres of Avgas 100LL? (1,00 P.)",
    answers: [
      {
        id: "FPP0027001",
        answer: "74 lbs",
      },
      {
        id: "FPP0027002",
        answer: "74 kg",
      },
      {
        id: "FPP0027003",
        answer: "142 lbs",
      },
      {
        id: "FPP0027004",
        answer: "142 kg",
      },
    ],
    correct: "FPP0027002",
  },
  {
    id: "FPP0028",
    question:
      " Calculated take-off mass = 2300 lbs, calculated CG = 95.75 in, fuel burn = 170 lbs on station 87.00 in. Where is the CG situated after the landing? (1,00 P.)",
    answers: [
      {
        id: "FPP0028001",
        answer: "96.45 in",
      },
      {
        id: "FPP0028002",
        answer: "94.11 in",
      },
      {
        id: "FPP0028003",
        answer: "96.57 in",
      },
      {
        id: "FPP0028004",
        answer: "97.39 in",
      },
    ],
    correct: "FPP0028001",
  },
  {
    id: "FPP0029",
    question:
      " Given values: Calculated take-off mass = 746 kg calculated CG = 37.1 cm fuel burn = 30.5 l on station 45 cm. Where is the CG situated after the landing? (1,00 P.)",
    answers: [
      {
        id: "FPP0029001",
        answer: "36.9 cm",
      },
      {
        id: "FPP0029002",
        answer: "37.5 cm",
      },
      {
        id: "FPP0029003",
        answer: "36.3 cm",
      },
      {
        id: "FPP0029004",
        answer: "37.2 cm",
      },
    ],
    correct: "FPP0029001",
  },
  {
    id: "FPP0030",
    question:
      " Calculated take-off mass = 1082 kg, calculated CG = 0.254 m, fuel burn = 55 l on station 0.40 m. Where is the CG situated after the landing? (1,00 P.)",
    answers: [
      {
        id: "FPP0030001",
        answer: "24.8 cm",
      },
      {
        id: "FPP0030002",
        answer: "24.6 cm",
      },
      {
        id: "FPP0030003",
        answer: "25.4 cm",
      },
      {
        id: "FPP0030004",
        answer: "25.2 cm",
      },
    ],
    correct: "FPP0030001",
  },
  {
    id: "FPP0031",
    question:
      " The position of the center of gravity (including fuel) equals... See figure(PFP-053e) (1,00 P.) Siehe Anlage 2",
    answers: [
      {
        id: "FPP0031001",
        answer: "0.403 m.",
      },
      {
        id: "FPP0031002",
        answer: "0.401 m.",
      },
      {
        id: "FPP0031003",
        answer: "37.3 cm.",
      },
      {
        id: "FPP0031004",
        answer: "37.1 cm.",
      },
    ],
    correct: "FPP0031004",
  },
  {
    id: "FPP0032",
    question:
      " For the purpose of a flight preparation, the pilot calculates a total take-off mass of 750 kg and a total moment of 625 mmkg. Which cross marks the center of gravity (CG)? See annex (PFP-003) (1,00 P.) Siehe Anlage 3",
    answers: [
      {
        id: "FPP0032001",
        answer: "1",
      },
      {
        id: "FPP0032002",
        answer: "2",
      },
      {
        id: "FPP0032003",
        answer: "4",
      },
      {
        id: "FPP0032004",
        answer: "3",
      },
    ],
    correct: "FPP0032001",
  },
  {
    id: "FPP0033",
    question:
      " For the purpose of a flight preparation the pilot calculates a total take-off mass of 725 kg and a total moment of 650 mmkg. Which cross marks the center of gravity (CG)? See annex (PFP-004) (1,00 P.) Siehe Anlage 4",
    answers: [
      {
        id: "FPP0033001",
        answer: "2",
      },
      {
        id: "FPP0033002",
        answer: "1",
      },
      {
        id: "FPP0033003",
        answer: "4",
      },
      {
        id: "FPP0033004",
        answer: "3",
      },
    ],
    correct: "FPP0033004",
  },
  {
    id: "FPP0034",
    question:
      " For the purpose of a flight preparation the pilot calculates a total take-off mass of 775 kg and a total moment of 700 mmkg. Which cross marks the center of gravity (CG)? See annex (PFP-005) (1,00 P.) Siehe Anlage 5",
    answers: [
      {
        id: "FPP0034001",
        answer: "2",
      },
      {
        id: "FPP0034002",
        answer: "1",
      },
      {
        id: "FPP0034003",
        answer: "4",
      },
      {
        id: "FPP0034004",
        answer: "3",
      },
    ],
    correct: "FPP0034003",
  },
  {
    id: "FPP0035",
    question:
      " Which is the most recently determined empty mass and the associated center of gravity (CG) arm from the aircraft documentation? See annex (PFP-006) (1,00 P.) Siehe Anlage 6",
    answers: [
      {
        id: "FPP0035001",
        answer: "498 kg; 280.59 m",
      },
      {
        id: "FPP0035002",
        answer: "4 kg; 1.1 m",
      },
      {
        id: "FPP0035003",
        answer: "512 kg; 285.39 m",
      },
      {
        id: "FPP0035004",
        answer: "5 kg; 1.3 m",
      },
    ],
    correct: "FPP0035001",
  },
  {
    id: "FPP0036",
    question:
      " How does the aircraft configuration influence take-off performance while all other parameters remaining constant? See figure (PFP-007) (1,00 P.) Siehe Anlage 7",
    answers: [
      {
        id: "FPP0036001",
        answer: "Aircraft B has a higher flap setting than aircraft A",
      },
      {
        id: "FPP0036002",
        answer: "Aircraft A has a higher flap setting than aircraft B",
      },
      {
        id: "FPP0036003",
        answer: "Aircraft A has a higher tyre pressure than aircraft B",
      },
      {
        id: "FPP0036004",
        answer: "Aircraft B has a higher tyre pressure than aircraft A",
      },
    ],
    correct: "FPP0036002",
  },
  {
    id: "FPP0037",
    question:
      " How does aircraft flap configuration influence the take-off performance? (1,00 P.)",
    answers: [
      {
        id: "FPP0037001",
        answer:
          "A higher flap setting decreases ground roll and lift-off speed and increases climb performance",
      },
      {
        id: "FPP0037002",
        answer:
          "A higher flap setting decreases ground roll and increases lift-off speed and climb performance",
      },
      {
        id: "FPP0037003",
        answer:
          "A higher flap setting increases ground roll, lift-off speed, and climb performance",
      },
      {
        id: "FPP0037004",
        answer:
          "A higher flap setting decreases ground roll and lift-off speed, but also climb performance",
      },
    ],
    correct: "FPP0037004",
  },
  {
    id: "FPP0038",
    question: " How does wind affect the take-off performance? (1,00 P.)",
    answers: [
      {
        id: "FPP0038001",
        answer:
          "Tailwind reduces the relative wind on the airfoil. The take-off distance will increase",
      },
      {
        id: "FPP0038002",
        answer:
          "Headwind imposes an increased drag on the aircraft. The take-off distance will increase",
      },
      {
        id: "FPP0038003",
        answer:
          "Tailwind aids the aircraft in overcoming the initial drag at the commencement of the take-off roll.\nThe take-off distance will decrease",
      },
      {
        id: "FPP0038004",
        answer:
          "Headwind causes an increased airflow around the wing. The take-off distance will increase",
      },
    ],
    correct: "FPP0038001",
  },
  {
    id: "FPP0039",
    question:
      " It is possible that the surface wind speed at an airport is reduced due to friction. When a surface area with a minor tailwind condition is left during the initial climb, the pilot might expect... (1,00 P.)",
    answers: [
      {
        id: "FPP0039001",
        answer:
          "a deacrease in airspeed and climb performance due to decreasing tailwind.",
      },
      {
        id: "FPP0039002",
        answer:
          "a decrease in airspeed and rate of climb due to increasing tailwind.",
      },
      {
        id: "FPP0039003",
        answer:
          "an increase in airspeed and rate of climb due to increasing tailwind.",
      },
      {
        id: "FPP0039004",
        answer:
          "an increase in airspeed and rate of climb due to decreasing tailwind.",
      },
    ],
    correct: "FPP0039002",
  },
  {
    id: "FPP0040",
    question: " Which factor shortens landing distance? (1,00 P.)",
    answers: [
      {
        id: "FPP0040001",
        answer: "High pressure altitude",
      },
      {
        id: "FPP0040002",
        answer: "Strong head wind",
      },
      {
        id: "FPP0040003",
        answer: "High density altitude",
      },
      {
        id: "FPP0040004",
        answer: "Heavy rain",
      },
    ],
    correct: "FPP0040002",
  },
  {
    id: "FPP0041",
    question:
      " Unless the aircraft is equipped and certified accordingly... (1,00 P.)",
    answers: [
      {
        id: "FPP0041001",
        answer:
          "flight into known or forecast icing conditions is prohibited. Should the aircraft enter an area of\nicing conditions inadvertantly, it should be left without delay.",
      },
      {
        id: "FPP0041002",
        answer:
          "flight into forecast icing conditions is prohibited. Should the aircraft enter an area of icing\nconditions inadvertantly, the flight may be continued as long as visual meteorological conditions\nare maintained.",
      },
      {
        id: "FPP0041003",
        answer:
          "flight into known or forecast icing conditions is only allowed as long as it is ensured that the\naircraft can still be operated without performance degradation.",
      },
      {
        id: "FPP0041004",
        answer: "flight into areas of precipitation is prohibited.",
      },
    ],
    correct: "FPP0041001",
  },
  {
    id: "FPP0042",
    question: " The speed Vx means... (1,00 P.)",
    answers: [
      {
        id: "FPP0042001",
        answer: "that a given altitude is reached within minimum distance.",
      },
      {
        id: "FPP0042002",
        answer: "maximum altitude gain per 10 % power.",
      },
      {
        id: "FPP0042003",
        answer:
          "that a given altitude is reached with minimum fuel consumption.",
      },
      {
        id: "FPP0042004",
        answer: "that a given altitude is reached within minimum flight time.",
      },
    ],
    correct: "FPP0042001",
  },
  {
    id: "FPP0043",
    question: " The angle of descent is defined as... (1,00 P.)",
    answers: [
      {
        id: "FPP0043001",
        answer:
          "the angle between a horizontal plane and the actual flight path, expressed in degrees [°].",
      },
      {
        id: "FPP0043002",
        answer:
          "the angle between a horizontal plane and the actual flight path, expressed in percent [%].",
      },
      {
        id: "FPP0043003",
        answer:
          "the ratio between the change in height and the horizontal distance distance travelled within the\nsame time, expressed in degrees [°].",
      },
      {
        id: "FPP0043004",
        answer:
          "the ratio between the change in height and the horizontal distance travelled within the same\ntime, expressed in percent [%].",
      },
    ],
    correct: "FPP0043001",
  },
  {
    id: "FPP0044",
    question: ' The term "steady flight" is defined as... (1,00 P.)',
    answers: [
      {
        id: "FPP0044001",
        answer:
          "flight in smooth air without turbulence and a perfectly trimmed aircraft.",
      },
      {
        id: "FPP0044002",
        answer:
          "unaccelerated flight. The four forces thrust, drag, lift, and weight are in equilibrium.",
      },
      {
        id: "FPP0044003",
        answer:
          "climb or descent with a constant climb or descent rate in calm weather conditions.",
      },
      {
        id: "FPP0044004",
        answer: "flight with a steady power setting without changing course.",
      },
    ],
    correct: "FPP0044002",
  },
  {
    id: "FPP0045",
    question: " The speed Vy is defined as... (1,00 P.)",
    answers: [
      {
        id: "FPP0045001",
        answer: "best angle of climb.",
      },
      {
        id: "FPP0045002",
        answer: "best distance of climb.",
      },
      {
        id: "FPP0045003",
        answer: "best speed of climb.",
      },
      {
        id: "FPP0045004",
        answer: "best rate of climb.",
      },
    ],
    correct: "FPP0045004",
  },
  {
    id: "FPP0046",
    question: " The speed VFE is defined as... (1,00 P.)",
    answers: [
      {
        id: "FPP0046001",
        answer: "maximum flap extended speed.",
      },
      {
        id: "FPP0046002",
        answer:
          "stalling or minimum steady flight speed with the flaps extended.",
      },
      {
        id: "FPP0046003",
        answer:
          "stalling or minimum steady flight speed with the flaps retracted.",
      },
      {
        id: "FPP0046004",
        answer: "maximum landing gear extended speed",
      },
    ],
    correct: "FPP0046001",
  },
  {
    id: "FPP0047",
    question: " The speed VS0 is defined as... (1,00 P.)",
    answers: [
      {
        id: "FPP0047001",
        answer: "maximum landing gear extended speed.",
      },
      {
        id: "FPP0047002",
        answer:
          "stalling speed or minimum steady flight speed obtained in a specific configuration.",
      },
      {
        id: "FPP0047003",
        answer: "never-exceed speed.",
      },
      {
        id: "FPP0047004",
        answer:
          "stalling speed or minimum steady flight speed in landing configuration.",
      },
    ],
    correct: "FPP0047004",
  },
  {
    id: "FPP0048",
    question:
      " The beginning of the green arc (2) indicates which airspeed? See figure (PFP-008) (1,00 P.) Siehe Anlage 8",
    answers: [
      {
        id: "FPP0048001",
        answer: "VNO: Maximum speed for normal operations",
      },
      {
        id: "FPP0048002",
        answer: "VS1: Stall speed with flaps up",
      },
      {
        id: "FPP0048003",
        answer: "VS0: Stall speed in landing configuration",
      },
      {
        id: "FPP0048004",
        answer: "VFE: Maximum flap extended speed",
      },
    ],
    correct: "FPP0048002",
  },
  {
    id: "FPP0049",
    question:
      " The end of the green arc (4) indicates which airspeed? See figure (PFP-008) (1,00 P.) Siehe Anlage 8",
    answers: [
      {
        id: "FPP0049001",
        answer: "VNE: Never-exceed speed",
      },
      {
        id: "FPP0049002",
        answer: "VS1: Stall speed with flaps up",
      },
      {
        id: "FPP0049003",
        answer: "VFE: Maximum flap extended speed",
      },
      {
        id: "FPP0049004",
        answer: "VNO: Maximum speed for normal operations",
      },
    ],
    correct: "FPP0049004",
  },
  {
    id: "FPP0050",
    question:
      " The red marking at the end of the yellow arc (5) indicates which airspeed? See figure (PFP-008) (1,00 P.) Siehe Anlage 8",
    answers: [
      {
        id: "FPP0050001",
        answer: "VNO: Maximum speed for normal operations",
      },
      {
        id: "FPP0050002",
        answer: "VFE: Maximum flap extended speed",
      },
      {
        id: "FPP0050003",
        answer: "VS1: Stall speed with flaps up",
      },
      {
        id: "FPP0050004",
        answer: "VNE: Never-exceed speed",
      },
    ],
    correct: "FPP0050004",
  },
  {
    id: "FPP0051",
    question:
      " Which climb speed may be used to optimize the rate of climb (e.g. to reach a desired altitude within minimum time)? (1,00 P.)",
    answers: [
      {
        id: "FPP0051001",
        answer: "Vy, the best rate of climb speed",
      },
      {
        id: "FPP0051002",
        answer: "Vx, the best angle of climb speed",
      },
      {
        id: "FPP0051003",
        answer: "Vx, the best rate of climb speed",
      },
      {
        id: "FPP0051004",
        answer: "Vy, the best angle of climb speed",
      },
    ],
    correct: "FPP0051001",
  },
  {
    id: "FPP0052",
    question:
      " For a take-off from runway 22 and a reported wind of 250°/10 kt, the longitudinal wind component equals... (1,00 P.)",
    answers: [
      {
        id: "FPP0052001",
        answer: "9 kt headwind.",
      },
      {
        id: "FPP0052002",
        answer: "9 kt tailwind.",
      },
      {
        id: "FPP0052003",
        answer: "5 kt headwind.",
      },
      {
        id: "FPP0052004",
        answer: "5 kt tailwind.",
      },
    ],
    correct: "FPP0052001",
  },
  {
    id: "FPP0053",
    question:
      " Given the following conditions, the take-off distance equals... Outside air temperature: -20° C Pressure Altitude: 5000 ft Aeroplane mass: 750 kg Headwind: 10 kt See annex (PFP-009) (1,00 P.) Siehe Anlage 9",
    answers: [
      {
        id: "FPP0053001",
        answer: "450 m.",
      },
      {
        id: "FPP0053002",
        answer: "410 m.",
      },
      {
        id: "FPP0053003",
        answer: "310 m.",
      },
      {
        id: "FPP0053004",
        answer: "380 m.",
      },
    ],
    correct: "FPP0053004",
  },
  {
    id: "FPP0054",
    question:
      " A pilot wants to take off on runway 36, the reported wind is 240 degrees, 12 knots. What is the value of the wind components acting on the aircraft on take-off and landing? (1,00 P.)",
    answers: [
      {
        id: "FPP0054001",
        answer: "Crosswind from the right 10.4 kt.\nTailwind 6 kt.",
      },
      {
        id: "FPP0054002",
        answer: "Crosswind from the left 10.4 kt.\nTailwind 6 kt.",
      },
      {
        id: "FPP0054003",
        answer: "Crosswind from the left 6 kt.\nTailwind 10.4 kt.",
      },
      {
        id: "FPP0054004",
        answer: "Crosswind from the right 6 kt.\nHeadwind 10.4 kt",
      },
    ],
    correct: "FPP0054002",
  },
  {
    id: "FPP0055",
    question:
      " What is the take-off distance at 750 kg take-off mass, standard (ISA) conditions at an elevation of 4000 ft with 5 kt tailwind? See annex (PFP-009) (1,00 P.) Siehe Anlage 9",
    answers: [
      {
        id: "FPP0055001",
        answer: "900 m",
      },
      {
        id: "FPP0055002",
        answer: "320 m",
      },
      {
        id: "FPP0055003",
        answer: "480 m",
      },
      {
        id: "FPP0055004",
        answer: "630 m",
      },
    ],
    correct: "FPP0055001",
  },
  {
    id: "FPP0056",
    question:
      " What is the take-off distance at 705 kg take-off mass, OAT 20° C, QNH 1013 hPa at an elevation of 3500 ft with 5 kt tailwind? See annex (PFP-009) (1,00 P.) Siehe Anlage 9",
    answers: [
      {
        id: "FPP0056001",
        answer: "720 m",
      },
      {
        id: "FPP0056002",
        answer: "820 m",
      },
      {
        id: "FPP0056003",
        answer: "790 m",
      },
      {
        id: "FPP0056004",
        answer: "880 m",
      },
    ],
    correct: "FPP0056004",
  },
  {
    id: "FPP0057",
    question:
      " A pilot wants to take off on runway 36, the reported wind is 240 degrees 12 knots. What are the wind components acting on the aircraft on take-off and landing? (1,00 P.)",
    answers: [
      {
        id: "FPP0057001",
        answer: "Crosswind from the left 10.4 kt.\nTailwind 6 kt.",
      },
      {
        id: "FPP0057002",
        answer: "Crosswind from the left 6 kt.\nTailwind 10.4 kt.",
      },
      {
        id: "FPP0057003",
        answer: "Crosswind from the right 6 kt.\nHeadwind 10.4 kt.",
      },
      {
        id: "FPP0057004",
        answer: "Crosswind from the right 10.4 kt.\nTailwind 6 kt.",
      },
    ],
    correct: "FPP0057001",
  },
  {
    id: "FPP0058",
    question:
      " Given the following conditions, the fuel consumption equals... Pressure altitude: 2000 ft Temperature: 31° C RPM: 2400 See annex (PFP-012) (1,00 P.) Siehe Anlage 10",
    answers: [
      {
        id: "FPP0058001",
        answer: "21.7 l/h.",
      },
      {
        id: "FPP0058002",
        answer: "22.8 l/h.",
      },
      {
        id: "FPP0058003",
        answer: "19.1 l/h.",
      },
      {
        id: "FPP0058004",
        answer: "19.5 l/h",
      },
    ],
    correct: "FPP0058004",
  },
  {
    id: "FPP0059",
    question:
      " Given the following conditions, the climb speed equals... Outside air temperature: -20° C Pressure altitude: 10000 ft See annex (PFP-011) (1,00 P.) Siehe Anlage 11",
    answers: [
      {
        id: "FPP0059001",
        answer: "200 ft/min.",
      },
      {
        id: "FPP0059002",
        answer: "390 ft/min.",
      },
      {
        id: "FPP0059003",
        answer: "350 ft/min.",
      },
      {
        id: "FPP0059004",
        answer: "450 ft/min.",
      },
    ],
    correct: "FPP0059002",
  },
  {
    id: "FPP0060",
    question:
      " What range can be achieved at the following conditions? Outside air temperature: 6° C Pressure Altitude: 6000 ft Power: 65 % See annex (PFP-013) (1,00 P.) Siehe Anlage 12",
    answers: [
      {
        id: "FPP0060001",
        answer: "457 NM",
      },
      {
        id: "FPP0060002",
        answer: "444 NM",
      },
      {
        id: "FPP0060003",
        answer: "503 NM",
      },
      {
        id: "FPP0060004",
        answer: "482 NM",
      },
    ],
    correct: "FPP0060004",
  },
  {
    id: "FPP0061",
    question:
      " Given the following information, what range can be achieved? Outside air temperature: 22° C Pressure altitude: 2000 ft Power: 55 % See annex (PFP-013) (1,00 P.) Siehe Anlage 12",
    answers: [
      {
        id: "FPP0061001",
        answer: "550 NM",
      },
      {
        id: "FPP0061002",
        answer: "480 NM",
      },
      {
        id: "FPP0061003",
        answer: "450 NM",
      },
      {
        id: "FPP0061004",
        answer: "500 NM",
      },
    ],
    correct: "FPP0061004",
  },
  {
    id: "FPP0062",
    question:
      " Given the following conditions, the TAS equals... Outside air temperature: 10° C Pressure altitude: 6000 ft Power: 65 % See annex (PFP-014) (1,00 P.) Siehe Anlage 13",
    answers: [
      {
        id: "FPP0062001",
        answer: "92 kt.",
      },
      {
        id: "FPP0062002",
        answer: "96 kt.",
      },
      {
        id: "FPP0062003",
        answer: "88 kt.",
      },
      {
        id: "FPP0062004",
        answer: "100 kt.",
      },
    ],
    correct: "FPP0062001",
  },
  {
    id: "FPP0063",
    question:
      " Given the following conditions, the TAS equals... Outside air temperature: -2° C Pressure altitude: 8000 ft Power: 75 % See annex (PFP-014) (1,00 P.) Siehe Anlage 13",
    answers: [
      {
        id: "FPP0063001",
        answer: "95 kt.",
      },
      {
        id: "FPP0063002",
        answer: "104 kt.",
      },
      {
        id: "FPP0063003",
        answer: "110 kt.",
      },
      {
        id: "FPP0063004",
        answer: "100 kt.",
      },
    ],
    correct: "FPP0063002",
  },
  {
    id: "FPP0064",
    question:
      " Which maximum rate of climb can the aircraft reach at 9000 ft pressure altitude and OAT 12° C? See annex (PFP-011) (1,00 P.) Siehe Anlage 11",
    answers: [
      {
        id: "FPP0064001",
        answer: "300 ft/min",
      },
      {
        id: "FPP0064002",
        answer: "250 ft/min",
      },
      {
        id: "FPP0064003",
        answer: "350 ft/min",
      },
      {
        id: "FPP0064004",
        answer: "200 ft/min",
      },
    ],
    correct: "FPP0064004",
  },
  {
    id: "FPP0065",
    question:
      " Which is the maximum rate of climb for the aircraft at 6500 ft pressure altitude and an OAT of 0° C? See annex (PFP-011) (1,00 P.) Siehe Anlage 11",
    answers: [
      {
        id: "FPP0065001",
        answer: "520 ft / min",
      },
      {
        id: "FPP0065002",
        answer: "800 ft / min",
      },
      {
        id: "FPP0065003",
        answer: "480 ft / min",
      },
      {
        id: "FPP0065004",
        answer: "400 ft / min",
      },
    ],
    correct: "FPP0065003",
  },
  {
    id: "FPP0066",
    question:
      " What is the true airspeed (TAS) [kt] and fuel consumption [l/h] for cruise flight with 60 % power in flight level 60 under the following conditions? Temperature: ISA - 20° C QNH: 980 hPa See annex (PFP-012) (2,00 P.) Siehe Anlage 10",
    answers: [
      {
        id: "FPP0066001",
        answer: "95 kt.\n19.6 l/h.",
      },
      {
        id: "FPP0066002",
        answer: "95,75 kt.\n19.8 l/h.",
      },
      {
        id: "FPP0066003",
        answer: "110 kt.\n25.1 l/h.",
      },
      {
        id: "FPP0066004",
        answer: "96 kt.\n19.1 l/h.",
      },
    ],
    correct: "FPP0066001",
  },
  {
    id: "FPP0067",
    question:
      " What is the true airspeed (TAS) [kt] and fuel consumption [l/h] for cruise flight with 70 % power in flight level 60 under the following conditions? Temperature: ISA - 20° C QNH: 980 hPa See annex (PFP-012) (2,00 P.) Siehe Anlage 10",
    answers: [
      {
        id: "FPP0067001",
        answer: "110 kt.\n23.9 l/h.",
      },
      {
        id: "FPP0067002",
        answer: "95 kt.\n19.6 l/h.",
      },
      {
        id: "FPP0067003",
        answer: "100 kt.\n19.3 l/h.",
      },
      {
        id: "FPP0067004",
        answer: "105 kt.\n21.5 l/h",
      },
    ],
    correct: "FPP0067001",
  },
  {
    id: "FPP0068",
    question:
      " What is the fuel flow and the true airspeed for cruise flight with 60 % power in flight level 85 at an OAT of -25° C? See annex (PFP-014) (1,00 P.) Siehe Anlage 13",
    answers: [
      {
        id: "FPP0068001",
        answer: "Fuel flow: 17.5 l.\nTAS: 83 kt.",
      },
      {
        id: "FPP0068002",
        answer: "Fuel flow: 17 l.\nTAS: 81 kt.",
      },
      {
        id: "FPP0068003",
        answer: "Fuel flow: 20 l.\nTAS: 89 kt.",
      },
      {
        id: "FPP0068004",
        answer: "Fuel flow: 18.5 l.\nTAS: 85 kt.",
      },
    ],
    correct: "FPP0068004",
  },
  {
    id: "FPP0069",
    question:
      " At which airspeed do you climb to flight level (FL) 75 after a departure from an airfield which is located at a pressure altitude of 3000 ft with an initial mass of 3000 lbs? OAT at airfield: 25° C OAT in FL 75: 0° C See annex (PFP-023) (1,00 P.) Siehe Anlage 14",
    answers: [
      {
        id: "FPP0069001",
        answer: "100 kt",
      },
      {
        id: "FPP0069002",
        answer: "90 kt",
      },
      {
        id: "FPP0069003",
        answer: "110 kt",
      },
      {
        id: "FPP0069004",
        answer: "120 kt",
      },
    ],
    correct: "FPP0069003",
  },
  {
    id: "FPP0070",
    question:
      " What is the required fuel to climb from FL 65 to FL 95 under the following conditions? Aircraft mass: 3000 lb. OAT in FL 65: -5° C OAT in FL 95: -15° C See annex (PFP-023) (1,00 P.) Siehe Anlage 14",
    answers: [
      {
        id: "FPP0070001",
        answer: "1 GAL",
      },
      {
        id: "FPP0070002",
        answer: "3 GAL",
      },
      {
        id: "FPP0070003",
        answer: "2 GAL",
      },
      {
        id: "FPP0070004",
        answer: "6 GAL",
      },
    ],
    correct: "FPP0070001",
  },
  {
    id: "FPP0071",
    question:
      " What is the required distance to climb from FL 65 to FL 95 under the following conditions: Aircraft mass: 3000 lb. OAT in FL 65: -5° C OAT in FL 95: -15° C See annex (PFP-023) (1,00 P.) Siehe Anlage 14",
    answers: [
      {
        id: "FPP0071001",
        answer: "3 NM",
      },
      {
        id: "FPP0071002",
        answer: "16 NM",
      },
      {
        id: "FPP0071003",
        answer: "6 NM",
      },
      {
        id: "FPP0071004",
        answer: "10 NM",
      },
    ],
    correct: "FPP0071003",
  },
  {
    id: "FPP0072",
    question:
      " What is the required distance to climb to flight level (FL) 75 after a departure from an airfield which is located at a pressure altitude of 3000 ft with an initial mass of 3000 lbs? OAT at airfield: 25° C OAT in FL 75: 0° C See annex (PFP-023) (1,00 P.) Siehe Anlage 14",
    answers: [
      {
        id: "FPP0072001",
        answer: "10 NM",
      },
      {
        id: "FPP0072002",
        answer: "4 NM",
      },
      {
        id: "FPP0072003",
        answer: "7 NM",
      },
      {
        id: "FPP0072004",
        answer: "6 NM",
      },
    ],
    correct: "FPP0072003",
  },
  {
    id: "FPP0073",
    question:
      ' The term "maximum elevation figure" (MEF) is defined as... (1,00 P.)',
    answers: [
      {
        id: "FPP0073001",
        answer:
          "the highest elevation within an area covering 1 degree of latitude and 1 degree of longitude plus\na safety margin, rounded to the next lower 100 ft.",
      },
      {
        id: "FPP0073002",
        answer:
          "the highest elevation within an area covering 30 minutes of latitude and 30 minutes of longitude\nplus a safety margin of 1000 ft (305 m), rounded to the next higher 100 ft.",
      },
      {
        id: "FPP0073003",
        answer:
          "the highest elevation within an area covering 30 minutes of latitude and 30 minutes of longitude\nplus a safety margin, rounded to the next higher 100 ft.",
      },
      {
        id: "FPP0073004",
        answer:
          "the highest elevation within an area covering 30 minutes of latitude and 30 minutes of longitude.",
      },
    ],
    correct: "FPP0073003",
  },
  {
    id: "FPP0074",
    question:
      ' What is the purpose of "interception lines" in visual navigation? (1,00 P.)',
    answers: [
      {
        id: "FPP0074001",
        answer:
          "They help to continue the flight when flight visibility drops below VFR minima",
      },
      {
        id: "FPP0074002",
        answer:
          "To visualize the range limitation from the departure aerodrome",
      },
      {
        id: "FPP0074003",
        answer:
          "They are used as easily recognizable guidance upon a possible loss of orientation",
      },
      {
        id: "FPP0074004",
        answer: "To mark the next available en-route airport during the flight",
      },
    ],
    correct: "FPP0074003",
  },
  {
    id: "FPP0075",
    question: " The VFR semicircular rules are based on the... (1,00 P.)",
    answers: [
      {
        id: "FPP0075001",
        answer: "magnetic course (MC).",
      },
      {
        id: "FPP0075002",
        answer: "true course (TC).",
      },
      {
        id: "FPP0075003",
        answer: "magnetic heading (MH).",
      },
      {
        id: "FPP0075004",
        answer: "true heading (TH).",
      },
    ],
    correct: "FPP0075001",
  },
  {
    id: "FPP0076",
    question:
      " What is the lowest possible VFR flight level if a true course of 181° is selected and a variation of 3° east exists? (1,00 P.)",
    answers: [
      {
        id: "FPP0076001",
        answer: "FL 060",
      },
      {
        id: "FPP0076002",
        answer: "FL 065",
      },
      {
        id: "FPP0076003",
        answer: "FL 055",
      },
      {
        id: "FPP0076004",
        answer: "FL 050",
      },
    ],
    correct: "FPP0076003",
  },
  {
    id: "FPP0077",
    question:
      " The upper limit of LO R 16 equals... See annex (PFP-056) (1,00 P.) Siehe Anlage 15",
    answers: [
      {
        id: "FPP0077001",
        answer: "FL150.",
      },
      {
        id: "FPP0077002",
        answer: "1.500 ft GND.",
      },
      {
        id: "FPP0077003",
        answer: "1 500 m MSL.",
      },
      {
        id: "FPP0077004",
        answer: "1 500 ft MSL",
      },
    ],
    correct: "FPP0077004",
  },
  {
    id: "FPP0078",
    question:
      " The upper limit of LO R 4 equals... See annex (PFP-030) (1,00 P.) Siehe Anlage 16",
    answers: [
      {
        id: "FPP0078001",
        answer: "1.500 ft MSL.",
      },
      {
        id: "FPP0078002",
        answer: "4.500 ft AGL.",
      },
      {
        id: "FPP0078003",
        answer: "1.500 ft AGL.",
      },
      {
        id: "FPP0078004",
        answer: "4.500 ft MSL.",
      },
    ],
    correct: "FPP0078004",
  },
  {
    id: "FPP0079",
    question:
      " How much taxi fuel must be consumed before take-off to reduce the aircraft mass to the maximum take-off mass? Maximum ramp mass (MRM): 1150 kg Actual ramp mass: 1148 kg Maximum take-off mass (MTOM): 1145 kg (1,00 P.)",
    answers: [
      {
        id: "FPP0079001",
        answer: "4 L",
      },
      {
        id: "FPP0079002",
        answer: "5 L",
      },
      {
        id: "FPP0079003",
        answer: "2 L",
      },
      {
        id: "FPP0079004",
        answer: "3 L",
      },
    ],
    correct: "FPP0079001",
  },
  {
    id: "FPP0080",
    question:
      " Considering the following fuel data, how much trip fuel is required? Fuel for start-up and taxi: 5 L Fuel for take-off and climb: 12 L Fuel for cruise flight: 25 L Fuel for descent, approach and landing: 7 L Fuel for taxi and parking: 3 L Fuel to alternate: 13 L Final reserve fuel: 10 L (1,00 P.)",
    answers: [
      {
        id: "FPP0080001",
        answer: "44 L",
      },
      {
        id: "FPP0080002",
        answer: "75 L",
      },
      {
        id: "FPP0080003",
        answer: "49 L",
      },
      {
        id: "FPP0080004",
        answer: "52 L",
      },
    ],
    correct: "FPP0080001",
  },
  {
    id: "FPP0081",
    question:
      " Up to which altitude is an overflight prohibited according to the NOTAM? See figure (PFP-024) (1,00 P.) Siehe Anlage 17",
    answers: [
      {
        id: "FPP0081001",
        answer: "Altitude 9500 ft MSL",
      },
      {
        id: "FPP0081002",
        answer: "Flight Level 95",
      },
      {
        id: "FPP0081003",
        answer: "Height 9500 ft",
      },
      {
        id: "FPP0081004",
        answer: "Altitude 9500 m MSL",
      },
    ],
    correct: "FPP0081001",
  },
  {
    id: "FPP0082",
    question:
      " On a VFR-fligth, before reaching a compulsatory reporting point, the received ATIS states 4000m visibility. What is nessessary to enter the CTR? (1,00 P.)",
    answers: [
      {
        id: "FPP0082001",
        answer: "A Special VFR clearance.",
      },
      {
        id: "FPP0082002",
        answer: "A visual IFR clearance.",
      },
      {
        id: "FPP0082003",
        answer: "A Minimum VFR clearance.",
      },
      {
        id: "FPP0082004",
        answer: "A Controlled VFR clearance.",
      },
    ],
    correct: "FPP0082001",
  },
  {
    id: "FPP0083",
    question:
      " The EOBT (estimated off-block time) is specified in the ATS flight plan as... (1,00 P.)",
    answers: [
      {
        id: "FPP0083001",
        answer: "Coordinated Universal Time (UTC).",
      },
      {
        id: "FPP0083002",
        answer: "Central European Time (CET).",
      },
      {
        id: "FPP0083003",
        answer: "Standard Time (ST).",
      },
      {
        id: "FPP0083004",
        answer: "Local Mean Time (LMT).",
      },
    ],
    correct: "FPP0083001",
  },
  {
    id: "FPP0084",
    question:
      " What is the nature of the flight shown in the given ATC flight plan? See annex (PFP-051a) (1,00 P.) Siehe Anlage 18",
    answers: [
      {
        id: "FPP0084001",
        answer: "Flight under instrument flight rules.",
      },
      {
        id: "FPP0084002",
        answer: "Traffic pattern under visual flight rules.",
      },
      {
        id: "FPP0084003",
        answer: "Border crossing flight.",
      },
      {
        id: "FPP0084004",
        answer: "Night flight under visual flight rules",
      },
    ],
    correct: "FPP0084004",
  },
  {
    id: "FPP0085",
    question:
      " The specified speed in the ATS flight plan equals: See annex (PFP-051) (1,00 P.) Siehe Anlage 19",
    answers: [
      {
        id: "FPP0085001",
        answer: "100 kt.",
      },
      {
        id: "FPP0085002",
        answer: "100 m/h.",
      },
      {
        id: "FPP0085003",
        answer: "1000 kt.",
      },
      {
        id: "FPP0085004",
        answer: "100 km/h.",
      },
    ],
    correct: "FPP0085001",
  },
  {
    id: "FPP0086",
    question: " What must be considered for cross-border flights? (1,00 P.)",
    answers: [
      {
        id: "FPP0086001",
        answer: "Requires flight plans",
      },
      {
        id: "FPP0086002",
        answer: "Regular location messages",
      },
      {
        id: "FPP0086003",
        answer: "Approved exceptions",
      },
      {
        id: "FPP0086004",
        answer: "Transmission of hazard reports",
      },
    ],
    correct: "FPP0086001",
  },
  {
    id: "FPP0087",
    question:
      " During a flight, a flight plan can be filed at the... (1,00 P.)",
    answers: [
      {
        id: "FPP0087001",
        answer: "Flight Information Service (FIS).",
      },
      {
        id: "FPP0087002",
        answer: "Aeronautical Information Service (AIS).",
      },
      {
        id: "FPP0087003",
        answer: "Search and Rescue Service (SAR).",
      },
      {
        id: "FPP0087004",
        answer: "next airport operator en-route.",
      },
    ],
    correct: "FPP0087001",
  },
  {
    id: "FPP0088",
    question:
      " In comparison to the true airspeed in still air conditions, the TAS in a strong tailwind will be... (1,00 P.)",
    answers: [
      {
        id: "FPP0088001",
        answer: "slightly lower for maximum range.",
      },
      {
        id: "FPP0088002",
        answer: "the same for maximum range.",
      },
      {
        id: "FPP0088003",
        answer: "slightly higher for maximum endurance.",
      },
      {
        id: "FPP0088004",
        answer: "significantly lower for maximum endurance.",
      },
    ],
    correct: "FPP0088001",
  },
  {
    id: "FPP0089",
    question:
      " What happens to the true airspeed at a constant indicated airspeed during a climb? (1,00 P.)",
    answers: [
      {
        id: "FPP0089001",
        answer: "It decreases",
      },
      {
        id: "FPP0089002",
        answer: "It remains constant above 5000 ft",
      },
      {
        id: "FPP0089003",
        answer: "It remains constant below 5000 ft",
      },
      {
        id: "FPP0089004",
        answer: "It increases",
      },
    ],
    correct: "FPP0089004",
  },
  {
    id: "FPP0090",
    question:
      " Given the following data: Take-Off fuel = 200 lbs Alternate fuel = 40 lbs Final reserve fuel = 30 lbs After 25 minutes the remaining fuel is 120 lbs. Assuming that fuel flow will remain unchanged, the remaining time to the destination should not exceed: (2,00 P.)",
    answers: [
      {
        id: "FPP0090001",
        answer: "59.4 min",
      },
      {
        id: "FPP0090002",
        answer: "15.6 min",
      },
      {
        id: "FPP0090003",
        answer: "37.5 min",
      },
      {
        id: "FPP0090004",
        answer: "20.0 min",
      },
    ],
    correct: "FPP0090002",
  },
  {
    id: "FPP0091",
    question:
      " Given the following data for a VFR flight: Take-off fuel: 180 kg including reserve fuel, which is 30% of take off fuel. After half of the distance the remaining fuel is 100 kg. Assume that cruise conditions will remain unchanged. Determine the remaining fuel at the destination: (2,00 P.)",
    answers: [
      {
        id: "FPP0091001",
        answer: "10 kg",
      },
      {
        id: "FPP0091002",
        answer: "20 kg",
      },
      {
        id: "FPP0091003",
        answer: "40 kg",
      },
      {
        id: "FPP0091004",
        answer: "80 kg",
      },
    ],
    correct: "FPP0091002",
  },
  {
    id: "FPP0092",
    question:
      " During a VFR flight the remaining usable fuel at a checkpoint is 80 USG. Reserve fuel is 20 USG, remaining flight time according to flight plan is 2h 20min. What is the highest acceptable fuel flow (FF) for the rest of the trip? (2,00 P.)",
    answers: [
      {
        id: "FPP0092001",
        answer: "FF = 34.3 USG/h",
      },
      {
        id: "FPP0092002",
        answer: "FF = 25.7 USG/h",
      },
      {
        id: "FPP0092003",
        answer: "FF = 8.6 USG/h",
      },
      {
        id: "FPP0092004",
        answer: "FF = 42.9 USG/h",
      },
    ],
    correct: "FPP0092002",
  },
  {
    id: "FPP0093",
    question:
      " (For this questions, use attachment or CAP697 SEP1 Fig. 2.2 Table 2.2.3) Planning a flight from EDWF (Leer Papenburg) to EDWH (Oldenburg Hatten), the following conditions apply: Cruise level = FL 75 Temperature = ISA Cruise weight = 3400 lbs Power setting = 23.0 in. HG @ 2300 RPM Determine True Airspeed (TAS) and Fuel Flow (FF): (2,00 P.) Siehe Anlage 20",
    answers: [
      {
        id: "FPP0093001",
        answer: "TAS = 145 kt\nFF = 71.1 GPH",
      },
      {
        id: "FPP0093002",
        answer: "TAS = 160 kt\nFF = 11.9 GPH",
      },
      {
        id: "FPP0093003",
        answer: "TAS = 145 kt\nFF = 11.9 GPH",
      },
      {
        id: "FPP0093004",
        answer: "TAS = 160 kt\nFF = 12.3 GPH",
      },
    ],
    correct: "FPP0093002",
  },
  {
    id: "FPP0094",
    question:
      " (For this questions, use attachment or CAP697 SEP1 Fig. 2.2 Table 2.2.3) Planning a flight from EDWH (Oldenburg Hatten) to EDWF (Leer Papenburg), the following conditions apply: Cruise level = FL 65 Temperature = ISA+20 Cruise weight = 3400 lbs Power setting = 23.0 in. HG @ 2300 RPM What Indicated Airspeed (IAS) and Fuel Flow (FF) can be expected? (2,00 P.) Siehe Anlage 20",
    answers: [
      {
        id: "FPP0094001",
        answer: "IAS = 158kt\nFF = 11.5 GPH",
      },
      {
        id: "FPP0094002",
        answer: "IAS = 145 kt\nFF = 11.9 GPH",
      },
      {
        id: "FPP0094003",
        answer: "IAS = 150 kt\nFF = 12.3 GPH",
      },
      {
        id: "FPP0094004",
        answer: "IAS = 142 kt\nFF = 11.5 GPH",
      },
    ],
    correct: "FPP0094004",
  },
  {
    id: "FPP0095",
    question:
      ' (For this questions use attachment or CAP697 SEP1 Fig. 2.2 Table 2.2.3) For planning a VFR flight, the following data are given: Flight time with planning "overhead-overhead" = 2h 43min Pressure Altitude = 6.500 ft Temperature = ISA- 20 Power setting = 2300 RPM Taxi Fuel = 2 USG Additional time for climb = 7 min, Additional time for approach and landing = 10 min The reserve fuel has to be 30% of trip fuel. Determine the minimum block fuel: (2,00 P.) Siehe Anlage 20',
    answers: [
      {
        id: "FPP0095001",
        answer: "50.4 USG",
      },
      {
        id: "FPP0095002",
        answer: "47.3 USG",
      },
      {
        id: "FPP0095003",
        answer: "39.2 USG",
      },
      {
        id: "FPP0095004",
        answer: "43.8 USG",
      },
    ],
    correct: "FPP0095001",
  },
  {
    id: "FPP0096",
    question:
      ' (For this questions use attachment or CAP697 SEP1 Fig. 2.2 Table 2.2.3) For planning a VFR flight, the following data are given: Flight time with planning "overhead-overhead" = 2h 42min Pressure Altitude = 7.500 ft Temperature = ISA Power setting = 2300 RPM Taxi Fuel = 2 USG Additional time for climb = 8 min, Additional time for approach and landing = 10 min The reserve fuel has to be 30% of trip fuel. Determine the minimum block fuel: (2,00 P.) Siehe Anlage 20',
    answers: [
      {
        id: "FPP0096001",
        answer: "51.8 USG",
      },
      {
        id: "FPP0096002",
        answer: "48.4 USG",
      },
      {
        id: "FPP0096003",
        answer: "46.4 USG",
      },
      {
        id: "FPP0096004",
        answer: "37.7 USG",
      },
    ],
    correct: "FPP0096002",
  },
  {
    id: "FPP0097",
    question:
      " Given the following data for a VFR flight: Trip fuel = 70 US gallons Contingency fuel = 5% of ktrip fuel Alternate and final reserve fuel = 20 US gallons Usable fuel at take-off = 95 US gallons After half of the distance you read that you have consumed 40 US gallons. Assume that fuel flow remains unchanged. Which statement is correct? (2,00 P.)",
    answers: [
      {
        id: "FPP0097001",
        answer:
          "Upon landing 5.0 US gallons will remain in addition to alternate and final reserve fuel.",
      },
      {
        id: "FPP0097002",
        answer:
          "Upon landing 15.0 US gallons will remain in addition to alternate and final reserve fuel.",
      },
      {
        id: "FPP0097003",
        answer:
          "The remaining fuel is insufficient for a landing at destination with alternate and final reserve fuel\nremaining.",
      },
      {
        id: "FPP0097004",
        answer: "Upon landing, a total of 40.0 US gallons will remain.",
      },
    ],
    correct: "FPP0097003",
  },
  {
    id: "FPP0098",
    question:
      " Given the following data for a VFR flight: Trip fuel = 70 US gallons Contingency fuel = 5% of trip fuel. Alternate and final reserve fuel = 20 US gallons Usable fuel at take-off = 90 US gallons After half of the distance you read that you have consumed 30 US gallons. Assume that fuel flow remains unchanged. Which statement is correct? (2,00 P.)",
    answers: [
      {
        id: "FPP0098001",
        answer:
          "Upon landing 10.0 US gallons will remain in addition to alternate and final reserve fuel.",
      },
      {
        id: "FPP0098002",
        answer:
          "The remaining fuel is insufficient for a landing at destination with alternate and final reserve fuel\nremaining.",
      },
      {
        id: "FPP0098003",
        answer: "Upon landing a total of 10.0 US gallons will remain.",
      },
      {
        id: "FPP0098004",
        answer:
          "Upon landing 30.0 US gallons will remain in addition to alternate and final reserve fuel.",
      },
    ],
    correct: "FPP0098001",
  },
  {
    id: "FPP0099",
    question:
      " (For this question, please use annex PFP-061) According ICAO, what symbol indicates a group of unlighted obstacles? (2,00 P.) Siehe Anlage 21",
    answers: [
      {
        id: "FPP0099001",
        answer: "C",
      },
      {
        id: "FPP0099002",
        answer: "B",
      },
      {
        id: "FPP0099003",
        answer: "D",
      },
      {
        id: "FPP0099004",
        answer: "A",
      },
    ],
    correct: "FPP0099001",
  },
  {
    id: "FPP0100",
    question:
      " (For this question, please use annex PFP-062) According ICAO, what symbol indicates a civil airport (not international airport) with paved runway? (2,00 P.) Siehe Anlage 22",
    answers: [
      {
        id: "FPP0100001",
        answer: "B",
      },
      {
        id: "FPP0100002",
        answer: "C",
      },
      {
        id: "FPP0100003",
        answer: "A",
      },
      {
        id: "FPP0100004",
        answer: "D",
      },
    ],
    correct: "FPP0100003",
  },
  {
    id: "FPP0101",
    question:
      " (For this question, please use annex PFP-063) According ICAO, what symbol indicates a general spot elevation? (2,00 P.) Siehe Anlage 23",
    answers: [
      {
        id: "FPP0101001",
        answer: "A",
      },
      {
        id: "FPP0101002",
        answer: "B",
      },
      {
        id: "FPP0101003",
        answer: "C",
      },
      {
        id: "FPP0101004",
        answer: "D",
      },
    ],
    correct: "FPP0101003",
  },
  {
    id: "FPP0102",
    question:
      " Wie beeinflusst die Lufttemperatur die Leistung eines Kolbenmotors? (1,00 P.)",
    answers: [
      {
        id: "FPP0102001",
        answer:
          "Höhere Temperatur entspricht höherer Luftdichte,\ndies führt zu höherer Motorleistung",
      },
      {
        id: "FPP0102002",
        answer:
          "Geringere Temperatur entspricht geringerer Luftdichte,\ndies führt zu höherer Motorleistung",
      },
      {
        id: "FPP0102003",
        answer:
          "Höhere Temperatur entspricht geringerer Luftdichte,\ndies führt zu geringerer Motorleistung",
      },
      {
        id: "FPP0102004",
        answer:
          "Geringere Temperatur entspricht höherer Luftdichte,\ndies führt zu geringerer Motorleistung",
      },
    ],
    correct: "FPP0102003",
  },
];

export default questions;
