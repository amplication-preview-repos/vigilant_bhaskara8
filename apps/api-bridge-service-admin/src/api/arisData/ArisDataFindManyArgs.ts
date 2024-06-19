import { ArisDataWhereInput } from "./ArisDataWhereInput";
import { ArisDataOrderByInput } from "./ArisDataOrderByInput";

export type ArisDataFindManyArgs = {
  where?: ArisDataWhereInput;
  orderBy?: Array<ArisDataOrderByInput>;
  skip?: number;
  take?: number;
};
