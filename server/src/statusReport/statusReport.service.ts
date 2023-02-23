import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StatusReportServiceBase } from "./base/statusReport.service.base";

@Injectable()
export class StatusReportService extends StatusReportServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
