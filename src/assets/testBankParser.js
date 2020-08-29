const readline = require("readline");
const fs = require("fs");
const { exit } = require("process");
const { Console } = require("console");

const readInterface = readline.createInterface({
  input: fs.createReadStream("./questions/meteorology/rawdata.md"),
  console: false,
});

const questions = [];

const CORRECT_QUARE = " ";
const WRONG_SQUARE = " ";

let wipQuestion;
let wipAnswer;
readInterface.on("line", function (line) {
  try {
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
    if (line.includes(CORRECT_QUARE) || line.includes(WRONG_SQUARE)) {
      const answer = line.replace(WRONG_SQUARE, "").replace(CORRECT_QUARE, "");
      const id = `MET${wipQuestion.id}00${wipQuestion.answers.length + 1}`;
      wipAnswer = {
        id,
        answer,
      };
      wipQuestion.answers.push(wipAnswer);
      if (line.includes(CORRECT_QUARE)) {
        wipQuestion.selected = id;
      }
      return;
    }
    if (wipAnswer) {
      wipAnswer.correct += " " + line;
    }
  } catch (e) {
    console.error(e);
    console.error(line);
  }
});

readInterface.on("close", () => {
  console.log(JSON.stringify(questions, null, 2));
});
