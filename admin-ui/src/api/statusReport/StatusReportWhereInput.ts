import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type StatusReportWhereInput = {
  createdBy?: StringNullableFilter;
  id?: StringFilter;
};
