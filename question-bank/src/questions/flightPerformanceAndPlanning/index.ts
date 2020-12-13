import { QuestionBankEntry } from "../../types/QuestionBank";
import flightAcademy from "./flightAcademy";
import others from "./others";

const flight: QuestionBankEntry = {
  id: "FPP",
  name: "Flight Performance and Planning",
  questions: [...flightAcademy, ...others],
};

export default flight;
