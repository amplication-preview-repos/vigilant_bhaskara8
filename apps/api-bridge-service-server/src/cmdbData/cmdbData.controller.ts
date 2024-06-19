import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CmdbDataService } from "./cmdbData.service";
import { CmdbDataControllerBase } from "./base/cmdbData.controller.base";

@swagger.ApiTags("cmdbData")
@common.Controller("cmdbData")
export class CmdbDataController extends CmdbDataControllerBase {
  constructor(protected readonly service: CmdbDataService) {
    super(service);
  }
}
