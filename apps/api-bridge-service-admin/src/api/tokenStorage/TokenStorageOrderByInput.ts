import { SortOrder } from "../../util/SortOrder";

export type TokenStorageOrderByInput = {
  createdAt?: SortOrder;
  expiry?: SortOrder;
  id?: SortOrder;
  serviceName?: SortOrder;
  token?: SortOrder;
  updatedAt?: SortOrder;
};
