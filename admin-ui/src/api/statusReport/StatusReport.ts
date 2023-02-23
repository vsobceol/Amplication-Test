export type StatusReport = {
  account?: Array<"Account">;
  createdAt: Date;
  createdBy: string | null;
  id: string;
  projects?: Array<"Project">;
  updatedAt: Date;
};
