import { SortOrder } from "../../util/SortOrder";

export type StatusReportOrderByInput = {
  account?: SortOrder;
  createdAt?: SortOrder;
  createdBy?: SortOrder;
  id?: SortOrder;
  projects?: SortOrder;
  updatedAt?: SortOrder;
};
