import { CmdbDataWhereInput } from "./CmdbDataWhereInput";
import { CmdbDataOrderByInput } from "./CmdbDataOrderByInput";

export type CmdbDataFindManyArgs = {
  where?: CmdbDataWhereInput;
  orderBy?: Array<CmdbDataOrderByInput>;
  skip?: number;
  take?: number;
};
