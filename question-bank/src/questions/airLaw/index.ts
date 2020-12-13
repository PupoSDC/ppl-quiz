import { QuestionBankEntry } from "../../types/QuestionBank";
import flightAcademy from "./flightAcademy";
import other from "./other";

const flight: QuestionBankEntry = {
  id: "AL",
  name: "Air Law",
  questions: [...flightAcademy, ...other],
};

export default flight;
