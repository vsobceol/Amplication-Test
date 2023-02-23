import { StatusReportWhereInput } from "./StatusReportWhereInput";
import { StatusReportOrderByInput } from "./StatusReportOrderByInput";

export type StatusReportFindManyArgs = {
  where?: StatusReportWhereInput;
  orderBy?: Array<StatusReportOrderByInput>;
  skip?: number;
  take?: number;
};
