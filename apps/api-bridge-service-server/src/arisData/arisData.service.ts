import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ArisDataServiceBase } from "./base/arisData.service.base";

@Injectable()
export class ArisDataService extends ArisDataServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
