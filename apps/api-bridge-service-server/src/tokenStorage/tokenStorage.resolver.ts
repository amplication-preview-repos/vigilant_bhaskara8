import * as graphql from "@nestjs/graphql";
import { TokenStorageResolverBase } from "./base/tokenStorage.resolver.base";
import { TokenStorage } from "./base/TokenStorage";
import { TokenStorageService } from "./tokenStorage.service";

@graphql.Resolver(() => TokenStorage)
export class TokenStorageResolver extends TokenStorageResolverBase {
  constructor(protected readonly service: TokenStorageService) {
    super(service);
  }
}
