import { Injectable } from "@nestjs/common";
import { TokenRequestInput } from "../arisIntegration/TokenRequestInput";
import { UpdateArisAttributesInput } from "../arisIntegration/UpdateArisAttributesInput";

@Injectable()
export class ArisIntegrationService {
  constructor() {}
  async GetUmcToken(args: TokenRequestInput): Promise<boolean> {
    throw new Error("Not implemented");
  }
  async UpdateArisAttributes(args: UpdateArisAttributesInput[]): Promise<boolean> {
    throw new Error("Not implemented");
  }
}
