import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ArisDataService } from "./arisData.service";
import { ArisDataControllerBase } from "./base/arisData.controller.base";

@swagger.ApiTags("arisData")
@common.Controller("arisData")
export class ArisDataController extends ArisDataControllerBase {
  constructor(protected readonly service: ArisDataService) {
    super(service);
  }
}
