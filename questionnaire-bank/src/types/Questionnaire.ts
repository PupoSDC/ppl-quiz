import { ArrayMaxSize, ArrayMinSize, IsNumber, Max, MaxLength, Min, MinLength, ValidateIf } from "class-validator";
import { Field, ObjectType, ID, Int, ArgsType } from "type-graphql";

export type AnswerId = string;
export type QuestionId = string;
export type QuestionBlockId = string;

@ObjectType()
export class Answer {
  @Field((type) => ID)
  id: AnswerId;

  @Field()
  answer: string;
}

@ObjectType()
export class Question {
  @Field((type) => ID)
  id: QuestionId;

  @Field()
  correct: AnswerId;

  @Field()
  question: string;

  @Field((type) => [Answer])
  answers: Answer[];

  @Field({ nullable: true })
  image?: string;

  @Field({ nullable: true })
  explanation?: string;
}

@ObjectType({
  description: "Metadata about a question subject",
})
export class Questionnaire {
  @Field((type) => ID)
  id: QuestionBlockId;

  @Field()
  name: string;

  @Field((type) => Int, { nullable: true })
  numberOfQuestions?: number;
}

@ObjectType({
  description: "test",
})
export class Test {
  @Field((type) => [Question])
  questions: Question[];
}

@ArgsType()
export class testGeneratorArgs {
  @ValidateIf(o => !o.questionIds)
  @IsNumber()
  @Min(1)
  @Max(250)
  @Field((type) => Number, { 
    nullable: true,
    description: "number of questions for newly generated tests"
  })
  numberOfQuestions?: number;

  @ValidateIf(o => !o.questionIds)
  @ArrayMinSize(1)
  @ArrayMaxSize(20)
  @Field((type) => [ID], { 
    nullable: true, 
    description: "Question blocks from which to generate test"
  })
  moduleIds?: QuestionBlockId[];

  @ArrayMinSize(1)
  @ArrayMaxSize(250)
  @Field((type) => [ID], { 
    nullable: true,
    description: "creates a test based on specific question IDs. Overrides value generation values"
  })
  questionIds?: QuestionId[];
}

@ArgsType()
export class getTestArguments {
  @MinLength(1)
  @MaxLength(250)
  @Field((type) => [ID])
  questionIds: QuestionId[];
}

export type QuestionBlock = Pick<Questionnaire, "id" | "name"> & {
  questions: Question[];
};
