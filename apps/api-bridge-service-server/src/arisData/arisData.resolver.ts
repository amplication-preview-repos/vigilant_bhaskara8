import * as graphql from "@nestjs/graphql";
import { ArisDataResolverBase } from "./base/arisData.resolver.base";
import { ArisData } from "./base/ArisData";
import { ArisDataService } from "./arisData.service";

@graphql.Resolver(() => ArisData)
export class ArisDataResolver extends ArisDataResolverBase {
  constructor(protected readonly service: ArisDataService) {
    super(service);
  }
}
