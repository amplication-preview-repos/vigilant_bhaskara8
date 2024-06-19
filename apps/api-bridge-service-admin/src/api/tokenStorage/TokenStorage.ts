export type TokenStorage = {
  createdAt: Date;
  expiry: Date | null;
  id: string;
  serviceName: string | null;
  token: string | null;
  updatedAt: Date;
};
