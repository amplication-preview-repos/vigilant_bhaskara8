import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CmdbDataServiceBase } from "./base/cmdbData.service.base";

@Injectable()
export class CmdbDataService extends CmdbDataServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
