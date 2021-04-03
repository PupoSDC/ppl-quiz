import { Question } from "types/questionBank";

const questions: Question[] = [
  {
    id: "MET0001",
    question:
      "What clouds and weather may result from an humid and instable air mass, that is pushed against a chain of mountains by the predominant wind and forced to rise?",
    answers: [
      {
        id: "MET0001001",
        answer:
          "Embedded CB with thunderstorms and showers of hail and/or rain.",
      },
      {
        id: "MET0001002",
        answer:
          "Thin Altostratus and Cirrostratus clouds with light and steady precipitation.",
      },
      {
        id: "MET0001003",
        answer: "Overcast low stratus (high fog) with no precipitation.",
      },
      {
        id: "MET0001004",
        answer:
          "Smooth, unstructured NS cloud with light drizzle or snow (during winter).",
      },
    ],
    correct: "MET0001001",
  },
  {
    id: "MET0002",
    question:
      "What type of fog emerges if humid and almost saturated air, is forced to rise upslope of hills or shallow mountains by the prevailling wind?",
    answers: [
      {
        id: "MET0002001",
        answer: "Orographic fog",
      },
      {
        id: "MET0002002",
        answer: "Steaming fog",
      },
      {
        id: "MET0002003",
        answer: "Radiation fog",
      },
      {
        id: "MET0002004",
        answer: "Advection fog",
      },
    ],
    correct: "MET0002001",
  },
  {
    id: "MET0003",
    question:
      'What situation is called "over-development" in a weather report?',
    answers: [
      {
        id: "MET0003001",
        answer: "Vertical development of Cumulus clouds to rain showers",
      },
      {
        id: "MET0003002",
        answer: "Widespreading of Cumulus clouds below an inversion layer",
      },
      {
        id: "MET0003003",
        answer:
          "Change from blue thermals to cloudy thermals during the afternoon",
      },
      {
        id: "MET0003004",
        answer: "Development of a thermal low to a storm depression",
      },
    ],
    correct: "MET0003001",
  },
  {
    id: "MET0004",
    question: 'What is the gas composition of "air"?',
    answers: [
      {
        id: "MET0004001",
        answer:
          "Oxygen 21 % Water vapour 78 % Noble gases / carbon dioxide 1 %",
      },
      {
        id: "MET0004002",
        answer: "Oxygen 78 % Water vapour 21 % Nitrogen 1 %",
      },
      {
        id: "MET0004003",
        answer: "Nitrogen 21 % Oxygen 78 % Noble gases / carbon dioxide 1 %",
      },
      {
        id: "MET0004004",
        answer: "Oxygen 21 % Nitrogen 78 % Noble gases / carbon dioxide 1 %",
      },
    ],
    correct: "MET0004004",
  },
  {
    id: "MET0005",
    question:
      "Weather phenomena are most common to be found in which atmospheric layer? (1, P.)",
    answers: [
      {
        id: "MET0005001",
        answer: "Stratosphere",
      },
      {
        id: "MET0005002",
        answer: "Tropopause",
      },
      {
        id: "MET0005003",
        answer: "Thermosphere",
      },
      {
        id: "MET0005004",
        answer: "Troposphere",
      },
    ],
    correct: "MET0005004",
  },
  {
    id: "MET0006",
    question:
      'What is the mass of a "cube of air" with the edges 1 m long, at MSL according ISA?',
    answers: [
      {
        id: "MET0006001",
        answer: "1,225 kg",
      },
      {
        id: "MET0006002",
        answer: "0,01225 kg",
      },
      {
        id: "MET0006003",
        answer: "0,1225 kg",
      },
      {
        id: "MET0006004",
        answer: "12,25 kg",
      },
    ],
    correct: "MET0006001",
  },
  {
    id: "MET0007",
    question:
      "At what rate does the temperature change with increasing height according to ISA (ICAO Standard Atmosphere) within the troposphere?",
    answers: [
      {
        id: "MET0007001",
        answer: "Decreases by 2° C / 1000 ft",
      },
      {
        id: "MET0007002",
        answer: "Increases by 2° C / 1000 ft",
      },
      {
        id: "MET0007003",
        answer: "Decreases by 2° C / 100 m",
      },
      {
        id: "MET0007004",
        answer: "Increases by 2° C / 100 m",
      },
    ],
    correct: "MET0007001",
  },
  {
    id: "MET0008",
    question:
      "What is the mean height of the tropopause according to ISA (ICAO Standard Atmosphere)?",
    answers: [
      {
        id: "MET0008001",
        answer: "18000 ft",
      },
      {
        id: "MET0008002",
        answer: "11000 ft",
      },
      {
        id: "MET0008003",
        answer: "11000 m",
      },
      {
        id: "MET0008004",
        answer: "36000 m",
      },
    ],
    correct: "MET0008003",
  },
  {
    id: "MET0009",
    question: 'The term "tropopause" is defined as...',
    answers: [
      {
        id: "MET0009001",
        answer:
          "the layer above the troposphere showing an increasing temperature.",
      },
      {
        id: "MET0009002",
        answer:
          "the boundary area between the mesosphere and the stratosphere.",
      },
      {
        id: "MET0009003",
        answer:
          "the boundary area between the troposphere and the stratosphere.",
      },
      {
        id: "MET0009004",
        answer: "the height above which the temperature starts to decrease.",
      },
    ],
    correct: "MET0009003",
  },
  {
    id: "MET0010",
    question:
      "Temperatures will be given by meteorological aviation services in Europe in which unit?",
    answers: [
      {
        id: "MET0010001",
        answer: "Degrees Centigrade (° C)",
      },
      {
        id: "MET0010002",
        answer: "Kelvin",
      },
      {
        id: "MET0010003",
        answer: "Gpdam",
      },
      {
        id: "MET0010004",
        answer: "Degrees Fahrenheit",
      },
    ],
    correct: "MET0010001",
  },
  {
    id: "MET0011",
    question: 'What is meant by "inversion layer"?',
    answers: [
      {
        id: "MET0011001",
        answer:
          "An atmospheric layer where temperature decreases with increasing height",
      },
      {
        id: "MET0011002",
        answer:
          "A boundary area between two other layers within the atmosphere",
      },
      {
        id: "MET0011003",
        answer:
          "An atmospheric layer with constant temperature with increasing height",
      },
      {
        id: "MET0011004",
        answer:
          "An atmospheric layer where temperature increases with increasing height",
      },
    ],
    correct: "MET0011004",
  },
  {
    id: "MET0012",
    question: 'What is meant by "isothermal layer"?',
    answers: [
      {
        id: "MET0012001",
        answer:
          "An atmospheric layer where temperature increases with increasing height",
      },
      {
        id: "MET0012002",
        answer:
          "An atmospheric layer where temperature decreases with increasing height",
      },
      {
        id: "MET0012003",
        answer:
          "A boundary area between two other layers within the atmosphere",
      },
      {
        id: "MET0012004",
        answer:
          "An atmospheric layer with constant temperature with increasing height",
      },
    ],
    correct: "MET0012004",
  },
  {
    id: "MET0013",
    question:
      "The temperature lapse rate with increasing height within the troposphere according ISA is...",
    answers: [
      {
        id: "MET0013001",
        answer: "0,65° C / 100 m.",
      },
      {
        id: "MET0013002",
        answer: "3° C / 100 m.",
      },
      {
        id: "MET0013003",
        answer: "1° C / 100 m.",
      },
      {
        id: "MET0013004",
        answer: "0,6° C / 100 m.",
      },
    ],
    correct: "MET0013001",
  },
  {
    id: "MET0014",
    question:
      "Which process may result in an inversion layer at about 5000 ft (1500 m) height? (1, P.)",
    answers: [
      {
        id: "MET0014001",
        answer: "Intensive sunlight insolation during a warm summer day",
      },
      {
        id: "MET0014002",
        answer: "Widespread descending air within a high pressure area",
      },
      {
        id: "MET0014003",
        answer: "Ground cooling by radiation during the night",
      },
      {
        id: "MET0014004",
        answer: "Advection of cool air in the upper troposphere",
      },
    ],
    correct: "MET0014002",
  },
  {
    id: "MET0015",
    question: "An inversion layer close to the ground can be caused by...",
    answers: [
      {
        id: "MET0015001",
        answer: "ground cooling during the night.",
      },
      {
        id: "MET0015002",
        answer: "large-scale lifting of air.",
      },
      {
        id: "MET0015003",
        answer: "intensifying and gusting winds.",
      },
      {
        id: "MET0015004",
        answer: "thickening of clouds in medium layers.",
      },
    ],
    correct: "MET0015001",
  },
  {
    id: "MET0016",
    question: "What is the ISA standard pressure at FL 180 (5500 m)?",
    answers: [
      {
        id: "MET0016001",
        answer: "250 hPa",
      },
      {
        id: "MET0016002",
        answer: "300 hPa",
      },
      {
        id: "MET0016003",
        answer: "1013.25 hPa",
      },
      {
        id: "MET0016004",
        answer: "500 hPa",
      },
    ],
    correct: "MET0016004",
  },
  {
    id: "MET0017",
    question:
      "The pressure which is measured at a ground station and reduced to mean sea level (MSL) by means of the actual atmospheric conditions is called...",
    answers: [
      {
        id: "MET0017001",
        answer: "QNH.",
      },
      {
        id: "MET0017002",
        answer: "QNE.",
      },
      {
        id: "MET0017003",
        answer: "QFE.",
      },
      {
        id: "MET0017004",
        answer: "QFF.",
      },
    ],
    correct: "MET0017004",
  },
  {
    id: "MET0018",
    question: "Which processes result in decreasing air density?",
    answers: [
      {
        id: "MET0018001",
        answer: "Decreasing temperature, increasing pressure",
      },
      {
        id: "MET0018002",
        answer: "Increasing temperature, decreasing pressure",
      },
      {
        id: "MET0018003",
        answer: "Increasing temperature, increasing pressure",
      },
      {
        id: "MET0018004",
        answer: "Decreasing temperature, decreasing pressure",
      },
    ],
    correct: "MET0018002",
  },
  {
    id: "MET0019",
    question: "The pressure at MSL in ISA conditions is...",
    answers: [
      {
        id: "MET0019001",
        answer: "113.25 hPa.",
      },
      {
        id: "MET0019002",
        answer: "15 hPa.",
      },
      {
        id: "MET0019003",
        answer: "1013.25 hPa.",
      },
      {
        id: "MET0019004",
        answer: "1123 hPa.",
      },
    ],
    correct: "MET0019003",
  },
  {
    id: "MET0020",
    question:
      "The height of the tropopause of the International Standard Atmosphere (ISA) is at...",
    answers: [
      {
        id: "MET0020001",
        answer: "5500 ft.",
      },
      {
        id: "MET0020002",
        answer: "11000 ft.",
      },
      {
        id: "MET0020003",
        answer: "36000 ft.",
      },
      {
        id: "MET0020004",
        answer: "48000 ft.",
      },
    ],
    correct: "MET0020003",
  },
  {
    id: "MET0021",
    question: "The barometric altimeter indicates height above...",
    answers: [
      {
        id: "MET0021001",
        answer: "a correct reference pressure level.",
      },
      {
        id: "MET0021002",
        answer: "mean sea level.",
      },
      {
        id: "MET0021003",
        answer: "standard pressure 1013.25 hPa.",
      },
      {
        id: "MET0021004",
        answer: "ground.",
      },
    ],
    correct: "MET0021001",
  },
  {
    id: "MET0022",
    question: "The altimeter can be checked on the ground by setting...",
    answers: [
      {
        id: "MET0022001",
        answer: "QFE and comparing the indication with the airfield elevation.",
      },
      {
        id: "MET0022002",
        answer: "QNH and comparing the indication with the airfield elevation.",
      },
      {
        id: "MET0022003",
        answer:
          "QNE and checking that the indication shows zero on the ground.",
      },
      {
        id: "MET0022004",
        answer: "QFF and comparing the indication with the airfield elevation.",
      },
    ],
    correct: "MET0022002",
  },
  {
    id: "MET0023",
    question: "The barometric altimeter with QFE setting indicates...",
    answers: [
      {
        id: "MET0023001",
        answer: "height above the pressure level at airfield elevation.",
      },
      {
        id: "MET0023002",
        answer: "true altitude above MSL.",
      },
      {
        id: "MET0023003",
        answer: "height above MSL.",
      },
      {
        id: "MET0023004",
        answer: "height above standard pressure 1013.25 hPa.",
      },
    ],
    correct: "MET0023001",
  },
  {
    id: "MET0024",
    question: "The barometric altimeter with QNH setting indicates...",
    answers: [
      {
        id: "MET0024001",
        answer: "height above standard pressure 1013.25 hPa.",
      },
      {
        id: "MET0024002",
        answer: "height above the pressure level at airfield elevation.",
      },
      {
        id: "MET0024003",
        answer: "true altitude above MSL.",
      },
      {
        id: "MET0024004",
        answer: "height above MSL.",
      },
    ],
    correct: "MET0024004",
  },
  {
    id: "MET0025",
    question: `Given the following information, what is the true altitude? (rounded to the nearest 50 ft)  
      - QNH: 983 hPa 
      - Altitude: FL 85 
      - Outside Air Temperature: ISA - 10°`,
    answers: [
      {
        id: "MET0025001",
        answer: "7900 ft",
      },
      {
        id: "MET0025002",
        answer: "9400 ft",
      },
      {
        id: "MET0025003",
        answer: "7300 ft",
      },
      {
        id: "MET0025004",
        answer: "7600 ft",
      },
    ],
    correct: "MET0025003",
  },
  {
    id: "MET0026",
    question:
      "How can wind speed and wind direction be derived from surface weather charts? (1, P.)",
    answers: [
      {
        id: "MET0026001",
        answer: "By alignment and distance of isobaric lines",
      },
      {
        id: "MET0026002",
        answer: "By alignment and distance of hypsometric lines",
      },
      {
        id: "MET0026003",
        answer: "By alignment of lines of warm- and cold fronts.",
      },
      {
        id: "MET0026004",
        answer: "By annotations from the text part of the chart",
      },
    ],
    correct: "MET0026001",
  },
  {
    id: "MET0027",
    question: 'Which force causes "wind"?',
    answers: [
      {
        id: "MET0027001",
        answer: "Centrifugal force",
      },
      {
        id: "MET0027002",
        answer: "Thermal force",
      },
      {
        id: "MET0027003",
        answer: "Coriolis force",
      },
      {
        id: "MET0027004",
        answer: "Pressure gradient force",
      },
    ],
    correct: "MET0027004",
  },
  {
    id: "MET0028",
    question:
      "Above the friction layer, with a prevailing pressure gradient, the wind direction is...",
    answers: [
      {
        id: "MET0028001",
        answer: "perpendicular to the isohypses.",
      },
      {
        id: "MET0028002",
        answer: "at an angle of 30° to the isobars towards low pressure.",
      },
      {
        id: "MET0028003",
        answer: "parallel to the isobars.",
      },
      {
        id: "MET0028004",
        answer: "perpendicular to the isobars.",
      },
    ],
    correct: "MET0028003",
  },
  {
    id: "MET0029",
    question:
      "Which of the stated surfaces will reduce the wind speed most due to ground friction?",
    answers: [
      {
        id: "MET0029001",
        answer: "Flat land, deserted land, no vegetation",
      },
      {
        id: "MET0029002",
        answer: "Oceanic areas",
      },
      {
        id: "MET0029003",
        answer: "Mountainous areas, vegetation cover",
      },
      {
        id: "MET0029004",
        answer: "Flat land, lots of vegetation cover",
      },
    ],
    correct: "MET0029003",
  },
  {
    id: "MET0030",
    question: "The movement of air flowing together is called...",
    answers: [
      {
        id: "MET0030001",
        answer: "convergence.",
      },
      {
        id: "MET0030002",
        answer: "divergence.",
      },
      {
        id: "MET0030003",
        answer: "soncordence.",
      },
      {
        id: "MET0030004",
        answer: "subsidence.",
      },
    ],
    correct: "MET0030001",
  },
  {
    id: "MET0031",
    question: "The movement of air flowing apart is called...",
    answers: [
      {
        id: "MET0031001",
        answer: "convergence.",
      },
      {
        id: "MET0031002",
        answer: "concordence.",
      },
      {
        id: "MET0031003",
        answer: "divergence.",
      },
      {
        id: "MET0031004",
        answer: "subsidence.",
      },
    ],
    correct: "MET0031003",
  },
  {
    id: "MET0032",
    question:
      "What weather development will result from convergence at ground level?",
    answers: [
      {
        id: "MET0032001",
        answer: "Descending air and cloud formation",
      },
      {
        id: "MET0032002",
        answer: "Ascending air and cloud dissipation",
      },
      {
        id: "MET0032003",
        answer: "Descending air and cloud dissipation",
      },
      {
        id: "MET0032004",
        answer: "Ascending air and cloud formation",
      },
    ],
    correct: "MET0032004",
  },
  {
    id: "MET0033",
    question:
      "When air masses meet each other head on, how is this referred to and what air movements will follow?",
    answers: [
      {
        id: "MET0033001",
        answer: "Convergence resulting in sinking air",
      },
      {
        id: "MET0033002",
        answer: "Divergence resulting in sinking air",
      },
      {
        id: "MET0033003",
        answer: "Convergence resulting in air being lifted",
      },
      {
        id: "MET0033004",
        answer: "Divergence resulting in air being lifted",
      },
    ],
    correct: "MET0033003",
  },
  {
    id: "MET0034",
    question:
      "What are the air masses that Central Europe is mainly influenced by?",
    answers: [
      {
        id: "MET0034001",
        answer: "Arctic and polar cold air",
      },
      {
        id: "MET0034002",
        answer: "Polar cold air and tropical warm air",
      },
      {
        id: "MET0034003",
        answer: "Equatorial and tropical warm air",
      },
      {
        id: "MET0034004",
        answer: "Tropical and arctic cold air",
      },
    ],
    correct: "MET0034002",
  },
  {
    id: "MET0035",
    question:
      "With regard to global circulation within the atmosphere, where does polar cold air meets subtropical warm air?",
    answers: [
      {
        id: "MET0035001",
        answer: "At the equator",
      },
      {
        id: "MET0035002",
        answer: "At the geographic poles",
      },
      {
        id: "MET0035003",
        answer: "At the subtropical high pressure belt",
      },
      {
        id: "MET0035004",
        answer: "At the polar front",
      },
    ],
    correct: "MET0035004",
  },
  {
    id: "MET0036",
    question: "Winds blowing uphill are defined as...",
    answers: [
      {
        id: "MET0036001",
        answer: "katabatic winds.",
      },
      {
        id: "MET0036002",
        answer: "anabatic winds.",
      },
      {
        id: "MET0036003",
        answer: "convergent winds.",
      },
      {
        id: "MET0036004",
        answer: "subsident winds.",
      },
    ],
    correct: "MET0036002",
  },
  {
    id: "MET0037",
    question: "Winds blowing downhill are defined as...",
    answers: [
      {
        id: "MET0037001",
        answer: "anabatic winds.",
      },
      {
        id: "MET0037002",
        answer: "katabatic winds.",
      },
      {
        id: "MET0037003",
        answer: "convergent winds.",
      },
      {
        id: "MET0037004",
        answer: "subsident winds.",
      },
    ],
    correct: "MET0037002",
  },
  {
    id: "MET0038",
    question: "Air descending behind a mountain range is defined as...",
    answers: [
      {
        id: "MET0038001",
        answer: "katabatic wind.",
      },
      {
        id: "MET0038002",
        answer: "convergent wind.",
      },
      {
        id: "MET0038003",
        answer: "anabatic wind.",
      },
      {
        id: "MET0038004",
        answer: "divergent wind.",
      },
    ],
    correct: "MET0038001",
  },
  {
    id: "MET0039",
    question: '"Foehn" conditions usually develop with...',
    answers: [
      {
        id: "MET0039001",
        answer: "instability, widespread air blown against a mountain ridge.",
      },
      {
        id: "MET0039002",
        answer: "stability, widespread air blown against a mountain ridge.",
      },
      {
        id: "MET0039003",
        answer: "instability, high pressure area with calm wind.",
      },
      {
        id: "MET0039004",
        answer: "stability, high pressure area with calm wind.",
      },
    ],
    correct: "MET0039002",
  },
  {
    id: "MET0040",
    question:
      "What type of turbulence is typically found close to the ground on the lee side during Foehn conditions?",
    answers: [
      {
        id: "MET0040001",
        answer: "Inversion turbulence",
      },
      {
        id: "MET0040002",
        answer: "Turbulence in rotors",
      },
      {
        id: "MET0040003",
        answer: "Clear-air turbulence (CAT)",
      },
      {
        id: "MET0040004",
        answer: "Thermal turbulence",
      },
    ],
    correct: "MET0040002",
  },
  {
    id: "MET0041",
    question: "Light turbulence always has to be expected...",
    answers: [
      {
        id: "MET0041001",
        answer: "above cumulus clouds due to thermal convection.",
      },
      {
        id: "MET0041002",
        answer: "below stratiform clouds in medium layers.",
      },
      {
        id: "MET0041003",
        answer: "when entering inversions.",
      },
      {
        id: "MET0041004",
        answer: "below cumulus clouds due to thermal convection.",
      },
    ],
    correct: "MET0041004",
  },
  {
    id: "MET0042",
    question: "Moderate to severe turbulence has to be expected...",
    answers: [
      {
        id: "MET0042001",
        answer:
          "with the appearance of extended low stratus clouds (high fog).",
      },
      {
        id: "MET0042002",
        answer: "overhead unbroken cloud layers.",
      },
      {
        id: "MET0042003",
        answer:
          "below thick cloud layers on the windward side of a mountain range.",
      },
      {
        id: "MET0042004",
        answer:
          "on the lee side of a mountain range when rotor clouds are present.",
      },
    ],
    correct: "MET0042004",
  },
  {
    id: "MET0043",
    question:
      "Which answer contains every state of water found in the atmosphere?",
    answers: [
      {
        id: "MET0043001",
        answer: "Liquid and solid",
      },
      {
        id: "MET0043002",
        answer: "Liquid, solid, and gaseous",
      },
      {
        id: "MET0043003",
        answer: "Gaseous and liquid",
      },
      {
        id: "MET0043004",
        answer: "Liquid",
      },
    ],
    correct: "MET0043002",
  },
  {
    id: "MET0044",
    question:
      "How do dew point and relative humidity change with decreasing temperature? (1, P.)",
    answers: [
      {
        id: "MET0044001",
        answer: "Dew point remains constant, relative humidity decreases",
      },
      {
        id: "MET0044002",
        answer: "Dew point decreases, relative humidity increases",
      },
      {
        id: "MET0044003",
        answer: "Dew point increases, relative humidity decreases",
      },
      {
        id: "MET0044004",
        answer: "Dew point remains constant, relative humidity increases",
      },
    ],
    correct: "MET0044004",
  },
  {
    id: "MET0045",
    question:
      "How do spread and relative humidity change with increasing temperature?",
    answers: [
      {
        id: "MET0045001",
        answer: "Spread increases, relative humidity decreases",
      },
      {
        id: "MET0045002",
        answer: "Spread remains constant, relative humidity decreases",
      },
      {
        id: "MET0045003",
        answer: "Spread increases, relative humidity increases",
      },
      {
        id: "MET0045004",
        answer: "Spread remains constant, relative humidity increases",
      },
    ],
    correct: "MET0045001",
  },
  {
    id: "MET0046",
    question: 'The "spread" is defined as...',
    answers: [
      {
        id: "MET0046001",
        answer: "relation of actual to maximum possible humidity of air.",
      },
      {
        id: "MET0046002",
        answer: "maximum amount of water vapour that can be contained in air.",
      },
      {
        id: "MET0046003",
        answer: "difference between dew point and condensation point.",
      },
      {
        id: "MET0046004",
        answer: "difference between actual temperature and dew point.",
      },
    ],
    correct: "MET0046004",
  },
  {
    id: "MET0047",
    question:
      "With other factors remaining constant, decreasing temperature results in...",
    answers: [
      {
        id: "MET0047001",
        answer: "decreasing spread and decreasing relative humidity.",
      },
      {
        id: "MET0047002",
        answer: "increasing spread and decreasing relative humidity.",
      },
      {
        id: "MET0047003",
        answer: "increasing spread and increasing relative humidity.",
      },
      {
        id: "MET0047004",
        answer: "decreasing spread and increasing relative humidity.",
      },
    ],
    correct: "MET0047004",
  },
  {
    id: "MET0048",
    question:
      "What process causes latent heat being released into the upper troposphere?",
    answers: [
      {
        id: "MET0048001",
        answer: "Descending air across widespread areas",
      },
      {
        id: "MET0048002",
        answer: "Stabilisation of inflowing air masses",
      },
      {
        id: "MET0048003",
        answer: "Cloud forming due to condensation",
      },
      {
        id: "MET0048004",
        answer: "Evaporation over widespread water areas",
      },
    ],
    correct: "MET0048003",
  },
  {
    id: "MET0049",
    question: "The saturated adiabatic lapse rate is...",
    answers: [
      {
        id: "MET0049001",
        answer: "lower than the dry adiabatic lapse rate.",
      },
      {
        id: "MET0049002",
        answer: "proportional to the dry adiabatic lapse rate.",
      },
      {
        id: "MET0049003",
        answer: "higher than the dry adiabatic lapse rate.",
      },
      {
        id: "MET0049004",
        answer: "equal to the dry adiabatic lapse rate.",
      },
    ],
    correct: "MET0049001",
  },
  {
    id: "MET0050",
    question: "The dry adiabatic lapse rate has a value of...",
    answers: [
      {
        id: "MET0050001",
        answer: "1,0° C / 100 m.",
      },
      {
        id: "MET0050002",
        answer: "2° / 1000 ft.",
      },
      {
        id: "MET0050003",
        answer: "0,6° C / 100 m.",
      },
      {
        id: "MET0050004",
        answer: "0,65° C / 100 m.",
      },
    ],
    correct: "MET0050001",
  },
  {
    id: "MET0051",
    question:
      "The saturated adiabatic lapse rate should be assumed with a mean value of:",
    answers: [
      {
        id: "MET0051001",
        answer: "1,0° C / 100 m.",
      },
      {
        id: "MET0051002",
        answer: "0° C / 100 m.",
      },
      {
        id: "MET0051003",
        answer: "0,6° C / 100 m.",
      },
      {
        id: "MET0051004",
        answer: "2° C / 1000 ft.",
      },
    ],
    correct: "MET0051003",
  },
  {
    id: "MET0052",
    question:
      "What weather conditions may be expected during conditionally unstable conditions?",
    answers: [
      {
        id: "MET0052001",
        answer: "Layered clouds up to high levels, prolonged rain or snow",
      },
      {
        id: "MET0052002",
        answer: "Shallow cumulus clouds with base at medium levels",
      },
      {
        id: "MET0052003",
        answer: "Sky clear of clouds, sunshine, low winds",
      },
      {
        id: "MET0052004",
        answer: "Towering cumulus, isolated showers of rain or thunderstorms",
      },
    ],
    correct: "MET0052004",
  },
  {
    id: "MET0053",
    question: "Which conditions are likely for the formation of advection fog?",
    answers: [
      {
        id: "MET0053001",
        answer: "Cold, humid air moves over a warm ocean",
      },
      {
        id: "MET0053002",
        answer: "Warm, humid air moves over a cold surface",
      },
      {
        id: "MET0053003",
        answer: "Warm, humid air cools during a cloudy night",
      },
      {
        id: "MET0053004",
        answer: "Humidity evaporates from warm, humid ground into cold air",
      },
    ],
    correct: "MET0053002",
  },
  {
    id: "MET0054",
    question: "Clouds are basically distinguished by what types?",
    answers: [
      {
        id: "MET0054001",
        answer: "Stratiform and ice clouds",
      },
      {
        id: "MET0054002",
        answer: "Layered and lifted clouds",
      },
      {
        id: "MET0054003",
        answer: "Cumulus and stratiform clouds",
      },
      {
        id: "MET0054004",
        answer: "Thunderstorm and shower clouds",
      },
    ],
    correct: "MET0054003",
  },
  {
    id: "MET0055",
    question: "Clouds in high layers are referred to as...",
    answers: [
      {
        id: "MET0055001",
        answer: "Nimbo-.",
      },
      {
        id: "MET0055002",
        answer: "Strato-.",
      },
      {
        id: "MET0055003",
        answer: "Alto-.",
      },
      {
        id: "MET0055004",
        answer: "Cirro-.",
      },
    ],
    correct: "MET0055004",
  },
  {
    id: "MET0056",
    question:
      'What weather phenomenon designated by "2" has to be expected on the lee side during "Foehn" conditions? See figure (MET-001).',
    answers: [
      {
        id: "MET0056001",
        answer: "Altocumulus Castellanus",
      },
      {
        id: "MET0056002",
        answer: "Nimbostratus",
      },
      {
        id: "MET0056003",
        answer: "Cumulonimbus",
      },
      {
        id: "MET0056004",
        answer: "Altocumulus lenticularis",
      },
    ],
    correct: "MET0056004",
    image: require("./images/MET1.png"),
  },
  {
    id: "MET0057",
    question: "What cloud type does the picture show?",
    image: require("./images/MET2.png"),
    answers: [
      {
        id: "MET0057001",
        answer: "Stratus",
      },
      {
        id: "MET0057002",
        answer: "Cumulus",
      },
      {
        id: "MET0057003",
        answer: "Altus",
      },
      {
        id: "MET0057004",
        answer: "Cirrus",
      },
    ],
    correct: "MET0057002",
  },
  {
    id: "MET0058",
    question: "What cloud type does the picture show?",
    image: require("./images/MET3.png"),
    answers: [
      {
        id: "MET0058001",
        answer: "Altocumulus",
      },
      {
        id: "MET0058002",
        answer: "Cumulus",
      },
      {
        id: "MET0058003",
        answer: "Stratus",
      },
      {
        id: "MET0058004",
        answer: "Cirrus",
      },
    ],
    correct: "MET0058004",
  },
  {
    id: "MET0059",
    question: "What factor may affect the top of cumulus clouds?",
    answers: [
      {
        id: "MET0059001",
        answer: "Relative humidity",
      },
      {
        id: "MET0059002",
        answer: "The spread",
      },
      {
        id: "MET0059003",
        answer: "The presence of an inversion layer",
      },
      {
        id: "MET0059004",
        answer: "The absolute humidity",
      },
    ],
    correct: "MET0059003",
  },
  {
    id: "MET0060",
    question: "What factors may indicate a tendency to fog formation?",
    answers: [
      {
        id: "MET0060001",
        answer: "Low pressure, increasing temperature",
      },
      {
        id: "MET0060002",
        answer: "Low spread, decreasing temperature",
      },
      {
        id: "MET0060003",
        answer: "Low spread, increasing temperature",
      },
      {
        id: "MET0060004",
        answer: "Strong winds, decreasing temperature",
      },
    ],
    correct: "MET0060002",
  },
  {
    id: "MET0061",
    question: 'What condition may prevent the formation of "radiation fog"?',
    answers: [
      {
        id: "MET0061001",
        answer: "Overcast cloud cover",
      },
      {
        id: "MET0061002",
        answer: "Calm wind",
      },
      {
        id: "MET0061003",
        answer: "Low spread",
      },
      {
        id: "MET0061004",
        answer: "Clear night, no clouds",
      },
    ],
    correct: "MET0061001",
  },
  {
    id: "MET0062",
    question: 'What process results in the formation of "advection fog"?',
    answers: [
      {
        id: "MET0062001",
        answer: "Cold, moist air is being moved across warm ground areas",
      },
      {
        id: "MET0062002",
        answer: "Warm, moist air is moved across cold ground areas",
      },
      {
        id: "MET0062003",
        answer: "Cold, moist air mixes with warm, moist air",
      },
      {
        id: "MET0062004",
        answer: "Prolonged radiation during nights clear of clouds",
      },
    ],
    correct: "MET0062002",
  },
  {
    id: "MET0063",
    question:
      'What process results in the formation of "orographic fog" ("hill fog")?',
    answers: [
      {
        id: "MET0063001",
        answer: "Prolonged radiation during nights clear of clouds",
      },
      {
        id: "MET0063002",
        answer: "Warm, moist air is moved across a hill or a mountain range",
      },
      {
        id: "MET0063003",
        answer: "Cold, moist air mixes with warm, moist air",
      },
      {
        id: "MET0063004",
        answer: "Evaporation from warm, moist ground area into very cold air",
      },
    ],
    correct: "MET0063002",
  },
  {
    id: "MET0064",
    question:
      "What factors are required for the formation of precipitation in clouds?",
    answers: [
      {
        id: "MET0064001",
        answer: "High humidity and high temperatures",
      },
      {
        id: "MET0064002",
        answer: "The presence of an inversion layer",
      },
      {
        id: "MET0064003",
        answer: "Calm winds and intensive sunlight insolation",
      },
      {
        id: "MET0064004",
        answer: "Moderate to strong updrafts",
      },
    ],
    correct: "MET0064004",
  },
  {
    id: "MET0065",
    question:
      "The formation of medium to large precipitation particles requires...",
    answers: [
      {
        id: "MET0065001",
        answer: "a high cloud base.",
      },
      {
        id: "MET0065002",
        answer: "strong wind.",
      },
      {
        id: "MET0065003",
        answer: "an inversion layer.",
      },
      {
        id: "MET0065004",
        answer: "strong updrafts.",
      },
    ],
    correct: "MET0065004",
  },
  {
    id: "MET0066",
    question: "Which type of cloud is associated with prolonged rain?",
    answers: [
      {
        id: "MET0066001",
        answer: "Cumulonimbus",
      },
      {
        id: "MET0066002",
        answer: "Cirrostratus",
      },
      {
        id: "MET0066003",
        answer: "Nimbostratus",
      },
      {
        id: "MET0066004",
        answer: "Altocumulus",
      },
    ],
    correct: "MET0066003",
  },
  {
    id: "MET0067",
    question: "Regarding the type of cloud, precipitation is classified as...",
    answers: [
      {
        id: "MET0067001",
        answer: "light and heavy precipitation.",
      },
      {
        id: "MET0067002",
        answer: "showers of snow and rain.",
      },
      {
        id: "MET0067003",
        answer: "prolonged rain and continuous rain.",
      },
      {
        id: "MET0067004",
        answer: "rain and showers of rain.",
      },
    ],
    correct: "MET0067004",
  },
  {
    id: "MET0068",
    question:
      "How is an air mass described when moving to Central Europe via the Russian continent during winter?",
    answers: [
      {
        id: "MET0068001",
        answer: "Maritime tropical air",
      },
      {
        id: "MET0068002",
        answer: "Continental tropical air",
      },
      {
        id: "MET0068003",
        answer: "Continental polar air",
      },
      {
        id: "MET0068004",
        answer: "Maritime polar air",
      },
    ],
    correct: "MET0068003",
  },
  {
    id: "MET0069",
    question: "The character of an air mass is given by what properties?",
    answers: [
      {
        id: "MET0069001",
        answer: "Temperatures at origin and present region",
      },
      {
        id: "MET0069002",
        answer: "Wind speed and tropopause height",
      },
      {
        id: "MET0069003",
        answer: "Region of origin and track during movement",
      },
      {
        id: "MET0069004",
        answer: "Environmental lapse rate at origin",
      },
    ],
    correct: "MET0069003",
  },
  {
    id: "MET0070",
    question: "The symbol labeled (1) as shown in the picture is a / an...",
    image: require("./images/MET4.png"),
    answers: [
      {
        id: "MET0070001",
        answer: "front aloft.",
      },
      {
        id: "MET0070002",
        answer: "occlusion.",
      },
      {
        id: "MET0070003",
        answer: "warm front.",
      },
      {
        id: "MET0070004",
        answer: "cold front.",
      },
    ],
    correct: "MET0070004",
  },
  {
    id: "MET0071",
    question: "The symbol labeled (2) as shown in the picture is a / an...",
    image: require("./images/MET4.png"),
    answers: [
      {
        id: "MET0071001",
        answer: "front aloft.",
      },
      {
        id: "MET0071002",
        answer: "cold front.",
      },
      {
        id: "MET0071003",
        answer: "warm front.",
      },
      {
        id: "MET0071004",
        answer: "occlusion.",
      },
    ],
    correct: "MET0071003",
  },
  {
    id: "MET0072",
    question: "The symbol labeled (3) as shown in the picture is a / an...",
    image: require("./images/MET4.png"),
    answers: [
      {
        id: "MET0072001",
        answer: "front aloft.",
      },
      {
        id: "MET0072002",
        answer: "warm front.",
      },
      {
        id: "MET0072003",
        answer: "cold front.",
      },
      {
        id: "MET0072004",
        answer: "occlusion.",
      },
    ],
    correct: "MET0072004",
  },
  {
    id: "MET0073",
    question:
      "What cloud sequence can typically be observed during the passage of a warm front?",
    answers: [
      {
        id: "MET0073001",
        answer:
          "In coastal areas during daytime wind from the coast and forming of cumulus clouds, dissipation of clouds during evening and night",
      },
      {
        id: "MET0073002",
        answer:
          "Wind becoming calm, dissipation of clouds and warming during summer; formation of extended high fog layers during winter",
      },
      {
        id: "MET0073003",
        answer:
          "Squall line with showers of rain and thunderstorms (Cb), gusting wind followed by cumulus clouds with isolated showers of rain",
      },
      {
        id: "MET0073004",
        answer:
          "Cirrus, thickening altostratus and altocumulus clouds, lowering cloud base with rain, nimbostratus",
      },
    ],
    correct: "MET0073004",
  },
  {
    id: "MET0074",
    question:
      "What clouds and weather can typically be observed during the passage of a cold front?",
    answers: [
      {
        id: "MET0074001",
        answer:
          "In coastal areas during daytime wind from the coast and forming of cumulus clouds, dissipation of clouds during evening and night",
      },
      {
        id: "MET0074002",
        answer:
          "Strongly developed cumulus clouds (Cb) with showers of rain and thunderstorms, gusting wind followed by cumulus clouds with isolated showers of rain",
      },
      {
        id: "MET0074003",
        answer:
          "Cirrus, thickening altostratus and altocumulus clouds, lowering cloud base with rain, nimbostratus",
      },
      {
        id: "MET0074004",
        answer:
          "Wind becoming calm, dissipation of clouds and warming during summer; formation of extended high fog layers during winter",
      },
    ],
    correct: "MET0074002",
  },
  {
    id: "MET0075",
    question:
      "What visual flight conditions can be expected within the warm sector of a polar front low during summer time?",
    answers: [
      {
        id: "MET0075001",
        answer: "Visibilty less than 1000 m, cloud-covered ground",
      },
      {
        id: "MET0075002",
        answer: "Good visibility, some isolated high clouds",
      },
      {
        id: "MET0075003",
        answer: "Moderate to good visibility, scattered clouds",
      },
      {
        id: "MET0075004",
        answer: "Moderate visibility, heavy showers and thunderstorms",
      },
    ],
    correct: "MET0075003",
  },
  {
    id: "MET0076",
    question:
      "What visual flight conditions can be expected after the passage of a cold front? (1, P.)",
    answers: [
      {
        id: "MET0076001",
        answer:
          "Scattered cloud layers, visbility more than 5 km, formation of shallow cumulus clouds",
      },
      {
        id: "MET0076002",
        answer:
          "Good visiblity, formation of cumulus clouds with showers of rain or snow",
      },
      {
        id: "MET0076003",
        answer:
          "Medium visibility with lowering cloud bases, onset of prolonged precipitation",
      },
      {
        id: "MET0076004",
        answer:
          "Poor visibility, formation of overcast or ground-covering stratus clouds, snow",
      },
    ],
    correct: "MET0076002",
  },
  {
    id: "MET0077",
    question:
      "A boundary between a cold polar air mass and a warm subtropical air mass showing no horizontal displacement is called...",
    answers: [
      {
        id: "MET0077001",
        answer: "cold front.",
      },
      {
        id: "MET0077002",
        answer: "warm front.",
      },
      {
        id: "MET0077003",
        answer: "occluded front.",
      },
      {
        id: "MET0077004",
        answer: "stationary front.",
      },
    ],
    correct: "MET0077004",
  },
  {
    id: "MET0078",
    question: "What is the usual direction of movement of a polar front low?",
    answers: [
      {
        id: "MET0078001",
        answer:
          "To the northwest during winter, to the southwest during summer",
      },
      {
        id: "MET0078002",
        answer:
          "To the northeast during winter, to the southeast during summer",
      },
      {
        id: "MET0078003",
        answer: "Parallel to the warm front line to the south",
      },
      {
        id: "MET0078004",
        answer: "Parallel to the the warm-sector isobars",
      },
    ],
    correct: "MET0078004",
  },
  {
    id: "MET0079",
    question:
      "What pressure pattern can be observed during the passage of a polar front low? (1, P.)",
    answers: [
      {
        id: "MET0079001",
        answer:
          "Rising pressure in front of the warm front, constant pressure within the warm sector, rising pressure behind the cold front",
      },
      {
        id: "MET0079002",
        answer:
          "Falling pressure in front of the warm front, constant pressure within the warm sector, rising pressure behind the cold front",
      },
      {
        id: "MET0079003",
        answer:
          "Falling pressure in front of the warm front, constant pressure within the warm sector, falling pressure behind the cold front",
      },
      {
        id: "MET0079004",
        answer:
          "Rising pressure in front of the warm front, rising pressure within the warm sector, falling pressure behind the cold front",
      },
    ],
    correct: "MET0079002",
  },
  {
    id: "MET0080",
    question:
      "What pressure pattern can be observed when a cold front is passing?",
    answers: [
      {
        id: "MET0080001",
        answer: "Continually decreasing pressure",
      },
      {
        id: "MET0080002",
        answer: "Shortly decreasing, thereafter increasing pressure",
      },
      {
        id: "MET0080003",
        answer: "Continually increasing pressure",
      },
      {
        id: "MET0080004",
        answer: "Constant pressure pattern",
      },
    ],
    correct: "MET0080002",
  },
  {
    id: "MET0081",
    question:
      "What change of wind direction can be expected during the passage of a polar front low in Central Europe?",
    answers: [
      {
        id: "MET0081001",
        answer:
          "Backing wind during passage of the warm front, veering wind during passage of the cold front",
      },
      {
        id: "MET0081002",
        answer:
          "Backing wind during passage of the warm front, backing wind during passage of the cold front",
      },
      {
        id: "MET0081003",
        answer:
          "Veering wind during passage of the warm front, veering wind during passage of the cold front",
      },
      {
        id: "MET0081004",
        answer:
          "Veering wind during passage of the warm front, backing wind during passage of the cold front",
      },
    ],
    correct: "MET0081003",
  },
  {
    id: "MET0082",
    question:
      "Extensive high pressure areas can be found throughout the year ...",
    answers: [
      {
        id: "MET0082001",
        answer: "in areeas showing extensive lifting processes.",
      },
      {
        id: "MET0082002",
        answer: "in mid latitudes along the polar front",
      },
      {
        id: "MET0082003",
        answer: "over oceanic areas at latitues around 30°N/S.",
      },
      {
        id: "MET0082004",
        answer: "in tropical areas, close to the equator.",
      },
    ],
    correct: "MET0082003",
  },
  {
    id: "MET0083",
    question:
      "What cloud type can typically be observed across widespread high pressure areas during summer?",
    answers: [
      {
        id: "MET0083001",
        answer: "Overcast low stratus",
      },
      {
        id: "MET0083002",
        answer: "Scattered Cu clouds",
      },
      {
        id: "MET0083003",
        answer: "Overcast Ns clouds",
      },
      {
        id: "MET0083004",
        answer: "Squall lines and thunderstorms",
      },
    ],
    correct: "MET0083002",
  },
  {
    id: "MET0084",
    question:
      "What pressure pattern may result from cold-air inflow in high tropospheric layers?",
    answers: [
      {
        id: "MET0084001",
        answer: "Formation of a low in the upper troposphere",
      },
      {
        id: "MET0084002",
        answer: "Formation of a high in the upper troposphere",
      },
      {
        id: "MET0084003",
        answer: "Formation of a large ground low",
      },
      {
        id: "MET0084004",
        answer: "Alternating pressure",
      },
    ],
    correct: "MET0084001",
  },
  {
    id: "MET0085",
    question: "Cold air inflow in high tropospheric layers may result in...",
    answers: [
      {
        id: "MET0085001",
        answer: "showers and thunderstorms.",
      },
      {
        id: "MET0085002",
        answer: "stabilisation and calm weather.",
      },
      {
        id: "MET0085003",
        answer: "frontal weather.",
      },
      {
        id: "MET0085004",
        answer: "calm weather and cloud dissipation.",
      },
    ],
    correct: "MET0085001",
  },
  {
    id: "MET0086",
    question:
      "How does inflowing cold air affect the shape and vertical distance between pressure layers?",
    answers: [
      {
        id: "MET0086001",
        answer: "Increasing vertical distance, raise in height (high pressure)",
      },
      {
        id: "MET0086002",
        answer: "Decreasing vertical distance, raise in height (high pressure)",
      },
      {
        id: "MET0086003",
        answer:
          "Decrease in vertical distance, lowering in height (low pressure)",
      },
      {
        id: "MET0086004",
        answer:
          "Increase in vertical distance, lowering in height (low pressure)",
      },
    ],
    correct: "MET0086003",
  },
  {
    id: "MET0087",
    question:
      "What weather phenomena have to be expected around an upper-level trough?",
    answers: [
      {
        id: "MET0087001",
        answer: "Calm wind, forming of shallow cumulus clouds",
      },
      {
        id: "MET0087002",
        answer: "Calm weather, formation of lifted fog layers",
      },
      {
        id: "MET0087003",
        answer: "Formation of high stratus clouds, ground-covering cloud bases",
      },
      {
        id: "MET0087004",
        answer: "Development of showers and thunderstorms (Cb)",
      },
    ],
    correct: "MET0087004",
  },
  {
    id: "MET0088",
    question:
      "What frontal line divides subtropical air from polar cold air, in particular across Central Europe?",
    answers: [
      {
        id: "MET0088001",
        answer: "Occlusion",
      },
      {
        id: "MET0088002",
        answer: "Cold front",
      },
      {
        id: "MET0088003",
        answer: "Polar front",
      },
      {
        id: "MET0088004",
        answer: "Warm front",
      },
    ],
    correct: "MET0088003",
  },
  {
    id: "MET0089",
    question:
      "What weather conditions can be expected in high pressure areas during summer?",
    answers: [
      {
        id: "MET0089001",
        answer: "Changing weather with passing of frontal lines",
      },
      {
        id: "MET0089002",
        answer: "Squall lines and thunderstorms",
      },
      {
        id: "MET0089003",
        answer: "Calm winds and widespread areas with high fog",
      },
      {
        id: "MET0089004",
        answer: "Calm weather and cloud dissipation, few high Cu",
      },
    ],
    correct: "MET0089004",
  },
  {
    id: "MET0090",
    question:
      "What weather conditions in Central Europe are typically found in high pressure areas during summer?",
    answers: [
      {
        id: "MET0090001",
        answer:
          "Large isobar spacing with calm winds, formation of local wind systems",
      },
      {
        id: "MET0090002",
        answer: "Large isobar spacing with strong prevailing westerly winds",
      },
      {
        id: "MET0090003",
        answer:
          "Small isobar spacing with calm winds, formation of local wind systems",
      },
      {
        id: "MET0090004",
        answer: "Small isobar spacing with strong prevailing northerly winds",
      },
    ],
    correct: "MET0090001",
  },
  {
    id: "MET0091",
    question:
      "What weather conditions can be expected in high pressure areas during winter? (1, P.)",
    answers: [
      {
        id: "MET0091001",
        answer: "Changing weather with passing of frontal lines",
      },
      {
        id: "MET0091002",
        answer: "Calm weather and cloud dissipation, few high Cu",
      },
      {
        id: "MET0091003",
        answer: "Calm winds and widespread areas with high fog",
      },
      {
        id: "MET0091004",
        answer: "Squall lines and thunderstorms",
      },
    ],
    correct: "MET0091003",
  },
  {
    id: "MET0092",
    question:
      "What wind conditions can be expected in areas showing large distances between isobars?",
    answers: [
      {
        id: "MET0092001",
        answer:
          "Formation of local wind systems with strong prevailing westerly winds",
      },
      {
        id: "MET0092002",
        answer: "Strong prevailing easterly winds with rapid backing",
      },
      {
        id: "MET0092003",
        answer: "Strong prevailing westerly winds with rapid veering",
      },
      {
        id: "MET0092004",
        answer: "Variable winds, formation of local wind systems",
      },
    ],
    correct: "MET0092004",
  },
  {
    id: "MET0093",
    question:
      'What weather conditions can be expected during "Foehn" on the windward side of a mountain range?',
    answers: [
      {
        id: "MET0093001",
        answer:
          "Dissipating clouds with unusual warming, accompanied by strong, gusty winds",
      },
      {
        id: "MET0093002",
        answer: "Scattered cumulus clouds with showers and thunderstorms",
      },
      {
        id: "MET0093003",
        answer:
          "Layered clouds, mountains obscured, poor visibility, moderate or heavy rain",
      },
      {
        id: "MET0093004",
        answer: "Calm wind and forming of high stratus clouds (high fog)",
      },
    ],
    correct: "MET0093003",
  },
  {
    id: "MET0094",
    question:
      "Which of the stated wind phenomena will increase in speed since its path is narrowed by mountains?",
    answers: [
      {
        id: "MET0094001",
        answer: "Bora",
      },
      {
        id: "MET0094002",
        answer: "Mistral",
      },
      {
        id: "MET0094003",
        answer: "Scirocco",
      },
      {
        id: "MET0094004",
        answer: "Passat",
      },
    ],
    correct: "MET0094002",
  },
  {
    id: "MET0095",
    question:
      "What is the name of the the cold, katabatic wind phenomena blowing from northeast into the Adriatic Sea?",
    answers: [
      {
        id: "MET0095001",
        answer: "Scirocco",
      },
      {
        id: "MET0095002",
        answer: "Mistral",
      },
      {
        id: "MET0095003",
        answer: "Bora",
      },
      {
        id: "MET0095004",
        answer: "Passat",
      },
    ],
    correct: "MET0095003",
  },
  {
    id: "MET0096",
    question:
      "Which of the following conditions are most favourable for ice accretion?",
    answers: [
      {
        id: "MET0096001",
        answer:
          "Temperatures between 0° C and -12° C, presence of supercooled water droplets (clouds)",
      },
      {
        id: "MET0096002",
        answer: "Temperaturs below 0° C, strong wind, sky clear of clouds",
      },
      {
        id: "MET0096003",
        answer:
          "Temperatures between +10° C and -30° C, presence of hail (clouds)",
      },
      {
        id: "MET0096004",
        answer:
          "Temperatures between -20° C and -40° C, presence of ice crystals (Ci clouds)",
      },
    ],
    correct: "MET0096001",
  },
  {
    id: "MET0097",
    question:
      "What temperatures are most dangerous with respect to airframe icing?",
    answers: [
      {
        id: "MET0097001",
        answer: "+5° to -10° C",
      },
      {
        id: "MET0097002",
        answer: "0° to -12° C",
      },
      {
        id: "MET0097003",
        answer: "-20° to -40° C",
      },
      {
        id: "MET0097004",
        answer: "+20° to -5° C",
      },
    ],
    correct: "MET0097002",
  },
  {
    id: "MET0098",
    question:
      "Which type of ice forms by very small water droplets and ice crystals hitting the front surfaces of an aircraft?",
    answers: [
      {
        id: "MET0098001",
        answer: "Clear ice",
      },
      {
        id: "MET0098002",
        answer: "Mixed ice",
      },
      {
        id: "MET0098003",
        answer: "Hoar frost",
      },
      {
        id: "MET0098004",
        answer: "Rime ice",
      },
    ],
    correct: "MET0098004",
  },
  {
    id: "MET0099",
    question:
      "Which type of ice forms by large, supercooled droplets hitting the front surfaces of an aircraft?",
    answers: [
      {
        id: "MET0099001",
        answer: "Hoar frost",
      },
      {
        id: "MET0099002",
        answer: "Clear ice",
      },
      {
        id: "MET0099003",
        answer: "Rime ice",
      },
      {
        id: "MET0099004",
        answer: "Mixed ice",
      },
    ],
    correct: "MET0099002",
  },
  {
    id: "MET0100",
    question:
      "What situation may result in the occurrence of severe wind shear?",
    answers: [
      {
        id: "MET0100001",
        answer: "Flying ahead of a warm front with visible Ci clouds",
      },
      {
        id: "MET0100002",
        answer:
          "Cross-country flying below Cu clouds with about 4 octas coverage",
      },
      {
        id: "MET0100003",
        answer:
          "During final approach, 30 min after a heavy shower has passed the airfield",
      },
      {
        id: "MET0100004",
        answer: "When a shower is visible close to the airfield",
      },
    ],
    correct: "MET0100004",
  },
  {
    id: "MET0101",
    question:
      "What conditions are favourable for the formation of thunderstorms?",
    answers: [
      {
        id: "MET0101001",
        answer:
          "Warm humid air, conditionally unstable environmental lapse rate",
      },
      {
        id: "MET0101002",
        answer: "Calm winds and cold air, overcast cloud cover with St or As.",
      },
      {
        id: "MET0101003",
        answer: "Clear night over land, cold air and patches of fog",
      },
      {
        id: "MET0101004",
        answer: "Warm and dry air, strong inversion layer",
      },
    ],
    correct: "MET0101001",
  },
  {
    id: "MET0102",
    question:
      "What conditions are mandatory for the formation of thermal thunderstorms?",
    answers: [
      {
        id: "MET0102001",
        answer:
          "Conditionally unstable atmosphere, low temperature and low humidity",
      },
      {
        id: "MET0102002",
        answer:
          "Absolutely stable atmosphere, high temperature and high humidity",
      },
      {
        id: "MET0102003",
        answer:
          "Absolutely stable atmosphere, high temperature and low humidity",
      },
      {
        id: "MET0102004",
        answer:
          "Conditionally unstable atmosphere, high temperature and high humidity",
      },
    ],
    correct: "MET0102004",
  },
  {
    id: "MET0103",
    question:
      "With regard to thunderstorms, strong up- and downdrafts appear during the...",
    answers: [
      {
        id: "MET0103001",
        answer: "initial stage.",
      },
      {
        id: "MET0103002",
        answer: "dissipating stage.",
      },
      {
        id: "MET0103003",
        answer: "mature stage.",
      },
      {
        id: "MET0103004",
        answer: "thunderstorm stage.",
      },
    ],
    correct: "MET0103003",
  },
  {
    id: "MET0104",
    question: "Which stage of a thunderstorm is dominated by updrafts?",
    answers: [
      {
        id: "MET0104001",
        answer: "Dissipating stage",
      },
      {
        id: "MET0104002",
        answer: "Upwind stage",
      },
      {
        id: "MET0104003",
        answer: "Mature stage",
      },
      {
        id: "MET0104004",
        answer: "Cumulus stage",
      },
    ],
    correct: "MET0104004",
  },
  {
    id: "MET0105",
    question:
      "What danger is most immenent when an aircraft is hit by lightning?",
    answers: [
      {
        id: "MET0105001",
        answer: "Rapid cabin depressurization and smoke in the cabin",
      },
      {
        id: "MET0105002",
        answer: "Surface overheat and damage to exposed aircraft parts",
      },
      {
        id: "MET0105003",
        answer: "Explosion of electrical equipment in the cockpit",
      },
      {
        id: "MET0105004",
        answer: "Disturbed radio communication, static noise signals",
      },
    ],
    correct: "MET0105002",
  },
  {
    id: "MET0106",
    question:
      "Heavy downdrafts and strong wind shear close to the ground can be expected...",
    answers: [
      {
        id: "MET0106001",
        answer:
          "during cold, clear nights with the formation of radiation fog.",
      },
      {
        id: "MET0106002",
        answer: "near the rainfall areas of heavy showers or thunderstorms.",
      },
      {
        id: "MET0106003",
        answer:
          "during approach to an airfield at the coast with a strong sea breeze.",
      },
      {
        id: "MET0106004",
        answer: "during warm summer days with high, flatted Cu clouds.",
      },
    ],
    correct: "MET0106002",
  },
  {
    id: "MET0107",
    question:
      "What phenomenon is caused by cold air downdrafts with precipitation from a fully developed thunderstorm cloud?",
    answers: [
      {
        id: "MET0107001",
        answer: "Electrical discharge",
      },
      {
        id: "MET0107002",
        answer: "Anvil-head top of Cb cloud",
      },
      {
        id: "MET0107003",
        answer: "Gust front",
      },
      {
        id: "MET0107004",
        answer: "Freezing Rain",
      },
    ],
    correct: "MET0107003",
  },
  {
    id: "MET0108",
    question:
      "What has to be considered when taking off in a ground inversion?",
    answers: [
      {
        id: "MET0108001",
        answer:
          "Climb should be performed with the lowest possible speed and maximum power",
      },
      {
        id: "MET0108002",
        answer:
          "Due to low temperatures close to the ground, icing has to be expected",
      },
      {
        id: "MET0108003",
        answer:
          "During climb, a sudden decrease in speed and climb performance has to be expected",
      },
      {
        id: "MET0108004",
        answer:
          "During the climb, a sudden increase in speed and climb performance has to be expected",
      },
    ],
    correct: "MET0108003",
  },
  {
    id: "MET0109",
    question:
      "What danger is most imminent during an approach to an airfield situated in a valley, with strong wind aloft blowing perpendicular to the mountain ridge?",
    answers: [
      {
        id: "MET0109001",
        answer:
          "Reduced visibilty, maybe loss of sight to the airfield during final approach",
      },
      {
        id: "MET0109002",
        answer:
          "Formation of medium to heavy clear ice on all aircraft surfaces",
      },
      {
        id: "MET0109003",
        answer:
          "Heavy downdrafts within rainfall areas below thunderstorm clouds",
      },
      {
        id: "MET0109004",
        answer: "Wind shear during descent, wind direction may change by 180°",
      },
    ],
    correct: "MET0109004",
  },
  {
    id: "MET0110",
    question:
      "What kind of reduction in visibility is not very sensitive to changes in temperature?",
    answers: [
      {
        id: "MET0110001",
        answer: "Haze (HZ)",
      },
      {
        id: "MET0110002",
        answer: "Patches of fog (BCFG)",
      },
      {
        id: "MET0110003",
        answer: "Radiation fog (FG)",
      },
      {
        id: "MET0110004",
        answer: "Mist (BR)",
      },
    ],
    correct: "MET0110001",
  },
  {
    id: "MET0111",
    question:
      "Information about pressure patterns and frontal situation can be found in which chart?",
    answers: [
      {
        id: "MET0111001",
        answer: "wind chart.",
      },
      {
        id: "MET0111002",
        answer: "surface weather chart.",
      },
      {
        id: "MET0111003",
        answer: "Significant Weather Chart (SWC).",
      },
      {
        id: "MET0111004",
        answer: "hypsometric chart.",
      },
    ],
    correct: "MET0111002",
  },
  {
    id: "MET0112",
    question:
      "Which weather chart shows the actual air pressure as in MSL along with pressure centers and fronts?",
    answers: [
      {
        id: "MET0112001",
        answer: "Hypsometric chart",
      },
      {
        id: "MET0112002",
        answer: "Surface weather chart",
      },
      {
        id: "MET0112003",
        answer: "Prognostic chart",
      },
      {
        id: "MET0112004",
        answer: "Wind chart",
      },
    ],
    correct: "MET0112002",
  },
  {
    id: "MET0113",
    question: "What information can be obtained from satallite images?",
    answers: [
      {
        id: "MET0113001",
        answer: "Temperature and dew point of environmental air",
      },
      {
        id: "MET0113002",
        answer: "Turbulence and icing",
      },
      {
        id: "MET0113003",
        answer: "Flight visibility, ground visibility, and ground contact",
      },
      {
        id: "MET0113004",
        answer: "Overview of cloud covers and front lines",
      },
    ],
    correct: "MET0113004",
  },
  {
    id: "MET0114",
    question: "What chart shows areas of precipitation?",
    answers: [
      {
        id: "MET0114001",
        answer: "XGAFOR",
      },
      {
        id: "MET0114002",
        answer: "Wind chart",
      },
      {
        id: "MET0114003",
        answer: "Satellite picture",
      },
      {
        id: "MET0114004",
        answer: "Radar picture",
      },
    ],
    correct: "MET0114004",
  },
  {
    id: "MET0115",
    question:
      "What information is NOT found on Low-Level Significant Weather Charts (LLSWC)?",
    answers: [
      {
        id: "MET0115001",
        answer: "Information about icing conditions",
      },
      {
        id: "MET0115002",
        answer: "Radar echos of precipitation",
      },
      {
        id: "MET0115003",
        answer: "Information about turbulence areas",
      },
      {
        id: "MET0115004",
        answer: "Front lines and frontal displacements",
      },
    ],
    correct: "MET0115002",
  },
  {
    id: "MET0116",
    question:
      "Measured pressure distribution in MSL and corresponding frontal systems are displayed by the...",
    answers: [
      {
        id: "MET0116001",
        answer: "prognostic chart.",
      },
      {
        id: "MET0116002",
        answer: "Significant Weather Chart (SWC).",
      },
      {
        id: "MET0116003",
        answer: "surface weather chart.",
      },
      {
        id: "MET0116004",
        answer: "hypsometric chart.",
      },
    ],
    correct: "MET0116003",
  },
  {
    id: "MET0117",
    question: 'In a METAR, "heavy rain" is designated by the identifier...',
    answers: [
      {
        id: "MET0117001",
        answer: "RA.",
      },
      {
        id: "MET0117002",
        answer: "+SHRA.",
      },
      {
        id: "MET0117003",
        answer: "SHRA.",
      },
      {
        id: "MET0117004",
        answer: "+RA.",
      },
    ],
    correct: "MET0117004",
  },
  {
    id: "MET0118",
    question:
      'In a METAR, "(moderate) showers of rain" are designated by the identifier...',
    answers: [
      {
        id: "MET0118001",
        answer: "+RA.",
      },
      {
        id: "MET0118002",
        answer: "SHRA.",
      },
      {
        id: "MET0118003",
        answer: "+TSRA.",
      },
      {
        id: "MET0118004",
        answer: "TS.",
      },
    ],
    correct: "MET0118002",
  },
  {
    id: "MET0119",
    question: "What information can be found in the ATIS, but not in a METAR?",
    answers: [
      {
        id: "MET0119001",
        answer:
          "Information about current weather, for example types of precipitation",
      },
      {
        id: "MET0119002",
        answer:
          "Operational information such as runway in use and transition level",
      },
      {
        id: "MET0119003",
        answer:
          "Information about mean wind speeds, maximum speeds in gusts if applicable",
      },
      {
        id: "MET0119004",
        answer:
          "Approach information, such as ground visibility and cloud base",
      },
    ],
    correct: "MET0119002",
  },
  {
    id: "MET0120",
    question:
      "Weather and operational information about the destination aerodrome can be obtained during the flight by...",
    answers: [
      {
        id: "MET0120001",
        answer: "VOLMET.",
      },
      {
        id: "MET0120002",
        answer: "PIREP.",
      },
      {
        id: "MET0120003",
        answer: "ATIS.",
      },
      {
        id: "MET0120004",
        answer: "SIGMET.",
      },
    ],
    correct: "MET0120003",
  },
  {
    id: "MET0121",
    question: "SIGMET warnings are issued for...",
    answers: [
      {
        id: "MET0121001",
        answer: "specific routings.",
      },
      {
        id: "MET0121002",
        answer: "airports.",
      },
      {
        id: "MET0121003",
        answer: "FIRs / UIRs.",
      },
      {
        id: "MET0121004",
        answer: "countries.",
      },
    ],
    correct: "MET0121003",
  },
  {
    id: "MET0122",
    question: "An inversion is a layer ...",
    answers: [
      {
        id: "MET0122001",
        answer: "with increasing pressure with increasing height.",
      },
      {
        id: "MET0122002",
        answer: "with decreasing temperature with increasing height.",
      },
      {
        id: "MET0122003",
        answer: "with constant temperature with increasing height.",
      },
      {
        id: "MET0122004",
        answer: "with increasing temperature with increasing height.",
      },
    ],
    correct: "MET0122004",
  },
  {
    id: "MET0123",
    question:
      "What can be expected for the prevailling wind with isobars on a surface weather chart showing large distances?",
    answers: [
      {
        id: "MET0123001",
        answer:
          "Strong pressure gradients resulting in strong prevailling wind",
      },
      {
        id: "MET0123002",
        answer: "Strong pressure gradients resulting in low prevailling wind",
      },
      {
        id: "MET0123003",
        answer: "Low pressure gradients resulting in strong prevailling wind",
      },
      {
        id: "MET0123004",
        answer: "Low pressure gradients resulting in low prevailling wind",
      },
    ],
    correct: "MET0123004",
  },
  {
    id: "MET0124",
    question: "What is referred to as mountain wind?",
    answers: [
      {
        id: "MET0124001",
        answer: "Wind blowing uphill from the valley during daytime.",
      },
      {
        id: "MET0124002",
        answer: "Wind blowing uphill from the valley during the night.",
      },
      {
        id: "MET0124003",
        answer: "Wind blowing down the mountain side during the night",
      },
      {
        id: "MET0124004",
        answer: "Wind blowing down the mountain side during daytime.",
      },
    ],
    correct: "MET0124003",
  },
  {
    id: "MET0125",
    question:
      'Under which conditions "back side weather" ("Rückseitenwetter") can be expected?',
    answers: [
      {
        id: "MET0125001",
        answer: "before passing of an occlusion",
      },
      {
        id: "MET0125002",
        answer: "During Foehn at the lee side",
      },
      {
        id: "MET0125003",
        answer: "After passing of a warm front",
      },
      {
        id: "MET0125004",
        answer: "After passing of a cold front",
      },
    ],
    correct: "MET0125004",
  },
  {
    id: "MET0126",
    question: "What wind is reportet as 225/15?",
    answers: [
      {
        id: "MET0126001",
        answer: "north-east wind with 15 kt",
      },
      {
        id: "MET0126002",
        answer: "south-west wind with 15 km/h",
      },
      {
        id: "MET0126003",
        answer: "north-east wind with 15 km/h",
      },
      {
        id: "MET0126004",
        answer: "south-west wind with 15 kt",
      },
    ],
    correct: "MET0126004",
  },
  {
    id: "MET0127",
    question:
      "How does air temperatur change in ISA from MSL to approx. 10.000 m height?",
    answers: [
      {
        id: "MET0127001",
        answer: "from +20° to -40°C",
      },
      {
        id: "MET0127002",
        answer: "from +30° to -40°C",
      },
      {
        id: "MET0127003",
        answer: "from -15° to 50°C",
      },
      {
        id: "MET0127004",
        answer: "from +15° to -50°C",
      },
    ],
    correct: "MET0127004",
  },
  {
    id: "MET0128",
    question:
      'What weather is likely to be experienced during "Foehn" in the Bavarian area close to the alps?',
    answers: [
      {
        id: "MET0128001",
        answer:
          "High pressure area overhead Biskaya and low pressure area in Eastern Europe",
      },
      {
        id: "MET0128002",
        answer:
          "Cold, humid downhill wind on the lee side of the alps, flat pressure pattern",
      },
      {
        id: "MET0128003",
        answer:
          "Nimbostratus cloud in the northern alps, rotor clouds at the windward side, warm and dry wind",
      },
      {
        id: "MET0128004",
        answer:
          "Nimbostratus cloud in the southern alps, rotor clouds at the lee side, warm and dry wind",
      },
    ],
    correct: "MET0128004",
  },
  {
    id: "MET0129",
    question: "Mountain side updrafts can be intensified by ...",
    answers: [
      {
        id: "MET0129001",
        answer: "Solar irradiation on the windward side",
      },
      {
        id: "MET0129002",
        answer: "Solar irradiation on the lee side",
      },
      {
        id: "MET0129003",
        answer: "By warming of upper atmospheric layers",
      },
      {
        id: "MET0129004",
        answer: "thermal radiation of the windward side during the night",
      },
    ],
    correct: "MET0129001",
  },
];

export default questions;
