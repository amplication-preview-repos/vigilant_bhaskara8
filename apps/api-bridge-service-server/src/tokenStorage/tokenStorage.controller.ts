import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TokenStorageService } from "./tokenStorage.service";
import { TokenStorageControllerBase } from "./base/tokenStorage.controller.base";

@swagger.ApiTags("tokenStorages")
@common.Controller("tokenStorages")
export class TokenStorageController extends TokenStorageControllerBase {
  constructor(protected readonly service: TokenStorageService) {
    super(service);
  }
}
