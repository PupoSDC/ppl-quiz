const readline = require("readline");
const fs = require("fs");

const readInterface = readline.createInterface({
  input: fs.createReadStream("./questions/airLaw/rawdata.md"),
  console: false,
});

const questions = [];

let wipQuestion;
let wipAnswer;
readInterface.on("line", function (line) {
  if (line.length === 0 || line.includes("```")) {
    return;
  }
  if (line.includes("####")) {
    const noTrail = line.replace("#### ", "");
    const id = Number(noTrail.split(" ")[0]);
    if (!isNaN(id)) {
      wipQuestion = {
        id: `ALW${id.toString().padStart(4, "0")}`,
        question: noTrail.replace(id, ""),
        answers: [],
        correct: "",
      };
      questions.push(wipQuestion);
    } else {
      wipQuestion.question += " " + noTrail;
    }
    return;
  }
  if (line.includes(" ")) {
    const answer = line.replace(" ", "");
    const id = `ALW${wipQuestion.id}00${wipQuestion.answers.length + 1}`;
    wipAnswer = {
      id,
      answer,
    };
    wipQuestion.answers.push(wipAnswer);
    return;
  }

  wipAnswer.answer += " " + line;
});

readInterface.on("close", () => {
  console.log(JSON.stringify(questions, null, 2));
});
