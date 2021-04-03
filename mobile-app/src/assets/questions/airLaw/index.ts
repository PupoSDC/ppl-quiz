import { QuestionBlock } from "types/questionBank";
import flightAcademy from "./flightAcademy";
import other from "./other";

const flight: QuestionBlock = {
  id: "AL",
  name: "Air Law",
  questions: [...flightAcademy, ...other],
};

export default flight;
