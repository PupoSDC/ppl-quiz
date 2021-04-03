import { QuestionBlock } from "types/questionBank";
import flightAcademy from "./flightAcademy";
import others from "./others";

const flight: QuestionBlock = {
  id: "FPP",
  name: "Flight Performance and Planning",
  questions: [...flightAcademy, ...others],
};

export default flight;
