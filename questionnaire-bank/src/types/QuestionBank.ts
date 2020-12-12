import { ArrayMaxSize, ArrayMinSize, IsNumber, Max, MaxLength, Min, MinLength, ValidateIf } from "class-validator";
import { Field, ObjectType, ID, Int, ArgsType } from "type-graphql";
import { Question, QuestionBlockId } from "./Questionnaire";

@ObjectType({
  description: "Question bank meta data for a specific subject",
})
export class QuestionBankEntryMetaData {
    @Field((type) => ID)
    id: QuestionBlockId;
  
    @Field()
    name: string;
  
    @Field((type) => Int, { nullable: true })
    numberOfQuestions?: number;
}

@ObjectType({
  description: "Question bank for a specific subject",
})
export class QuestionBankEntry extends QuestionBankEntryMetaData {
    @Field((type) => [Question])
    questions: Question[];
}

@ArgsType()
export class GetQuestionBankEntryArguments {
  @Field((type) => ID)
  id: QuestionBlockId;
}