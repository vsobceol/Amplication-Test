import * as graphql from "@nestjs/graphql";
import { StatusReportResolverBase } from "./base/statusReport.resolver.base";
import { StatusReport } from "./base/StatusReport";
import { StatusReportService } from "./statusReport.service";

@graphql.Resolver(() => StatusReport)
export class StatusReportResolver extends StatusReportResolverBase {
  constructor(protected readonly service: StatusReportService) {
    super(service);
  }
}
