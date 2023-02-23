import { Module } from "@nestjs/common";
import { StatusReportModuleBase } from "./base/statusReport.module.base";
import { StatusReportService } from "./statusReport.service";
import { StatusReportController } from "./statusReport.controller";
import { StatusReportResolver } from "./statusReport.resolver";

@Module({
  imports: [StatusReportModuleBase],
  controllers: [StatusReportController],
  providers: [StatusReportService, StatusReportResolver],
  exports: [StatusReportService],
})
export class StatusReportModule {}
