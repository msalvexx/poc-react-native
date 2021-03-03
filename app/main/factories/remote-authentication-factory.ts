import { HttpPostClient } from "../../data/protocols/http-post-client";
import { RemoteAuthentication } from "../../data/usecases/RemoteAuthentication";

export const makeRemoteAuthentication = (httpPostClient: HttpPostClient) => {
  return new RemoteAuthentication(httpPostClient)
}
