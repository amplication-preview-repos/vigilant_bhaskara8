import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TokenStorageWhereInput = {
  expiry?: DateTimeNullableFilter;
  id?: StringFilter;
  serviceName?: StringNullableFilter;
  token?: StringNullableFilter;
};
