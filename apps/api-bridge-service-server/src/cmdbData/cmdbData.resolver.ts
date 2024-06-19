import * as graphql from "@nestjs/graphql";
import { CmdbDataResolverBase } from "./base/cmdbData.resolver.base";
import { CmdbData } from "./base/CmdbData";
import { CmdbDataService } from "./cmdbData.service";

@graphql.Resolver(() => CmdbData)
export class CmdbDataResolver extends CmdbDataResolverBase {
  constructor(protected readonly service: CmdbDataService) {
    super(service);
  }
}
