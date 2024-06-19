import { CmdbData as TCmdbData } from "../api/cmdbData/CmdbData";

export const CMDBDATA_TITLE_FIELD = "itemName";

export const CmdbDataTitle = (record: TCmdbData): string => {
  return record.itemName?.toString() || String(record.id);
};
