import { Module } from "@nestjs/common";
import { CmdbDataModuleBase } from "./base/cmdbData.module.base";
import { CmdbDataService } from "./cmdbData.service";
import { CmdbDataController } from "./cmdbData.controller";
import { CmdbDataResolver } from "./cmdbData.resolver";

@Module({
  imports: [CmdbDataModuleBase],
  controllers: [CmdbDataController],
  providers: [CmdbDataService, CmdbDataResolver],
  exports: [CmdbDataService],
})
export class CmdbDataModule {}
