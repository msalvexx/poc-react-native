export interface HttpPostClient {
  post: <T, R>(data: T) => Promise<R>
}
