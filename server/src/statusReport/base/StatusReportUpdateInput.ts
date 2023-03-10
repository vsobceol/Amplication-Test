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
import { EnumStatusReportAccount } from "./EnumStatusReportAccount";
import { IsEnum, IsOptional, IsString } from "class-validator";
import { EnumStatusReportProjects } from "./EnumStatusReportProjects";

@InputType()
class StatusReportUpdateInput {
  @ApiProperty({
    required: false,
    enum: EnumStatusReportAccount,
    isArray: true,
  })
  @IsEnum(EnumStatusReportAccount, {
    each: true,
  })
  @IsOptional()
  @Field(() => [EnumStatusReportAccount], {
    nullable: true,
  })
  account?: Array<"Account">;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  createdBy?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumStatusReportProjects,
    isArray: true,
  })
  @IsEnum(EnumStatusReportProjects, {
    each: true,
  })
  @IsOptional()
  @Field(() => [EnumStatusReportProjects], {
    nullable: true,
  })
  projects?: Array<"Project">;
}

export { StatusReportUpdateInput as StatusReportUpdateInput };
