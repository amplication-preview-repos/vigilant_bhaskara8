import { Module } from "@nestjs/common";
import { TokenStorageModuleBase } from "./base/tokenStorage.module.base";
import { TokenStorageService } from "./tokenStorage.service";
import { TokenStorageController } from "./tokenStorage.controller";
import { TokenStorageResolver } from "./tokenStorage.resolver";

@Module({
  imports: [TokenStorageModuleBase],
  controllers: [TokenStorageController],
  providers: [TokenStorageService, TokenStorageResolver],
  exports: [TokenStorageService],
})
export class TokenStorageModule {}
