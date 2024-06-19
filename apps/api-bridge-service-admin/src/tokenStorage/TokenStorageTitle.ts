import { TokenStorage as TTokenStorage } from "../api/tokenStorage/TokenStorage";

export const TOKENSTORAGE_TITLE_FIELD = "serviceName";

export const TokenStorageTitle = (record: TTokenStorage): string => {
  return record.serviceName?.toString() || String(record.id);
};
