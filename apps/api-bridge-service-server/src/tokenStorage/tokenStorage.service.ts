import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TokenStorageServiceBase } from "./base/tokenStorage.service.base";

@Injectable()
export class TokenStorageService extends TokenStorageServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
