import { Module } from "@nestjs/common";
import { ArisDataModuleBase } from "./base/arisData.module.base";
import { ArisDataService } from "./arisData.service";
import { ArisDataController } from "./arisData.controller";
import { ArisDataResolver } from "./arisData.resolver";

@Module({
  imports: [ArisDataModuleBase],
  controllers: [ArisDataController],
  providers: [ArisDataService, ArisDataResolver],
  exports: [ArisDataService],
})
export class ArisDataModule {}
