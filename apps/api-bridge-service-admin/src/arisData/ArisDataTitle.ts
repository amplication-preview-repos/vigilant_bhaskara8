import { ArisData as TArisData } from "../api/arisData/ArisData";

export const ARISDATA_TITLE_FIELD = "attributeName";

export const ArisDataTitle = (record: TArisData): string => {
  return record.attributeName?.toString() || String(record.id);
};
