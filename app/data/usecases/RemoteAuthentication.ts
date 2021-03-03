import { Authentication } from "../../domain/authentication";
import { HttpPostClient } from "../protocols/http-post-client";

export class RemoteAuthentication implements Authentication {
  constructor (private readonly client: HttpPostClient) { }

  async auth (data: Authentication.Params): Promise<Authentication.Result> {
    return Promise.resolve(null)
  }
}
