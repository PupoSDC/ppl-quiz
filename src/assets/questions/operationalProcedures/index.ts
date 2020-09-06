import { Question } from "types/Questionnaire";

const questions: Question[] = [
  {
    id: "OPR0001",
    question: ' The term "flight time" is defined as... (1,00 P.)',
    answers: [
      {
        id: "OPR0001001",
        answer:
          "the period from the start of the take-off run to the final touchdown when landing.",
      },
      {
        id: "OPR0001002",
        answer:
          "the total time from the first aircraft movement until the moment it finally comes to rest at the end\nof the flight.",
      },
      {
        id: "OPR0001003",
        answer:
          "the period from engine start for the purpose of taking off to leaving the aircraft after engine\nshutdown.",
      },
      {
        id: "OPR0001004",
        answer:
          "the total time from the first take-off until the last landing in conjunction with one or more\nconsecutive flights.",
      },
    ],
    correct: "OPR0001002",
  },
  {
    id: "OPR0002",
    question:
      " What should be considered regarding a scheduled flight over water, when land cannot be reached in case of an emergency landing? (1,00 P.)",
    answers: [
      {
        id: "OPR0002001",
        answer: "Transponder code 7600 has to be set during the whole flight",
      },
      {
        id: "OPR0002002",
        answer:
          "Contact to the nearest ATC shall consist during the whole flight",
      },
      {
        id: "OPR0002003",
        answer:
          "For all passengers there must be life jackets or lifeboats present",
      },
      {
        id: "OPR0002004",
        answer: "The flight plan has to contain the exact waypoints",
      },
    ],
    correct: "OPR0002003",
  },
  {
    id: "OPR0003",
    question:
      " Which of the items below may have an influence on the noise perceived by a person on the ground? 1) Engine power setting 2) Propeller revolutions per minute 3) Position of the landing gear 4) Flap position 5) Flight track 6) Height above ground 7) Flight rules (1,00 P.)",
    answers: [
      {
        id: "OPR0003001",
        answer: "1, 2, 3, 4, 5, 6",
      },
      {
        id: "OPR0003002",
        answer: "1, 5, 6",
      },
      {
        id: "OPR0003003",
        answer: "1, 5, 6, 7",
      },
      {
        id: "OPR0003004",
        answer: "3, 4, 5, 6, 7",
      },
    ],
    correct: "OPR0003001",
  },
  {
    id: "OPR0004",
    question:
      " How can the pilot of an an engine-driven aircraft minimise the noise emission during descent and approach? (1,00 P.)",
    answers: [
      {
        id: "OPR0004001",
        answer:
          "Normal approach with normal power setting, configuration prior to initiating descent, shortest\npossible arrival route",
      },
      {
        id: "OPR0004002",
        answer:
          "Descent and approach in landing configuration while maintaining a descent angle of 3°, direct\napproach whenever possible",
      },
      {
        id: "OPR0004003",
        answer:
          "Low approach with minimum power setting, late configuration and steep approach, adherence\nto established arrival routes",
      },
      {
        id: "OPR0004004",
        answer:
          "High approach with minimum power setting, late descent, late configuration, adherence to\nestablished arrival routes",
      },
    ],
    correct: "OPR0004004",
  },
  {
    id: "OPR0005",
    question:
      " When should turns at low altitudes above villages be avoided with regard to noise abatement procedures? (1,00 P.)",
    answers: [
      {
        id: "OPR0005001",
        answer: "In descent",
      },
      {
        id: "OPR0005002",
        answer: "In climb",
      },
      {
        id: "OPR0005003",
        answer: "During the approach",
      },
      {
        id: "OPR0005004",
        answer: "In horizontal flight",
      },
    ],
    correct: "OPR0005002",
  },
  {
    id: "OPR0006",
    question: " How should departures near villages be carried out? (1,00 P.)",
    answers: [
      {
        id: "OPR0006001",
        answer: "Slow with a low propeller rotation speed",
      },
      {
        id: "OPR0006002",
        answer: "Low and fast between the villages",
      },
      {
        id: "OPR0006003",
        answer:
          "Climb and changes in direction should be done as slow as possible",
      },
      {
        id: "OPR0006004",
        answer:
          "Villages should be circumnavigated and crossed in a sufficient altitude",
      },
    ],
    correct: "OPR0006004",
  },
  {
    id: "OPR0007",
    question:
      " Which kind of engine is susceptible to carburettor fire? (1,00 P.)",
    answers: [
      {
        id: "OPR0007001",
        answer: "Piston engines",
      },
      {
        id: "OPR0007002",
        answer: "Turbine engines",
      },
      {
        id: "OPR0007003",
        answer: "Electric motors",
      },
      {
        id: "OPR0007004",
        answer: "Turboprop engines",
      },
    ],
    correct: "OPR0007001",
  },
  {
    id: "OPR0008",
    question:
      " Why is it dangerous to pump the throttle for engine start in cold weather? (1,00 P.)",
    answers: [
      {
        id: "OPR0008001",
        answer: "It may cause a carburettor fire",
      },
      {
        id: "OPR0008002",
        answer: "Carburettor icing can occur",
      },
      {
        id: "OPR0008003",
        answer: "The engine might start with not enough power",
      },
      {
        id: "OPR0008004",
        answer: "The oil will become diluted",
      },
    ],
    correct: "OPR0008001",
  },
  {
    id: "OPR0009",
    question: " Which danger exists during engine start? (1,00 P.)",
    answers: [
      {
        id: "OPR0009001",
        answer: "Cable fire",
      },
      {
        id: "OPR0009002",
        answer: "Carburettor fire",
      },
      {
        id: "OPR0009003",
        answer: "Sparking",
      },
      {
        id: "OPR0009004",
        answer: "Smoke emission",
      },
    ],
    correct: "OPR0009002",
  },
  {
    id: "OPR0010",
    question:
      " May an engine, which previously was on fire, be restarted? (1,00 P.)",
    answers: [
      {
        id: "OPR0010001",
        answer: "No, the risk of a reignition of the fire would be too high",
      },
      {
        id: "OPR0010002",
        answer: "Yes, if the aircraft is flying at a safe altitude",
      },
      {
        id: "OPR0010003",
        answer: "Yes, but only on the ground for the purpose of taxiing",
      },
      {
        id: "OPR0010004",
        answer:
          "Yes, but only if the cause of the fire was a carburettor fire during engine start",
      },
    ],
    correct: "OPR0010001",
  },
  {
    id: "OPR0011",
    question: " Which gas is most dangerous during an engine fire? (1,00 P.)",
    answers: [
      {
        id: "OPR0011001",
        answer: "Carbon monoxide",
      },
      {
        id: "OPR0011002",
        answer: "Nitrogen",
      },
      {
        id: "OPR0011003",
        answer: "Oxygen",
      },
      {
        id: "OPR0011004",
        answer: "Carbon dioxide",
      },
    ],
    correct: "OPR0011001",
  },
  {
    id: "OPR0012",
    question:
      " Smoke enters the cockpit during an engine fire. Which actions have to be taken immediately? (1,00 P.)",
    answers: [
      {
        id: "OPR0012001",
        answer: "Switching off the master switch and the ignition",
      },
      {
        id: "OPR0012002",
        answer: "Switching off the heating and the ventilating system",
      },
      {
        id: "OPR0012003",
        answer: "Switching off the pitot and front window heating",
      },
      {
        id: "OPR0012004",
        answer: "Switching off the avionics and the cabin lighting",
      },
    ],
    correct: "OPR0012002",
  },
  {
    id: "OPR0013",
    question:
      " What should be the first action in case of a cable fire during a flight? (1,00 P.)",
    answers: [
      {
        id: "OPR0013001",
        answer: "Close the fuel valve",
      },
      {
        id: "OPR0013002",
        answer: "Open the windows",
      },
      {
        id: "OPR0013003",
        answer: "Turn off the master switch",
      },
      {
        id: "OPR0013004",
        answer: "Open cabin ventialtion",
      },
    ],
    correct: "OPR0013003",
  },
  {
    id: "OPR0014",
    question:
      " What extinguishing agent is the least suitable for an aircraft fire? (1,00 P.)",
    answers: [
      {
        id: "OPR0014001",
        answer: "Powder",
      },
      {
        id: "OPR0014002",
        answer: "Halon",
      },
      {
        id: "OPR0014003",
        answer: "Water",
      },
      {
        id: "OPR0014004",
        answer: "Foam",
      },
    ],
    correct: "OPR0014003",
  },
  {
    id: "OPR0015",
    question:
      " In flight, a little smoke emerges from behind the instrument panel. An electrical fire is suspected. Which action, with respect to the pilot's operating manual, should be taken? (1,00 P.)",
    answers: [
      {
        id: "OPR0015001",
        answer: "Turn off the heat",
      },
      {
        id: "OPR0015002",
        answer: "Shut down the engine",
      },
      {
        id: "OPR0015003",
        answer: "Turn off the master switch",
      },
      {
        id: "OPR0015004",
        answer: "Use the fire extinguisher",
      },
    ],
    correct: "OPR0015003",
  },
  {
    id: "OPR0016",
    question:
      " In flight, a little smoke emerges from behind the instrument panel. An engine fire is suspected. Which action, with respect to the pilot's operating manual, should be taken? (1,00 P.)",
    answers: [
      {
        id: "OPR0016001",
        answer: "Turn off the heat",
      },
      {
        id: "OPR0016002",
        answer: "Shut down the engine",
      },
      {
        id: "OPR0016003",
        answer: "Use the fire extinguisher",
      },
      {
        id: "OPR0016004",
        answer: "Turn off the master switch",
      },
    ],
    correct: "OPR0016001",
  },
  {
    id: "OPR0017",
    question: " A wind shear is... (1,00 P.)",
    answers: [
      {
        id: "OPR0017001",
        answer:
          "a slow increase of the wind speed in altitudes above 13000 ft.",
      },
      {
        id: "OPR0017002",
        answer: "a wind speed change of more than 15 kt.",
      },
      {
        id: "OPR0017003",
        answer:
          "a vertical or horizontal change of wind speed and wind direction.",
      },
      {
        id: "OPR0017004",
        answer: "a meteorological downslope wind phenomenon in the alps.",
      },
    ],
    correct: "OPR0017003",
  },
  {
    id: "OPR0018",
    question:
      " Which weather phenomenon is typically associated with wind shear? (1,00 P.)",
    answers: [
      {
        id: "OPR0018001",
        answer: "Fog.",
      },
      {
        id: "OPR0018002",
        answer: "Invernal warm front.",
      },
      {
        id: "OPR0018003",
        answer: "Thunderstorms.",
      },
      {
        id: "OPR0018004",
        answer: "Stable high pressure areas.",
      },
    ],
    correct: "OPR0018003",
  },
  {
    id: "OPR0019",
    question: " When do you expect wind shear? (1,00 P.)",
    answers: [
      {
        id: "OPR0019001",
        answer: "During an inversion",
      },
      {
        id: "OPR0019002",
        answer: "In calm wind in cold weather",
      },
      {
        id: "OPR0019003",
        answer: "During a summer day with calm winds",
      },
      {
        id: "OPR0019004",
        answer: "When passing a warm front",
      },
    ],
    correct: "OPR0019001",
  },
  {
    id: "OPR0020",
    question:
      " During an approach the aeroplane experiences a windshear with a decreasing headwind. If the pilot does not make any corrections, how do the approach path and the indicated airspeed (IAS) change? (1,00 P.)",
    answers: [
      {
        id: "OPR0020001",
        answer: "Path is higher, IAS decreases",
      },
      {
        id: "OPR0020002",
        answer: "Path is lower, IAS increases",
      },
      {
        id: "OPR0020003",
        answer: "Path is higher, IAS increases",
      },
      {
        id: "OPR0020004",
        answer: "Path is lower, IAS decreases",
      },
    ],
    correct: "OPR0020004",
  },
  {
    id: "OPR0021",
    question:
      " During an approach the aeroplane experiences a windshear with an increasing headwind. If the pilot does not make any corrections, how do the approach path and the indicated airspeed (IAS) change? (1,00 P.)",
    answers: [
      {
        id: "OPR0021001",
        answer: "Path is higher, IAS decreases",
      },
      {
        id: "OPR0021002",
        answer: "Path is lower, IAS increases",
      },
      {
        id: "OPR0021003",
        answer: "Path is higher, IAS increases",
      },
      {
        id: "OPR0021004",
        answer: "Path is lower, IAS decreases",
      },
    ],
    correct: "OPR0021003",
    explanation:
      "the incoming Air speed is increasing, so due to momentum, you will see an increase of IAS. Also because of this, Lift will be increased in the wings, causing you to fly higher than your intended path",
  },
  {
    id: "OPR0022",
    question:
      " During an approach the aeroplane experiences a windshear with a decreasing tailwind. If the pilot does not make any corrections, how do the approach path and the indicated airspeed (IAS) change? (1,00 P.)",
    answers: [
      {
        id: "OPR0022001",
        answer: "Path is higher, IAS decreases",
      },
      {
        id: "OPR0022002",
        answer: "Path is higher, IAS increases",
      },
      {
        id: "OPR0022003",
        answer: "Path is lower, IAS decreases",
      },
      {
        id: "OPR0022004",
        answer: "Path is lower, IAS increases",
      },
    ],
    correct: "OPR0022002",
  },
  {
    id: "OPR0023",
    question:
      " After take-off an aeroplane gets into a wind shear with decreasing headwind. As a result... (1,00 P.)",
    answers: [
      {
        id: "OPR0023001",
        answer: "the aeroplane flies above the estimated climb path.",
      },
      {
        id: "OPR0023002",
        answer: "the true airspeed (TAS) will increase.",
      },
      {
        id: "OPR0023003",
        answer: "the ground speed (GS) will decrease.",
      },
      {
        id: "OPR0023004",
        answer: "the aeroplane flies below the estimated climb path.",
      },
    ],
    correct: "OPR0023004",
  },
  {
    id: "OPR0024",
    question: " How may windshear be recognised in flight? (1,00 P.)",
    answers: [
      {
        id: "OPR0024001",
        answer:
          "Sudden and apparently baseless change in altitude, airspeed, rate of climb or descent.",
      },
      {
        id: "OPR0024002",
        answer:
          "Sudden and apparently baseless change in heading, turning rate, engine speed or oil\ntemperature.",
      },
      {
        id: "OPR0024003",
        answer:
          "Sudden and apparently baseless change of oilpressure, oil temperature, engine speed and\naltitude.",
      },
      {
        id: "OPR0024004",
        answer:
          "Rather unexpected onset of drizzle associated with high stratus clouds following previously\nclear skies and calm conditions.",
      },
    ],
    correct: "OPR0024001",
  },
  {
    id: "OPR0025",
    question:
      " Which phenomenon may be expected at point 2 of the microburst? See figure (OPR-001) (1,00 P.) Siehe Anlage 1",
    answers: [
      {
        id: "OPR0025001",
        answer: "Constant rate of descent",
      },
      {
        id: "OPR0025002",
        answer: "Decrease of descent rate",
      },
      {
        id: "OPR0025003",
        answer: "Increase of airspeed",
      },
      {
        id: "OPR0025004",
        answer: "Decrease of climb rate",
      },
    ],
    correct: "OPR0025004",
  },
  {
    id: "OPR0026",
    question:
      " Which phenomenon may be expected at point 3 of the miroburst? See figure (OPR-001) (1,00 P.) Siehe Anlage 1",
    answers: [
      {
        id: "OPR0026001",
        answer: "Decrease in airspeed",
      },
      {
        id: "OPR0026002",
        answer: "Constant rate of descent",
      },
      {
        id: "OPR0026003",
        answer: "Increase in airspeed",
      },
      {
        id: "OPR0026004",
        answer: "Decrease in climb rate",
      },
    ],
    correct: "OPR0026001",
  },
  {
    id: "OPR0027",
    question: " How can a wind shear encounter in flight be avoided? (1,00 P.)",
    answers: [
      {
        id: "OPR0027001",
        answer:
          "Avoid take-off and landing during the passage of heavy showers or thunderstorms",
      },
      {
        id: "OPR0027002",
        answer:
          "Avoid areas of precipitation, particularly during winter, and choose low flight altitudes",
      },
      {
        id: "OPR0027003",
        answer:
          "Avoid take-offs and landings in mountainous terrain and stay in flat country whenever possible",
      },
      {
        id: "OPR0027004",
        answer:
          "Avoid thermally active areas, particularly during summer, or stay below these areas",
      },
    ],
    correct: "OPR0027001",
  },
  {
    id: "OPR0029",
    question:
      " After lift-off, a much stronger than expected airspeed rise is experienced during the initial climb phase. What may be expected if the aeroplane entered a microburst? (1,00 P.)",
    answers: [
      {
        id: "OPR0029001",
        answer: "An increased climb rate and decreased airspeed",
      },
      {
        id: "OPR0029002",
        answer: "An increased climb rate and airspeed",
      },
      {
        id: "OPR0029003",
        answer: "A decreased climb rate and airspeed",
      },
      {
        id: "OPR0029004",
        answer: "A decreased climb rate and increased airspeed",
      },
    ],
    correct: "OPR0029003",
  },
  {
    id: "OPR0030",
    question:
      " Immediately after lift-off, a microburst is entered inadvertently. Which action might avoid an unintentional descent? (1,00 P.)",
    answers: [
      {
        id: "OPR0030001",
        answer:
          "Set maximum power, maintain present aircraft configuration, climb at the best rate of climb\nspeed",
      },
      {
        id: "OPR0030002",
        answer:
          "Set maximum power, retract landing gear and flaps, pick up speed and perform a left or a right\nturn in an attempt to leave the area of the microburst on the shortest way",
      },
      {
        id: "OPR0030003",
        answer:
          "Set maximum power, retract landing gear and flaps, increase pitch until attaining optimum climb\nspeed",
      },
      {
        id: "OPR0030004",
        answer:
          "Set maximum power, maintain present aircraft configuration, pick up speed in an attempt to\nleave the area of the microburst as fast as possible",
      },
    ],
    correct: "OPR0030001",
  },
  {
    id: "OPR0031",
    question:
      " Wake turbulences develop during take-off just as the aeroplane... (1,00 P.)",
    answers: [
      {
        id: "OPR0031001",
        answer: "reaches an altitude of 15 ft.",
      },
      {
        id: "OPR0031002",
        answer: "lifts off with the main gear.",
      },
      {
        id: "OPR0031003",
        answer: "lifts off with the front gear.",
      },
      {
        id: "OPR0031004",
        answer: "accelerates.",
      },
    ],
    correct: "OPR0031003",
  },
  {
    id: "OPR0032",
    question: " Wake turbulence is caused by... (1,00 P.)",
    answers: [
      {
        id: "OPR0032001",
        answer: "wind shear at the wingtip of an aerofoil.",
      },
      {
        id: "OPR0032002",
        answer: "jet blast behind a turbine engine.",
      },
      {
        id: "OPR0032003",
        answer: "turbulence at the downwind side of a mountain range.",
      },
      {
        id: "OPR0032004",
        answer: "pressure compensation at the wingtip of an aerofoil.",
      },
    ],
    correct: "OPR0032004",
  },
  {
    id: "OPR0033",
    question: " Wake turbulence is particularly strong... (1,00 P.)",
    answers: [
      {
        id: "OPR0033001",
        answer: "when flying at high speeds.",
      },
      {
        id: "OPR0033002",
        answer: "when flying at high altitudes.",
      },
      {
        id: "OPR0033003",
        answer: "when flying at low speeds.",
      },
      {
        id: "OPR0033004",
        answer: "when flying at low altitudes.",
      },
    ],
    correct: "OPR0033003",
  },
  {
    id: "OPR0034",
    question: " Wake turbulence is particularly strong... (1,00 P.)",
    answers: [
      {
        id: "OPR0034001",
        answer: "at a high aeroplane weight.",
      },
      {
        id: "OPR0034002",
        answer: "when flying with high thrust.",
      },
      {
        id: "OPR0034003",
        answer: "when flying with low thrust.",
      },
      {
        id: "OPR0034004",
        answer: "at a low aeroplane weight.",
      },
    ],
    correct: "OPR0034001",
  },
  {
    id: "OPR0035",
    question: " The intensity of wake turbulence depends on... (1,00 P.)",
    answers: [
      {
        id: "OPR0035001",
        answer: "the propeller pitch.",
      },
      {
        id: "OPR0035002",
        answer: "the temperature.",
      },
      {
        id: "OPR0035003",
        answer: "the weight of the aeroplane.",
      },
      {
        id: "OPR0035004",
        answer: "the altitude of the aeroplane.",
      },
    ],
    correct: "OPR0035003",
  },
  {
    id: "OPR0036",
    question:
      " Two aircraft of the same type, same grossweight and same configuration fly at different airspeeds. Which aircraft will cause more severe wake turbulence? (1,00 P.)",
    answers: [
      {
        id: "OPR0036001",
        answer: "The aircraft flying at lower altitude.",
      },
      {
        id: "OPR0036002",
        answer: "The aircraft flying at slower speed.",
      },
      {
        id: "OPR0036003",
        answer: "The aircraft flying at higher speed.",
      },
      {
        id: "OPR0036004",
        answer: "The aircraft flying at higher altitude.",
      },
    ],
    correct: "OPR0036002",
  },
  {
    id: "OPR0037",
    question:
      " Two aircraft of the same type, same gross weight and same flap configuration fly with different speeds and altitude. Which aircraft will cause more wake turbulence? (1,00 P.)",
    answers: [
      {
        id: "OPR0037001",
        answer: "The aircraft flying at a higher altitude",
      },
      {
        id: "OPR0037002",
        answer: "The aircraft flying at a lower altitude",
      },
      {
        id: "OPR0037003",
        answer: "The aircraft flying at higher speed.",
      },
      {
        id: "OPR0037004",
        answer: "The aircraft flying at lower speed.",
      },
    ],
    correct: "OPR0037004",
  },
  {
    id: "OPR0038",
    question:
      " With only a slight crosswind, what is the danger at take-off after the departure of a heavy aeroplane? (1,00 P.)",
    answers: [
      {
        id: "OPR0038001",
        answer: "Wake turbulence on or near the runway.",
      },
      {
        id: "OPR0038002",
        answer: "Wake turbulence is amplified and distorted.",
      },
      {
        id: "OPR0038003",
        answer: "Wake turbulence rotate faster and higher.",
      },
      {
        id: "OPR0038004",
        answer: "Wake turbulence twisting transverse to the runway.",
      },
    ],
    correct: "OPR0038001",
  },
  {
    id: "OPR0039",
    question:
      ' A light aircraft intends to land behind a commercial airliner belonging to wake turbulence category "medium" or "heavy" on a long runway. How can the wake turbulence of the commercial aircraft be avoided? (1,00 P.)',
    answers: [
      {
        id: "OPR0039001",
        answer:
          "By making a steep approach and a long landing, touching down behind the touchdown point of\nthe airliner's nose gear",
      },
      {
        id: "OPR0039002",
        answer:
          "By making a steep approach and a very short landing. The light aircraft should be able to stop\nbefore reaching the airliner's touchdown point",
      },
      {
        id: "OPR0039003",
        answer:
          "By making a shallow approach and a long landing, touching down behind the touchdown point\nof the airliner's nose gear",
      },
      {
        id: "OPR0039004",
        answer:
          "By making a shallow approach and a very short landing. The light aircraft should be able to stop\nbefore reaching the airliner's touchdown point",
      },
    ],
    correct: "OPR0039001",
  },
  {
    id: "OPR0040",
    question:
      " What should be observed when taxiing behind a commercial airliner? (1,00 P.)",
    answers: [
      {
        id: "OPR0040001",
        answer:
          "To avoid wake turbulence, a minimum distance of 700 m should be maintained",
      },
      {
        id: "OPR0040002",
        answer:
          "To avoid the jet blast, a minimum distance of 600 m should be maintained",
      },
      {
        id: "OPR0040003",
        answer:
          "To avoid wake turbulence, a minimum distance of 300 m should be maintained",
      },
      {
        id: "OPR0040004",
        answer:
          "To avoid the jet blast, a minimum distance of 200 m should be maintained",
      },
    ],
    correct: "OPR0040004",
  },
  {
    id: "OPR0041",
    question:
      " A technical fault requires an emergency off-field landing. Which steps, with respect to the pilot's operating handbook, are necessary? (1,00 P.)",
    answers: [
      {
        id: "OPR0041001",
        answer:
          "Inform air traffic control and request technical support, check the pilot's operating handbook for\na reference on the matter and execute an emergency landing.",
      },
      {
        id: "OPR0041002",
        answer:
          "Reduce speed and configure the aircraft for landing in an attempt to gain time, declare an\nemergency, complete the applicable emergency procedure and execute an emergency landing.",
      },
      {
        id: "OPR0041003",
        answer:
          "Locate a suitable landing area, plan the approach, complete the applicable emergency\nprocedure, declare an emergency, start and concentrate on the approach in due time.",
      },
      {
        id: "OPR0041004",
        answer:
          "Declare an emergency, complete the applicable emergency procedure, cover as much distance\ntowards the airport as possible to be closer to the rescue forces.",
      },
    ],
    correct: "OPR0041003",
  },
  {
    id: "OPR0042",
    question:
      " Which method is appropriate to approach an unprepared landing field? (1,00 P.)",
    answers: [
      {
        id: "OPR0042001",
        answer: "Flat direct approach to ensure visual ground contact",
      },
      {
        id: "OPR0042002",
        answer: "Steep approach to keep the noise level low",
      },
      {
        id: "OPR0042003",
        answer:
          "Fast approach, performance check, and landing within a quick stop",
      },
      {
        id: "OPR0042004",
        answer:
          "Terrain investigation to determine approach points and landing",
      },
    ],
    correct: "OPR0042004",
  },
  {
    id: "OPR0043",
    question: " Which area is suitable for an off-field landing? (1,00 P.)",
    answers: [
      {
        id: "OPR0043001",
        answer: "Harvested cornfield",
      },
      {
        id: "OPR0043002",
        answer: "Glade with long dry grass",
      },
      {
        id: "OPR0043003",
        answer: "Plowed field",
      },
      {
        id: "OPR0043004",
        answer: "Sports area in a village",
      },
    ],
    correct: "OPR0043001",
  },
  {
    id: "OPR0044",
    question: " An emergency landing is a landing... (1,00 P.)",
    answers: [
      {
        id: "OPR0044001",
        answer: "conducted without power from the engine.",
      },
      {
        id: "OPR0044002",
        answer:
          "conducted in an attempt to keep up safety regarding an aircraft and its occupants.",
      },
      {
        id: "OPR0044003",
        answer: "conducted with the flaps retracted.",
      },
      {
        id: "OPR0044004",
        answer:
          "conducted in response to circumstances forcing the aircraft to land.",
      },
    ],
    correct: "OPR0044004",
  },
  {
    id: "OPR0045",
    question:
      " A landing conducted in response to circumstances forcing the aircraft to land is a / an... (1,00 P.)",
    answers: [
      {
        id: "OPR0045001",
        answer: "precautionary landing.",
      },
      {
        id: "OPR0045002",
        answer: "urgent landing.",
      },
      {
        id: "OPR0045003",
        answer: "emergency landing.",
      },
      {
        id: "OPR0045004",
        answer: "field or out landing.",
      },
    ],
    correct: "OPR0045003",
  },
  {
    id: "OPR0046",
    question: " A precautionary landing is a landing... (1,00 P.)",
    answers: [
      {
        id: "OPR0046001",
        answer: "conducted without power from the engine.",
      },
      {
        id: "OPR0046002",
        answer:
          "conducted in response to circumstances forcing the aircraft to land.",
      },
      {
        id: "OPR0046003",
        answer: "conducted in an attempt to sustain flight safety.",
      },
      {
        id: "OPR0046004",
        answer: "conducted with the flaps retracted.",
      },
    ],
    correct: "OPR0046003",
  },
  {
    id: "OPR0047",
    question:
      " Which of the following landing areas is most suitable for an off-field landing? (1,00 P.)",
    answers: [
      {
        id: "OPR0047001",
        answer: "A lake with an undisturbed surface",
      },
      {
        id: "OPR0047002",
        answer: "A light brown field with short crops",
      },
      {
        id: "OPR0047003",
        answer: "A meadow without livestock",
      },
      {
        id: "OPR0047004",
        answer: "A field with ripe waving crops",
      },
    ],
    correct: "OPR0047002",
  },
  {
    id: "OPR0048",
    question:
      " How does the pilot prepare for a VFR flight over a large distance of water, when it is unlikely that land can be reached in case of an engine failure? (1,00 P.)",
    answers: [
      {
        id: "OPR0048001",
        answer: "File a flight plan including the exact way-points.",
      },
      {
        id: "OPR0048002",
        answer: "Be prepared to fly with transponder only.",
      },
      {
        id: "OPR0048003",
        answer: "Carry life vests or a life raft for all occupants.",
      },
      {
        id: "OPR0048004",
        answer: "Maintain continuous radio contact with ATC.",
      },
    ],
    correct: "OPR0048003",
  },
  {
    id: "OPR0049",
    question:
      " Which items should a passenger briefing in case of an imminent emergency landing include? (1,00 P.)",
    answers: [
      {
        id: "OPR0049001",
        answer:
          "How to work the aircraft radio, emergency transponder squawk, telephone number of the\ncompetent search and rescue (SAR) center",
      },
      {
        id: "OPR0049002",
        answer:
          "Blood type of the other aircraft occupants, location of the first-aid kit",
      },
      {
        id: "OPR0049003",
        answer:
          "Nature of the emergency, intentions, safety position, evacuation routes, actions after landing",
      },
      {
        id: "OPR0049004",
        answer:
          "How to read an emergency checklist, how to cut the engine, telephone number of the home\nairport",
      },
    ],
    correct: "OPR0049003",
  },
  {
    id: "OPR0050",
    question:
      " After a precautionary landing the brakes and wheels are very hot. In which way should the pilot approach them? (1,00 P.)",
    answers: [
      {
        id: "OPR0050001",
        answer: "From the right or left side",
      },
      {
        id: "OPR0050002",
        answer: "At an angle of 45°",
      },
      {
        id: "OPR0050003",
        answer: "From the front or back side",
      },
      {
        id: "OPR0050004",
        answer: "From the front, right or left side",
      },
    ],
    correct: "OPR0050003",
  },
  {
    id: "OPR0051",
    question:
      " What needs to be observed in conjunction with overheated brakes? (1,00 P.)",
    answers: [
      {
        id: "OPR0051001",
        answer: "The affected brakes need to be cooled down with halon",
      },
      {
        id: "OPR0051002",
        answer: "The affected tyres may burst in axial direction",
      },
      {
        id: "OPR0051003",
        answer:
          "The affected tyres may burst in radial direction or direction of rotation",
      },
      {
        id: "OPR0051004",
        answer: "The wheel fairing shall be taken off to increase the cooldown",
      },
    ],
    correct: "OPR0051002",
  },
  {
    id: "OPR0052",
    question:
      " In case of an emergency ditching, the life vests have to be inflated... (1,00 P.)",
    answers: [
      {
        id: "OPR0052001",
        answer: "before disembarking the aircraft.",
      },
      {
        id: "OPR0052002",
        answer: "during disembarking the aircraft.",
      },
      {
        id: "OPR0052003",
        answer:
          "after disembarking the aircraft at a safe distance of about 10 m.",
      },
      {
        id: "OPR0052004",
        answer: "after disembarking the aircraft.",
      },
    ],
    correct: "OPR0052004",
  },
  {
    id: "OPR0053",
    question:
      " What are the effects of wet grass on the take-off and landing distance? (1,00 P.)",
    answers: [
      {
        id: "OPR0053001",
        answer:
          "Decrease of the take-off distance and increase of the landing distance",
      },
      {
        id: "OPR0053002",
        answer:
          "Increase of the take-off distance and increase of the landing distance",
      },
      {
        id: "OPR0053003",
        answer:
          "Decrease of the take-off distance and decrease of the landing distance",
      },
      {
        id: "OPR0053004",
        answer:
          "Increase of the take-off distance and decrease of the landing distance",
      },
    ],
    correct: "OPR0053002",
  },
  {
    id: "OPR0054",
    question:
      " Under which circumstances may a runway be considered to be contaminated? (1, P.)",
    answers: [
      {
        id: "OPR0054001",
        answer:
          "When more than 25 % of the runway surface area within the required length and width being\nused is covered by water, slush, snow or ice more than 3 mm deep",
      },
      {
        id: "OPR0054002",
        answer:
          "When 75 % of the required runway length and width are covered by contaminants such as\nsnow, frost, ice or sand",
      },
      {
        id: "OPR0054003",
        answer:
          "When more than 50 % of the runway surface area within the required length and width being\nused is covered by water, slush, snow or ice more than 3 mm deep",
      },
      {
        id: "OPR0054004",
        answer:
          "When more than 50 % of the required runway length and width are covered by contaminants\nsuch as snow, frost, ice or sand",
      },
    ],
    correct: "OPR0054001",
  },
  {
    id: "OPR0055",
    question:
      ' What minimum coverage with ice or snow must be given to call a runway "contaminated"? (1,00 P.)',
    answers: [
      {
        id: "OPR0055001",
        answer: "50 %",
      },
      {
        id: "OPR0055002",
        answer: "25 %",
      },
      {
        id: "OPR0055003",
        answer: "10 %",
      },
      {
        id: "OPR0055004",
        answer: "75 %",
      },
    ],
    correct: "OPR0055002",
  },
  {
    id: "OPR0056",
    question: " Wet snow on a runway can lead to... (1,00 P.)",
    answers: [
      {
        id: "OPR0056001",
        answer: "an increase in lift.",
      },
      {
        id: "OPR0056002",
        answer: "a decrease in lift.",
      },
      {
        id: "OPR0056003",
        answer: "reduced rolling resistance during take-off.",
      },
      {
        id: "OPR0056004",
        answer: "increased rolling resistance during take-off.",
      },
    ],
    correct: "OPR0056004",
  },
  {
    id: "OPR0057",
    question:
      " What danger does standing water on the runway pose to aircraft? (1,00 P.)",
    answers: [
      {
        id: "OPR0057001",
        answer: "Decreased rolling resistance during take-off",
      },
      {
        id: "OPR0057002",
        answer: "An increase in lift",
      },
      {
        id: "OPR0057003",
        answer: "Increased rolling resistance during take-off",
      },
      {
        id: "OPR0057004",
        answer: "A decrease in lift",
      },
    ],
    correct: "OPR0057003",
  },
  {
    id: "OPR0058",
    question:
      " Which danger exists after a heavy rain shower for a landing aircraft? (1,00 P.)",
    answers: [
      {
        id: "OPR0058001",
        answer: "Displacement of the tire slip marking",
      },
      {
        id: "OPR0058002",
        answer: "Difficult flare due to glare",
      },
      {
        id: "OPR0058003",
        answer: "Longer braking distance due to aquaplaning",
      },
      {
        id: "OPR0058004",
        answer: "Decreased braking distance due to aquaplaning",
      },
    ],
    correct: "OPR0058003",
  },
  {
    id: "OPR0059",
    question:
      " Which would be the correct reaction when hydroplaning is suspected upon landing? (1,00 P.)",
    answers: [
      {
        id: "OPR0059001",
        answer: "Add power and use flaps and spoilers to brake aerodynamically",
      },
      {
        id: "OPR0059002",
        answer:
          "Apply maximum braking to reduce aircraft speed to less than hydroplaning speed, then continue\nnormal ground roll",
      },
      {
        id: "OPR0059003",
        answer:
          "Cross rudder and aileron controls in order to use the aircraft fuselage to brake aerodynamically",
      },
      {
        id: "OPR0059004",
        answer:
          "If all wheels are in motion, brake moderately. Maintain directional control by aerodynamic\nmeans",
      },
    ],
    correct: "OPR0059004",
  },
  {
    id: "OPR0060",
    question:
      " How should a landing on a contaminated runway be conducted if it proves to be inevitable? (1,00 P.)",
    answers: [
      {
        id: "OPR0060001",
        answer:
          "Approach with the minimum crosswind component possible, use minimum flaps, touch down\nsoftly with positive pitch and minimum speed, do not apply brakes",
      },
      {
        id: "OPR0060002",
        answer:
          "Approach with the minimum crosswind component possible, use maximum flaps, touch down\nwith negative pitch and minimum speed, brake carefully",
      },
      {
        id: "OPR0060003",
        answer:
          "Approach with the minimum crosswind component possible, use maximum flaps, touch down\nfirmly with minimum speed, brake carefully",
      },
      {
        id: "OPR0060004",
        answer:
          "Approach with the minimum crosswind component possible, use minimum flaps, touch down\nsoftly with minimum speed, do not apply brakes",
      },
    ],
    correct: "OPR0060003",
  },
  {
    id: "OPR0061",
    question:
      " During final approach, the glider pilot realizes a very bumpy surface on a selected off- field landing site. What technique may be recommended for landing? (1,00 P.)",
    answers: [
      {
        id: "OPR0061001",
        answer:
          "Touch down with minimum speed, compensate different ground levels with power lever",
      },
      {
        id: "OPR0061002",
        answer:
          "Approach with increased speed, push elevetor upon first ground contact",
      },
      {
        id: "OPR0061003",
        answer:
          "Touch down with minimum speed, keep elevator pulled until full stop",
      },
      {
        id: "OPR0061004",
        answer: "Approach with increased speed, avoid using wheel brakes",
      },
    ],
    correct: "OPR0061003",
  },
];

export default questions;
