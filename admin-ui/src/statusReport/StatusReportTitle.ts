import { StatusReport as TStatusReport } from "../api/statusReport/StatusReport";

export const STATUSREPORT_TITLE_FIELD = "createdBy";

export const StatusReportTitle = (record: TStatusReport): string => {
  return record.createdBy || String(record.id);
};
