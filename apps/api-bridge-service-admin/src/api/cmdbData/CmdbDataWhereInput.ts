import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type CmdbDataWhereInput = {
  id?: StringFilter;
  itemDetails?: StringNullableFilter;
  itemName?: StringNullableFilter;
  lastUpdated?: DateTimeNullableFilter;
};
