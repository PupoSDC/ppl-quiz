import { QuestionBankEntry } from "../../types/QuestionBank";
import flightAcademy from "./flightAcademy";
import other from "./other";

const flight: QuestionBankEntry = {
  id: "NAV",
  name: "Navigation",
  questions: [...flightAcademy, ...other],
};

export default flight;
