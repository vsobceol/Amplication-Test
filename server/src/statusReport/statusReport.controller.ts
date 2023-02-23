import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { StatusReportService } from "./statusReport.service";
import { StatusReportControllerBase } from "./base/statusReport.controller.base";

@swagger.ApiTags("statusReports")
@common.Controller("statusReports")
export class StatusReportController extends StatusReportControllerBase {
  constructor(protected readonly service: StatusReportService) {
    super(service);
  }
}
