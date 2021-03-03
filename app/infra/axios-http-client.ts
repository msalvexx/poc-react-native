import { HttpPostClient } from "../data/protocols/http-post-client";

export class AxiosHttpClient implements HttpPostClient {
  async post <T, R>(data: T): Promise<R> {
    return Promise.resolve(null)
  }
}
