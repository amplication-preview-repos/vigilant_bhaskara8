import { SortOrder } from "../../util/SortOrder";

export type ArisDataOrderByInput = {
  attributeName?: SortOrder;
  attributeValue?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  lastSynced?: SortOrder;
  updatedAt?: SortOrder;
};
