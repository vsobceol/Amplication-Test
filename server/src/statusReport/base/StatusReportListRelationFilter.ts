/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StatusReportWhereInput } from "./StatusReportWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class StatusReportListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => StatusReportWhereInput,
  })
  @ValidateNested()
  @Type(() => StatusReportWhereInput)
  @IsOptional()
  @Field(() => StatusReportWhereInput, {
    nullable: true,
  })
  every?: StatusReportWhereInput;

  @ApiProperty({
    required: false,
    type: () => StatusReportWhereInput,
  })
  @ValidateNested()
  @Type(() => StatusReportWhereInput)
  @IsOptional()
  @Field(() => StatusReportWhereInput, {
    nullable: true,
  })
  some?: StatusReportWhereInput;

  @ApiProperty({
    required: false,
    type: () => StatusReportWhereInput,
  })
  @ValidateNested()
  @Type(() => StatusReportWhereInput)
  @IsOptional()
  @Field(() => StatusReportWhereInput, {
    nullable: true,
  })
  none?: StatusReportWhereInput;
}
export { StatusReportListRelationFilter as StatusReportListRelationFilter };