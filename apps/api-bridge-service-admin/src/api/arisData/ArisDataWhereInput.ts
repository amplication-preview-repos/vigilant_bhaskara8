import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ArisDataWhereInput = {
  attributeName?: StringNullableFilter;
  attributeValue?: StringNullableFilter;
  id?: StringFilter;
  lastSynced?: DateTimeNullableFilter;
};
