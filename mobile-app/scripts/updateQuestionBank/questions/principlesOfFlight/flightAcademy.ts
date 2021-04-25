import { Question } from "../../types";
import { importImage } from "../../utils/importImage";

const questions: Question[] = [
  {
    id: "POF0001",
    question:
      "Compared to trailing edge flaps, leading edge devices like Slots...",
    answers: [
      {
        id: "POF0001001",
        answer: "reduce the critical angle of attack at a given speed.",
      },
      {
        id: "POF0001002",
        answer: "allow higher speeds at take-off and landing.",
      },
      {
        id: "POF0001003",
        answer: "produce less drag while allowing a higher angle of attack.",
      },
      {
        id: "POF0001004",
        answer: "increase the camber and allow a lower angle of attack.",
      },
    ],
    correct: "POF0001003",
  },
  {
    id: "POF0002",
    question:
      "Stabilization around the lateral axis during cruise is achieved by the...",
    answers: [
      {
        id: "POF0002001",
        answer: "horizontal stabilizer.",
      },
      {
        id: "POF0002002",
        answer: "airlerons.",
      },
      {
        id: "POF0002003",
        answer: "wing flaps.",
      },
      {
        id: "POF0002004",
        answer: "vertical rudder.",
      },
    ],
    correct: "POF0002001",
  },
  {
    id: "POF0003",
    question:
      "Flying with speeds higher than the never-exceed-speed (vNE) may result in...",
    answers: [
      {
        id: "POF0003001",
        answer:
          "too high total pressure resulting in an unusable airspeed indicator.",
      },
      {
        id: "POF0003002",
        answer: "flutter and mechanically damaging the wings.",
      },
      {
        id: "POF0003003",
        answer: "an increased lift-to-drag ratio and a better glide angle.",
      },
      {
        id: "POF0003004",
        answer: "reduced drag with increased control forces.",
      },
    ],
    correct: "POF0003002",
  },
  {
    id: "POF0004",
    question: " What effects typically result from propeller icing?",
    answers: [
      {
        id: "POF0004001",
        answer: "Reduced power output, decreasing RPM.",
      },
      {
        id: "POF0004002",
        answer: "Increased power output, decreasing RPM.",
      },
      {
        id: "POF0004003",
        answer: "Increased power output, increasing RPM.",
      },
      {
        id: "POF0004004",
        answer: "Reduced power output, increasing RPM.",
      },
    ],
    correct: "POF0004001",
  },
  {
    id: "POF0005",
    question:
      "During a straight and steady climb, which force acts addionally, and in the same direction as the drag force, resulting in more power required for climb than for horizontal flight?",
    answers: [
      {
        id: "POF0005001",
        answer:
          "A component of the weight force along the rearward flight path.",
      },
      {
        id: "POF0005002",
        answer: "The vertical component of the weight force.",
      },
      {
        id: "POF0005003",
        answer: "A component of the thrust along the rearward flightpath.",
      },
      {
        id: "POF0005004",
        answer: "A component of the lift force along the forward flightpath.",
      },
    ],
    correct: "POF0005001",
  },
  {
    id: "POF0006",
    question: " The static pressure of gases work...",
    answers: [
      {
        id: "POF0006001",
        answer: "only vertical to the flow direction.",
      },
      {
        id: "POF0006002",
        answer: "only in the direction of the total pressure.",
      },
      {
        id: "POF0006003",
        answer: "in all directions.",
      },
      {
        id: "POF0006004",
        answer: "only in flow direction.",
      },
    ],
    correct: "POF0006003",
  },
  {
    id: "POF0007",
    question:
      "Bernoulli's equation for frictionless, incompressible gases states that...",
    answers: [
      {
        id: "POF0007001",
        answer: "static pressure = total pressure + dynamic pressure.",
      },
      {
        id: "POF0007002",
        answer: "total pressure = dynamic pressure - static pressure.",
      },
      {
        id: "POF0007003",
        answer: "dynamic pressure = total pressure + static pressure.",
      },
      {
        id: "POF0007004",
        answer: "total pressure = dynamic pressure + static pressure.",
      },
    ],
    correct: "POF0007004",
  },
  {
    id: "POF0008",
    question:
      "If surrounded by airflow (v>0), any arbitrarily shaped body produces...",
    answers: [
      {
        id: "POF0008001",
        answer: "lift without drag.",
      },
      {
        id: "POF0008002",
        answer: "drag and lift.",
      },
      {
        id: "POF0008003",
        answer: "constant drag at any speed.",
      },
      {
        id: "POF0008004",
        answer: "drag.",
      },
    ],
    correct: "POF0008004",
  },
  {
    id: "POF0009",
    question:
      "All aerodynamic forces can be considered to act on a single point. This point is called...",
    answers: [
      {
        id: "POF0009001",
        answer: "center of gravity.",
      },
      {
        id: "POF0009002",
        answer: "center of pressure.",
      },
      {
        id: "POF0009003",
        answer: "lift point.",
      },
      {
        id: "POF0009004",
        answer: "transition point.",
      },
    ],
    correct: "POF0009002",
  },
  {
    id: "POF0010",
    question: "The center of pressure is the theoretical point of origin of...",
    answers: [
      {
        id: "POF0010001",
        answer: "only the resulting total drag.",
      },
      {
        id: "POF0010002",
        answer: "all aerodynamic forces of the profile.",
      },
      {
        id: "POF0010003",
        answer: "gravity forces of the profile.",
      },
      {
        id: "POF0010004",
        answer: "gravity and aerodynamic forces.",
      },
    ],
    correct: "POF0010002",
  },
  {
    id: "POF0011",
    question: "Number 2 in the drawing corresponds to the...",
    answers: [
      {
        id: "POF0011001",
        answer: "chord line.",
      },
      {
        id: "POF0011002",
        answer: "chord.",
      },
      {
        id: "POF0011003",
        answer: "angle of attack.",
      },
      {
        id: "POF0011004",
        answer: "profile thickness.",
      },
    ],
    correct: "POF0011002",
    image: importImage("./images/PF1.png"),
  },
  {
    id: "POF0012",
    question: "Number 3 in the drawing corresponds to the...",
    answers: [
      {
        id: "POF0012001",
        answer: "chord.",
      },
      {
        id: "POF0012002",
        answer: "thickness.",
      },
      {
        id: "POF0012003",
        answer: "camber line.",
      },
      {
        id: "POF0012004",
        answer: "chord line.",
      },
    ],
    correct: "POF0012003",
    image: importImage("./images/PF1.png"),
  },
  {
    id: "POF0013",
    question: " The angle of attack is the angle between...",
    answers: [
      {
        id: "POF0013001",
        answer:
          "the undisturbed airflow and the longitudinal axis of an aeroplane.",
      },
      {
        id: "POF0013002",
        answer: "the chord line and the longitudinal axis of an aeroplane.",
      },
      {
        id: "POF0013003",
        answer: "the chord line and the oncoming airflow.",
      },
      {
        id: "POF0013004",
        answer: "the wing and the fuselage of an aeroplane.",
      },
    ],
    correct: "POF0013003",
  },
  {
    id: "POF0014",
    question: " The ratio of span and mean chord length is referred to as...",
    answers: [
      {
        id: "POF0014001",
        answer: "trapezium shape.",
      },
      {
        id: "POF0014002",
        answer: "tapering.",
      },
      {
        id: "POF0014003",
        answer: "aspect ratio.",
      },
      {
        id: "POF0014004",
        answer: "wing sweep.",
      },
    ],
    correct: "POF0014003",
  },
  {
    id: "POF0015",
    question: "Which point on the aerofoil is represented by number 3?",
    answers: [
      {
        id: "POF0015001",
        answer: "Separation point",
      },
      {
        id: "POF0015002",
        answer: "Center of pressure",
      },
      {
        id: "POF0015003",
        answer: "Stagnation point",
      },
      {
        id: "POF0015004",
        answer: "Transition point",
      },
    ],
    correct: "POF0015004",
    image: importImage("./images/PF2.png"),
  },
  {
    id: "POF0016",
    question: "Which point on the aerofoil is represented by number 4?",
    answers: [
      {
        id: "POF0016001",
        answer: "Center of pressure",
      },
      {
        id: "POF0016002",
        answer: "Separation point",
      },
      {
        id: "POF0016003",
        answer: "Transition point",
      },
      {
        id: "POF0016004",
        answer: "Stagnation point",
      },
    ],
    correct: "POF0016002",
    image: importImage("./images/PF2.png"),
  },
  {
    id: "POF0017",
    question:
      "Wing tip vortex development begins during which phase of flight?",
    answers: [
      {
        id: "POF0017001",
        answer: "As soon as the aircraft starts moving",
      },
      {
        id: "POF0017002",
        answer: "While setting take-off power during take-off run",
      },
      {
        id: "POF0017003",
        answer: "While setting flaps to lower position",
      },
      {
        id: "POF0017004",
        answer: "When lift is being generated during rotation",
      },
    ],
    correct: "POF0017004",
  },
  {
    id: "POF0018",
    question: "Which point on the aerofoil is represented by number 1?",
    answers: [
      {
        id: "POF0018001",
        answer: "Transition point",
      },
      {
        id: "POF0018002",
        answer: "Stagnation point",
      },
      {
        id: "POF0018003",
        answer: "Center of pressure",
      },
      {
        id: "POF0018004",
        answer: "Separation point",
      },
    ],
    correct: "POF0018002",
    image: importImage("./images/PF2.png"),
  },
  {
    id: "POF0019",
    question: " What pattern can be found at the stagnation point?",
    answers: [
      {
        id: "POF0019001",
        answer:
          "The boundary layer starts separating on the upper surface of the profile",
      },
      {
        id: "POF0019002",
        answer:
          "The laminar boundary layer changes into a turbulent boundary layer",
      },
      {
        id: "POF0019003",
        answer:
          "All aerodynamic forces can be considered as attacking at this single point",
      },
      {
        id: "POF0019004",
        answer:
          "Streamlines are divided into airflow above and below the profile",
      },
    ],
    correct: "POF0019004",
  },
  {
    id: "POF0020",
    question:
      "What pressure pattern can be observed at a lift-generating wing profile at positive angle of attack?",
    answers: [
      {
        id: "POF0020001",
        answer:
          "Low pressure is created above, higher pressure below the profile",
      },
      {
        id: "POF0020002",
        answer:
          "High pressure is created above, lower pressure below the profile",
      },
      {
        id: "POF0020003",
        answer:
          "Pressure above remains unchanged, higher pressure is created below the profile",
      },
      {
        id: "POF0020004",
        answer:
          "Pressure below remains unchanged, lower pressure is created above the profile",
      },
    ],
    correct: "POF0020001",
  },
  {
    id: "POF0021",
    question:
      "The position of the the center of pressure at a positively shaped profile...",
    answers: [
      {
        id: "POF0021001",
        answer:
          "moves to the leading edge while the angle of attack becomes smaller.",
      },
      {
        id: "POF0021002",
        answer:
          "is located at approximately 25% of the chord, measured from the leading edge.",
      },
      {
        id: "POF0021003",
        answer:
          "moves to the trailing edge while the angle of attack becomes smaller.",
      },
      {
        id: "POF0021004",
        answer: "does not move since it is independent of the angle of attack.",
      },
    ],
    correct: "POF0021003",
  },
  {
    id: "POF0022",
    question:
      "In which way does the position of the center of pressure move at a positively shaped profile with increasing angle of attack?",
    answers: [
      {
        id: "POF0022001",
        answer: "It moves backward until reaching the critical angle of attack",
      },
      {
        id: "POF0022002",
        answer: "It moves forward first, then backward",
      },
      {
        id: "POF0022003",
        answer: "It moves forward until reaching the critical angle of attack",
      },
      {
        id: "POF0022004",
        answer: "It moves to the wing tips",
      },
    ],
    correct: "POF0022003",
  },
  {
    id: "POF0023",
    question: " Which statement about lift and angle of attack is correct?",
    answers: [
      {
        id: "POF0023001",
        answer:
          "Too large angles of attack can lead to an exponential increase in lift",
      },
      {
        id: "POF0023002",
        answer:
          "Increasing the angle of attack results in less lift being generated by the aerofoil",
      },
      {
        id: "POF0023003",
        answer:
          "Increasing the angle of attack too far may result in a loss of lift and an airflow separation",
      },
      {
        id: "POF0023004",
        answer:
          "Decreasing the angle of attack results in more drag being generated by the aerofoil",
      },
    ],
    correct: "POF0023003",
  },
  {
    id: "POF0024",
    question:
      "Which statement about the airflow around an aerofoil is correct if the angle of attack increases?",
    answers: [
      {
        id: "POF0024001",
        answer: "The stagnation point moves down",
      },
      {
        id: "POF0024002",
        answer: "The center of pressure moves down",
      },
      {
        id: "POF0024003",
        answer: "The center of pressure moves up",
      },
      {
        id: "POF0024004",
        answer: "The stagnation point moves up",
      },
    ],
    correct: "POF0024001",
  },
  {
    id: "POF0025",
    question:
      "Which statement about the airflow around an aerofoil is correct if the angle of attack decreases?",
    answers: [
      {
        id: "POF0025001",
        answer: "The center of pressure moves aft",
      },
      {
        id: "POF0025002",
        answer: "The stagnation point remains constant",
      },
      {
        id: "POF0025003",
        answer: "The stagnation point moves down",
      },
      {
        id: "POF0025004",
        answer: "The center of pressure moves forward",
      },
    ],
    correct: "POF0025001",
  },
  {
    id: "POF0026",
    question: "The angle (alpha) shown in the figure is referred to as...",
    answers: [
      {
        id: "POF0026001",
        answer: "lift angle.",
      },
      {
        id: "POF0026002",
        answer: "angle of incidence.",
      },
      {
        id: "POF0026003",
        answer: "angle of inclination.",
      },
      {
        id: "POF0026004",
        answer: "angle of attack.",
      },
    ],
    correct: "POF0026004",
    image: importImage("./images/PF3.png"),
  },
  {
    id: "POF0027",
    question:
      "In order to improve the stall characteristics of an aircraft, the wing is twisted outwards (the angle of incidence varies spanwise). This is known as...",
    answers: [
      {
        id: "POF0027001",
        answer: "aerodynamic washout.",
      },
      {
        id: "POF0027002",
        answer: "arrow shape.",
      },
      {
        id: "POF0027003",
        answer: "V-form.",
      },
      {
        id: "POF0027004",
        answer: "geometric washout.",
      },
    ],
    correct: "POF0027004",
  },
  {
    id: "POF0028",
    question: " Which option states a benefit of wing washout?",
    answers: [
      {
        id: "POF0028001",
        answer: "Structurally the wing is made more rigid against rotation",
      },
      {
        id: "POF0028002",
        answer: "With the washout the form drag reduces at high speeds",
      },
      {
        id: "POF0028003",
        answer:
          "Greater hardness because the wing can withstand more torsion forces",
      },
      {
        id: "POF0028004",
        answer:
          "At high angles of attack the effectiveness of the aileron is retained as long as possible",
      },
    ],
    correct: "POF0028004",
  },
  {
    id: "POF0029",
    question: " Which statement concerning the angle of attack is correct?",
    answers: [
      {
        id: "POF0029001",
        answer: "The angle of attack cannot be negative",
      },
      {
        id: "POF0029002",
        answer: "Increasing the angle of attack results in decreasing lift",
      },
      {
        id: "POF0029003",
        answer: "The angle of attack is constant throughout the flight",
      },
      {
        id: "POF0029004",
        answer: "A too large angle of attack may result in a loss of lift",
      },
    ],
    correct: "POF0029004",
  },
  {
    id: "POF0030",
    question:
      "When increasing the airflow speed by a factor of 2 while keeping all other parameters constant, how does the parasite drag change approximately?",
    answers: [
      {
        id: "POF0030001",
        answer: "It decreases by a factor of 2",
      },
      {
        id: "POF0030002",
        answer: "It increases by a factor of 2",
      },
      {
        id: "POF0030003",
        answer: "It decreases by a factor of 4",
      },
      {
        id: "POF0030004",
        answer: "It increases by a factor of 4",
      },
    ],
    correct: "POF0030004",
  },
  {
    id: "POF0031",
    question: " The drag coefficient...",
    answers: [
      {
        id: "POF0031001",
        answer: "increases with increasing airspeed.",
      },
      {
        id: "POF0031002",
        answer: "is proportional to the lift coefficient.",
      },
      {
        id: "POF0031003",
        answer: "cannot be lower than a non-negative, minimal value.",
      },
      {
        id: "POF0031004",
        answer: "may range from zero to an infinite positive value.",
      },
    ],
    correct: "POF0031003",
  },
  {
    id: "POF0032",
    question: " Pressure compensation on an wing occurs at the...",
    answers: [
      {
        id: "POF0032001",
        answer: "wing roots.",
      },
      {
        id: "POF0032002",
        answer: "wing tips.",
      },
      {
        id: "POF0032003",
        answer: "trailing edge.",
      },
      {
        id: "POF0032004",
        answer: "leading edge.",
      },
    ],
    correct: "POF0032002",
  },
  {
    id: "POF0033",
    question:
      "Which of the following options is likely to produce large induced drag?",
    answers: [
      {
        id: "POF0033001",
        answer: "Large aspect ratio",
      },
      {
        id: "POF0033002",
        answer: "Tapered wings",
      },
      {
        id: "POF0033003",
        answer: "Small aspect ratio",
      },
      {
        id: "POF0033004",
        answer: "Low lift coefficients",
      },
    ],
    correct: "POF0033003",
  },
  {
    id: "POF0034",
    question:
      "Which parts of an aircraft mainly affect the generation of induced drag?",
    answers: [
      {
        id: "POF0034001",
        answer: "the front part of the fuselage.",
      },
      {
        id: "POF0034002",
        answer: "the wing tips.",
      },
      {
        id: "POF0034003",
        answer: "the lower part of the gear.",
      },
      {
        id: "POF0034004",
        answer: "the outer part of the ailerons.",
      },
    ],
    correct: "POF0034002",
  },
  {
    id: "POF0035",
    question: " Where is interference drag generated?",
    answers: [
      {
        id: "POF0035001",
        answer: "At the wing root",
      },
      {
        id: "POF0035002",
        answer: "At the ailerons",
      },
      {
        id: "POF0035003",
        answer: "At the the gear",
      },
      {
        id: "POF0035004",
        answer: "Near the wing tips",
      },
    ],
    correct: "POF0035001",
  },
  {
    id: "POF0036",
    question: "Which curve represents the induced drag?",
    answers: [
      {
        id: "POF0036001",
        answer: "1",
      },
      {
        id: "POF0036002",
        answer: "2",
      },
      {
        id: "POF0036003",
        answer: "3",
      },
      {
        id: "POF0036004",
        answer: "4",
      },
    ],
    correct: "POF0036001",
    image: importImage("./images/PF6.png"),
  },
  {
    id: "POF00362",
    question: "Which curve represents the total drag?",
    answers: [
      {
        id: "POF00362001",
        answer: "1",
      },
      {
        id: "POF00362002",
        answer: "2",
      },
      {
        id: "POF00362003",
        answer: "3",
      },
      {
        id: "POF00362003",
        answer: "4",
      },
    ],
    correct: "POF00362003",
    image: importImage("./images/PF6.png"),
  },
  {
    id: "POF0037",
    question:
      "Pressure drag, interference drag and friction drag belong to the group of the... ",
    answers: [
      {
        id: "POF0037001",
        answer: "induced drag.",
      },
      {
        id: "POF0037002",
        answer: "parasite drag.",
      },
      {
        id: "POF0037003",
        answer: "main resistance.",
      },
      {
        id: "POF0037004",
        answer: "total drag.",
      },
    ],
    correct: "POF0037002",
  },
  {
    id: "POF0038",
    question: " What kind of drag is NOT part of the parasite drag?",
    answers: [
      {
        id: "POF0038001",
        answer: "Interference drag",
      },
      {
        id: "POF0038002",
        answer: "Skin-friction drag",
      },
      {
        id: "POF0038003",
        answer: "Induced drag",
      },
      {
        id: "POF0038004",
        answer: "Form drag",
      },
    ],
    correct: "POF0038003",
  },
  {
    id: "POF0039",
    question:
      "How do induced drag and parasite drag change with increasing airspeed during a horizontal and stable cruise flight?",
    answers: [
      {
        id: "POF0039001",
        answer: "Induced drag decreases and parasite drag increases",
      },
      {
        id: "POF0039002",
        answer: "Parasite drag decreases and induced drag increases",
      },
      {
        id: "POF0039003",
        answer: "Parasite drag decreases and induced drag decreases",
      },
      {
        id: "POF0039004",
        answer: "Induced drag increases and parasite drag increases",
      },
    ],
    correct: "POF0039001",
  },
  {
    id: "POF0040",
    question: " Which of the listed wing shapes has the lowest induced drag?",
    answers: [
      {
        id: "POF0040001",
        answer: "Elliptical shape",
      },
      {
        id: "POF0040002",
        answer: "Double trapezoidal shape",
      },
      {
        id: "POF0040003",
        answer: "Rectangular shape",
      },
      {
        id: "POF0040004",
        answer: "Trapezoidal shape",
      },
    ],
    correct: "POF0040001",
  },
  {
    id: "POF0041",
    question:
      "Which effect does a decreasing airspeed have on the induced drag during a horizontal and stable cruise flight?",
    answers: [
      {
        id: "POF0041001",
        answer: "The induced drag will increase",
      },
      {
        id: "POF0041002",
        answer: "The induced drag will collapse",
      },
      {
        id: "POF0041003",
        answer: "The induced drag will remain constant",
      },
      {
        id: "POF0041004",
        answer: "The induced drag will slightly decrease",
      },
    ],
    correct: "POF0041001",
  },
  {
    id: "POF0042",
    question:
      "Which statement about induced drag during the horizontal cruise flight is correct?",
    answers: [
      {
        id: "POF0042001",
        answer:
          "Induced drag has a minimum at a certain speed and increases at higher as well as lower\nspeeds",
      },
      {
        id: "POF0042002",
        answer:
          "Induced drag has a maximum at a certain speed and decreases at higher as well as lower\nspeeds",
      },
      {
        id: "POF0042003",
        answer: "Induced drag increases with increasing airspeed",
      },
      {
        id: "POF0042004",
        answer: "Induced drag decreases with increasing airspeed",
      },
    ],
    correct: "POF0042004",
  },
  {
    id: "POF0043",
    question: " In which mentioned situation is the total drag at its minimum?",
    answers: [
      {
        id: "POF0043001",
        answer: "Induced drag is twice as much as parasite drag",
      },
      {
        id: "POF0043002",
        answer: "Parasite drag is twice as much as induced drag",
      },
      {
        id: "POF0043003",
        answer: "Parasite drag is equal to induced drag",
      },
      {
        id: "POF0043004",
        answer: "Induced drag is smaller than parasite drag",
      },
    ],
    correct: "POF0043003",
  },
  {
    id: "POF0044",
    question: " Which kinds of drag contribute to total drag?",
    answers: [
      {
        id: "POF0044001",
        answer: "Form drag, skin-friction drag, interference drag",
      },
      {
        id: "POF0044002",
        answer: "Interference drag and parasite drag",
      },
      {
        id: "POF0044003",
        answer: "Induced drag, form drag, skin-friction drag",
      },
      {
        id: "POF0044004",
        answer: "Induced drag and parasite drag",
      },
    ],
    correct: "POF0044004",
  },
  {
    id: "POF0045",
    question: "How do lift and drag change when approaching a stall condition?",
    answers: [
      {
        id: "POF0045001",
        answer: "Lift and drag decrease",
      },
      {
        id: "POF0045002",
        answer: "Lift and drag increase",
      },
      {
        id: "POF0045003",
        answer: "Lift decreases and drag increases",
      },
      {
        id: "POF0045004",
        answer: "Lift increases and drag decreases",
      },
    ],
    correct: "POF0045003",
  },
  {
    id: "POF0046",
    question: " In case of a stall it is important to...",
    answers: [
      {
        id: "POF0046001",
        answer: "increase the bank angle and reduce the speed.",
      },
      {
        id: "POF0046002",
        answer: "increase the angle of attack and increase the speed.",
      },
      {
        id: "POF0046003",
        answer: "decrease the angle of attack and increase the speed.",
      },
      {
        id: "POF0046004",
        answer: "increase the angle of attack and reduce the speed.",
      },
    ],
    correct: "POF0046003",
  },
  {
    id: "POF0047",
    question: " During a stall, the lift...",
    answers: [
      {
        id: "POF0047001",
        answer: "decreases and drag increases.",
      },
      {
        id: "POF0047002",
        answer: "increases and drag decreases.",
      },
      {
        id: "POF0047003",
        answer: "increases and drag increases.",
      },
      {
        id: "POF0047004",
        answer: "decreases and drag decreases.",
      },
    ],
    correct: "POF0047001",
  },
  {
    id: "POF0048",
    question: " The critical angle of attack...",
    answers: [
      {
        id: "POF0048001",
        answer: "changes with increasing weight.",
      },
      {
        id: "POF0048002",
        answer: "decreases with forward center of gravity position.",
      },
      {
        id: "POF0048003",
        answer: "is independent of the weight.",
      },
      {
        id: "POF0048004",
        answer: "increases with backward center of gravity position.",
      },
    ],
    correct: "POF0048003",
  },
  {
    id: "POF0049",
    question: " What leads to a decreased stall speed Vs (IAS)?",
    answers: [
      {
        id: "POF0049001",
        answer: "Lower altitude",
      },
      {
        id: "POF0049002",
        answer: "Lower density",
      },
      {
        id: "POF0049003",
        answer: "Higher load factor",
      },
      {
        id: "POF0049004",
        answer: "Decreasing weight",
      },
    ],
    correct: "POF0049004",
  },
  {
    id: "POF0050",
    question:
      "The stall warning will be activated just before reaching which speed?",
    answers: [
      {
        id: "POF0050001",
        answer: "VNE",
      },
      {
        id: "POF0050002",
        answer: "VS",
      },
      {
        id: "POF0050003",
        answer: "VX",
      },
      {
        id: "POF0050004",
        answer: "VR",
      },
    ],
    correct: "POF0050002",
  },
  {
    id: "POF0051",
    question:
      "In motorplanes the stall warning is usually activated by a change of...",
    answers: [
      {
        id: "POF0051001",
        answer: "the center of gravity.",
      },
      {
        id: "POF0051002",
        answer: "the transition point.",
      },
      {
        id: "POF0051003",
        answer: "the center of pressure.",
      },
      {
        id: "POF0051004",
        answer: "the stagnation point.",
      },
    ],
    correct: "POF0051004",
  },
  {
    id: "POF0052",
    question: " How should the pilot react to an engaged stall warning?",
    answers: [
      {
        id: "POF0052001",
        answer: "Pull the elevator, increase power",
      },
      {
        id: "POF0052002",
        answer: "Pull the elevator, decrease power",
      },
      {
        id: "POF0052003",
        answer: "Push the elevator, increase power",
      },
      {
        id: "POF0052004",
        answer: "Raise the nose to decrease airspeed",
      },
    ],
    correct: "POF0052003",
  },
  {
    id: "POF0053",
    question: " Which statement regarding a spin is correct?",
    answers: [
      {
        id: "POF0053001",
        answer: "During recovery the ailerons should be kept neutral",
      },
      {
        id: "POF0053002",
        answer: "Only very old aeroplanes have a risk of spinning",
      },
      {
        id: "POF0053003",
        answer: "During recovery the ailerons should be crossed",
      },
      {
        id: "POF0053004",
        answer: "During the spin the speed constantly increases",
      },
    ],
    correct: "POF0053001",
  },
  {
    id: "POF0054",
    question:
      "When extending the flaps for landing at constant angle of attack, in which way does the lift coefficient change far before reaching the maximum lift coefficient?",
    answers: [
      {
        id: "POF0054001",
        answer: "It decreases",
      },
      {
        id: "POF0054002",
        answer: "It is not possible to define",
      },
      {
        id: "POF0054003",
        answer: "It increases",
      },
      {
        id: "POF0054004",
        answer: "It remains constant",
      },
    ],
    correct: "POF0054003",
  },
  {
    id: "POF0055",
    question:
      "With regard to flaps, which of the following options provides a lift-increasing effect?",
    answers: [
      {
        id: "POF0055001",
        answer: "Decreasing the angle of attack",
      },
      {
        id: "POF0055002",
        answer: "Increasing the aerofoil camber",
      },
      {
        id: "POF0055003",
        answer: "Decreasing the form drag",
      },
      {
        id: "POF0055004",
        answer: "Lowering the induced drag",
      },
    ],
    correct: "POF0055002",
  },
  {
    id: "POF0056",
    question: " Which factor can be changed by deploying flaps for landing?",
    answers: [
      {
        id: "POF0056001",
        answer: "The position of the center of gravity",
      },
      {
        id: "POF0056002",
        answer: "The effectiveness of the ailerons",
      },
      {
        id: "POF0056003",
        answer: "The twist effect of the engine",
      },
      {
        id: "POF0056004",
        answer: "The trim condition",
      },
    ],
    correct: "POF0056004",
  },
  {
    id: "POF0057",
    question: " What is the principle of a Fowler flap?",
    answers: [
      {
        id: "POF0057001",
        answer:
          "A profile-like flap is extended from the trailing edge of the wing",
      },
      {
        id: "POF0057002",
        answer: "A flap from the rear bottom side of the wing is folded down",
      },
      {
        id: "POF0057003",
        answer: "At high angles of attack a part of the leading edge lifts",
      },
      {
        id: "POF0057004",
        answer: "The rear part of the wing is folded down",
      },
    ],
    correct: "POF0057001",
  },
  {
    id: "POF0058",
    question: " A take-off with flaps in take-off position causes...",
    answers: [
      {
        id: "POF0058001",
        answer: "an increased rate of climb.",
      },
      {
        id: "POF0058002",
        answer: "an increased acceleration.",
      },
      {
        id: "POF0058003",
        answer: "a shortening of the take-off run.",
      },
      {
        id: "POF0058004",
        answer: "a decrease in drag.",
      },
    ],
    correct: "POF0058003",
  },
  {
    id: "POF0059",
    question:
      "Provided that no other procedure is described in the Aircraft Operating Handbook, after increasing the engine power in a go-around, the flaps may...",
    answers: [
      {
        id: "POF0059001",
        answer: "not be operated up to the minimum safe altitude.",
      },
      {
        id: "POF0059002",
        answer: "be retracted to a middle position.",
      },
      {
        id: "POF0059003",
        answer: "be fully retracted without any delay.",
      },
      {
        id: "POF0059004",
        answer: "remain fully extended until reaching the traffic pattern.",
      },
    ],
    correct: "POF0059002",
  },
  {
    id: "POF0060",
    question:
      "How do lift and drag change when setting flaps to a lower position?",
    answers: [
      {
        id: "POF0060001",
        answer: "Lift increases, drag decreases",
      },
      {
        id: "POF0060002",
        answer: "Lift increases, drag increases",
      },
      {
        id: "POF0060003",
        answer: "Lift decreases, drag decreases",
      },
      {
        id: "POF0060004",
        answer: "Lift decreases, drag increases",
      },
    ],
    correct: "POF0060002",
  },
  {
    id: "POF0061",
    question:
      "The laminar boundary layer on the aerofoil is located between...",
    answers: [
      {
        id: "POF0061001",
        answer: "the transition point and the separation point.",
      },
      {
        id: "POF0061002",
        answer: "the stagnation point and the transition point.",
      },
      {
        id: "POF0061003",
        answer: "the transition point and the center of pressure.",
      },
      {
        id: "POF0061004",
        answer: "the stagnation point and the center of pressure.",
      },
    ],
    correct: "POF0061002",
  },
  {
    id: "POF0062",
    question: " What types of boundary layers can be found on an aerofoil?",
    answers: [
      {
        id: "POF0062001",
        answer:
          "Laminar layer at the leading wing areas, turbulent boundary layer at the trailing areas",
      },
      {
        id: "POF0062002",
        answer:
          "Turbulent boundary layer along the complete upper surface with separated airflow",
      },
      {
        id: "POF0062003",
        answer:
          "Turbulent layer at the leading wing areas, laminar boundary layer at the trailing areas",
      },
      {
        id: "POF0062004",
        answer:
          "Laminar boundary layer along the complete upper surface with non-separated airflow",
      },
    ],
    correct: "POF0062001",
  },
  {
    id: "POF0063",
    question:
      "How does a laminar boundary layer differ from a turbulent boundary layer?",
    answers: [
      {
        id: "POF0063001",
        answer:
          "The laminar boundary layer produces lift, the turbulent boundary layer produces drag",
      },
      {
        id: "POF0063002",
        answer:
          "The turbulent boundary layer is thicker and provides less skin-friction drag",
      },
      {
        id: "POF0063003",
        answer:
          "The laminar boundary layer is thinner and provides more skin-friction drag",
      },
      {
        id: "POF0063004",
        answer:
          "The turbulent boundary layer can follow the airfoil camber at higher angles of attack",
      },
    ],
    correct: "POF0063004",
  },
  {
    id: "POF0064",
    question: "What structural item provides lateral stability to an airplane?",
    answers: [
      {
        id: "POF0064001",
        answer: "Differential aileron deflection",
      },
      {
        id: "POF0064002",
        answer: "Wing dihedral",
      },
      {
        id: "POF0064003",
        answer: "Vertical tail",
      },
      {
        id: "POF0064004",
        answer: "Elevator",
      },
    ],
    correct: "POF0064002",
  },
  {
    id: "POF0065",
    question: " Which statement describes a situation of static stability?",
    answers: [
      {
        id: "POF0065001",
        answer:
          "An aircraft distorted by external impact will tend to an even more deflected position",
      },
      {
        id: "POF0065002",
        answer:
          "An aircraft distorted by external impact will return to the original position",
      },
      {
        id: "POF0065003",
        answer:
          "An aircraft distorted by external impact can return to its original position by rudder input",
      },
      {
        id: "POF0065004",
        answer:
          "An aircraft distorted by external impact will maintain the deflected position",
      },
    ],
    correct: "POF0065002",
  },
  {
    id: "POF0066",
    question:
      "Which constructive feature is shown in the figure? See figure (L: Lift)",
    answers: [
      {
        id: "POF0066001",
        answer: "Longitudinal stability by wing dihedral",
      },
      {
        id: "POF0066002",
        answer: "Lateral stability by wing dihedral",
      },
      {
        id: "POF0066003",
        answer: "Differential aileron deflection",
      },
      {
        id: "POF0066004",
        answer: "Directional stability by lift generation",
      },
    ],
    image: importImage("./images/PF4.png"),
    correct: "POF0066002",
  },
  {
    id: "POF0067",
    question:
      ' "Longitudinal stability" is referred to as stability around which axis?',
    answers: [
      {
        id: "POF0067001",
        answer: "Propeller axis",
      },
      {
        id: "POF0067002",
        answer: "Vertical axis",
      },
      {
        id: "POF0067003",
        answer: "Longitudinal axis",
      },
      {
        id: "POF0067004",
        answer: "Lateral axis",
      },
    ],
    correct: "POF0067004",
  },
  {
    id: "POF0068",
    question:
      "Stability around which axis is mainly influenced by the center of gravity's longitudinal position?",
    answers: [
      {
        id: "POF0068001",
        answer: "Vertical axis",
      },
      {
        id: "POF0068002",
        answer: "Longitudinal axis",
      },
      {
        id: "POF0068003",
        answer: "Gravity axis",
      },
      {
        id: "POF0068004",
        answer: "Lateral axis",
      },
    ],
    correct: "POF0068004",
  },
  {
    id: "POF0069",
    question:
      "What structural item provides directional stability to an airplane?",
    answers: [
      {
        id: "POF0069001",
        answer: "Differential aileron deflection",
      },
      {
        id: "POF0069002",
        answer: "Large vertical tail",
      },
      {
        id: "POF0069003",
        answer: "Wing dihedral",
      },
      {
        id: "POF0069004",
        answer: "Large elevator",
      },
    ],
    correct: "POF0069002",
  },
  {
    id: "POF0070",
    question: " Rotation around the vertical axis is called...",
    answers: [
      {
        id: "POF0070001",
        answer: "rolling.",
      },
      {
        id: "POF0070002",
        answer: "pitching.",
      },
      {
        id: "POF0070003",
        answer: "yawing.",
      },
      {
        id: "POF0070004",
        answer: "slipping.",
      },
    ],
    correct: "POF0070003",
  },
  {
    id: "POF0071",
    question: " Rotation around the lateral axis is called...",
    answers: [
      {
        id: "POF0071001",
        answer: "rolling.",
      },
      {
        id: "POF0071002",
        answer: "stalling.",
      },
      {
        id: "POF0071003",
        answer: "yawing.",
      },
      {
        id: "POF0071004",
        answer: "pitching.",
      },
    ],
    correct: "POF0071004",
  },
  {
    id: "POF0072",
    question: " The critical angle of attack...",
    answers: [
      {
        id: "POF0072001",
        answer: "increases with a front centre of gravity.",
      },
      {
        id: "POF0072002",
        answer: "decreases with a rear centre of gravity.",
      },
      {
        id: "POF0072003",
        answer: "is changed by different aircraft weights.",
      },
      {
        id: "POF0072004",
        answer: "is not changed by different aircraft weights.",
      },
    ],
    correct: "POF0072004",
  },
  {
    id: "POF0073",
    question:
      "In straight and level flight with constant performance of the engine, the angle of attack at the wing is...",
    answers: [
      {
        id: "POF0073001",
        answer: "greater than in a climb.",
      },
      {
        id: "POF0073002",
        answer: "greater than at take-off.",
      },
      {
        id: "POF0073003",
        answer: "smaller than in a descent.",
      },
      {
        id: "POF0073004",
        answer: "smaller than in a climb.",
      },
    ],
    correct: "POF0073004",
  },
  {
    id: "POF0074",
    question:
      "What is the function of the horizontal tail (among other things)?",
    answers: [
      {
        id: "POF0074001",
        answer: "To stabilise the aeroplane around the lateral axis",
      },
      {
        id: "POF0074002",
        answer: "To initiate a curve around the vertical axis",
      },
      {
        id: "POF0074003",
        answer: "To stabilise the aeroplane around the longitudinal axis",
      },
      {
        id: "POF0074004",
        answer: "To stabilise the aeroplane around the vertical axis",
      },
    ],
    correct: "POF0074001",
  },
  {
    id: "POF0075",
    question: " The elevator deflection during take-off rotation...",
    answers: [
      {
        id: "POF0075001",
        answer: "is increased for a front centre of gravity.",
      },
      {
        id: "POF0075002",
        answer: "is increased for a rear centre of gravity.",
      },
      {
        id: "POF0075003",
        answer: "is increased at high speeds.",
      },
      {
        id: "POF0075004",
        answer: "is independent of the speed.",
      },
    ],
    correct: "POF0075001",
  },
  {
    id: "POF0076",
    question: " The elevator moves an aeroplane around the...",
    answers: [
      {
        id: "POF0076001",
        answer: "lateral axis.",
      },
      {
        id: "POF0076002",
        answer: "elevator axis.",
      },
      {
        id: "POF0076003",
        answer: "longitudinal axis.",
      },
      {
        id: "POF0076004",
        answer: "vertical axis.",
      },
    ],
    correct: "POF0076001",
  },
  {
    id: "POF0077",
    question:
      "What has to be considered with regard to the center of gravity position?",
    answers: [
      {
        id: "POF0077001",
        answer:
          "The center of gravity's position can only be determined during flight.",
      },
      {
        id: "POF0077002",
        answer:
          "Only correct loading can assure a correct and safe center of gravity position.",
      },
      {
        id: "POF0077003",
        answer:
          "By moving the elevator trim tab, the center of gravity can be shifted into a correct position.",
      },
      {
        id: "POF0077004",
        answer:
          "By moving the aileron trim tab, the center of gravity can be shifted into a correct position.",
      },
    ],
    correct: "POF0077002",
  },
  {
    id: "POF0078",
    question:
      "Rudder deflections result in a turn of the aeroplane around the...",
    answers: [
      {
        id: "POF0078001",
        answer: "rudder axis.",
      },
      {
        id: "POF0078002",
        answer: "lateral axis.",
      },
      {
        id: "POF0078003",
        answer: "vertical axis.",
      },
      {
        id: "POF0078004",
        answer: "longitudinal axis.",
      },
    ],
    correct: "POF0078003",
  },
  {
    id: "POF0079",
    question: " Deflecting the rudder to the left causes...",
    answers: [
      {
        id: "POF0079001",
        answer: "pitching of the aircraft to the right.",
      },
      {
        id: "POF0079002",
        answer: "yawing of the aircraft to the right.",
      },
      {
        id: "POF0079003",
        answer: "yawing of the aircraft to the left.",
      },
      {
        id: "POF0079004",
        answer: "pitching of the aircraft to the left.",
      },
    ],
    correct: "POF0079003",
  },
  {
    id: "POF0080",
    question: " What is the advantage of differential aileron movement?",
    answers: [
      {
        id: "POF0080001",
        answer:
          "The ratio of the drag coefficient to lift coefficient is increased",
      },
      {
        id: "POF0080002",
        answer: "The adverse yaw is higher",
      },
      {
        id: "POF0080003",
        answer:
          "The drag of the downwards deflected aileron is lowered and the adverse yaw is smaller",
      },
      {
        id: "POF0080004",
        answer: "The total lift remains constant during aileron deflection",
      },
    ],
    correct: "POF0080003",
  },
  {
    id: "POF0081",
    question: " Which design feature can compensate for adverse yaw?",
    answers: [
      {
        id: "POF0081001",
        answer: "Wing dihedral",
      },
      {
        id: "POF0081002",
        answer: "Full deflection of the aileron",
      },
      {
        id: "POF0081003",
        answer: "Aileron trim",
      },
      {
        id: "POF0081004",
        answer: "Differential aileron defletion",
      },
    ],
    correct: "POF0081004",
  },
  {
    id: "POF0082",
    question: " Differential aileron deflection is used to...",
    answers: [
      {
        id: "POF0082001",
        answer: "keep the adverse yaw low.",
      },
      {
        id: "POF0082002",
        answer: "avoid a stall at low angles of attack.",
      },
      {
        id: "POF0082003",
        answer: "increase the rate of descent.",
      },
      {
        id: "POF0082004",
        answer: "reduce wake turbulence.",
      },
    ],
    correct: "POF0082001",
  },
  {
    id: "POF0083",
    question:
      "The right aileron deflects upwards, the left downwards. How does the aircraft react?",
    answers: [
      {
        id: "POF0083001",
        answer: "Rolling to the left, no yawing",
      },
      {
        id: "POF0083002",
        answer: "Rolling to the right, yawing to the right",
      },
      {
        id: "POF0083003",
        answer: "Rolling to the right, yawing to the left",
      },
      {
        id: "POF0083004",
        answer: "Rolling to the left, yawing to the right",
      },
    ],
    correct: "POF0083003",
  },
  {
    id: "POF0084",
    question: " The aerodynamic rudder balance...",
    answers: [
      {
        id: "POF0084001",
        answer: "improves the rudder effectiveness.",
      },
      {
        id: "POF0084002",
        answer: "reduces the control surfaces.",
      },
      {
        id: "POF0084003",
        answer: "reduces the control stick forces.",
      },
      {
        id: "POF0084004",
        answer: "delays the stall.",
      },
    ],
    correct: "POF0084003",
  },
  {
    id: "POF0085",
    question:
      "Which constructive feature has the purpose to reduce stearing forces?",
    answers: [
      {
        id: "POF0085001",
        answer: "T-tail",
      },
      {
        id: "POF0085002",
        answer: "Vortex generators",
      },
      {
        id: "POF0085003",
        answer: "Differential aileron deflection",
      },
      {
        id: "POF0085004",
        answer: "Aerodynamic rudder balance",
      },
    ],
    correct: "POF0085004",
  },
  {
    id: "POF0086",
    question: " What is the function of the static rudder balance?",
    answers: [
      {
        id: "POF0086001",
        answer: "To trim the controls almost without any force",
      },
      {
        id: "POF0086002",
        answer: "To increase the control stick forces",
      },
      {
        id: "POF0086003",
        answer: "To limit the control stick forces",
      },
      {
        id: "POF0086004",
        answer: "To prevent control surface flutter",
      },
    ],
    correct: "POF0086004",
  },
  {
    id: "POF0087",
    question:
      "During cruise flight with constant power setting, an aircraft shows a permanent tendency to raise the nose. How can this tendency be eliminated?",
    answers: [
      {
        id: "POF0087001",
        answer: "By deflecting the elevator trim tab upwards",
      },
      {
        id: "POF0087002",
        answer: "By shifting the center of gravity backwards",
      },
      {
        id: "POF0087003",
        answer: "By elevator deflection upwards",
      },
      {
        id: "POF0087004",
        answer: "By deflecting the elevator trim tab downwards",
      },
    ],
    correct: "POF0087001",
  },
  {
    id: "POF0088",
    question:
      "The trim tab at the elevator is defelected upwards. In which position is the corresponding indicator?",
    answers: [
      {
        id: "POF0088001",
        answer: "Neutral position",
      },
      {
        id: "POF0088002",
        answer: "Nose-up position",
      },
      {
        id: "POF0088003",
        answer: "Nose-down position",
      },
      {
        id: "POF0088004",
        answer: "Laterally trimmed",
      },
    ],
    correct: "POF0088003",
  },
  {
    id: "POF0089",
    question: ' What describes "wing loading"?',
    answers: [
      {
        id: "POF0089001",
        answer: "Drag per wing area",
      },
      {
        id: "POF0089002",
        answer: "Drag per weight",
      },
      {
        id: "POF0089003",
        answer: "Wing area per weight",
      },
      {
        id: "POF0089004",
        answer: "Weight per wing area",
      },
    ],
    correct: "POF0089004",
  },
  {
    id: "POF0090",
    question:
      "Through which factor listed below does the load factor increase during cruise flight?",
    answers: [
      {
        id: "POF0090001",
        answer: "A forward centre of gravity",
      },
      {
        id: "POF0090002",
        answer: "Higher aeroplane weight",
      },
      {
        id: "POF0090003",
        answer: "An upward gust",
      },
      {
        id: "POF0090004",
        answer: "Lower air density",
      },
    ],
    correct: "POF0090003",
  },
  {
    id: "POF0091",
    question:
      ' Which statement regarding the "constant-speed propeller" is correct?',
    answers: [
      {
        id: "POF0091001",
        answer: "The propeller keeps the airspeed constant",
      },
      {
        id: "POF0091002",
        answer: "The pitch of the propeller rises with higher speeds",
      },
      {
        id: "POF0091003",
        answer: "The RPM decreases with lower speeds",
      },
      {
        id: "POF0091004",
        answer: "The set RPM is kept constant by the motor power (MAP)",
      },
    ],
    correct: "POF0091002",
  },
  {
    id: "POF0092",
    question:
      "The change in pitch at a propeller blade from the root to the tip ensures...",
    answers: [
      {
        id: "POF0092001",
        answer: "that the most thrust is produced at the blade tip.",
      },
      {
        id: "POF0092002",
        answer: "that the most thrust is produced at the blade root.",
      },
      {
        id: "POF0092003",
        answer:
          "a nearly constant load by a constant effective angle of attack over the entire length of the blade.",
      },
      {
        id: "POF0092004",
        answer: "the largest possible angle of attack at the blade tip.",
      },
    ],
    correct: "POF0092003",
  },
  {
    id: "POF0093",
    question: " After an engine failure, the windmilling propeller...",
    answers: [
      {
        id: "POF0093001",
        answer: "generates neither thrust nor drag.",
      },
      {
        id: "POF0093002",
        answer: "has a greater pitch in feathered position.",
      },
      {
        id: "POF0093003",
        answer: "generates drag rather than thrust.",
      },
      {
        id: "POF0093004",
        answer: "improves the properties of the glide.",
      },
    ],
    correct: "POF0093003",
  },
  {
    id: "POF0094",
    question:
      "During a descent at idle power with constant speed, the propeller lever is moved backwards. How do the propeller pitch and sink rate change?",
    answers: [
      {
        id: "POF0094001",
        answer: "Propeller pitch is increased, sink rate is increased",
      },
      {
        id: "POF0094002",
        answer: "Propeller pitch is increased, sink rate is decreased",
      },
      {
        id: "POF0094003",
        answer: "Propeller pitch is decreased, sink rate is increased",
      },
      {
        id: "POF0094004",
        answer: "Propeller pitch is decreased, sink rate is decreased",
      },
    ],
    correct: "POF0094002",
  },
  {
    id: "POF0095",
    question: "Point number 1 in the figure indicates which flight state?",
    answers: [
      {
        id: "POF0095001",
        answer: "Stall",
      },
      {
        id: "POF0095002",
        answer: "Inverted flight",
      },
      {
        id: "POF0095003",
        answer: "Best gliding angle",
      },
      {
        id: "POF0095004",
        answer: "Slow flight",
      },
    ],
    correct: "POF0095002",
    image: importImage("./images/PF5.png"),
  },
  {
    id: "POF0096",
    question: "Point number 5 in the figure indicates which flight state?",
    answers: [
      {
        id: "POF0096001",
        answer: "Best gliding angle",
      },
      {
        id: "POF0096002",
        answer: "Slow flight",
      },
      {
        id: "POF0096003",
        answer: "Stall",
      },
      {
        id: "POF0096004",
        answer: "Inverted flight",
      },
    ],
    correct: "POF0096002",
    image: importImage("./images/PF5.png"),
  },
  {
    id: "POF0097",
    question: "The bank in a two-minute turn (rate one turn) depends on the...",
    answers: [
      {
        id: "POF0097001",
        answer: "weight.",
      },
      {
        id: "POF0097002",
        answer: "wind.",
      },
      {
        id: "POF0097003",
        answer: "load factor.",
      },
      {
        id: "POF0097004",
        answer: "TAS.",
      },
    ],
    correct: "POF0097004",
  },
  {
    id: "POF0098",
    question:
      "In a co-ordinated turn, how is the relation between the load factor (n) and the stall speed (Vs)?",
    answers: [
      {
        id: "POF0098001",
        answer:
          "n is smaller than 1, Vs is greater than in straight and level flight.",
      },
      {
        id: "POF0098002",
        answer:
          "n is greater than 1, Vs is greater than in straight and level flight.",
      },
      {
        id: "POF0098003",
        answer:
          "n is smaller than 1, Vs is smaller than in straight and level flight.",
      },
      {
        id: "POF0098004",
        answer:
          "n is greater than 1, Vs is smaller than in straight and level flight.",
      },
    ],
    correct: "POF0098002",
  },
  {
    id: "POF0099",
    question: " How is the balance of forces affected during a turn?",
    answers: [
      {
        id: "POF0099001",
        answer:
          "Lift force must be increased to compensate for the sum of centrifugal and gravitational force",
      },
      {
        id: "POF0099002",
        answer:
          "The net force results from superposition of gravity and centripetal forces",
      },
      {
        id: "POF0099003",
        answer:
          "The horizontal component of the lift force during a turn is the centrifugal force",
      },
      {
        id: "POF0099004",
        answer:
          "A lower lift force compensates for a lower net force as compared to level flight",
      },
    ],
    correct: "POF0099001",
  },
  {
    id: "POF0100",
    question:
      "The pressure compensation between wind upper and lower surface results in ...",
    answers: [
      {
        id: "POF0100001",
        answer: "laminar airflow by wing tip vortices.",
      },
      {
        id: "POF0100002",
        answer: "profile drag by wing tip vortices.",
      },
      {
        id: "POF0100003",
        answer: "induced drag by wing tip vortices.",
      },
      {
        id: "POF0100004",
        answer: "lift by wing tip vortices.",
      },
    ],
    correct: "POF0100003",
  },
  {
    id: "POF0101",
    question: ' What is meant by "ground effect"?',
    answers: [
      {
        id: "POF0101001",
        answer:
          "Increase of lift and increase of induced drag close to the ground",
      },
      {
        id: "POF0101002",
        answer:
          "Decrease of lift and increase of induced drag close to the ground",
      },
      {
        id: "POF0101003",
        answer:
          "Decrease of lift and decrease of induced drag close to the ground",
      },
      {
        id: "POF0101004",
        answer:
          "Increase of lift and decrease of induced drag close to the ground",
      },
    ],
    correct: "POF0101004",
  },
  {
    id: "POF0102",
    question: " What is the diffeence between spin and spiral dive?",
    answers: [
      {
        id: "POF0102001",
        answer:
          "Spin: stall at outer wing, speed constant;\nSpiral dive: airflow at both wings, speed increasing rapidly",
      },
      {
        id: "POF0102002",
        answer:
          "Spin: stall at inner wing, speed constant;\nSpiral dive: airflow at both wings, speed increasing rapidly",
      },
      {
        id: "POF0102003",
        answer:
          "Spin: stall at outer wing, speed increasing rapidly;\nSpiral dive: airflow at both wings, speed constant",
      },
      {
        id: "POF0102004",
        answer:
          "Spin: stall at inner wing, speed increasing rapidly;\nSpiral dive: airflow at both wings, speed constant",
      },
    ],
    correct: "POF0102002",
  },
];

export default questions;
