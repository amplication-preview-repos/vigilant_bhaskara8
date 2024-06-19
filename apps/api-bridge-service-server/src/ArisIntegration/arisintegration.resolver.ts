import * as graphql from "@nestjs/graphql";
import { TokenRequestInput } from "../arisIntegration/TokenRequestInput";
import { UpdateArisAttributesInput } from "../arisIntegration/UpdateArisAttributesInput";
import { ArisIntegrationService } from "./arisintegration.service";

export class ArisIntegrationResolver {
  constructor(protected readonly service: ArisIntegrationService) {}

  @graphql.Mutation(() => Boolean)
  async GetUmcToken(
    @graphql.Args()
    args: TokenRequestInput
  ): Promise<boolean> {
    return this.service.GetUmcToken(args);
  }

  @graphql.Mutation(() => Boolean)
  async UpdateArisAttributes(
    @graphql.Args()
    args: UpdateArisAttributesInput[]
  ): Promise<boolean> {
    return this.service.UpdateArisAttributes(args);
  }
}
