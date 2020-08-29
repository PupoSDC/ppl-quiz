import { Question } from "types/Questionnaire";

const questions: Question[] = [
  {
    id: "ALW0001",
    question:
      " What clouds and weather may result from an humid and instable air mass, that is pushed against a chain of mountains by the predominant wind and forced to rise? (1,00 P.)",
    answers: [
      {
        id: "METALW0001001",
        answer:
          "Embedded CB with thunderstorms and showers of hail and/or rain.",
      },
      {
        id: "METALW0001002",
        answer:
          "Thin Altostratus and Cirrostratus clouds with light and steady precipitation.",
      },
      {
        id: "METALW0001003",
        answer: "Overcast low stratus (high fog) with no precipitation.",
      },
      {
        id: "METALW0001004",
        answer:
          "Smooth, unstructured NS cloud with light drizzle or snow (during winter).",
      },
    ],
    correct: "METALW0001001",
  },
  {
    id: "ALW0002",
    question:
      " What type of fog emerges if humid and almost saturated air, is forced to rise upslope of hills or shallow mountains by the prevailling wind? (1,00 P.)",
    answers: [
      {
        id: "METALW0002001",
        answer: "Orographic fog",
      },
      {
        id: "METALW0002002",
        answer: "Steaming fog",
      },
      {
        id: "METALW0002003",
        answer: "Radiation fog",
      },
      {
        id: "METALW0002004",
        answer: "Advection fog",
      },
    ],
    correct: "METALW0002001",
  },
  {
    id: "ALW0003",
    question:
      ' What situation is called "over-development" in a weather report? (1,00 P.)',
    answers: [
      {
        id: "METALW0003001",
        answer: "Vertical development of Cumulus clouds to rain showers",
      },
      {
        id: "METALW0003002",
        answer: "Widespreading of Cumulus clouds below an inversion layer",
      },
      {
        id: "METALW0003003",
        answer:
          "Change from blue thermals to cloudy thermals during the afternoon",
      },
      {
        id: "METALW0003004",
        answer: "Development of a thermal low to a storm depression",
      },
    ],
    correct: "METALW0003001",
  },
  {
    id: "ALW0004",
    question: ' What is the gas composition of "air"? (1,00 P.)',
    answers: [
      {
        id: "METALW0004001",
        answer:
          "Oxygen 21 % Water vapour 78 % Noble gases / carbon dioxide 1 %",
      },
      {
        id: "METALW0004002",
        answer: "Oxygen 78 % Water vapour 21 % Nitrogen 1 %",
      },
      {
        id: "METALW0004003",
        answer: "Nitrogen 21 % Oxygen 78 % Noble gases / carbon dioxide 1 %",
      },
      {
        id: "METALW0004004",
        answer: "Oxygen 21 % Nitrogen 78 % Noble gases / carbon dioxide 1 %",
      },
    ],
    correct: "METALW0004004",
  },
  {
    id: "ALW0005",
    question:
      " Weather phenomena are most common to be found in which atmospheric layer? (1, P.)",
    answers: [
      {
        id: "METALW0005001",
        answer: "Stratosphere",
      },
      {
        id: "METALW0005002",
        answer: "Tropopause",
      },
      {
        id: "METALW0005003",
        answer: "Thermosphere",
      },
      {
        id: "METALW0005004",
        answer: "Troposphere",
      },
    ],
    correct: "METALW0005004",
  },
  {
    id: "ALW0006",
    question:
      ' What is the mass of a "cube of air" with the edges 1 m long, at MSL according ISA? (1,00 P.)',
    answers: [
      {
        id: "METALW0006001",
        answer: "1,225 kg",
      },
      {
        id: "METALW0006002",
        answer: "0,01225 kg",
      },
      {
        id: "METALW0006003",
        answer: "0,1225 kg",
      },
      {
        id: "METALW0006004",
        answer: "12,25 kg",
      },
    ],
    correct: "METALW0006001",
  },
  {
    id: "ALW0007",
    question:
      " At what rate does the temperature change with increasing height according to ISA (ICAO Standard Atmosphere) within the troposphere? (1,00 P.)",
    answers: [
      {
        id: "METALW0007001",
        answer: "Decreases by 2° C / 1000 ft",
      },
      {
        id: "METALW0007002",
        answer: "Increases by 2° C / 1000 ft",
      },
      {
        id: "METALW0007003",
        answer: "Decreases by 2° C / 100 m",
      },
      {
        id: "METALW0007004",
        answer: "Increases by 2° C / 100 m",
      },
    ],
    correct: "METALW0007001",
  },
  {
    id: "ALW0008",
    question:
      " What is the mean height of the tropopause according to ISA (ICAO Standard Atmosphere)? (1,00 P.)",
    answers: [
      {
        id: "METALW0008001",
        answer: "18000 ft",
      },
      {
        id: "METALW0008002",
        answer: "11000 ft",
      },
      {
        id: "METALW0008003",
        answer: "11000 m",
      },
      {
        id: "METALW0008004",
        answer: "36000 m",
      },
    ],
    correct: "METALW0008003",
  },
  {
    id: "ALW0009",
    question: ' The term "tropopause" is defined as... (1,00 P.)',
    answers: [
      {
        id: "METALW0009001",
        answer:
          "the layer above the troposphere showing an increasing temperature.",
      },
      {
        id: "METALW0009002",
        answer:
          "the boundary area between the mesosphere and the stratosphere.",
      },
      {
        id: "METALW0009003",
        answer:
          "the boundary area between the troposphere and the stratosphere.",
      },
      {
        id: "METALW0009004",
        answer: "the height above which the temperature starts to decrease.",
      },
    ],
    correct: "METALW0009003",
  },
  {
    id: "ALW0010",
    question:
      " Temperatures will be given by meteorological aviation services in Europe in which unit? (1,00 P.)",
    answers: [
      {
        id: "METALW0010001",
        answer: "Degrees Centigrade (° C)",
      },
      {
        id: "METALW0010002",
        answer: "Kelvin",
      },
      {
        id: "METALW0010003",
        answer: "Gpdam",
      },
      {
        id: "METALW0010004",
        answer: "Degrees Fahrenheit",
      },
    ],
    correct: "METALW0010001",
  },
  {
    id: "ALW0011",
    question: ' What is meant by "inversion layer"? (1,00 P.)',
    answers: [
      {
        id: "METALW0011001",
        answer:
          "An atmospheric layer where temperature decreases with increasing height",
      },
      {
        id: "METALW0011002",
        answer:
          "A boundary area between two other layers within the atmosphere",
      },
      {
        id: "METALW0011003",
        answer:
          "An atmospheric layer with constant temperature with increasing height",
      },
      {
        id: "METALW0011004",
        answer:
          "An atmospheric layer where temperature increases with increasing height",
      },
    ],
    correct: "METALW0011004",
  },
  {
    id: "ALW0012",
    question: ' What is meant by "isothermal layer"? (1,00 P.)',
    answers: [
      {
        id: "METALW0012001",
        answer:
          "An atmospheric layer where temperature increases with increasing height",
      },
      {
        id: "METALW0012002",
        answer:
          "An atmospheric layer where temperature decreases with increasing height",
      },
      {
        id: "METALW0012003",
        answer:
          "A boundary area between two other layers within the atmosphere",
      },
      {
        id: "METALW0012004",
        answer:
          "An atmospheric layer with constant temperature with increasing height",
      },
    ],
    correct: "METALW0012004",
  },
  {
    id: "ALW0013",
    question:
      " The temperature lapse rate with increasing height within the troposphere according ISA is... (1,00 P.)",
    answers: [
      {
        id: "METALW0013001",
        answer: "0,65° C / 100 m.",
      },
      {
        id: "METALW0013002",
        answer: "3° C / 100 m.",
      },
      {
        id: "METALW0013003",
        answer: "1° C / 100 m.",
      },
      {
        id: "METALW0013004",
        answer: "0,6° C / 100 m.",
      },
    ],
    correct: "METALW0013001",
  },
  {
    id: "ALW0014",
    question:
      " Which process may result in an inversion layer at about 5000 ft (1500 m) height? (1, P.)",
    answers: [
      {
        id: "METALW0014001",
        answer: "Intensive sunlight insolation during a warm summer day",
      },
      {
        id: "METALW0014002",
        answer: "Widespread descending air within a high pressure area",
      },
      {
        id: "METALW0014003",
        answer: "Ground cooling by radiation during the night",
      },
      {
        id: "METALW0014004",
        answer: "Advection of cool air in the upper troposphere",
      },
    ],
    correct: "METALW0014002",
  },
  {
    id: "ALW0015",
    question:
      " An inversion layer close to the ground can be caused by... (1,00 P.)",
    answers: [
      {
        id: "METALW0015001",
        answer: "ground cooling during the night.",
      },
      {
        id: "METALW0015002",
        answer: "large-scale lifting of air.",
      },
      {
        id: "METALW0015003",
        answer: "intensifying and gusting winds.",
      },
      {
        id: "METALW0015004",
        answer: "thickening of clouds in medium layers.",
      },
    ],
    correct: "METALW0015001",
  },
  {
    id: "ALW0016",
    question:
      " What is the ISA standard pressure at FL 180 (5500 m)? (1,00 P.)",
    answers: [
      {
        id: "METALW0016001",
        answer: "250 hPa",
      },
      {
        id: "METALW0016002",
        answer: "300 hPa",
      },
      {
        id: "METALW0016003",
        answer: "1013.25 hPa",
      },
      {
        id: "METALW0016004",
        answer: "500 hPa",
      },
    ],
    correct: "METALW0016004",
  },
  {
    id: "ALW0017",
    question:
      " The pressure which is measured at a ground station and reduced to mean sea level (MSL) by means of the actual atmospheric conditions is called... (1,00 P.)",
    answers: [
      {
        id: "METALW0017001",
        answer: "QNH.",
      },
      {
        id: "METALW0017002",
        answer: "QNE.",
      },
      {
        id: "METALW0017003",
        answer: "QFE.",
      },
      {
        id: "METALW0017004",
        answer: "QFF.",
      },
    ],
    correct: "METALW0017004",
  },
  {
    id: "ALW0018",
    question: " Which processes result in decreasing air density? (1,00 P.)",
    answers: [
      {
        id: "METALW0018001",
        answer: "Decreasing temperature, increasing pressure",
      },
      {
        id: "METALW0018002",
        answer: "Increasing temperature, decreasing pressure",
      },
      {
        id: "METALW0018003",
        answer: "Increasing temperature, increasing pressure",
      },
      {
        id: "METALW0018004",
        answer: "Decreasing temperature, decreasing pressure",
      },
    ],
    correct: "METALW0018002",
  },
  {
    id: "ALW0019",
    question: " The pressure at MSL in ISA conditions is... (1,00 P.)",
    answers: [
      {
        id: "METALW0019001",
        answer: "113.25 hPa.",
      },
      {
        id: "METALW0019002",
        answer: "15 hPa.",
      },
      {
        id: "METALW0019003",
        answer: "1013.25 hPa.",
      },
      {
        id: "METALW0019004",
        answer: "1123 hPa.",
      },
    ],
    correct: "METALW0019003",
  },
  {
    id: "ALW0020",
    question:
      " The height of the tropopause of the International Standard Atmosphere (ISA) is at... (1,00 P.)",
    answers: [
      {
        id: "METALW0020001",
        answer: "5500 ft.",
      },
      {
        id: "METALW0020002",
        answer: "11000 ft.",
      },
      {
        id: "METALW0020003",
        answer: "36000 ft.",
      },
      {
        id: "METALW0020004",
        answer: "48000 ft.",
      },
    ],
    correct: "METALW0020003",
  },
  {
    id: "ALW0021",
    question: " The barometric altimeter indicates height above... (1,00 P.)",
    answers: [
      {
        id: "METALW0021001",
        answer: "a correct reference pressure level.",
      },
      {
        id: "METALW0021002",
        answer: "mean sea level.",
      },
      {
        id: "METALW0021003",
        answer: "standard pressure 1013.25 hPa.",
      },
      {
        id: "METALW0021004",
        answer: "ground.",
      },
    ],
    correct: "METALW0021001",
  },
  {
    id: "ALW0022",
    question:
      " The altimeter can be checked on the ground by setting... (1,00 P.)",
    answers: [
      {
        id: "METALW0022001",
        answer: "QFE and comparing the indication with the airfield elevation.",
      },
      {
        id: "METALW0022002",
        answer: "QNH and comparing the indication with the airfield elevation.",
      },
      {
        id: "METALW0022003",
        answer:
          "QNE and checking that the indication shows zero on the ground.",
      },
      {
        id: "METALW0022004",
        answer: "QFF and comparing the indication with the airfield elevation.",
      },
    ],
    correct: "METALW0022002",
  },
  {
    id: "ALW0023",
    question:
      " The barometric altimeter with QFE setting indicates... (1,00 P.)",
    answers: [
      {
        id: "METALW0023001",
        answer: "height above the pressure level at airfield elevation.",
      },
      {
        id: "METALW0023002",
        answer: "true altitude above MSL.",
      },
      {
        id: "METALW0023003",
        answer: "height above MSL.",
      },
      {
        id: "METALW0023004",
        answer: "height above standard pressure 1013.25 hPa.",
      },
    ],
    correct: "METALW0023001",
  },
  {
    id: "ALW0024",
    question:
      " The barometric altimeter with QNH setting indicates... (1,00 P.)",
    answers: [
      {
        id: "METALW0024001",
        answer: "height above standard pressure 1013.25 hPa.",
      },
      {
        id: "METALW0024002",
        answer: "height above the pressure level at airfield elevation.",
      },
      {
        id: "METALW0024003",
        answer: "true altitude above MSL.",
      },
      {
        id: "METALW0024004",
        answer: "height above MSL.",
      },
    ],
    correct: "METALW0024004",
  },
  {
    id: "ALW0025",
    question:
      " Given the following information, what is the true altitude? (rounded to the nearest 50 ft) QNH: 983 hPa Altitude: FL 85 Outside Air Temperature: ISA - 10° (1,00 P.)",
    answers: [
      {
        id: "METALW0025001",
        answer: "7900 ft",
      },
      {
        id: "METALW0025002",
        answer: "9400 ft",
      },
      {
        id: "METALW0025003",
        answer: "7300 ft",
      },
      {
        id: "METALW0025004",
        answer: "7600 ft",
      },
    ],
    correct: "METALW0025003",
  },
  {
    id: "ALW0026",
    question:
      " How can wind speed and wind direction be derived from surface weather charts? (1, P.)",
    answers: [
      {
        id: "METALW0026001",
        answer: "By alignment and distance of isobaric lines",
      },
      {
        id: "METALW0026002",
        answer: "By alignment and distance of hypsometric lines",
      },
      {
        id: "METALW0026003",
        answer: "By alignment of lines of warm- and cold fronts.",
      },
      {
        id: "METALW0026004",
        answer: "By annotations from the text part of the chart",
      },
    ],
    correct: "METALW0026001",
  },
  {
    id: "ALW0027",
    question: ' Which force causes "wind"? (1,00 P.)',
    answers: [
      {
        id: "METALW0027001",
        answer: "Centrifugal force",
      },
      {
        id: "METALW0027002",
        answer: "Thermal force",
      },
      {
        id: "METALW0027003",
        answer: "Coriolis force",
      },
      {
        id: "METALW0027004",
        answer: "Pressure gradient force",
      },
    ],
    correct: "METALW0027004",
  },
  {
    id: "ALW0028",
    question:
      " Above the friction layer, with a prevailing pressure gradient, the wind direction is... (1,00 P.)",
    answers: [
      {
        id: "METALW0028001",
        answer: "perpendicular to the isohypses.",
      },
      {
        id: "METALW0028002",
        answer: "at an angle of 30° to the isobars towards low pressure.",
      },
      {
        id: "METALW0028003",
        answer: "parallel to the isobars.",
      },
      {
        id: "METALW0028004",
        answer: "perpendicular to the isobars.",
      },
    ],
    correct: "METALW0028003",
  },
  {
    id: "ALW0029",
    question:
      " Which of the stated surfaces will reduce the wind speed most due to ground friction? (1,00 P.)",
    answers: [
      {
        id: "METALW0029001",
        answer: "Flat land, deserted land, no vegetation",
      },
      {
        id: "METALW0029002",
        answer: "Oceanic areas",
      },
      {
        id: "METALW0029003",
        answer: "Mountainous areas, vegetation cover",
      },
      {
        id: "METALW0029004",
        answer: "Flat land, lots of vegetation cover",
      },
    ],
    correct: "METALW0029003",
  },
  {
    id: "ALW0030",
    question: " The movement of air flowing together is called... (1,00 P.)",
    answers: [
      {
        id: "METALW0030001",
        answer: "convergence.",
      },
      {
        id: "METALW0030002",
        answer: "divergence.",
      },
      {
        id: "METALW0030003",
        answer: "soncordence.",
      },
      {
        id: "METALW0030004",
        answer: "subsidence.",
      },
    ],
    correct: "METALW0030001",
  },
  {
    id: "ALW0031",
    question: " The movement of air flowing apart is called... (1,00 P.)",
    answers: [
      {
        id: "METALW0031001",
        answer: "convergence.",
      },
      {
        id: "METALW0031002",
        answer: "concordence.",
      },
      {
        id: "METALW0031003",
        answer: "divergence.",
      },
      {
        id: "METALW0031004",
        answer: "subsidence.",
      },
    ],
    correct: "METALW0031003",
  },
  {
    id: "ALW0032",
    question:
      " What weather development will result from convergence at ground level? (1,00 P.)",
    answers: [
      {
        id: "METALW0032001",
        answer: "Descending air and cloud formation",
      },
      {
        id: "METALW0032002",
        answer: "Ascending air and cloud dissipation",
      },
      {
        id: "METALW0032003",
        answer: "Descending air and cloud dissipation",
      },
      {
        id: "METALW0032004",
        answer: "Ascending air and cloud formation",
      },
    ],
    correct: "METALW0032004",
  },
  {
    id: "ALW0033",
    question:
      " When air masses meet each other head on, how is this referred to and what air movements will follow? (1,00 P.)",
    answers: [
      {
        id: "METALW0033001",
        answer: "Convergence resulting in sinking air",
      },
      {
        id: "METALW0033002",
        answer: "Divergence resulting in sinking air",
      },
      {
        id: "METALW0033003",
        answer: "Convergence resulting in air being lifted",
      },
      {
        id: "METALW0033004",
        answer: "Divergence resulting in air being lifted",
      },
    ],
    correct: "METALW0033003",
  },
  {
    id: "ALW0034",
    question:
      " What are the air masses that Central Europe is mainly influenced by? (1,00 P.)",
    answers: [
      {
        id: "METALW0034001",
        answer: "Arctic and polar cold air",
      },
      {
        id: "METALW0034002",
        answer: "Polar cold air and tropical warm air",
      },
      {
        id: "METALW0034003",
        answer: "Equatorial and tropical warm air",
      },
      {
        id: "METALW0034004",
        answer: "Tropical and arctic cold air",
      },
    ],
    correct: "METALW0034002",
  },
  {
    id: "ALW0035",
    question:
      " With regard to global circulation within the atmosphere, where does polar cold air meets subtropical warm air? (1,00 P.)",
    answers: [
      {
        id: "METALW0035001",
        answer: "At the equator",
      },
      {
        id: "METALW0035002",
        answer: "At the geographic poles",
      },
      {
        id: "METALW0035003",
        answer: "At the subtropical high pressure belt",
      },
      {
        id: "METALW0035004",
        answer: "At the polar front",
      },
    ],
    correct: "METALW0035004",
  },
  {
    id: "ALW0036",
    question: " Winds blowing uphill are defined as... (1,00 P.)",
    answers: [
      {
        id: "METALW0036001",
        answer: "katabatic winds.",
      },
      {
        id: "METALW0036002",
        answer: "anabatic winds.",
      },
      {
        id: "METALW0036003",
        answer: "convergent winds.",
      },
      {
        id: "METALW0036004",
        answer: "subsident winds.",
      },
    ],
    correct: "METALW0036002",
  },
  {
    id: "ALW0037",
    question: " Winds blowing downhill are defined as... (1,00 P.)",
    answers: [
      {
        id: "METALW0037001",
        answer: "anabatic winds.",
      },
      {
        id: "METALW0037002",
        answer: "katabatic winds.",
      },
      {
        id: "METALW0037003",
        answer: "convergent winds.",
      },
      {
        id: "METALW0037004",
        answer: "subsident winds.",
      },
    ],
    correct: "METALW0037002",
  },
  {
    id: "ALW0038",
    question:
      " Air descending behind a mountain range is defined as... (1,00 P.)",
    answers: [
      {
        id: "METALW0038001",
        answer: "katabatic wind.",
      },
      {
        id: "METALW0038002",
        answer: "convergent wind.",
      },
      {
        id: "METALW0038003",
        answer: "anabatic wind.",
      },
      {
        id: "METALW0038004",
        answer: "divergent wind.",
      },
    ],
    correct: "METALW0038001",
  },
  {
    id: "ALW0039",
    question: ' "Foehn" conditions usually develop with... (1,00 P.)',
    answers: [
      {
        id: "METALW0039001",
        answer: "instability, widespread air blown against a mountain ridge.",
      },
      {
        id: "METALW0039002",
        answer: "stability, widespread air blown against a mountain ridge.",
      },
      {
        id: "METALW0039003",
        answer: "instability, high pressure area with calm wind.",
      },
      {
        id: "METALW0039004",
        answer: "stability, high pressure area with calm wind.",
      },
    ],
    correct: "METALW0039002",
  },
  {
    id: "ALW0040",
    question:
      " What type of turbulence is typically found close to the ground on the lee side during Foehn conditions? (1,00 P.)",
    answers: [
      {
        id: "METALW0040001",
        answer: "Inversion turbulence",
      },
      {
        id: "METALW0040002",
        answer: "Turbulence in rotors",
      },
      {
        id: "METALW0040003",
        answer: "Clear-air turbulence (CAT)",
      },
      {
        id: "METALW0040004",
        answer: "Thermal turbulence",
      },
    ],
    correct: "METALW0040002",
  },
  {
    id: "ALW0041",
    question: " Light turbulence always has to be expected... (1,00 P.)",
    answers: [
      {
        id: "METALW0041001",
        answer: "above cumulus clouds due to thermal convection.",
      },
      {
        id: "METALW0041002",
        answer: "below stratiform clouds in medium layers.",
      },
      {
        id: "METALW0041003",
        answer: "when entering inversions.",
      },
      {
        id: "METALW0041004",
        answer: "below cumulus clouds due to thermal convection.",
      },
    ],
    correct: "METALW0041004",
  },
  {
    id: "ALW0042",
    question: " Moderate to severe turbulence has to be expected... (1,00 P.)",
    answers: [
      {
        id: "METALW0042001",
        answer:
          "with the appearance of extended low stratus clouds (high fog).",
      },
      {
        id: "METALW0042002",
        answer: "overhead unbroken cloud layers.",
      },
      {
        id: "METALW0042003",
        answer:
          "below thick cloud layers on the windward side of a mountain range.",
      },
      {
        id: "METALW0042004",
        answer:
          "on the lee side of a mountain range when rotor clouds are present.",
      },
    ],
    correct: "METALW0042004",
  },
  {
    id: "ALW0043",
    question:
      " Which answer contains every state of water found in the atmosphere? (1,00 P.)",
    answers: [
      {
        id: "METALW0043001",
        answer: "Liquid and solid",
      },
      {
        id: "METALW0043002",
        answer: "Liquid, solid, and gaseous",
      },
      {
        id: "METALW0043003",
        answer: "Gaseous and liquid",
      },
      {
        id: "METALW0043004",
        answer: "Liquid",
      },
    ],
    correct: "METALW0043002",
  },
  {
    id: "ALW0044",
    question:
      " How do dew point and relative humidity change with decreasing temperature? (1, P.)",
    answers: [
      {
        id: "METALW0044001",
        answer: "Dew point remains constant, relative humidity decreases",
      },
      {
        id: "METALW0044002",
        answer: "Dew point decreases, relative humidity increases",
      },
      {
        id: "METALW0044003",
        answer: "Dew point increases, relative humidity decreases",
      },
      {
        id: "METALW0044004",
        answer: "Dew point remains constant, relative humidity increases",
      },
    ],
    correct: "METALW0044004",
  },
  {
    id: "ALW0045",
    question:
      " How do spread and relative humidity change with increasing temperature? (1,00 P.)",
    answers: [
      {
        id: "METALW0045001",
        answer: "Spread increases, relative humidity decreases",
      },
      {
        id: "METALW0045002",
        answer: "Spread remains constant, relative humidity decreases",
      },
      {
        id: "METALW0045003",
        answer: "Spread increases, relative humidity increases",
      },
      {
        id: "METALW0045004",
        answer: "Spread remains constant, relative humidity increases",
      },
    ],
    correct: "METALW0045001",
  },
  {
    id: "ALW0046",
    question: ' The "spread" is defined as... (1,00 P.)',
    answers: [
      {
        id: "METALW0046001",
        answer: "relation of actual to maximum possible humidity of air.",
      },
      {
        id: "METALW0046002",
        answer: "maximum amount of water vapour that can be contained in air.",
      },
      {
        id: "METALW0046003",
        answer: "difference between dew point and condensation point.",
      },
      {
        id: "METALW0046004",
        answer: "difference between actual temperature and dew point.",
      },
    ],
    correct: "METALW0046004",
  },
  {
    id: "ALW0047",
    question:
      " With other factors remaining constant, decreasing temperature results in... (1,00 P.)",
    answers: [
      {
        id: "METALW0047001",
        answer: "decreasing spread and decreasing relative humidity.",
      },
      {
        id: "METALW0047002",
        answer: "increasing spread and decreasing relative humidity.",
      },
      {
        id: "METALW0047003",
        answer: "increasing spread and increasing relative humidity.",
      },
      {
        id: "METALW0047004",
        answer: "decreasing spread and increasing relative humidity.",
      },
    ],
    correct: "METALW0047004",
  },
  {
    id: "ALW0048",
    question:
      " What process causes latent heat being released into the upper troposphere? (1,00 P.)",
    answers: [
      {
        id: "METALW0048001",
        answer: "Descending air across widespread areas",
      },
      {
        id: "METALW0048002",
        answer: "Stabilisation of inflowing air masses",
      },
      {
        id: "METALW0048003",
        answer: "Cloud forming due to condensation",
      },
      {
        id: "METALW0048004",
        answer: "Evaporation over widespread water areas",
      },
    ],
    correct: "METALW0048003",
  },
  {
    id: "ALW0049",
    question: " The saturated adiabatic lapse rate is... (1,00 P.)",
    answers: [
      {
        id: "METALW0049001",
        answer: "lower than the dry adiabatic lapse rate.",
      },
      {
        id: "METALW0049002",
        answer: "proportional to the dry adiabatic lapse rate.",
      },
      {
        id: "METALW0049003",
        answer: "higher than the dry adiabatic lapse rate.",
      },
      {
        id: "METALW0049004",
        answer: "equal to the dry adiabatic lapse rate.",
      },
    ],
    correct: "METALW0049001",
  },
  {
    id: "ALW0050",
    question: " The dry adiabatic lapse rate has a value of... (1,00 P.)",
    answers: [
      {
        id: "METALW0050001",
        answer: "1,0° C / 100 m.",
      },
      {
        id: "METALW0050002",
        answer: "2° / 1000 ft.",
      },
      {
        id: "METALW0050003",
        answer: "0,6° C / 100 m.",
      },
      {
        id: "METALW0050004",
        answer: "0,65° C / 100 m.",
      },
    ],
    correct: "METALW0050001",
  },
  {
    id: "ALW0051",
    question:
      " The saturated adiabatic lapse rate should be assumed with a mean value of: (1,00 P.)",
    answers: [
      {
        id: "METALW0051001",
        answer: "1,0° C / 100 m.",
      },
      {
        id: "METALW0051002",
        answer: "0° C / 100 m.",
      },
      {
        id: "METALW0051003",
        answer: "0,6° C / 100 m.",
      },
      {
        id: "METALW0051004",
        answer: "2° C / 1000 ft.",
      },
    ],
    correct: "METALW0051003",
  },
  {
    id: "ALW0052",
    question:
      " What weather conditions may be expected during conditionally unstable conditions? (1,00 P.)",
    answers: [
      {
        id: "METALW0052001",
        answer: "Layered clouds up to high levels, prolonged rain or snow",
      },
      {
        id: "METALW0052002",
        answer: "Shallow cumulus clouds with base at medium levels",
      },
      {
        id: "METALW0052003",
        answer: "Sky clear of clouds, sunshine, low winds",
      },
      {
        id: "METALW0052004",
        answer: "Towering cumulus, isolated showers of rain or thunderstorms",
      },
    ],
    correct: "METALW0052004",
  },
  {
    id: "ALW0053",
    question:
      " Which conditions are likely for the formation of advection fog? (1,00 P.)",
    answers: [
      {
        id: "METALW0053001",
        answer: "Cold, humid air moves over a warm ocean",
      },
      {
        id: "METALW0053002",
        answer: "Warm, humid air moves over a cold surface",
      },
      {
        id: "METALW0053003",
        answer: "Warm, humid air cools during a cloudy night",
      },
      {
        id: "METALW0053004",
        answer: "Humidity evaporates from warm, humid ground into cold air",
      },
    ],
    correct: "METALW0053002",
  },
  {
    id: "ALW0054",
    question: " Clouds are basically distinguished by what types? (1,00 P.)",
    answers: [
      {
        id: "METALW0054001",
        answer: "Stratiform and ice clouds",
      },
      {
        id: "METALW0054002",
        answer: "Layered and lifted clouds",
      },
      {
        id: "METALW0054003",
        answer: "Cumulus and stratiform clouds",
      },
      {
        id: "METALW0054004",
        answer: "Thunderstorm and shower clouds",
      },
    ],
    correct: "METALW0054003",
  },
  {
    id: "ALW0055",
    question: " Clouds in high layers are referred to as... (1,00 P.)",
    answers: [
      {
        id: "METALW0055001",
        answer: "Nimbo-.",
      },
      {
        id: "METALW0055002",
        answer: "Strato-.",
      },
      {
        id: "METALW0055003",
        answer: "Alto-.",
      },
      {
        id: "METALW0055004",
        answer: "Cirro-.",
      },
    ],
    correct: "METALW0055004",
  },
  {
    id: "ALW0056",
    question:
      ' What weather phenomenon designated by "2" has to be expected on the lee side during "Foehn" conditions? See figure (MET-001). (1,00 P.) Siehe Anlage 1',
    answers: [
      {
        id: "METALW0056001",
        answer: "Altocumulus Castellanus",
      },
      {
        id: "METALW0056002",
        answer: "Nimbostratus",
      },
      {
        id: "METALW0056003",
        answer: "Cumulonimbus",
      },
      {
        id: "METALW0056004",
        answer: "Altocumulus lenticularis",
      },
    ],
    correct: "METALW0056004",
  },
  {
    id: "ALW0057",
    question:
      " What cloud type does the picture show? See figure (MET-002). (1,00 P.) Siehe Anlage 2",
    answers: [
      {
        id: "METALW0057001",
        answer: "Stratus",
      },
      {
        id: "METALW0057002",
        answer: "Cumulus",
      },
      {
        id: "METALW0057003",
        answer: "Altus",
      },
      {
        id: "METALW0057004",
        answer: "Cirrus",
      },
    ],
    correct: "METALW0057002",
  },
  {
    id: "ALW0058",
    question:
      " What cloud type does the picture show? See figure (MET-004). (1,00 P.) Siehe Anlage 3",
    answers: [
      {
        id: "METALW0058001",
        answer: "Altocumulus",
      },
      {
        id: "METALW0058002",
        answer: "Cumulus",
      },
      {
        id: "METALW0058003",
        answer: "Stratus",
      },
      {
        id: "METALW0058004",
        answer: "Cirrus",
      },
    ],
    correct: "METALW0058004",
  },
  {
    id: "ALW0059",
    question: " What factor may affect the top of cumulus clouds? (1,00 P.)",
    answers: [
      {
        id: "METALW0059001",
        answer: "Relative humidity",
      },
      {
        id: "METALW0059002",
        answer: "The spread",
      },
      {
        id: "METALW0059003",
        answer: "The presence of an inversion layer",
      },
      {
        id: "METALW0059004",
        answer: "The absolute humidity",
      },
    ],
    correct: "METALW0059003",
  },
  {
    id: "ALW0060",
    question:
      " What factors may indicate a tendency to fog formation? (1,00 P.)",
    answers: [
      {
        id: "METALW0060001",
        answer: "Low pressure, increasing temperature",
      },
      {
        id: "METALW0060002",
        answer: "Low spread, decreasing temperature",
      },
      {
        id: "METALW0060003",
        answer: "Low spread, increasing temperature",
      },
      {
        id: "METALW0060004",
        answer: "Strong winds, decreasing temperature",
      },
    ],
    correct: "METALW0060002",
  },
  {
    id: "ALW0061",
    question:
      ' What condition may prevent the formation of "radiation fog"? (1,00 P.)',
    answers: [
      {
        id: "METALW0061001",
        answer: "Overcast cloud cover",
      },
      {
        id: "METALW0061002",
        answer: "Calm wind",
      },
      {
        id: "METALW0061003",
        answer: "Low spread",
      },
      {
        id: "METALW0061004",
        answer: "Clear night, no clouds",
      },
    ],
    correct: "METALW0061001",
  },
  {
    id: "ALW0062",
    question:
      ' What process results in the formation of "advection fog"? (1,00 P.)',
    answers: [
      {
        id: "METALW0062001",
        answer: "Cold, moist air is being moved across warm ground areas",
      },
      {
        id: "METALW0062002",
        answer: "Warm, moist air is moved across cold ground areas",
      },
      {
        id: "METALW0062003",
        answer: "Cold, moist air mixes with warm, moist air",
      },
      {
        id: "METALW0062004",
        answer: "Prolonged radiation during nights clear of clouds",
      },
    ],
    correct: "METALW0062002",
  },
  {
    id: "ALW0063",
    question:
      ' What process results in the formation of "orographic fog" ("hill fog")? (1,00 P.)',
    answers: [
      {
        id: "METALW0063001",
        answer: "Prolonged radiation during nights clear of clouds",
      },
      {
        id: "METALW0063002",
        answer: "Warm, moist air is moved across a hill or a mountain range",
      },
      {
        id: "METALW0063003",
        answer: "Cold, moist air mixes with warm, moist air",
      },
      {
        id: "METALW0063004",
        answer: "Evaporation from warm, moist ground area into very cold air",
      },
    ],
    correct: "METALW0063002",
  },
  {
    id: "ALW0064",
    question:
      " What factors are required for the formation of precipitation in clouds? (1,00 P.)",
    answers: [
      {
        id: "METALW0064001",
        answer: "High humidity and high temperatures",
      },
      {
        id: "METALW0064002",
        answer: "The presence of an inversion layer",
      },
      {
        id: "METALW0064003",
        answer: "Calm winds and intensive sunlight insolation",
      },
      {
        id: "METALW0064004",
        answer: "Moderate to strong updrafts",
      },
    ],
    correct: "METALW0064004",
  },
  {
    id: "ALW0065",
    question:
      " The formation of medium to large precipitation particles requires... (1,00 P.)",
    answers: [
      {
        id: "METALW0065001",
        answer: "a high cloud base.",
      },
      {
        id: "METALW0065002",
        answer: "strong wind.",
      },
      {
        id: "METALW0065003",
        answer: "an inversion layer.",
      },
      {
        id: "METALW0065004",
        answer: "strong updrafts.",
      },
    ],
    correct: "METALW0065004",
  },
  {
    id: "ALW0066",
    question:
      " Which type of cloud is associated with prolonged rain? (1,00 P.)",
    answers: [
      {
        id: "METALW0066001",
        answer: "Cumulonimbus",
      },
      {
        id: "METALW0066002",
        answer: "Cirrostratus",
      },
      {
        id: "METALW0066003",
        answer: "Nimbostratus",
      },
      {
        id: "METALW0066004",
        answer: "Altocumulus",
      },
    ],
    correct: "METALW0066003",
  },
  {
    id: "ALW0067",
    question:
      " Regarding the type of cloud, precipitation is classified as... (1,00 P.)",
    answers: [
      {
        id: "METALW0067001",
        answer: "light and heavy precipitation.",
      },
      {
        id: "METALW0067002",
        answer: "showers of snow and rain.",
      },
      {
        id: "METALW0067003",
        answer: "prolonged rain and continuous rain.",
      },
      {
        id: "METALW0067004",
        answer: "rain and showers of rain.",
      },
    ],
    correct: "METALW0067004",
  },
  {
    id: "ALW0068",
    question:
      " How is an air mass described when moving to Central Europe via the Russian continent during winter? (1,00 P.)",
    answers: [
      {
        id: "METALW0068001",
        answer: "Maritime tropical air",
      },
      {
        id: "METALW0068002",
        answer: "Continental tropical air",
      },
      {
        id: "METALW0068003",
        answer: "Continental polar air",
      },
      {
        id: "METALW0068004",
        answer: "Maritime polar air",
      },
    ],
    correct: "METALW0068003",
  },
  {
    id: "ALW0069",
    question:
      " The character of an air mass is given by what properties? (1,00 P.)",
    answers: [
      {
        id: "METALW0069001",
        answer: "Temperatures at origin and present region",
      },
      {
        id: "METALW0069002",
        answer: "Wind speed and tropopause height",
      },
      {
        id: "METALW0069003",
        answer: "Region of origin and track during movement",
      },
      {
        id: "METALW0069004",
        answer: "Environmental lapse rate at origin",
      },
    ],
    correct: "METALW0069003",
  },
  {
    id: "ALW0070",
    question:
      " The symbol labeled (1) as shown in the picture is a / an... See figure (MET-005) (1,00 P.) Siehe Anlage 4",
    answers: [
      {
        id: "METALW0070001",
        answer: "front aloft.",
      },
      {
        id: "METALW0070002",
        answer: "occlusion.",
      },
      {
        id: "METALW0070003",
        answer: "warm front.",
      },
      {
        id: "METALW0070004",
        answer: "cold front.",
      },
    ],
    correct: "METALW0070004",
  },
  {
    id: "ALW0071",
    question:
      " The symbol labeled (2) as shown in the picture is a / an... See figure (MET-005) (1,00 P.) Siehe Anlage 4",
    answers: [
      {
        id: "METALW0071001",
        answer: "front aloft.",
      },
      {
        id: "METALW0071002",
        answer: "cold front.",
      },
      {
        id: "METALW0071003",
        answer: "warm front.",
      },
      {
        id: "METALW0071004",
        answer: "occlusion.",
      },
    ],
    correct: "METALW0071003",
  },
  {
    id: "ALW0072",
    question:
      " The symbol labeled (3) as shown in the picture is a / an... See figure (MET-005) (1,00 P.) Siehe Anlage 4",
    answers: [
      {
        id: "METALW0072001",
        answer: "front aloft.",
      },
      {
        id: "METALW0072002",
        answer: "warm front.",
      },
      {
        id: "METALW0072003",
        answer: "cold front.",
      },
      {
        id: "METALW0072004",
        answer: "occlusion.",
      },
    ],
    correct: "METALW0072004",
  },
  {
    id: "ALW0073",
    question:
      " What cloud sequence can typically be observed during the passage of a warm front? (1,00 P.)",
    answers: [
      {
        id: "METALW0073001",
        answer:
          "In coastal areas during daytime wind from the coast and forming of cumulus clouds, dissipation of clouds during evening and night",
      },
      {
        id: "METALW0073002",
        answer:
          "Wind becoming calm, dissipation of clouds and warming during summer; formation of extended high fog layers during winter",
      },
      {
        id: "METALW0073003",
        answer:
          "Squall line with showers of rain and thunderstorms (Cb), gusting wind followed by cumulus clouds with isolated showers of rain",
      },
      {
        id: "METALW0073004",
        answer:
          "Cirrus, thickening altostratus and altocumulus clouds, lowering cloud base with rain, nimbostratus",
      },
    ],
    correct: "METALW0073004",
  },
  {
    id: "ALW0074",
    question:
      " What clouds and weather can typically be observed during the passage of a cold front? (1,00 P.)",
    answers: [
      {
        id: "METALW0074001",
        answer:
          "In coastal areas during daytime wind from the coast and forming of cumulus clouds, dissipation of clouds during evening and night",
      },
      {
        id: "METALW0074002",
        answer:
          "Strongly developed cumulus clouds (Cb) with showers of rain and thunderstorms, gusting wind followed by cumulus clouds with isolated showers of rain",
      },
      {
        id: "METALW0074003",
        answer:
          "Cirrus, thickening altostratus and altocumulus clouds, lowering cloud base with rain, nimbostratus",
      },
      {
        id: "METALW0074004",
        answer:
          "Wind becoming calm, dissipation of clouds and warming during summer; formation of extended high fog layers during winter",
      },
    ],
    correct: "METALW0074002",
  },
  {
    id: "ALW0075",
    question:
      " What visual flight conditions can be expected within the warm sector of a polar front low during summer time? (1,00 P.)",
    answers: [
      {
        id: "METALW0075001",
        answer: "Visibilty less than 1000 m, cloud-covered ground",
      },
      {
        id: "METALW0075002",
        answer: "Good visibility, some isolated high clouds",
      },
      {
        id: "METALW0075003",
        answer: "Moderate to good visibility, scattered clouds",
      },
      {
        id: "METALW0075004",
        answer: "Moderate visibility, heavy showers and thunderstorms",
      },
    ],
    correct: "METALW0075003",
  },
  {
    id: "ALW0076",
    question:
      " What visual flight conditions can be expected after the passage of a cold front? (1, P.)",
    answers: [
      {
        id: "METALW0076001",
        answer:
          "Scattered cloud layers, visbility more than 5 km, formation of shallow cumulus clouds",
      },
      {
        id: "METALW0076002",
        answer:
          "Good visiblity, formation of cumulus clouds with showers of rain or snow",
      },
      {
        id: "METALW0076003",
        answer:
          "Medium visibility with lowering cloud bases, onset of prolonged precipitation",
      },
      {
        id: "METALW0076004",
        answer:
          "Poor visibility, formation of overcast or ground-covering stratus clouds, snow",
      },
    ],
    correct: "METALW0076002",
  },
  {
    id: "ALW0077",
    question:
      " A boundary between a cold polar air mass and a warm subtropical air mass showing no horizontal displacement is called... (1,00 P.)",
    answers: [
      {
        id: "METALW0077001",
        answer: "cold front.",
      },
      {
        id: "METALW0077002",
        answer: "warm front.",
      },
      {
        id: "METALW0077003",
        answer: "occluded front.",
      },
      {
        id: "METALW0077004",
        answer: "stationary front.",
      },
    ],
    correct: "METALW0077004",
  },
  {
    id: "ALW0078",
    question:
      " What is the usual direction of movement of a polar front low? (1,00 P.)",
    answers: [
      {
        id: "METALW0078001",
        answer:
          "To the northwest during winter, to the southwest during summer",
      },
      {
        id: "METALW0078002",
        answer:
          "To the northeast during winter, to the southeast during summer",
      },
      {
        id: "METALW0078003",
        answer: "Parallel to the warm front line to the south",
      },
      {
        id: "METALW0078004",
        answer: "Parallel to the the warm-sector isobars",
      },
    ],
    correct: "METALW0078004",
  },
  {
    id: "ALW0079",
    question:
      " What pressure pattern can be observed during the passage of a polar front low? (1, P.)",
    answers: [
      {
        id: "METALW0079001",
        answer:
          "Rising pressure in front of the warm front, constant pressure within the warm sector, rising pressure behind the cold front",
      },
      {
        id: "METALW0079002",
        answer:
          "Falling pressure in front of the warm front, constant pressure within the warm sector, rising pressure behind the cold front",
      },
      {
        id: "METALW0079003",
        answer:
          "Falling pressure in front of the warm front, constant pressure within the warm sector, falling pressure behind the cold front",
      },
      {
        id: "METALW0079004",
        answer:
          "Rising pressure in front of the warm front, rising pressure within the warm sector, falling pressure behind the cold front",
      },
    ],
    correct: "METALW0079002",
  },
  {
    id: "ALW0080",
    question:
      " What pressure pattern can be observed when a cold front is passing? (1,00 P.)",
    answers: [
      {
        id: "METALW0080001",
        answer: "Continually decreasing pressure",
      },
      {
        id: "METALW0080002",
        answer: "Shortly decreasing, thereafter increasing pressure",
      },
      {
        id: "METALW0080003",
        answer: "Continually increasing pressure",
      },
      {
        id: "METALW0080004",
        answer: "Constant pressure pattern",
      },
    ],
    correct: "METALW0080002",
  },
  {
    id: "ALW0081",
    question:
      " What change of wind direction can be expected during the passage of a polar front low in Central Europe? (1,00 P.)",
    answers: [
      {
        id: "METALW0081001",
        answer:
          "Backing wind during passage of the warm front, veering wind during passage of the cold front",
      },
      {
        id: "METALW0081002",
        answer:
          "Backing wind during passage of the warm front, backing wind during passage of the cold front",
      },
      {
        id: "METALW0081003",
        answer:
          "Veering wind during passage of the warm front, veering wind during passage of the cold front",
      },
      {
        id: "METALW0081004",
        answer:
          "Veering wind during passage of the warm front, backing wind during passage of the cold front",
      },
    ],
    correct: "METALW0081003",
  },
  {
    id: "ALW0082",
    question:
      " Extensive high pressure areas can be found throughout the year ... (1,00 P.)",
    answers: [
      {
        id: "METALW0082001",
        answer: "in areeas showing extensive lifting processes.",
      },
      {
        id: "METALW0082002",
        answer: "in mid latitudes along the polar front",
      },
      {
        id: "METALW0082003",
        answer: "over oceanic areas at latitues around 30°N/S.",
      },
      {
        id: "METALW0082004",
        answer: "in tropical areas, close to the equator.",
      },
    ],
    correct: "METALW0082003",
  },
  {
    id: "ALW0083",
    question:
      " What cloud type can typically be observed across widespread high pressure areas during summer? (1,00 P.)",
    answers: [
      {
        id: "METALW0083001",
        answer: "Overcast low stratus",
      },
      {
        id: "METALW0083002",
        answer: "Scattered Cu clouds",
      },
      {
        id: "METALW0083003",
        answer: "Overcast Ns clouds",
      },
      {
        id: "METALW0083004",
        answer: "Squall lines and thunderstorms",
      },
    ],
    correct: "METALW0083002",
  },
  {
    id: "ALW0084",
    question:
      " What pressure pattern may result from cold-air inflow in high tropospheric layers? (1,00 P.)",
    answers: [
      {
        id: "METALW0084001",
        answer: "Formation of a low in the upper troposphere",
      },
      {
        id: "METALW0084002",
        answer: "Formation of a high in the upper troposphere",
      },
      {
        id: "METALW0084003",
        answer: "Formation of a large ground low",
      },
      {
        id: "METALW0084004",
        answer: "Alternating pressure",
      },
    ],
    correct: "METALW0084001",
  },
  {
    id: "ALW0085",
    question:
      " Cold air inflow in high tropospheric layers may result in... (1,00 P.)",
    answers: [
      {
        id: "METALW0085001",
        answer: "showers and thunderstorms.",
      },
      {
        id: "METALW0085002",
        answer: "stabilisation and calm weather.",
      },
      {
        id: "METALW0085003",
        answer: "frontal weather.",
      },
      {
        id: "METALW0085004",
        answer: "calm weather and cloud dissipation.",
      },
    ],
    correct: "METALW0085001",
  },
  {
    id: "ALW0086",
    question:
      " How does inflowing cold air affect the shape and vertical distance between pressure layers? (1,00 P.)",
    answers: [
      {
        id: "METALW0086001",
        answer: "Increasing vertical distance, raise in height (high pressure)",
      },
      {
        id: "METALW0086002",
        answer: "Decreasing vertical distance, raise in height (high pressure)",
      },
      {
        id: "METALW0086003",
        answer:
          "Decrease in vertical distance, lowering in height (low pressure)",
      },
      {
        id: "METALW0086004",
        answer:
          "Increase in vertical distance, lowering in height (low pressure)",
      },
    ],
    correct: "METALW0086003",
  },
  {
    id: "ALW0087",
    question:
      " What weather phenomena have to be expected around an upper-level trough? (1,00 P.)",
    answers: [
      {
        id: "METALW0087001",
        answer: "Calm wind, forming of shallow cumulus clouds",
      },
      {
        id: "METALW0087002",
        answer: "Calm weather, formation of lifted fog layers",
      },
      {
        id: "METALW0087003",
        answer: "Formation of high stratus clouds, ground-covering cloud bases",
      },
      {
        id: "METALW0087004",
        answer: "Development of showers and thunderstorms (Cb)",
      },
    ],
    correct: "METALW0087004",
  },
  {
    id: "ALW0088",
    question:
      " What frontal line divides subtropical air from polar cold air, in particular across Central Europe? (1,00 P.)",
    answers: [
      {
        id: "METALW0088001",
        answer: "Occlusion",
      },
      {
        id: "METALW0088002",
        answer: "Cold front",
      },
      {
        id: "METALW0088003",
        answer: "Polar front",
      },
      {
        id: "METALW0088004",
        answer: "Warm front",
      },
    ],
    correct: "METALW0088003",
  },
  {
    id: "ALW0089",
    question:
      " What weather conditions can be expected in high pressure areas during summer? (1,00 P.)",
    answers: [
      {
        id: "METALW0089001",
        answer: "Changing weather with passing of frontal lines",
      },
      {
        id: "METALW0089002",
        answer: "Squall lines and thunderstorms",
      },
      {
        id: "METALW0089003",
        answer: "Calm winds and widespread areas with high fog",
      },
      {
        id: "METALW0089004",
        answer: "Calm weather and cloud dissipation, few high Cu",
      },
    ],
    correct: "METALW0089004",
  },
  {
    id: "ALW0090",
    question:
      " What weather conditions in Central Europe are typically found in high pressure areas during summer? (1,00 P.)",
    answers: [
      {
        id: "METALW0090001",
        answer:
          "Large isobar spacing with calm winds, formation of local wind systems",
      },
      {
        id: "METALW0090002",
        answer: "Large isobar spacing with strong prevailing westerly winds",
      },
      {
        id: "METALW0090003",
        answer:
          "Small isobar spacing with calm winds, formation of local wind systems",
      },
      {
        id: "METALW0090004",
        answer: "Small isobar spacing with strong prevailing northerly winds",
      },
    ],
    correct: "METALW0090001",
  },
  {
    id: "ALW0091",
    question:
      " What weather conditions can be expected in high pressure areas during winter? (1, P.)",
    answers: [
      {
        id: "METALW0091001",
        answer: "Changing weather with passing of frontal lines",
      },
      {
        id: "METALW0091002",
        answer: "Calm weather and cloud dissipation, few high Cu",
      },
      {
        id: "METALW0091003",
        answer: "Calm winds and widespread areas with high fog",
      },
      {
        id: "METALW0091004",
        answer: "Squall lines and thunderstorms",
      },
    ],
    correct: "METALW0091003",
  },
  {
    id: "ALW0092",
    question:
      " What wind conditions can be expected in areas showing large distances between isobars? (1,00 P.)",
    answers: [
      {
        id: "METALW0092001",
        answer:
          "Formation of local wind systems with strong prevailing westerly winds",
      },
      {
        id: "METALW0092002",
        answer: "Strong prevailing easterly winds with rapid backing",
      },
      {
        id: "METALW0092003",
        answer: "Strong prevailing westerly winds with rapid veering",
      },
      {
        id: "METALW0092004",
        answer: "Variable winds, formation of local wind systems",
      },
    ],
    correct: "METALW0092004",
  },
  {
    id: "ALW0093",
    question:
      ' What weather conditions can be expected during "Foehn" on the windward side of a mountain range? (1,00 P.)',
    answers: [
      {
        id: "METALW0093001",
        answer:
          "Dissipating clouds with unusual warming, accompanied by strong, gusty winds",
      },
      {
        id: "METALW0093002",
        answer: "Scattered cumulus clouds with showers and thunderstorms",
      },
      {
        id: "METALW0093003",
        answer:
          "Layered clouds, mountains obscured, poor visibility, moderate or heavy rain",
      },
      {
        id: "METALW0093004",
        answer: "Calm wind and forming of high stratus clouds (high fog)",
      },
    ],
    correct: "METALW0093003",
  },
  {
    id: "ALW0094",
    question:
      " Which of the stated wind phenomena will increase in speed since its path is narrowed by mountains? (1,00 P.)",
    answers: [
      {
        id: "METALW0094001",
        answer: "Bora",
      },
      {
        id: "METALW0094002",
        answer: "Mistral",
      },
      {
        id: "METALW0094003",
        answer: "Scirocco",
      },
      {
        id: "METALW0094004",
        answer: "Passat",
      },
    ],
    correct: "METALW0094002",
  },
  {
    id: "ALW0095",
    question:
      " What is the name of the the cold, katabatic wind phenomena blowing from northeast into the Adriatic Sea? (1,00 P.)",
    answers: [
      {
        id: "METALW0095001",
        answer: "Scirocco",
      },
      {
        id: "METALW0095002",
        answer: "Mistral",
      },
      {
        id: "METALW0095003",
        answer: "Bora",
      },
      {
        id: "METALW0095004",
        answer: "Passat",
      },
    ],
    correct: "METALW0095003",
  },
  {
    id: "ALW0096",
    question:
      " Which of the following conditions are most favourable for ice accretion? (1,00 P.)",
    answers: [
      {
        id: "METALW0096001",
        answer:
          "Temperatures between 0° C and -12° C, presence of supercooled water droplets (clouds)",
      },
      {
        id: "METALW0096002",
        answer: "Temperaturs below 0° C, strong wind, sky clear of clouds",
      },
      {
        id: "METALW0096003",
        answer:
          "Temperatures between +10° C and -30° C, presence of hail (clouds)",
      },
      {
        id: "METALW0096004",
        answer:
          "Temperatures between -20° C and -40° C, presence of ice crystals (Ci clouds)",
      },
    ],
    correct: "METALW0096001",
  },
  {
    id: "ALW0097",
    question:
      " What temperatures are most dangerous with respect to airframe icing? (1,00 P.)",
    answers: [
      {
        id: "METALW0097001",
        answer: "+5° to -10° C",
      },
      {
        id: "METALW0097002",
        answer: "0° to -12° C",
      },
      {
        id: "METALW0097003",
        answer: "- 20° to -40° C",
      },
      {
        id: "METALW0097004",
        answer: "+20° to -5° C",
      },
    ],
    correct: "METALW0097002",
  },
  {
    id: "ALW0098",
    question:
      " Which type of ice forms by very small water droplets and ice crystals hitting the front surfaces of an aircraft? (1,00 P.)",
    answers: [
      {
        id: "METALW0098001",
        answer: "Clear ice",
      },
      {
        id: "METALW0098002",
        answer: "Mixed ice",
      },
      {
        id: "METALW0098003",
        answer: "Hoar frost",
      },
      {
        id: "METALW0098004",
        answer: "Rime ice",
      },
    ],
    correct: "METALW0098004",
  },
  {
    id: "ALW0099",
    question:
      " Which type of ice forms by large, supercooled droplets hitting the front surfaces of an aircraft? (1,00 P.)",
    answers: [
      {
        id: "METALW0099001",
        answer: "Hoar frost",
      },
      {
        id: "METALW0099002",
        answer: "Clear ice",
      },
      {
        id: "METALW0099003",
        answer: "Rime ice",
      },
      {
        id: "METALW0099004",
        answer: "Mixed ice",
      },
    ],
    correct: "METALW0099002",
  },
  {
    id: "ALW0100",
    question:
      " What situation may result in the occurrence of severe wind shear? (1,00 P.)",
    answers: [
      {
        id: "METALW0100001",
        answer: "Flying ahead of a warm front with visible Ci clouds",
      },
      {
        id: "METALW0100002",
        answer:
          "Cross-country flying below Cu clouds with about 4 octas coverage",
      },
      {
        id: "METALW0100003",
        answer:
          "During final approach, 30 min after a heavy shower has passed the airfield",
      },
      {
        id: "METALW0100004",
        answer: "When a shower is visible close to the airfield",
      },
    ],
    correct: "METALW0100004",
  },
  {
    id: "ALW0101",
    question:
      " What conditions are favourable for the formation of thunderstorms? (1,00 P.)",
    answers: [
      {
        id: "METALW0101001",
        answer:
          "Warm humid air, conditionally unstable environmental lapse rate",
      },
      {
        id: "METALW0101002",
        answer: "Calm winds and cold air, overcast cloud cover with St or As.",
      },
      {
        id: "METALW0101003",
        answer: "Clear night over land, cold air and patches of fog",
      },
      {
        id: "METALW0101004",
        answer: "Warm and dry air, strong inversion layer",
      },
    ],
    correct: "METALW0101001",
  },
  {
    id: "ALW0102",
    question:
      " What conditions are mandatory for the formation of thermal thunderstorms? (1,00 P.)",
    answers: [
      {
        id: "METALW0102001",
        answer:
          "Conditionally unstable atmosphere, low temperature and low humidity",
      },
      {
        id: "METALW0102002",
        answer:
          "Absolutely stable atmosphere, high temperature and high humidity",
      },
      {
        id: "METALW0102003",
        answer:
          "Absolutely stable atmosphere, high temperature and low humidity",
      },
      {
        id: "METALW0102004",
        answer:
          "Conditionally unstable atmosphere, high temperature and high humidity",
      },
    ],
    correct: "METALW0102004",
  },
  {
    id: "ALW0103",
    question:
      " With regard to thunderstorms, strong up- and downdrafts appear during the... (1,00 P.)",
    answers: [
      {
        id: "METALW0103001",
        answer: "initial stage.",
      },
      {
        id: "METALW0103002",
        answer: "dissipating stage.",
      },
      {
        id: "METALW0103003",
        answer: "mature stage.",
      },
      {
        id: "METALW0103004",
        answer: "thunderstorm stage.",
      },
    ],
    correct: "METALW0103003",
  },
  {
    id: "ALW0104",
    question:
      " Which stage of a thunderstorm is dominated by updrafts? (1,00 P.)",
    answers: [
      {
        id: "METALW0104001",
        answer: "Dissipating stage",
      },
      {
        id: "METALW0104002",
        answer: "Upwind stage",
      },
      {
        id: "METALW0104003",
        answer: "Mature stage",
      },
      {
        id: "METALW0104004",
        answer: "Cumulus stage",
      },
    ],
    correct: "METALW0104004",
  },
  {
    id: "ALW0105",
    question:
      " What danger is most immenent when an aircraft is hit by lightning? (1,00 P.)",
    answers: [
      {
        id: "METALW0105001",
        answer: "Rapid cabin depressurization and smoke in the cabin",
      },
      {
        id: "METALW0105002",
        answer: "Surface overheat and damage to exposed aircraft parts",
      },
      {
        id: "METALW0105003",
        answer: "Explosion of electrical equipment in the cockpit",
      },
      {
        id: "METALW0105004",
        answer: "Disturbed radio communication, static noise signals",
      },
    ],
    correct: "METALW0105002",
  },
  {
    id: "ALW0106",
    question:
      " Heavy downdrafts and strong wind shear close to the ground can be expected... (1,00 P.)",
    answers: [
      {
        id: "METALW0106001",
        answer:
          "during cold, clear nights with the formation of radiation fog.",
      },
      {
        id: "METALW0106002",
        answer: "near the rainfall areas of heavy showers or thunderstorms.",
      },
      {
        id: "METALW0106003",
        answer:
          "during approach to an airfield at the coast with a strong sea breeze.",
      },
      {
        id: "METALW0106004",
        answer: "during warm summer days with high, flatted Cu clouds.",
      },
    ],
    correct: "METALW0106002",
  },
  {
    id: "ALW0107",
    question:
      " What phenomenon is caused by cold air downdrafts with precipitation from a fully developed thunderstorm cloud? (1,00 P.)",
    answers: [
      {
        id: "METALW0107001",
        answer: "Electrical discharge",
      },
      {
        id: "METALW0107002",
        answer: "Anvil-head top of Cb cloud",
      },
      {
        id: "METALW0107003",
        answer: "Gust front",
      },
      {
        id: "METALW0107004",
        answer: "Freezing Rain",
      },
    ],
    correct: "METALW0107003",
  },
  {
    id: "ALW0108",
    question:
      " What has to be considered when taking off in a ground inversion? (1,00 P.)",
    answers: [
      {
        id: "METALW0108001",
        answer:
          "Climb should be performed with the lowest possible speed and maximum power",
      },
      {
        id: "METALW0108002",
        answer:
          "Due to low temperatures close to the ground, icing has to be expected",
      },
      {
        id: "METALW0108003",
        answer:
          "During climb, a sudden decrease in speed and climb performance has to be expected",
      },
      {
        id: "METALW0108004",
        answer:
          "During the climb, a sudden increase in speed and climb performance has to be expected",
      },
    ],
    correct: "METALW0108003",
  },
  {
    id: "ALW0109",
    question:
      " What danger is most imminent during an approach to an airfield situated in a valley, with strong wind aloft blowing perpendicular to the mountain ridge? (1,00 P.)",
    answers: [
      {
        id: "METALW0109001",
        answer:
          "Reduced visibilty, maybe loss of sight to the airfield during final approach",
      },
      {
        id: "METALW0109002",
        answer:
          "Formation of medium to heavy clear ice on all aircraft surfaces",
      },
      {
        id: "METALW0109003",
        answer:
          "Heavy downdrafts within rainfall areas below thunderstorm clouds",
      },
      {
        id: "METALW0109004",
        answer: "Wind shear during descent, wind direction may change by 180°",
      },
    ],
    correct: "METALW0109004",
  },
  {
    id: "ALW0110",
    question:
      " What kind of reduction in visibility is not very sensitive to changes in temperature? (1,00 P.)",
    answers: [
      {
        id: "METALW0110001",
        answer: "Haze (HZ)",
      },
      {
        id: "METALW0110002",
        answer: "Patches of fog (BCFG)",
      },
      {
        id: "METALW0110003",
        answer: "Radiation fog (FG)",
      },
      {
        id: "METALW0110004",
        answer: "Mist (BR)",
      },
    ],
    correct: "METALW0110001",
  },
  {
    id: "ALW0111",
    question:
      " Information about pressure patterns and frontal situation can be found in which chart? (1,00 P.)",
    answers: [
      {
        id: "METALW0111001",
        answer: "wind chart.",
      },
      {
        id: "METALW0111002",
        answer: "surface weather chart.",
      },
      {
        id: "METALW0111003",
        answer: "Significant Weather Chart (SWC).",
      },
      {
        id: "METALW0111004",
        answer: "hypsometric chart.",
      },
    ],
    correct: "METALW0111002",
  },
  {
    id: "ALW0112",
    question:
      " Which weather chart shows the actual air pressure as in MSL along with pressure centers and fronts? (1,00 P.)",
    answers: [
      {
        id: "METALW0112001",
        answer: "Hypsometric chart",
      },
      {
        id: "METALW0112002",
        answer: "Surface weather chart",
      },
      {
        id: "METALW0112003",
        answer: "Prognostic chart",
      },
      {
        id: "METALW0112004",
        answer: "Wind chart",
      },
    ],
    correct: "METALW0112002",
  },
  {
    id: "ALW0113",
    question:
      " What information can be obtained from satallite images? (1,00 P.)",
    answers: [
      {
        id: "METALW0113001",
        answer: "Temperature and dew point of environmental air",
      },
      {
        id: "METALW0113002",
        answer: "Turbulence and icing",
      },
      {
        id: "METALW0113003",
        answer: "Flight visibility, ground visibility, and ground contact",
      },
      {
        id: "METALW0113004",
        answer: "Overview of cloud covers and front lines",
      },
    ],
    correct: "METALW0113004",
  },
  {
    id: "ALW0114",
    question: " What chart shows areas of precipitation? (1,00 P.)",
    answers: [
      {
        id: "METALW0114001",
        answer: "XGAFOR",
      },
      {
        id: "METALW0114002",
        answer: "Wind chart",
      },
      {
        id: "METALW0114003",
        answer: "Satellite picture",
      },
      {
        id: "METALW0114004",
        answer: "Radar picture",
      },
    ],
    correct: "METALW0114004",
  },
  {
    id: "ALW0115",
    question:
      " What information is NOT found on Low-Level Significant Weather Charts (LLSWC)? (1,00 P.)",
    answers: [
      {
        id: "METALW0115001",
        answer: "Information about icing conditions",
      },
      {
        id: "METALW0115002",
        answer: "Radar echos of precipitation",
      },
      {
        id: "METALW0115003",
        answer: "Information about turbulence areas",
      },
      {
        id: "METALW0115004",
        answer: "Front lines and frontal displacements",
      },
    ],
    correct: "METALW0115002",
  },
  {
    id: "ALW0116",
    question:
      " Measured pressure distribution in MSL and corresponding frontal systems are displayed by the... (1,00 P.)",
    answers: [
      {
        id: "METALW0116001",
        answer: "prognostic chart.",
      },
      {
        id: "METALW0116002",
        answer: "Significant Weather Chart (SWC).",
      },
      {
        id: "METALW0116003",
        answer: "surface weather chart.",
      },
      {
        id: "METALW0116004",
        answer: "hypsometric chart.",
      },
    ],
    correct: "METALW0116003",
  },
  {
    id: "ALW0117",
    question:
      ' In a METAR, "heavy rain" is designated by the identifier... (1,00 P.)',
    answers: [
      {
        id: "METALW0117001",
        answer: "RA.",
      },
      {
        id: "METALW0117002",
        answer: "+SHRA.",
      },
      {
        id: "METALW0117003",
        answer: "SHRA.",
      },
      {
        id: "METALW0117004",
        answer: "+RA.",
      },
    ],
    correct: "METALW0117004",
  },
  {
    id: "ALW0118",
    question:
      ' In a METAR, "(moderate) showers of rain" are designated by the identifier... (1,00 P.)',
    answers: [
      {
        id: "METALW0118001",
        answer: "+RA.",
      },
      {
        id: "METALW0118002",
        answer: "SHRA.",
      },
      {
        id: "METALW0118003",
        answer: "+TSRA.",
      },
      {
        id: "METALW0118004",
        answer: "TS.",
      },
    ],
    correct: "METALW0118002",
  },
  {
    id: "ALW0119",
    question:
      " What information can be found in the ATIS, but not in a METAR? (1,00 P.)",
    answers: [
      {
        id: "METALW0119001",
        answer:
          "Information about current weather, for example types of precipitation",
      },
      {
        id: "METALW0119002",
        answer:
          "Operational information such as runway in use and transition level",
      },
      {
        id: "METALW0119003",
        answer:
          "Information about mean wind speeds, maximum speeds in gusts if applicable",
      },
      {
        id: "METALW0119004",
        answer:
          "Approach information, such as ground visibility and cloud base",
      },
    ],
    correct: "METALW0119002",
  },
  {
    id: "ALW0120",
    question:
      " Weather and operational information about the destination aerodrome can be obtained during the flight by... (1,00 P.)",
    answers: [
      {
        id: "METALW0120001",
        answer: "VOLMET.",
      },
      {
        id: "METALW0120002",
        answer: "PIREP.",
      },
      {
        id: "METALW0120003",
        answer: "ATIS.",
      },
      {
        id: "METALW0120004",
        answer: "SIGMET.",
      },
    ],
    correct: "METALW0120003",
  },
  {
    id: "ALW0121",
    question: " SIGMET warnings are issued for... (1,00 P.)",
    answers: [
      {
        id: "METALW0121001",
        answer: "specific routings.",
      },
      {
        id: "METALW0121002",
        answer: "airports.",
      },
      {
        id: "METALW0121003",
        answer: "FIRs / UIRs.",
      },
      {
        id: "METALW0121004",
        answer: "countries.",
      },
    ],
    correct: "METALW0121003",
  },
  {
    id: "ALW0122",
    question: " An inversion is a layer ... (1,00 P.)",
    answers: [
      {
        id: "METALW0122001",
        answer: "with increasing pressure with increasing height.",
      },
      {
        id: "METALW0122002",
        answer: "with decreasing temperature with increasing height.",
      },
      {
        id: "METALW0122003",
        answer: "with constant temperature with increasing height.",
      },
      {
        id: "METALW0122004",
        answer: "with increasing temperature with increasing height.",
      },
    ],
    correct: "METALW0122004",
  },
  {
    id: "ALW0123",
    question:
      " What can be expected for the prevailling wind with isobars on a surface weather chart showing large distances? (1,00 P.)",
    answers: [
      {
        id: "METALW0123001",
        answer:
          "Strong pressure gradients resulting in strong prevailling wind",
      },
      {
        id: "METALW0123002",
        answer: "Strong pressure gradients resulting in low prevailling wind",
      },
      {
        id: "METALW0123003",
        answer: "Low pressure gradients resulting in strong prevailling wind",
      },
      {
        id: "METALW0123004",
        answer: "Low pressure gradients resulting in low prevailling wind",
      },
    ],
    correct: "METALW0123004",
  },
  {
    id: "ALW0124",
    question: " What is referred to as mountain wind? (1,00 P.)",
    answers: [
      {
        id: "METALW0124001",
        answer: "Wind blowing uphill from the valley during daytime.",
      },
      {
        id: "METALW0124002",
        answer: "Wind blowing uphill from the valley during the night.",
      },
      {
        id: "METALW0124003",
        answer: "Wind blowing down the mountain side during the night",
      },
      {
        id: "METALW0124004",
        answer: "Wind blowing down the mountain side during daytime.",
      },
    ],
    correct: "METALW0124003",
  },
  {
    id: "ALW0125",
    question:
      ' Under which conditions "back side weather" ("Rückseitenwetter") can be expected? (1,00 P.)',
    answers: [
      {
        id: "METALW0125001",
        answer: "before passing of an occlusion",
      },
      {
        id: "METALW0125002",
        answer: "During Foehn at the lee side",
      },
      {
        id: "METALW0125003",
        answer: "After passing of a warm front",
      },
      {
        id: "METALW0125004",
        answer: "After passing of a cold front",
      },
    ],
    correct: "METALW0125004",
  },
  {
    id: "ALW0126",
    question: " What wind is reportet as 225/15? (1,00 P.)",
    answers: [
      {
        id: "METALW0126001",
        answer: "north-east wind with 15 kt",
      },
      {
        id: "METALW0126002",
        answer: "south-west wind with 15 km/h",
      },
      {
        id: "METALW0126003",
        answer: "north-east wind with 15 km/h",
      },
      {
        id: "METALW0126004",
        answer: "south-west wind with 15 kt",
      },
    ],
    correct: "METALW0126004",
  },
  {
    id: "ALW0127",
    question:
      " How does air temperatur change in ISA from MSL to approx. 10.000 m height? (1,00 P.)",
    answers: [
      {
        id: "METALW0127001",
        answer: "from +20° to -40°C",
      },
      {
        id: "METALW0127002",
        answer: "from +30° to -40°C",
      },
      {
        id: "METALW0127003",
        answer: "from -15° to 50°C",
      },
      {
        id: "METALW0127004",
        answer: "from +15° to -50°C",
      },
    ],
    correct: "METALW0127004",
  },
  {
    id: "ALW0128",
    question:
      ' What weather is likely to be experienced during "Foehn" in the Bavarian area close to the alps? (1,00 P.)',
    answers: [
      {
        id: "METALW0128001",
        answer:
          "High pressure area overhead Biskaya and low pressure area in Eastern Europe",
      },
      {
        id: "METALW0128002",
        answer:
          "Cold, humid downhill wind on the lee side of the alps, flat pressure pattern",
      },
      {
        id: "METALW0128003",
        answer:
          "Nimbostratus cloud in the northern alps, rotor clouds at the windward side, warm and dry wind",
      },
      {
        id: "METALW0128004",
        answer:
          "Nimbostratus cloud in the southern alps, rotor clouds at the lee side, warm and dry wind",
      },
    ],
    correct: "METALW0128004",
  },
  {
    id: "ALW0129",
    question: " Mountain side updrafts can be intensified by ... (1,00 P.)",
    answers: [
      {
        id: "METALW0129001",
        answer: "Solar irradiation on the windward side",
      },
      {
        id: "METALW0129002",
        answer: "Solar irradiation on the lee side",
      },
      {
        id: "METALW0129003",
        answer: "By warming of upper atmospheric layers",
      },
      {
        id: "METALW0129004",
        answer: "thermal radiation of the windward side during the night",
      },
    ],
    correct: "METALW0129001",
  },
];

export default questions;
