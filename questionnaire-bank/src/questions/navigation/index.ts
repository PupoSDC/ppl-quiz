import { QuestionBlock } from "../../types/Questionnaire";
import flightAcademy from "./flightAcademy";
import other from "./other";

const flight: QuestionBlock = {
  id: "NAV",
  name: "Navigation",
  questions: [...flightAcademy, ...other],
};

export default flight;
