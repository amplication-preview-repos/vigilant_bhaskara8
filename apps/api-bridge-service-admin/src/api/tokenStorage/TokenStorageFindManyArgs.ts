import { TokenStorageWhereInput } from "./TokenStorageWhereInput";
import { TokenStorageOrderByInput } from "./TokenStorageOrderByInput";

export type TokenStorageFindManyArgs = {
  where?: TokenStorageWhereInput;
  orderBy?: Array<TokenStorageOrderByInput>;
  skip?: number;
  take?: number;
};
