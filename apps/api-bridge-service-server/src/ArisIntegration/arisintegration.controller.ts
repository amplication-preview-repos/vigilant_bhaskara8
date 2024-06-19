import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ArisIntegrationService } from "./arisintegration.service";
import { UpdateArisAttributesInput } from "../arisIntegration/UpdateArisAttributesInput";

@swagger.ApiTags("arisIntegrations")
@common.Controller("arisIntegrations")
export class ArisIntegrationController {
  constructor(protected readonly service: ArisIntegrationService) {}

  @common.Post("/get-umc-token")
  @swagger.ApiOkResponse({
    type: Boolean
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetUmcToken(
    @common.Body()
    body: UpdateArisAttributesInput[]
  ): Promise<boolean> {
        return this.service.GetUmcToken(body);
      }

  @common.Put("/update-arist-attributes/:id")
  @swagger.ApiOkResponse({
    type: Boolean
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UpdateArisAttributes(
    @common.Body()
    body: UpdateArisAttributesInput[]
  ): Promise<boolean> {
        return this.service.UpdateArisAttributes(body);
      }
}
