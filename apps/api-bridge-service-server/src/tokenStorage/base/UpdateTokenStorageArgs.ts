/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TokenStorageWhereUniqueInput } from "./TokenStorageWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { TokenStorageUpdateInput } from "./TokenStorageUpdateInput";

@ArgsType()
class UpdateTokenStorageArgs {
  @ApiProperty({
    required: true,
    type: () => TokenStorageWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TokenStorageWhereUniqueInput)
  @Field(() => TokenStorageWhereUniqueInput, { nullable: false })
  where!: TokenStorageWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => TokenStorageUpdateInput,
  })
  @ValidateNested()
  @Type(() => TokenStorageUpdateInput)
  @Field(() => TokenStorageUpdateInput, { nullable: false })
  data!: TokenStorageUpdateInput;
}

export { UpdateTokenStorageArgs as UpdateTokenStorageArgs };
