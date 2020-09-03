import { Question } from "types/Questionnaire";

const questions: Question[] = [
  {
    id: "ALW0001",
    question: ' The term "flight time" is defined as... (1,00 P.)',
    answers: [
      {
        id: "METALW0001001",
        answer:
          "the period from the start of the take-off run to the final touchdown when landing.",
      },
      {
        id: "METALW0001002",
        answer:
          "the total time from the first aircraft movement until the moment it finally comes to rest at the end\nof the flight.",
      },
      {
        id: "METALW0001003",
        answer:
          "the period from engine start for the purpose of taking off to leaving the aircraft after engine\nshutdown.",
      },
      {
        id: "METALW0001004",
        answer:
          "the total time from the first take-off until the last landing in conjunction with one or more\nconsecutive flights.",
      },
    ],
    correct: "METALW0001002",
  },
  {
    id: "ALW0002",
    question:
      " What should be considered regarding a scheduled flight over water, when land cannot be reached in case of an emergency landing? (1,00 P.)",
    answers: [
      {
        id: "METALW0002001",
        answer: "Transponder code 7600 has to be set during the whole flight",
      },
      {
        id: "METALW0002002",
        answer:
          "Contact to the nearest ATC shall consist during the whole flight",
      },
      {
        id: "METALW0002003",
        answer:
          "For all passengers there must be life jackets or lifeboats present",
      },
      {
        id: "METALW0002004",
        answer: "The flight plan has to contain the exact waypoints",
      },
    ],
    correct: "METALW0002003",
  },
  {
    id: "ALW0003",
    question:
      " Which of the items below may have an influence on the noise perceived by a person on the ground? 1) Engine power setting 2) Propeller revolutions per minute 3) Position of the landing gear 4) Flap position 5) Flight track 6) Height above ground 7) Flight rules (1,00 P.)",
    answers: [
      {
        id: "METALW0003001",
        answer: "1, 2, 3, 4, 5, 6",
      },
      {
        id: "METALW0003002",
        answer: "1, 5, 6",
      },
      {
        id: "METALW0003003",
        answer: "1, 5, 6, 7",
      },
      {
        id: "METALW0003004",
        answer: "3, 4, 5, 6, 7",
      },
    ],
    correct: "METALW0003001",
  },
  {
    id: "ALW0004",
    question:
      " How can the pilot of an an engine-driven aircraft minimise the noise emission during descent and approach? (1,00 P.)",
    answers: [
      {
        id: "METALW0004001",
        answer:
          "Normal approach with normal power setting, configuration prior to initiating descent, shortest\npossible arrival route",
      },
      {
        id: "METALW0004002",
        answer:
          "Descent and approach in landing configuration while maintaining a descent angle of 3°, direct\napproach whenever possible",
      },
      {
        id: "METALW0004003",
        answer:
          "Low approach with minimum power setting, late configuration and steep approach, adherence\nto established arrival routes",
      },
      {
        id: "METALW0004004",
        answer:
          "High approach with minimum power setting, late descent, late configuration, adherence to\nestablished arrival routes",
      },
    ],
    correct: "METALW0004004",
  },
  {
    id: "ALW0005",
    question:
      " When should turns at low altitudes above villages be avoided with regard to noise abatement procedures? (1,00 P.)",
    answers: [
      {
        id: "METALW0005001",
        answer: "In descent",
      },
      {
        id: "METALW0005002",
        answer: "In climb",
      },
      {
        id: "METALW0005003",
        answer: "During the approach",
      },
      {
        id: "METALW0005004",
        answer: "In horizontal flight",
      },
    ],
    correct: "METALW0005002",
  },
  {
    id: "ALW0006",
    question: " How should departures near villages be carried out? (1,00 P.)",
    answers: [
      {
        id: "METALW0006001",
        answer: "Slow with a low propeller rotation speed",
      },
      {
        id: "METALW0006002",
        answer: "Low and fast between the villages",
      },
      {
        id: "METALW0006003",
        answer:
          "Climb and changes in direction should be done as slow as possible",
      },
      {
        id: "METALW0006004",
        answer:
          "Villages should be circumnavigated and crossed in a sufficient altitude",
      },
    ],
    correct: "METALW0006004",
  },
  {
    id: "ALW0007",
    question:
      " Which kind of engine is susceptible to carburettor fire? (1,00 P.)",
    answers: [
      {
        id: "METALW0007001",
        answer: "Piston engines",
      },
      {
        id: "METALW0007002",
        answer: "Turbine engines",
      },
      {
        id: "METALW0007003",
        answer: "Electric motors",
      },
      {
        id: "METALW0007004",
        answer: "Turboprop engines",
      },
    ],
    correct: "METALW0007001",
  },
  {
    id: "ALW0008",
    question:
      " Why is it dangerous to pump the throttle for engine start in cold weather? (1,00 P.)",
    answers: [
      {
        id: "METALW0008001",
        answer: "It may cause a carburettor fire",
      },
      {
        id: "METALW0008002",
        answer: "Carburettor icing can occur",
      },
      {
        id: "METALW0008003",
        answer: "The engine might start with not enough power",
      },
      {
        id: "METALW0008004",
        answer: "The oil will become diluted",
      },
    ],
    correct: "METALW0008001",
  },
  {
    id: "ALW0009",
    question: " Which danger exists during engine start? (1,00 P.)",
    answers: [
      {
        id: "METALW0009001",
        answer: "Cable fire",
      },
      {
        id: "METALW0009002",
        answer: "Carburettor fire",
      },
      {
        id: "METALW0009003",
        answer: "Sparking",
      },
      {
        id: "METALW0009004",
        answer: "Smoke emission",
      },
    ],
    correct: "METALW0009002",
  },
  {
    id: "ALW0010",
    question:
      " May an engine, which previously was on fire, be restarted? (1,00 P.)",
    answers: [
      {
        id: "METALW0010001",
        answer: "No, the risk of a reignition of the fire would be too high",
      },
      {
        id: "METALW0010002",
        answer: "Yes, if the aircraft is flying at a safe altitude",
      },
      {
        id: "METALW0010003",
        answer: "Yes, but only on the ground for the purpose of taxiing",
      },
      {
        id: "METALW0010004",
        answer:
          "Yes, but only if the cause of the fire was a carburettor fire during engine start",
      },
    ],
    correct: "METALW0010001",
  },
  {
    id: "ALW0011",
    question: " Which gas is most dangerous during an engine fire? (1,00 P.)",
    answers: [
      {
        id: "METALW0011001",
        answer: "Carbon monoxide",
      },
      {
        id: "METALW0011002",
        answer: "Nitrogen",
      },
      {
        id: "METALW0011003",
        answer: "Oxygen",
      },
      {
        id: "METALW0011004",
        answer: "Carbon dioxide",
      },
    ],
    correct: "METALW0011001",
  },
  {
    id: "ALW0012",
    question:
      " Smoke enters the cockpit during an engine fire. Which actions have to be taken immediately? (1,00 P.)",
    answers: [
      {
        id: "METALW0012001",
        answer: "Switching off the master switch and the ignition",
      },
      {
        id: "METALW0012002",
        answer: "Switching off the heating and the ventilating system",
      },
      {
        id: "METALW0012003",
        answer: "Switching off the pitot and front window heating",
      },
      {
        id: "METALW0012004",
        answer: "Switching off the avionics and the cabin lighting",
      },
    ],
    correct: "METALW0012002",
  },
  {
    id: "ALW0013",
    question:
      " What should be the first action in case of a cable fire during a flight? (1,00 P.)",
    answers: [
      {
        id: "METALW0013001",
        answer: "Close the fuel valve",
      },
      {
        id: "METALW0013002",
        answer: "Open the windows",
      },
      {
        id: "METALW0013003",
        answer: "Turn off the master switch",
      },
      {
        id: "METALW0013004",
        answer: "Open cabin ventialtion",
      },
    ],
    correct: "METALW0013003",
  },
  {
    id: "ALW0014",
    question:
      " What extinguishing agent is the least suitable for an aircraft fire? (1,00 P.)",
    answers: [
      {
        id: "METALW0014001",
        answer: "Powder",
      },
      {
        id: "METALW0014002",
        answer: "Halon",
      },
      {
        id: "METALW0014003",
        answer: "Water",
      },
      {
        id: "METALW0014004",
        answer: "Foam",
      },
    ],
    correct: "METALW0014003",
  },
  {
    id: "ALW0015",
    question:
      " In flight, a little smoke emerges from behind the instrument panel. An electrical fire is suspected. Which action, with respect to the pilot's operating manual, should be taken? (1,00 P.)",
    answers: [
      {
        id: "METALW0015001",
        answer: "Turn off the heat",
      },
      {
        id: "METALW0015002",
        answer: "Shut down the engine",
      },
      {
        id: "METALW0015003",
        answer: "Turn off the master switch",
      },
      {
        id: "METALW0015004",
        answer: "Use the fire extinguisher",
      },
    ],
    correct: "METALW0015003",
  },
  {
    id: "ALW0016",
    question:
      " In flight, a little smoke emerges from behind the instrument panel. An engine fire is suspected. Which action, with respect to the pilot's operating manual, should be taken? (1,00 P.)",
    answers: [
      {
        id: "METALW0016001",
        answer: "Turn off the heat",
      },
      {
        id: "METALW0016002",
        answer: "Shut down the engine",
      },
      {
        id: "METALW0016003",
        answer: "Use the fire extinguisher",
      },
      {
        id: "METALW0016004",
        answer: "Turn off the master switch",
      },
    ],
    correct: "METALW0016001",
  },
  {
    id: "ALW0017",
    question: " A wind shear is... (1,00 P.)",
    answers: [
      {
        id: "METALW0017001",
        answer:
          "a slow increase of the wind speed in altitudes above 13000 ft.",
      },
      {
        id: "METALW0017002",
        answer: "a wind speed change of more than 15 kt.",
      },
      {
        id: "METALW0017003",
        answer:
          "a vertical or horizontal change of wind speed and wind direction.",
      },
      {
        id: "METALW0017004",
        answer: "a meteorological downslope wind phenomenon in the alps.",
      },
    ],
    correct: "METALW0017003",
  },
  {
    id: "ALW0018",
    question:
      " Which weather phenomenon is typically associated with wind shear? (1,00 P.)",
    answers: [
      {
        id: "METALW0018001",
        answer: "Fog.",
      },
      {
        id: "METALW0018002",
        answer: "Invernal warm front.",
      },
      {
        id: "METALW0018003",
        answer: "Thunderstorms.",
      },
      {
        id: "METALW0018004",
        answer: "Stable high pressure areas.",
      },
    ],
    correct: "METALW0018003",
  },
  {
    id: "ALW0019",
    question: " When do you expect wind shear? (1,00 P.)",
    answers: [
      {
        id: "METALW0019001",
        answer: "During an inversion",
      },
      {
        id: "METALW0019002",
        answer: "In calm wind in cold weather",
      },
      {
        id: "METALW0019003",
        answer: "During a summer day with calm winds",
      },
      {
        id: "METALW0019004",
        answer: "When passing a warm front",
      },
    ],
    correct: "METALW0019001",
  },
  {
    id: "ALW0020",
    question:
      " During an approach the aeroplane experiences a windshear with a decreasing headwind. If the pilot does not make any corrections, how do the approach path and the indicated airspeed (IAS) change? (1,00 P.)",
    answers: [
      {
        id: "METALW0020001",
        answer: "Path is higher, IAS decreases",
      },
      {
        id: "METALW0020002",
        answer: "Path is lower, IAS increases",
      },
      {
        id: "METALW0020003",
        answer: "Path is higher, IAS increases",
      },
      {
        id: "METALW0020004",
        answer: "Path is lower, IAS decreases",
      },
    ],
    correct: "METALW0020004",
  },
  {
    id: "ALW0021",
    question:
      " During an approach the aeroplane experiences a windshear with an increasing headwind. If the pilot does not make any corrections, how do the approach path and the indicated airspeed (IAS) change? (1,00 P.)",
    answers: [
      {
        id: "METALW0021001",
        answer: "Path is higher, IAS decreases",
      },
      {
        id: "METALW0021002",
        answer: "Path is lower, IAS increases",
      },
      {
        id: "METALW0021003",
        answer: "Path is higher, IAS increases",
      },
      {
        id: "METALW0021004",
        answer: "Path is lower, IAS decreases",
      },
    ],
    correct: "METALW0021003",
  },
  {
    id: "ALW0022",
    question:
      " During an approach the aeroplane experiences a windshear with a decreasing tailwind. If the pilot does not make any corrections, how do the approach path and the indicated airspeed (IAS) change? (1,00 P.)",
    answers: [
      {
        id: "METALW0022001",
        answer: "Path is higher, IAS decreases",
      },
      {
        id: "METALW0022002",
        answer: "Path is higher, IAS increases",
      },
      {
        id: "METALW0022003",
        answer: "Path is lower, IAS decreases",
      },
      {
        id: "METALW0022004",
        answer: "Path is lower, IAS increases",
      },
    ],
    correct: "METALW0022002",
  },
  {
    id: "ALW0023",
    question:
      " After take-off an aeroplane gets into a wind shear with decreasing headwind. As a result... (1,00 P.)",
    answers: [
      {
        id: "METALW0023001",
        answer: "the aeroplane flies above the estimated climb path.",
      },
      {
        id: "METALW0023002",
        answer: "the true airspeed (TAS) will increase.",
      },
      {
        id: "METALW0023003",
        answer: "the ground speed (GS) will decrease.",
      },
      {
        id: "METALW0023004",
        answer: "the aeroplane flies below the estimated climb path.",
      },
    ],
    correct: "METALW0023004",
  },
  {
    id: "ALW0024",
    question: " How may windshear be recognised in flight? (1,00 P.)",
    answers: [
      {
        id: "METALW0024001",
        answer:
          "Sudden and apparently baseless change in altitude, airspeed, rate of climb or descent.",
      },
      {
        id: "METALW0024002",
        answer:
          "Sudden and apparently baseless change in heading, turning rate, engine speed or oil\ntemperature.",
      },
      {
        id: "METALW0024003",
        answer:
          "Sudden and apparently baseless change of oilpressure, oil temperature, engine speed and\naltitude.",
      },
      {
        id: "METALW0024004",
        answer:
          "Rather unexpected onset of drizzle associated with high stratus clouds following previously\nclear skies and calm conditions.",
      },
    ],
    correct: "METALW0024001",
  },
  {
    id: "ALW0025",
    question:
      " Which phenomenon may be expected at point 2 of the microburst? See figure (OPR-001) (1,00 P.) Siehe Anlage 1",
    answers: [
      {
        id: "METALW0025001",
        answer: "Constant rate of descent",
      },
      {
        id: "METALW0025002",
        answer: "Decrease of descent rate",
      },
      {
        id: "METALW0025003",
        answer: "Increase of airspeed",
      },
      {
        id: "METALW0025004",
        answer: "Decrease of climb rate",
      },
    ],
    correct: "METALW0025004",
  },
  {
    id: "ALW0026",
    question:
      " Which phenomenon may be expected at point 3 of the miroburst? See figure (OPR-001) (1,00 P.) Siehe Anlage 1",
    answers: [
      {
        id: "METALW0026001",
        answer: "Decrease in airspeed",
      },
      {
        id: "METALW0026002",
        answer: "Constant rate of descent",
      },
      {
        id: "METALW0026003",
        answer: "Increase in airspeed",
      },
      {
        id: "METALW0026004",
        answer: "Decrease in climb rate",
      },
    ],
    correct: "METALW0026001",
  },
  {
    id: "ALW0027",
    question: " How can a wind shear encounter in flight be avoided? (1,00 P.)",
    answers: [
      {
        id: "METALW0027001",
        answer:
          "Avoid take-off and landing during the passage of heavy showers or thunderstorms",
      },
      {
        id: "METALW0027002",
        answer:
          "Avoid areas of precipitation, particularly during winter, and choose low flight altitudes",
      },
      {
        id: "METALW0027003",
        answer:
          "Avoid take-offs and landings in mountainous terrain and stay in flat country whenever possible",
      },
      {
        id: "METALW0027004",
        answer:
          "Avoid thermally active areas, particularly during summer, or stay below these areas",
      },
    ],
    correct: "METALW0027001",
  },
  {
    id: "ALW0028",
    question: " What action should be taken when entering a windshear?",
    answers: [],
    correct: "",
  },
  {
    id: "ALW0001",
    question: ". Reduce speed",
    answers: [],
    correct: "",
  },
  {
    id: "ALW0002",
    question: ". Retract gear and flaps",
    answers: [],
    correct: "",
  },
  {
    id: "ALW0003",
    question: ". Maintain current configuration",
    answers: [],
    correct: "",
  },
  {
    id: "ALW0004",
    question: ". Adjust thrust (1,00 P.)",
    answers: [
      {
        id: "METALW0004001",
        answer: "2 and 4",
      },
      {
        id: "METALW0004002",
        answer: "1 and 2",
      },
      {
        id: "METALW0004003",
        answer: "1 and 3",
      },
      {
        id: "METALW0004004",
        answer: "3 and 4",
      },
    ],
    correct: "METALW0004004",
  },
  {
    id: "ALW0029",
    question:
      " After lift-off, a much stronger than expected airspeed rise is experienced during the initial climb phase. What may be expected if the aeroplane entered a microburst? (1,00 P.)",
    answers: [
      {
        id: "METALW0029001",
        answer: "An increased climb rate and decreased airspeed",
      },
      {
        id: "METALW0029002",
        answer: "An increased climb rate and airspeed",
      },
      {
        id: "METALW0029003",
        answer: "A decreased climb rate and airspeed",
      },
      {
        id: "METALW0029004",
        answer: "A decreased climb rate and increased airspeed",
      },
    ],
    correct: "METALW0029003",
  },
  {
    id: "ALW0030",
    question:
      " Immediately after lift-off, a microburst is entered inadvertently. Which action might avoid an unintentional descent? (1,00 P.)",
    answers: [
      {
        id: "METALW0030001",
        answer:
          "Set maximum power, maintain present aircraft configuration, climb at the best rate of climb\nspeed",
      },
      {
        id: "METALW0030002",
        answer:
          "Set maximum power, retract landing gear and flaps, pick up speed and perform a left or a right\nturn in an attempt to leave the area of the microburst on the shortest way",
      },
      {
        id: "METALW0030003",
        answer:
          "Set maximum power, retract landing gear and flaps, increase pitch until attaining optimum climb\nspeed",
      },
      {
        id: "METALW0030004",
        answer:
          "Set maximum power, maintain present aircraft configuration, pick up speed in an attempt to\nleave the area of the microburst as fast as possible",
      },
    ],
    correct: "METALW0030001",
  },
  {
    id: "ALW0031",
    question:
      " Wake turbulences develop during take-off just as the aeroplane... (1,00 P.)",
    answers: [
      {
        id: "METALW0031001",
        answer: "reaches an altitude of 15 ft.",
      },
      {
        id: "METALW0031002",
        answer: "lifts off with the main gear.",
      },
      {
        id: "METALW0031003",
        answer: "lifts off with the front gear.",
      },
      {
        id: "METALW0031004",
        answer: "accelerates.",
      },
    ],
    correct: "METALW0031003",
  },
  {
    id: "ALW0032",
    question: " Wake turbulence is caused by... (1,00 P.)",
    answers: [
      {
        id: "METALW0032001",
        answer: "wind shear at the wingtip of an aerofoil.",
      },
      {
        id: "METALW0032002",
        answer: "jet blast behind a turbine engine.",
      },
      {
        id: "METALW0032003",
        answer: "turbulence at the downwind side of a mountain range.",
      },
      {
        id: "METALW0032004",
        answer: "pressure compensation at the wingtip of an aerofoil.",
      },
    ],
    correct: "METALW0032004",
  },
  {
    id: "ALW0033",
    question: " Wake turbulence is particularly strong... (1,00 P.)",
    answers: [
      {
        id: "METALW0033001",
        answer: "when flying at high speeds.",
      },
      {
        id: "METALW0033002",
        answer: "when flying at high altitudes.",
      },
      {
        id: "METALW0033003",
        answer: "when flying at low speeds.",
      },
      {
        id: "METALW0033004",
        answer: "when flying at low altitudes.",
      },
    ],
    correct: "METALW0033003",
  },
  {
    id: "ALW0034",
    question: " Wake turbulence is particularly strong... (1,00 P.)",
    answers: [
      {
        id: "METALW0034001",
        answer: "at a high aeroplane weight.",
      },
      {
        id: "METALW0034002",
        answer: "when flying with high thrust.",
      },
      {
        id: "METALW0034003",
        answer: "when flying with low thrust.",
      },
      {
        id: "METALW0034004",
        answer: "at a low aeroplane weight.",
      },
    ],
    correct: "METALW0034001",
  },
  {
    id: "ALW0035",
    question: " The intensity of wake turbulence depends on... (1,00 P.)",
    answers: [
      {
        id: "METALW0035001",
        answer: "the propeller pitch.",
      },
      {
        id: "METALW0035002",
        answer: "the temperature.",
      },
      {
        id: "METALW0035003",
        answer: "the weight of the aeroplane.",
      },
      {
        id: "METALW0035004",
        answer: "the altitude of the aeroplane.",
      },
    ],
    correct: "METALW0035003",
  },
  {
    id: "ALW0036",
    question:
      " Two aircraft of the same type, same grossweight and same configuration fly at different airspeeds. Which aircraft will cause more severe wake turbulence? (1,00 P.)",
    answers: [
      {
        id: "METALW0036001",
        answer: "The aircraft flying at lower altitude.",
      },
      {
        id: "METALW0036002",
        answer: "The aircraft flying at slower speed.",
      },
      {
        id: "METALW0036003",
        answer: "The aircraft flying at higher speed.",
      },
      {
        id: "METALW0036004",
        answer: "The aircraft flying at higher altitude.",
      },
    ],
    correct: "METALW0036002",
  },
  {
    id: "ALW0037",
    question:
      " Two aircraft of the same type, same gross weight and same flap configuration fly with different speeds and altitude. Which aircraft will cause more wake turbulence? (1,00 P.)",
    answers: [
      {
        id: "METALW0037001",
        answer: "The aircraft flying at a higher altitude",
      },
      {
        id: "METALW0037002",
        answer: "The aircraft flying at a lower altitude",
      },
      {
        id: "METALW0037003",
        answer: "The aircraft flying at higher speed.",
      },
      {
        id: "METALW0037004",
        answer: "The aircraft flying at lower speed.",
      },
    ],
    correct: "METALW0037004",
  },
  {
    id: "ALW0038",
    question:
      " With only a slight crosswind, what is the danger at take-off after the departure of a heavy aeroplane? (1,00 P.)",
    answers: [
      {
        id: "METALW0038001",
        answer: "Wake turbulence on or near the runway.",
      },
      {
        id: "METALW0038002",
        answer: "Wake turbulence is amplified and distorted.",
      },
      {
        id: "METALW0038003",
        answer: "Wake turbulence rotate faster and higher.",
      },
      {
        id: "METALW0038004",
        answer: "Wake turbulence twisting transverse to the runway.",
      },
    ],
    correct: "METALW0038001",
  },
  {
    id: "ALW0039",
    question:
      ' A light aircraft intends to land behind a commercial airliner belonging to wake turbulence category "medium" or "heavy" on a long runway. How can the wake turbulence of the commercial aircraft be avoided? (1,00 P.)',
    answers: [
      {
        id: "METALW0039001",
        answer:
          "By making a steep approach and a long landing, touching down behind the touchdown point of\nthe airliner's nose gear",
      },
      {
        id: "METALW0039002",
        answer:
          "By making a steep approach and a very short landing. The light aircraft should be able to stop\nbefore reaching the airliner's touchdown point",
      },
      {
        id: "METALW0039003",
        answer:
          "By making a shallow approach and a long landing, touching down behind the touchdown point\nof the airliner's nose gear",
      },
      {
        id: "METALW0039004",
        answer:
          "By making a shallow approach and a very short landing. The light aircraft should be able to stop\nbefore reaching the airliner's touchdown point",
      },
    ],
    correct: "METALW0039001",
  },
  {
    id: "ALW0040",
    question:
      " What should be observed when taxiing behind a commercial airliner? (1,00 P.)",
    answers: [
      {
        id: "METALW0040001",
        answer:
          "To avoid wake turbulence, a minimum distance of 700 m should be maintained",
      },
      {
        id: "METALW0040002",
        answer:
          "To avoid the jet blast, a minimum distance of 600 m should be maintained",
      },
      {
        id: "METALW0040003",
        answer:
          "To avoid wake turbulence, a minimum distance of 300 m should be maintained",
      },
      {
        id: "METALW0040004",
        answer:
          "To avoid the jet blast, a minimum distance of 200 m should be maintained",
      },
    ],
    correct: "METALW0040004",
  },
  {
    id: "ALW0041",
    question:
      " A technical fault requires an emergency off-field landing. Which steps, with respect to the pilot's operating handbook, are necessary? (1,00 P.)",
    answers: [
      {
        id: "METALW0041001",
        answer:
          "Inform air traffic control and request technical support, check the pilot's operating handbook for\na reference on the matter and execute an emergency landing.",
      },
      {
        id: "METALW0041002",
        answer:
          "Reduce speed and configure the aircraft for landing in an attempt to gain time, declare an\nemergency, complete the applicable emergency procedure and execute an emergency landing.",
      },
      {
        id: "METALW0041003",
        answer:
          "Locate a suitable landing area, plan the approach, complete the applicable emergency\nprocedure, declare an emergency, start and concentrate on the approach in due time.",
      },
      {
        id: "METALW0041004",
        answer:
          "Declare an emergency, complete the applicable emergency procedure, cover as much distance\ntowards the airport as possible to be closer to the rescue forces.",
      },
    ],
    correct: "METALW0041003",
  },
  {
    id: "ALW0042",
    question:
      " Which method is appropriate to approach an unprepared landing field? (1,00 P.)",
    answers: [
      {
        id: "METALW0042001",
        answer: "Flat direct approach to ensure visual ground contact",
      },
      {
        id: "METALW0042002",
        answer: "Steep approach to keep the noise level low",
      },
      {
        id: "METALW0042003",
        answer:
          "Fast approach, performance check, and landing within a quick stop",
      },
      {
        id: "METALW0042004",
        answer:
          "Terrain investigation to determine approach points and landing",
      },
    ],
    correct: "METALW0042004",
  },
  {
    id: "ALW0043",
    question: " Which area is suitable for an off-field landing? (1,00 P.)",
    answers: [
      {
        id: "METALW0043001",
        answer: "Harvested cornfield",
      },
      {
        id: "METALW0043002",
        answer: "Glade with long dry grass",
      },
      {
        id: "METALW0043003",
        answer: "Plowed field",
      },
      {
        id: "METALW0043004",
        answer: "Sports area in a village",
      },
    ],
    correct: "METALW0043001",
  },
  {
    id: "ALW0044",
    question: " An emergency landing is a landing... (1,00 P.)",
    answers: [
      {
        id: "METALW0044001",
        answer: "conducted without power from the engine.",
      },
      {
        id: "METALW0044002",
        answer:
          "conducted in an attempt to keep up safety regarding an aircraft and its occupants.",
      },
      {
        id: "METALW0044003",
        answer: "conducted with the flaps retracted.",
      },
      {
        id: "METALW0044004",
        answer:
          "conducted in response to circumstances forcing the aircraft to land.",
      },
    ],
    correct: "METALW0044004",
  },
  {
    id: "ALW0045",
    question:
      " A landing conducted in response to circumstances forcing the aircraft to land is a / an... (1,00 P.)",
    answers: [
      {
        id: "METALW0045001",
        answer: "precautionary landing.",
      },
      {
        id: "METALW0045002",
        answer: "urgent landing.",
      },
      {
        id: "METALW0045003",
        answer: "emergency landing.",
      },
      {
        id: "METALW0045004",
        answer: "field or out landing.",
      },
    ],
    correct: "METALW0045003",
  },
  {
    id: "ALW0046",
    question: " A precautionary landing is a landing... (1,00 P.)",
    answers: [
      {
        id: "METALW0046001",
        answer: "conducted without power from the engine.",
      },
      {
        id: "METALW0046002",
        answer:
          "conducted in response to circumstances forcing the aircraft to land.",
      },
      {
        id: "METALW0046003",
        answer: "conducted in an attempt to sustain flight safety.",
      },
      {
        id: "METALW0046004",
        answer: "conducted with the flaps retracted.",
      },
    ],
    correct: "METALW0046003",
  },
  {
    id: "ALW0047",
    question:
      " Which of the following landing areas is most suitable for an off-field landing? (1,00 P.)",
    answers: [
      {
        id: "METALW0047001",
        answer: "A lake with an undisturbed surface",
      },
      {
        id: "METALW0047002",
        answer: "A light brown field with short crops",
      },
      {
        id: "METALW0047003",
        answer: "A meadow without livestock",
      },
      {
        id: "METALW0047004",
        answer: "A field with ripe waving crops",
      },
    ],
    correct: "METALW0047002",
  },
  {
    id: "ALW0048",
    question:
      " How does the pilot prepare for a VFR flight over a large distance of water, when it is unlikely that land can be reached in case of an engine failure? (1,00 P.)",
    answers: [
      {
        id: "METALW0048001",
        answer: "File a flight plan including the exact way-points.",
      },
      {
        id: "METALW0048002",
        answer: "Be prepared to fly with transponder only.",
      },
      {
        id: "METALW0048003",
        answer: "Carry life vests or a life raft for all occupants.",
      },
      {
        id: "METALW0048004",
        answer: "Maintain continuous radio contact with ATC.",
      },
    ],
    correct: "METALW0048003",
  },
  {
    id: "ALW0049",
    question:
      " Which items should a passenger briefing in case of an imminent emergency landing include? (1,00 P.)",
    answers: [
      {
        id: "METALW0049001",
        answer:
          "How to work the aircraft radio, emergency transponder squawk, telephone number of the\ncompetent search and rescue (SAR) center",
      },
      {
        id: "METALW0049002",
        answer:
          "Blood type of the other aircraft occupants, location of the first-aid kit",
      },
      {
        id: "METALW0049003",
        answer:
          "Nature of the emergency, intentions, safety position, evacuation routes, actions after landing",
      },
      {
        id: "METALW0049004",
        answer:
          "How to read an emergency checklist, how to cut the engine, telephone number of the home\nairport",
      },
    ],
    correct: "METALW0049003",
  },
  {
    id: "ALW0050",
    question:
      " After a precautionary landing the brakes and wheels are very hot. In which way should the pilot approach them? (1,00 P.)",
    answers: [
      {
        id: "METALW0050001",
        answer: "From the right or left side",
      },
      {
        id: "METALW0050002",
        answer: "At an angle of 45°",
      },
      {
        id: "METALW0050003",
        answer: "From the front or back side",
      },
      {
        id: "METALW0050004",
        answer: "From the front, right or left side",
      },
    ],
    correct: "METALW0050003",
  },
  {
    id: "ALW0051",
    question:
      " What needs to be observed in conjunction with overheated brakes? (1,00 P.)",
    answers: [
      {
        id: "METALW0051001",
        answer: "The affected brakes need to be cooled down with halon",
      },
      {
        id: "METALW0051002",
        answer: "The affected tyres may burst in axial direction",
      },
      {
        id: "METALW0051003",
        answer:
          "The affected tyres may burst in radial direction or direction of rotation",
      },
      {
        id: "METALW0051004",
        answer: "The wheel fairing shall be taken off to increase the cooldown",
      },
    ],
    correct: "METALW0051002",
  },
  {
    id: "ALW0052",
    question:
      " In case of an emergency ditching, the life vests have to be inflated... (1,00 P.)",
    answers: [
      {
        id: "METALW0052001",
        answer: "before disembarking the aircraft.",
      },
      {
        id: "METALW0052002",
        answer: "during disembarking the aircraft.",
      },
      {
        id: "METALW0052003",
        answer:
          "after disembarking the aircraft at a safe distance of about 10 m.",
      },
      {
        id: "METALW0052004",
        answer: "after disembarking the aircraft.",
      },
    ],
    correct: "METALW0052004",
  },
  {
    id: "ALW0053",
    question:
      " What are the effects of wet grass on the take-off and landing distance? (1,00 P.)",
    answers: [
      {
        id: "METALW0053001",
        answer:
          "Decrease of the take-off distance and increase of the landing distance",
      },
      {
        id: "METALW0053002",
        answer:
          "Increase of the take-off distance and increase of the landing distance",
      },
      {
        id: "METALW0053003",
        answer:
          "Decrease of the take-off distance and decrease of the landing distance",
      },
      {
        id: "METALW0053004",
        answer:
          "Increase of the take-off distance and decrease of the landing distance",
      },
    ],
    correct: "METALW0053002",
  },
  {
    id: "ALW0054",
    question:
      " Under which circumstances may a runway be considered to be contaminated? (1, P.)",
    answers: [
      {
        id: "METALW0054001",
        answer:
          "When more than 25 % of the runway surface area within the required length and width being\nused is covered by water, slush, snow or ice more than 3 mm deep",
      },
      {
        id: "METALW0054002",
        answer:
          "When 75 % of the required runway length and width are covered by contaminants such as\nsnow, frost, ice or sand",
      },
      {
        id: "METALW0054003",
        answer:
          "When more than 50 % of the runway surface area within the required length and width being\nused is covered by water, slush, snow or ice more than 3 mm deep",
      },
      {
        id: "METALW0054004",
        answer:
          "When more than 50 % of the required runway length and width are covered by contaminants\nsuch as snow, frost, ice or sand",
      },
    ],
    correct: "METALW0054001",
  },
  {
    id: "ALW0055",
    question:
      ' What minimum coverage with ice or snow must be given to call a runway "contaminated"? (1,00 P.)',
    answers: [
      {
        id: "METALW0055001",
        answer: "50 %",
      },
      {
        id: "METALW0055002",
        answer: "25 %",
      },
      {
        id: "METALW0055003",
        answer: "10 %",
      },
      {
        id: "METALW0055004",
        answer: "75 %",
      },
    ],
    correct: "METALW0055002",
  },
  {
    id: "ALW0056",
    question: " Wet snow on a runway can lead to... (1,00 P.)",
    answers: [
      {
        id: "METALW0056001",
        answer: "an increase in lift.",
      },
      {
        id: "METALW0056002",
        answer: "a decrease in lift.",
      },
      {
        id: "METALW0056003",
        answer: "reduced rolling resistance during take-off.",
      },
      {
        id: "METALW0056004",
        answer: "increased rolling resistance during take-off.",
      },
    ],
    correct: "METALW0056004",
  },
  {
    id: "ALW0057",
    question:
      " What danger does standing water on the runway pose to aircraft? (1,00 P.)",
    answers: [
      {
        id: "METALW0057001",
        answer: "Decreased rolling resistance during take-off",
      },
      {
        id: "METALW0057002",
        answer: "An increase in lift",
      },
      {
        id: "METALW0057003",
        answer: "Increased rolling resistance during take-off",
      },
      {
        id: "METALW0057004",
        answer: "A decrease in lift",
      },
    ],
    correct: "METALW0057003",
  },
  {
    id: "ALW0058",
    question:
      " Which danger exists after a heavy rain shower for a landing aircraft? (1,00 P.)",
    answers: [
      {
        id: "METALW0058001",
        answer: "Displacement of the tire slip marking",
      },
      {
        id: "METALW0058002",
        answer: "Difficult flare due to glare",
      },
      {
        id: "METALW0058003",
        answer: "Longer braking distance due to aquaplaning",
      },
      {
        id: "METALW0058004",
        answer: "Decreased braking distance due to aquaplaning",
      },
    ],
    correct: "METALW0058003",
  },
  {
    id: "ALW0059",
    question:
      " Which would be the correct reaction when hydroplaning is suspected upon landing? (1,00 P.)",
    answers: [
      {
        id: "METALW0059001",
        answer: "Add power and use flaps and spoilers to brake aerodynamically",
      },
      {
        id: "METALW0059002",
        answer:
          "Apply maximum braking to reduce aircraft speed to less than hydroplaning speed, then continue\nnormal ground roll",
      },
      {
        id: "METALW0059003",
        answer:
          "Cross rudder and aileron controls in order to use the aircraft fuselage to brake aerodynamically",
      },
      {
        id: "METALW0059004",
        answer:
          "If all wheels are in motion, brake moderately. Maintain directional control by aerodynamic\nmeans",
      },
    ],
    correct: "METALW0059004",
  },
  {
    id: "ALW0060",
    question:
      " How should a landing on a contaminated runway be conducted if it proves to be inevitable? (1,00 P.)",
    answers: [
      {
        id: "METALW0060001",
        answer:
          "Approach with the minimum crosswind component possible, use minimum flaps, touch down\nsoftly with positive pitch and minimum speed, do not apply brakes",
      },
      {
        id: "METALW0060002",
        answer:
          "Approach with the minimum crosswind component possible, use maximum flaps, touch down\nwith negative pitch and minimum speed, brake carefully",
      },
      {
        id: "METALW0060003",
        answer:
          "Approach with the minimum crosswind component possible, use maximum flaps, touch down\nfirmly with minimum speed, brake carefully",
      },
      {
        id: "METALW0060004",
        answer:
          "Approach with the minimum crosswind component possible, use minimum flaps, touch down\nsoftly with minimum speed, do not apply brakes",
      },
    ],
    correct: "METALW0060003",
  },
  {
    id: "ALW0061",
    question:
      " During final approach, the glider pilot realizes a very bumpy surface on a selected off- field landing site. What technique may be recommended for landing? (1,00 P.)",
    answers: [
      {
        id: "METALW0061001",
        answer:
          "Touch down with minimum speed, compensate different ground levels with power lever",
      },
      {
        id: "METALW0061002",
        answer:
          "Approach with increased speed, push elevetor upon first ground contact",
      },
      {
        id: "METALW0061003",
        answer:
          "Touch down with minimum speed, keep elevator pulled until full stop",
      },
      {
        id: "METALW0061004",
        answer: "Approach with increased speed, avoid using wheel brakes",
      },
    ],
    correct: "METALW0061003",
  },
];

export default questions;
