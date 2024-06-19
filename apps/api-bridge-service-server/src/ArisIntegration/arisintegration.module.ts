import { Module } from "@nestjs/common";
import { ArisIntegrationService } from "./arisintegration.service";
import { ArisIntegrationController } from "./arisintegration.controller";
import { ArisIntegrationResolver } from "./arisintegration.resolver";

@Module({
  controllers: [ArisIntegrationController],
  providers: [ArisIntegrationService, ArisIntegrationResolver],
  exports: [ArisIntegrationService],
})
export class ArisIntegrationModule {}
