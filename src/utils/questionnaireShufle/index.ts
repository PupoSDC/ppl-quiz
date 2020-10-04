import questionShuffle, { ShuffleMode } from "./questionShuffle";
import perfectShuffle from "./perfectShuffle";

export { ShuffleMode } from "./questionShuffle";

export const shuffleQuestions = questionShuffle;
export const shuffleAnswers = perfectShuffle;
