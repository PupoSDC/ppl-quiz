import { QuestionBlock } from "types/Questionnaire";
import flightAcademy from "./flightAcademy";
import others from "./others";

const flight: QuestionBlock = {
  id: "FPP",
  name: "Flight Performance and Planning",
  questions: [...flightAcademy, ...others],
};

export default flight;
