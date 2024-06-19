/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { TokenStorage } from "./TokenStorage";
import { TokenStorageCountArgs } from "./TokenStorageCountArgs";
import { TokenStorageFindManyArgs } from "./TokenStorageFindManyArgs";
import { TokenStorageFindUniqueArgs } from "./TokenStorageFindUniqueArgs";
import { CreateTokenStorageArgs } from "./CreateTokenStorageArgs";
import { UpdateTokenStorageArgs } from "./UpdateTokenStorageArgs";
import { DeleteTokenStorageArgs } from "./DeleteTokenStorageArgs";
import { TokenStorageService } from "../tokenStorage.service";
@graphql.Resolver(() => TokenStorage)
export class TokenStorageResolverBase {
  constructor(protected readonly service: TokenStorageService) {}

  async _tokenStoragesMeta(
    @graphql.Args() args: TokenStorageCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [TokenStorage])
  async tokenStorages(
    @graphql.Args() args: TokenStorageFindManyArgs
  ): Promise<TokenStorage[]> {
    return this.service.tokenStorages(args);
  }

  @graphql.Query(() => TokenStorage, { nullable: true })
  async tokenStorage(
    @graphql.Args() args: TokenStorageFindUniqueArgs
  ): Promise<TokenStorage | null> {
    const result = await this.service.tokenStorage(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => TokenStorage)
  async createTokenStorage(
    @graphql.Args() args: CreateTokenStorageArgs
  ): Promise<TokenStorage> {
    return await this.service.createTokenStorage({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => TokenStorage)
  async updateTokenStorage(
    @graphql.Args() args: UpdateTokenStorageArgs
  ): Promise<TokenStorage | null> {
    try {
      return await this.service.updateTokenStorage({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => TokenStorage)
  async deleteTokenStorage(
    @graphql.Args() args: DeleteTokenStorageArgs
  ): Promise<TokenStorage | null> {
    try {
      return await this.service.deleteTokenStorage(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
